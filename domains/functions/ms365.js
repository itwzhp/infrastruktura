function Ms365_Subdomain(domainPrefix, domainRoot, escapedO365DomainKey) {
    var domain = domainPrefix + "." + domainRoot
    escapedO365DomainKey = escapedO365DomainKey || domain.replace(/\./g, "-")

    return [
        // Exchange Online records
        CNAME("autodiscover." + domainPrefix, "autodiscover.outlook.com."),
        TXT(domainPrefix, "v=spf1 include:spf.protection.outlook.com -all"),
        MX(domainPrefix, 0, escapedO365DomainKey + ".mail.protection.outlook.com."),

        // DKIM records
        CNAME('selector1._domainkey.' + domainPrefix, 'selector1-' + escapedO365DomainKey + '._domainkey.gkzhp.onmicrosoft.com.'),
        CNAME('selector2._domainkey.' + domainPrefix, 'selector2-' + escapedO365DomainKey + '._domainkey.gkzhp.onmicrosoft.com.')
    ];
};

function Ms365_Root(domain) {
    var domainSingleLabel = domain.replace(/\./g, "-")

    return [
        // Exchange Online records
        CNAME("autodiscover", "autodiscover.outlook.com."),
        TXT("@", "v=spf1 include:spf.protection.outlook.com -all"),
        MX("@", 0, domainSingleLabel + ".mail.protection.outlook.com."),

        // DKIM records
        CNAME('selector1._domainkey', 'selector1-' + domainSingleLabel + '._domainkey.gkzhp.onmicrosoft.com.'),
        CNAME('selector2._domainkey', 'selector2-' + domainSingleLabel + '._domainkey.gkzhp.onmicrosoft.com.'),

        // Basic Mobility + Security records
        CNAME("enterpriseregistration", "enterpriseregistration.windows.net."),
        CNAME("enterpriseenrollment", "enterpriseenrollment.manage.microsoft.com."),
        TXT("_dmarc", "v=DMARC1; p=none; rua=mailto:dmarc_agg@vali.email; ruf=mailto:dmarc-ruf@zhp.pl; fo=1; adkim=s; aspf=s;")
    ];
};
