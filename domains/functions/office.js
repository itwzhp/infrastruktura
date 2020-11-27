function MS365(domain) {
    switch(domain) {
        case "zhp.net.pl":
            return [
                CNAME("autodiscover", "autodiscover.outlook.com."),
                TXT("@", "v=spf1 ip4:89.161.251.118 ip4:89.161.251.119 ip4:89.161.251.120 ip4:89.161.251.115 ip4:89.161.251.116 include:spf.protection.outlook.com ~all"),
                MX("@", 0, "zhp-net-pl.mail.protection.outlook.com.")
            ];
            break;
        default:
            domainPrefix = domain.replace(new RegExp("\.zhp\.net\.pl|\.zhp\.pl", "g"), "")

            return [
                CNAME("autodiscover" + "." + domainPrefix, "autodiscover.outlook.com."),
                TXT(domainPrefix, "v=spf1 include:spf.protection.outlook.com -all"),
                MX(domainPrefix, 0, domain.replace(/\./g, "-") + ".mail.protection.outlook.com.")
            ];
            break;
    }
};