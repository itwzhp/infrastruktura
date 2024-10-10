D_EXTEND(
    "zhp.pl",
    // Harcerska Szkoła Ratownictwa (HSR)
    Delegation_A_WithCfProxy("hsr", "51.75.54.175"),
    Ms365_Subdomain("hsr", "zhp.pl"),

    // Wydział Komunikacji i Promocji
    TXT(
        "@",
        "google-site-verification=3EJuMBYjCQrS-ZAOYHkyxjweNONPhVoGS8ONaOKSY14"
    ), // MS365-8164
    Delegation_NS("simson", ["ns1.dhosting.pl.", "ns2.dhosting.pl."]),

    // Centrum Wychowania Morskiego
    Ms365_Subdomain("cwm", "zhp.pl"),

    // Muzeum Harcerstwa
    Ms365_Subdomain("muzeumharcerstwa", "zhp.pl"),
    Delegation_A_WithCfProxy("muzeumharcerstwa", "185.36.169.152"),

    // Wydział Inspiracji i Poradnictwa
    Delegation_A_WithCfProxy("cbp", "51.75.54.175"),
    Delegation_A_WithCfProxy("cbp-dev", "51.75.54.175"),
    Delegation_A_WithCfProxy("cbp-arch", "51.75.54.175"),
    Delegation_A_WithCfProxy("sim", "213.189.38.143"),
    Delegation_A_WithCfProxy("api-sim", "213.189.38.143"),

    // Zespołu ds. CZR
    Delegation_A_WithCfProxy("yunga", "51.75.54.175"),

    // Harcerski Instytut Badawczy
    Delegation_A_WithCfProxy("limev3", "51.75.54.175"),
    Delegation_A_WithCfProxy("limev4", "51.75.54.175"),
    Delegation_A_WithCfProxy("hib", "51.75.54.175"),
    Delegation_A_WithCfProxy("panel", "51.75.54.175"),

    // Imprezy centralne
    Delegation_A_WithCfProxy("cej2022", "51.75.54.175"),
    Delegation_NS("pielgrzymka", [
        "dns.smarthost.pl.",
        "dns2.smarthost.pl.",
        "dns3.smarthost.pl.",
    ]),
    Delegation_A_WithCfProxy("watra", "51.75.54.175"),
    Delegation_A("watrapp.watra", "185.209.228.136", "zhp.pl"), // MS365-27745
    Ms365_Subdomain("watra", "zhp.pl"),

    // Ogólnoharcerskie przedsięwzięcia
    Delegation_A("harc-quiz", "137.74.3.247"),

    // Władze naczelne
    Ms365_Subdomain("gk", "zhp.pl"),
    Ms365_Subdomain("rn", "zhp.pl"),
    Ms365_Subdomain("nsh", "zhp.pl"),
    Ms365_Subdomain("ckr", "zhp.pl"),
    Delegation_A_WithCfProxy("ckr", "51.75.54.175")
);
