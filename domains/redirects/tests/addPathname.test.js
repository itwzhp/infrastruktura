const { addPathname } = require('../src/functions/index');

describe('addPathname', () => {
    test('should add pathname from req.params.path', () => {
        const req = {
            url: 'http://localhost',
            params: {
                path: 'testPath'
            }
        };
        const url = 'http://example.com';
        const result = addPathname(url, req);
        expect(result).toBe('http://example.com/testPath');
    });

    test('should add pathname from req.url', () => {
        const req = {
            url: 'http://localhost/testPath'
        };
        const url = 'http://example.com';
        const result = addPathname(url, req);
        expect(result).toBe('http://example.com/testPath');
    });

    test('should add searchParams from req.url', () => {
        const req = {
            url: 'http://localhost/?param1=value1&param2=value2'
        };
        const url = 'http://example.com';
        const result = addPathname(url, req);
        expect(result).toBe('http://example.com/?param1=value1&param2=value2');
    });

    test('should return the original url if no pathname or searchParams are provided', () => {
        const req = {
            url: 'http://localhost'
        };
        const url = 'http://example.com';
        const result = addPathname(url, req);
        expect(result).toBe('http://example.com');
    });
    test('should add both pathname and searchParams from req.url', () => {
        const req = {
            url: 'http://localhost/testPath?param1=value1&param2=value2'
        };
        const url = 'http://example.com';
        const result = addPathname(url, req);
        expect(result).toBe('http://example.com/testPath?param1=value1&param2=value2');
    });
});
