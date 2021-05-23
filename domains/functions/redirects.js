function Redirects(redirects) {
    return Object.keys(redirects)
        .filter(function(key) {
            return key[0] !== '$';
        })
        .map(function(key) {
            // ToDo: change to match AZURE function after creating function
            return CNAME(key, "zhp.pl.");
        });
}
