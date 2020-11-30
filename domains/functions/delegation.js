class Delegation {
    static A(domain, record) {
        var output = [
            A(domain, record),
            CNAME("www." + domain, domain)
        ];
        return output;
    }

    static CNAME(domain, record) {
        var output = [
            CNAME(domain, record),
            CNAME("www." + domain, domain)
        ];
        return output;
    }

    static NS(domain, nameservers) {
        var output = nameservers.map(function (el) {
            return NS(domain, el);
        });
        return output;
    }
}
