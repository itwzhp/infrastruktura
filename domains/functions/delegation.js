function Delegation_A(domain, record) {
    return [
        A(domain, record),
        CNAME("www." + domain, domain)
    ];
}

function Delegation_CNAME(domain, record) {
    return [
        CNAME(domain, record),
        CNAME("www." + domain, domain)
    ];
}

function Delegation_NS(domain, nameservers) {
    return nameservers.map(function (el) {
        return NS(domain, el);
    });
}
