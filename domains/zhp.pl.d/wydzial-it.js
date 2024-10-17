D_EXTEND(
    "zhp.pl",
    A("host", "51.75.54.175"), // dla nessus
    Delegation_A_WithCfProxy("archive", "51.75.54.175"),
    Delegation_A_WithCfProxy("emblematy", "51.75.54.175"),
    Delegation_A_WithCfProxy("work", "51.75.54.175"),
    Delegation_A_WithCfProxy("work-dev", "51.75.54.175"),
    Delegation_A_WithCfProxy("bip", "51.75.54.175"),
    Delegation_A_WithCfProxy("zapytaj", "51.75.54.175"),
    Delegation_A_WithCfProxy("edu", "51.75.54.175"),
    Delegation_A_WithCfProxy("plesk", "51.75.54.175"),
    Delegation_A_WithCfProxy("beta", "51.75.54.175"),

    // 54.38.195.155
    Delegation_A_WithCfProxy("tipi", "54.38.195.155"),
    TXT("tipi", "v=spf1 ip4:54.38.195.155 -all"),
    A("tipi-mx", "54.38.195.155"),
    MX("tipi", 0, "tipi-mx.zhp.pl."),
    TXT(
        "dkim._domainkey.tipi",
        "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA16PihE0BwtTfHT3dGfsDIAuzcBK/Nbd5MxS60zGxbXe/7xL+B84uq+GB67g1T7UTfck+NQI0Evu0PDKejvtilDT0EwDzUoJdbMHWrOL6Y3U/Q14htCDzTZFYOxcktqzWAA45xH8m8WrCjqw61rudmPPur5AxiiZqNw75Aht080bqGF/psWQqVK7Ot9vZVdI23a1/TwxPn7Ib3i/MyipAyWkPXzPhPWJiFSnWkMfhowYcnIze0et47Vg+EZ8A8bXljvpz6nRMlPFQ4M3XMtb1dx4vhXXcZ+luG66Rg1m3lF/i3pMmyaZjch0RbjA5/NvmROn51Qc6ssKSfxs7JRqkjwIDAQAB"
    ),
    DMARC("reject", "reject", "tipi"), // strict DMARC

    // 213.189.38.141
    A("lasica", "213.189.38.141"),

    // 213.189.38.142

    // 213.189.38.143
    Delegation_A_WithCfProxy("demo-tipi", "213.189.38.143"),
    Delegation_A_WithCfProxy("checkmk", "213.189.38.143"),
    Delegation_A_WithCfProxy("jira", "213.189.38.143"),
    Delegation_A_WithCfProxy("mam-pomysl", "213.189.38.143"),
    Delegation_A_WithCfProxy("nessus", "213.189.38.143"),
    Delegation_A_WithCfProxy("pomoc", "213.189.38.143"),
    Delegation_A_WithCfProxy("preprod-tipi", "213.189.38.143"),
    Delegation_A_WithCfProxy("sejf", "213.189.38.143"),

    // 213.189.38.144
    A("krecik", "213.189.38.144"),

    // CloudFlare Pages
    CNAME("konta-sfh", "konta-sfh.pages.dev."),

    // Azure Static Web Apps
    CNAME("sfh", "nice-island-0dd931303.5.azurestaticapps.net."),
    CNAME("dev-sfh", "icy-smoke-0baadd803.5.azurestaticapps.net."),
    CNAME("dscz", "wonderful-forest-098d1ad03.5.azurestaticapps.net."),

    // Maile z monitoringu
    TXT("monitoring", "v=spf1 ip4:213.189.38.143 -all"),
    DMARC("reject", "reject", "monitoring"), // strict DMARC - only this server

    // Mailu na zeus - usługa pocztowa pozwalająca wysyłać maile do domen ZHP
    Delegation_A_WithCfProxy("mail-auto", "213.189.38.143"),
    A("mail-auto-mx", "213.189.38.143"),
    MX("mail-auto", 0, "mail-auto-mx.zhp.pl."),
    TXT("mail-auto", "v=spf1 ip4:213.189.38.143 -all"),
    TXT(
        "dkim._domainkey.mail-auto",
        "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt9rsaVad7OjUi0U6YR59XeshkTiB0tjqo5T+mQa9QaeWGIV71eL1VP9qS4p6m4U21rRPF75N0XKpt9hrD0xfC0dPsevbFbZKvASAr6u2Fm723OttgwA1N1SxA6DpFuSJzuf9PDVP4guOOYZi6pfpl79LGVmTldRjdrxnE+bFzKAHQm9xHFWFvt64Jr4JcipiIWi1DCajpizLFE+OqQ6m3cjJylkged83PP4fd64Gl3Cr2QPVxuEmaEvauxp6DXdYnXJM7WOkwj23GXeo+vfSWa4tHyQSw3XlSoTVEYa/h0Y90KqnfnvdCLuzQyxQsiezJBTbDSSDmoJMJB48i9YutQIDAQAB"
    ),
    DMARC("reject", "reject", "mail-auto"), // strict DMARC - only this server

    SRV("_submission._tcp.mail-auto", 1, 1, 587, "mail-auto-mx.zhp.pl."),
    SRV("_imaps._tcp.mail-auto", 1, 1, 993, "mail-auto-mx.zhp.pl."),
    SRV("_pop3s._tcp.mail-auto", 1, 1, 995, "mail-auto-mx.zhp.pl."),

    // no-reply - jak wyżej ale również poza ZHP
    Delegation_A_WithCfProxy("no-reply", "213.189.38.143"),
    MX("no-reply", 0, "mail-auto-mx.zhp.pl."),
    TXT("no-reply", "v=spf1 ip4:213.189.38.143 -all"),
    TXT(
        "dkim._domainkey.no-reply",
        "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0CFb/wtwohc5iWniDnBIFnu+X6Sg6qxs/xJcHvEWCETfvNIdLgArvJVoCo1Uk2j4rHUUGXwAf7yifMnC2AFOS2wdtbOtdMhkVC1IhUTD7L3k+eWuAWxReF8mHPzFiDrNbP1i8gQ0wJQdiYk/iDqfEajL/0BgOVxu1Hjty0I+hCfc4KN6tvZj8lut7zd4Mfcw+AJDpV1oYN6xb6PSe3Gl/dBfZhhAr+OsTPb4rGZ+5vLdDe9lglFf16Z08jVVjvHpylb3UDSbTEURpTzyK7HCMBpVto6aX6TtblhUdM1IWRivae3uLG0JHYTlc1axWXdt8w+lY8KIi70r0ozLGGwvGwIDAQAB"
    ),
    DMARC("reject", "reject", "no-reply"), // strict DMARC - only this server

    SRV("_submission._tcp.no-reply", 1, 1, 587, "mail-auto-mx.zhp.pl."),
    SRV("_imaps._tcp.no-reply", 1, 1, 993, "mail-auto-mx.zhp.pl."),
    SRV("_pop3s._tcp.no-reply", 1, 1, 995, "mail-auto-mx.zhp.pl."),

    Delegation_A_WithCfProxy("czat", "51.75.54.175"), // MS365-18876

    // Azure Edek
    Delegation_A_WithCfProxy("ed", "104.214.218.237"),
    Delegation_A_WithCfProxy("edek", "104.214.218.237"),

    // A zhp.pl
    // TODO Ustalić czyje to
    Delegation_A_WithCfProxy("archiwum", "51.75.54.175"),
    Delegation_A_WithCfProxy("covid-zaswiadczenia", "51.75.54.175"),
    Delegation_A_WithCfProxy("ekodruzyna", "51.75.54.175"),
    Delegation_A_WithCfProxy("lacznosc", "51.75.54.175"),
    Delegation_A_WithCfProxy("lesneplemiona", "51.75.54.175"),
    Delegation_A_WithCfProxy("natropie", "51.75.54.175"),
    Delegation_A_WithCfProxy("odkrywcy", "51.75.54.175"),
    Delegation_A_WithCfProxy("rajdodkrywcow", "51.75.54.175"),
    Delegation_A_WithCfProxy("starszyzna", "51.75.54.175"),
    Delegation_A_WithCfProxy("stopka", "51.75.54.175"),
    Delegation_A_WithCfProxy("strony", "51.75.54.175"),
    Delegation_A_WithCfProxy("youthwave", "51.75.54.175")
);
