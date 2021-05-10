const redirectFunction = require("../RedirectHttp/index"),
      defaultURL     = require("../RedirectHttp/index").defaultURL,
      redirectsFile    = require("../redirectFiles/zhp.net.pl.json");

const context = {
    log: jest.fn()
}

describe("should redirect to", () => {
    test("matching URL without path", async() => {
        let testBasedomain = "zhp.net.pl",
            testSubdomain  = "aktywacja",
            testUrl        = `https://${testSubdomain}.${testBasedomain}`,
            expected       = redirectsFile[testSubdomain];

        const request = {
            url: testUrl
        };

        await redirectFunction(context, request);

        expect(context.res.status).toBe(expected.method);
        expect(context.res.headers.location).toBe(expected.target);
    });

    test("matching URL with path", async() => {
        let testBasedomain = "zhp.net.pl",
            testSubdomain  = "aktywacja",
            testUrl        = `https://${testSubdomain}.${testBasedomain}/test`,
            expected       = redirectsFile[testSubdomain];

        expected.target = `${expected.target}/test`;

        const request = {
            url: testUrl
        };

        await redirectFunction(context, request);

        expect(context.res.status).toBe(expected.method);
        expect(context.res.headers.location).toBe(expected.target);
    });

    describe("default URL because of", () => {
        describe("non-existing redirect subdomain", () => {
            test("without path", async() => {
                let testBasedomain = "zhp.net.pl",
                    testSubdomain  = "nonexisting",
                    testUrl        = `https://${testSubdomain}.${testBasedomain}`,
                    expected       = {target: defaultURL, method: 302};

                const request = {
                    url: testUrl
                };

                await redirectFunction(context, request);

                expect(context.res.status).toBe(expected.method);
                expect(context.res.headers.location).toBe(expected.target);
            });

            test("with path", async() => {
                let testBasedomain = "zhp.net.pl",
                    testSubdomain  = "nonexisting",
                    testUrl        = `https://${testSubdomain}.${testBasedomain}/test`,
                    expected       = {target: `${defaultURL}/test`, method: 302};

                const request = {
                    url: testUrl
                };

                await redirectFunction(context, request);

                expect(context.res.status).toBe(expected.method);
                expect(context.res.headers.location).toBe(expected.target);
            });
        });

        describe("wrong basedomain", () => {
            test("without path", async() => {
                let testBasedomain = "nonexisting.com",
                    testSubdomain  = "nonexisting",
                    testUrl        = `https://${testSubdomain}.${testBasedomain}`,
                    expected       = {target: defaultURL, method: 302};

                const request = {
                    url: testUrl
                };

                await redirectFunction(context, request);

                expect(context.res.status).toBe(expected.method);
                expect(context.res.headers.location).toBe(expected.target);
            });

            test("with path", async() => {
                let testBasedomain = "nonexisting.com",
                    testSubdomain  = "nonexisting",
                    testUrl        = `https://${testSubdomain}.${testBasedomain}/test`,
                    expected       = {target: `${defaultURL}/test`, method: 302};

                const request = {
                    url: testUrl
                };

                await redirectFunction(context, request);

                expect(context.res.status).toBe(expected.method);
                expect(context.res.headers.location).toBe(expected.target);
            });
        });
    });
});
