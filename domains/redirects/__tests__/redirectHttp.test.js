const redirectFunction = require("../RedirectHttp"),
      defaultURL     = require("../RedirectHttp").defaultURL,
      redirectsFile    = require("../redirectFiles/example.com.json");

const context = {
    log: jest.fn()
}

describe("should redirect to", () => {
    test("matching URL with 301", async() => {
        let testBasedomain = "example.com",
            testSubdomain  = "test301",
            testUrl        = `https://${testSubdomain}.${testBasedomain}`,
            expected       = redirectsFile[testSubdomain];

        const request = {
            url: testUrl
        };

        await redirectFunction(context, request);

        expect(context.res.status).toBe(expected.method);
        expect(context.res.headers.location).toBe(expected.target);
    });

    test("matching URL with 301 truncating www. prefix", async() => {
        let testBasedomain = "example.com",
            testSubdomain  = "www.test301",
            testUrl        = `https://${testSubdomain}.${testBasedomain}`,
            expected       = redirectsFile[testSubdomain.replace("www.", "")];

        const request = {
            url: testUrl
        };

        await redirectFunction(context, request);

        expect(context.res.status).toBe(expected.method);
        expect(context.res.headers.location).toBe(expected.target);
    });

    test("matching URL truncating path explicitly", async() => {
        let testBasedomain = "example.com",
            testSubdomain  = "testwithoutpath",
            testUrl        = `https://${testSubdomain}.${testBasedomain}/test`,
            expected       = redirectsFile[testSubdomain];

        const request = {
            url: testUrl
        };

        await redirectFunction(context, request);

        expect(context.res.status).toBe(expected.method);
        expect(context.res.headers.location).toBe(expected.target);
    });

    test("matching URL truncating path by default", async() => {
        let testBasedomain = "example.com",
            testSubdomain  = "testdefaultpath",
            testUrl        = `https://${testSubdomain}.${testBasedomain}/test`,
            expected       = redirectsFile[testSubdomain];

        const request = {
            url: testUrl
        };

        await redirectFunction(context, request);

        expect(context.res.status).toBe(expected.method);
        expect(context.res.headers.location).toBe(expected.target);
    });

    test("matching URL with path and query", async() => {
        let testBasedomain = "example.com",
            testSubdomain  = "testwithpath",
            testUrl        = `https://${testSubdomain}.${testBasedomain}/test?query=true&other=also`,
            expected       = redirectsFile[testSubdomain];

        let expectedTarget = `${expected.target}/test?query=true&other=also`;

        const request = {
            url: testUrl
        };

        await redirectFunction(context, request);

        expect(context.res.status).toBe(expected.method);
        expect(context.res.headers.location).toBe(expectedTarget);
    });

    test("matching URL with path", async() => {
        let testBasedomain = "example.com",
            testSubdomain  = "testwithpath",
            testUrl        = `https://${testSubdomain}.${testBasedomain}/test`,
            expected       = redirectsFile[testSubdomain];

        let expectedTarget = `${expected.target}/test`;

        const request = {
            url: testUrl
        };

        await redirectFunction(context, request);

        expect(context.res.status).toBe(expected.method);
        expect(context.res.headers.location).toBe(expectedTarget);
    });

    test("matching URL with path two paths", async() => {
        let testBasedomain = "example.com",
            testSubdomain  = "testwithpathandfolder",
            testUrl        = `https://${testSubdomain}.${testBasedomain}/test2`,
            expected       = redirectsFile[testSubdomain];

        let expectedTarget = `${expected.target}/test2`;

        const request = {
            url: testUrl
        };

        await redirectFunction(context, request);

        expect(context.res.status).toBe(expected.method);
        expect(context.res.headers.location).toBe(expectedTarget);
    });

    test("matching URL with path two paths and query", async() => {
        let testBasedomain = "example.com",
            testSubdomain  = "testwithpathandfolder",
            testUrl        = `https://${testSubdomain}.${testBasedomain}/test2?q=a`,
            expected       = redirectsFile[testSubdomain];

        let expectedTarget = `${expected.target}/test2?q=a`;

        const request = {
            url: testUrl
        };

        await redirectFunction(context, request);

        expect(context.res.status).toBe(expected.method);
        expect(context.res.headers.location).toBe(expectedTarget);
    });

    test("matching URL with query", async() => {
        let testBasedomain = "example.com",
            testSubdomain  = "testwithpath",
            testUrl        = `https://${testSubdomain}.${testBasedomain}/?query=yes&other=also`,
            expected       = redirectsFile[testSubdomain];

        expectedTarget = `${expected.target}/?query=yes&other=also`;

        const request = {
            url: testUrl
        };

        await redirectFunction(context, request);

        expect(context.res.status).toBe(expected.method);
        expect(context.res.headers.location).toBe(expectedTarget);
    });

    describe("default URL because of", () => {
        test("non-existing redirect subdomain", async() => {
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

        test("wrong basedomain", async() => {
            let testBasedomain = "nonexisting.com",
                testSubdomain  = "nonexisting",
                testUrl        = `https://${testSubdomain}.${testBasedomain}/test`,
                expected       = {target: defaultURL, method: 302};

            const request = {
                url: testUrl
            };

            await redirectFunction(context, request);

            expect(context.res.status).toBe(expected.method);
            expect(context.res.headers.location).toBe(expected.target);
        });
    });
});
