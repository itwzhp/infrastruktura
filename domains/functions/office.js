function MS365(domain) {
            domainPrefix = domain.replace(new RegExp("\.zhp\.net\.pl|\.zhp\.pl", "g"), "")

            return [
                CNAME("autodiscover" + "." + domainPrefix, "autodiscover.outlook.com."),
                TXT(domainPrefix, "v=spf1 include:spf.protection.outlook.com -all"),
                MX(domainPrefix, 0, domain.replace(/\./g, "-") + ".mail.protection.outlook.com.")
            ];
};