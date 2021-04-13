function Ms365_Subdomain(domainPrefix, domainRoot) {
    domain = domainPrefix + "." + domainRoot

    return [
        CNAME("autodiscover." + domainPrefix, "autodiscover.outlook.com."),
        TXT(domainPrefix, "v=spf1 include:spf.protection.outlook.com -all"),
        MX(domainPrefix, 0, domain.replace(/\./g, "-") + ".mail.protection.outlook.com.")
    ];
};

function Ms365_Root(domain) {
    return [
        CNAME("autodiscover", "autodiscover.outlook.com."),
        TXT("@", "v=spf1 include:spf.protection.outlook.com -all"),
        MX("@", 0, domain.replace(/\./g, "-") + ".mail.protection.outlook.com."),
        CNAME("enterpriseregistration", "enterpriseregistration.windows.net."),
        CNAME("enterpriseenrollment", "enterpriseenrollment.manage.microsoft.com."),
        TXT("_dmarc", "v=DMARC1; p=none; rua=mailto:dmarc_agg@vali.email;")
    ];
};
