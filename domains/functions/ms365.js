function Ms365_Subdomain(domainPrefix, domainRoot) {
    domain = domainPrefix + "." + domainRoot
    domainSingleLabel = domain.replace(/\./g, "-")

    return [
        // Echange Online records
        CNAME("autodiscover." + domainPrefix, "autodiscover.outlook.com."),
        TXT(domainPrefix, "v=spf1 include:spf.protection.outlook.com -all"),
        MX(domainPrefix, 0, domainSingleLabel + ".mail.protection.outlook.com."),

        // DKIM records
        CNAME('selector1._domainkey.' + domainPrefix, 'selector1-' + domainSingleLabel + '._domainkey.gkzhp.onmicrosoft.com.'),
        CNAME('selector2._domainkey.' + domainPrefix, 'selector2-' + domainSingleLabel + '._domainkey.gkzhp.onmicrosoft.com.')
    ];
};

function Ms365_Root(domain) {
    domainSingleLabel = domain.replace(/\./g, "-")

    return [
        // Echange Online records 
        CNAME("autodiscover", "autodiscover.outlook.com."),
        TXT("@", "v=spf1 include:spf.protection.outlook.com -all"),
        MX("@", 0, domainSingleLabel + ".mail.protection.outlook.com."),
        
        // DKIM records
        CNAME('selector1._domainkey', 'selector1-' + domainSingleLabel + '._domainkey.gkzhp.onmicrosoft.com.'),
        CNAME('selector2._domainkey', 'selector2-' + domainSingleLabel + '._domainkey.gkzhp.onmicrosoft.com.'),
        
        // Basic Mobility + Security records
        CNAME("enterpriseregistration", "enterpriseregistration.windows.net."),
        CNAME("enterpriseenrollment", "enterpriseenrollment.manage.microsoft.com.")
    ];
};
