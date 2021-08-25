function Redirects(redirects) {
    return Object.keys(redirects)
        .filter(function(key) {
            return key[0] !== '$';
        })
        .map(function(key) {
            return [
                CNAME(key, 'zhp-redirects.azurewebsites.net.'),
                TXT('asuid.' + key, '59AD87167F51C48A766AD27F7323B2C08FF48AE5A2B5C67D7CF6A80F216A7E66'),
                CNAME(`www.${key}`, 'zhp-redirects.azurewebsites.net.'),
                TXT(`asuid.www.${key}`, '59AD87167F51C48A766AD27F7323B2C08FF48AE5A2B5C67D7CF6A80F216A7E66')
            ];
        });
}
