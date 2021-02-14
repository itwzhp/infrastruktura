function Redirects(redirects) {
    return Object.keys(redirects).map(function(key) {
        return CNAME(key, "zhp.pl.");
    });
}
