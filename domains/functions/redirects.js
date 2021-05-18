function Redirects(redirects) {
    return Object.keys(redirects).map(function(key) {
        // ToDo: change to match AZURE function after creating function
        return CNAME(key, "zhp.pl.");
    });
}
