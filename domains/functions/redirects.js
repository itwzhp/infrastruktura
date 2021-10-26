function Redirects(redirects) {
    return Object.keys(redirects)
        .filter(function(key) {
            return key[0] !== '$';
        })
        .map(function(key) {
            var value = redirects[key];

            var records = [
                CNAME(key, 'zhp-redirects.azurewebsites.net.'),
                TXT('asuid.' + key, '01E6941B3330DAACCE5A2B9E079EA3C6343C3AD74B23A3E47E8DD5503EAA2F87')
            ]

            if(value.includeWww === undefined || value.includeWww === true) {
                records.push(
                    CNAME('www.' + key, 'zhp-redirects.azurewebsites.net.'),
                    TXT('asuid.www.' + key, '01E6941B3330DAACCE5A2B9E079EA3C6343C3AD74B23A3E47E8DD5503EAA2F87')
                )
            }

            return records;
        });
}
