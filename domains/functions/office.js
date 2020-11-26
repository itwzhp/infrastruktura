function MS365(domain) {
    switch(domain) {
        case "zhp.net.pl":
            var output = [
                CNAME("autodiscover", "autodiscover.outlook.com."),
                TXT("@", "v=spf1 include:spf.protection.outlook.com -all"),
                MX("@", 0, "zhp-net-pl.mail.protection.outlook.com.")
            ];
            break;
        default:
            var Regex = new RegExp("\.zhp\.net\.pl|\.zhp\.pl", "g");

            var output = [
                CNAME("autodiscover" + "." + domain.replace(Regex, ""), "autodiscover.outlook.com."),
                TXT(domain.replace(Regex, ""), "v=spf1 include:spf.protection.outlook.com -all"),
                MX(domain.replace(Regex, ""), 0, domain.replace(/\./g, "-") + ".mail.protection.outlook.com.")
            ];
            break;
    }
    return output;
};