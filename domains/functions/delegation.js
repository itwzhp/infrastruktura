function Delegation_A(domain, record, suffix) {
    return [
        A(domain, record),
        CNAME("www." + domain, suffix ? domain + '.' + suffix + '.' : domain)
    ];
}

function Delegation_A_CF(domain, record, suffix) {
    return [
        A(domain, record, CF_PROXY_ON),
        CNAME("www." + domain, suffix ? domain + '.' + suffix + '.' : domain, CF_PROXY_ON)
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
