D_EXTEND('zhp.pl',
    A('host', '51.75.54.175'), // dla nessus
    Delegation_A_WithCfProxy('emblematy', '51.75.54.175'),
    Delegation_A_WithCfProxy('rundeck', '51.75.54.175'),
    Delegation_A_WithCfProxy('work', '51.75.54.175'),
    Delegation_A_WithCfProxy('work-dev', '51.75.54.175'),
    Delegation_A_WithCfProxy('bip', '51.75.54.175'),
    Delegation_A_WithCfProxy('zapytaj', '51.75.54.175'),
    Delegation_A_WithCfProxy('edu', '51.75.54.175'),
    Delegation_A_WithCfProxy('plesk', '51.75.54.175'),

    // 213.189.38.138
    Delegation_A_WithCfProxy('preprod-tipi', '213.189.38.138'),
    Delegation_A_WithCfProxy('demo-tipi', '213.189.38.138'),
    Delegation_A_WithCfProxy('nessus', '213.189.38.138'),

    // 51.83.143.218
    Delegation_A_WithCfProxy('tipi', '51.83.143.218'),

    // 213.189.38.139
    Delegation_A_WithCfProxy('mam-pomysl', '213.189.38.139'),
    Delegation_A_WithCfProxy('jira', '213.189.38.139'),
    Delegation_A_WithCfProxy('pomoc', '213.189.38.139'),
    Delegation_A_WithCfProxy('helpdesk', '213.189.38.139'),

    // 213.189.38.137
    A('zeus', '213.189.38.137'),
    Delegation_A_WithCfProxy('checkmk', '213.189.38.137'),

    // Mailu na zeus - usługa pocztowa pozwalająca wysyłać maile do domen ZHP
    Delegation_A_WithCfProxy('mail-auto', '213.189.38.137'),
    A('mail-auto-mx', '213.189.38.137'),
    MX('mail-auto', 0, 'mail-auto-mx.zhp.pl.'),
    TXT('mail-auto', "v=spf1 ip4:213.189.38.137 -all"),
    SRV('_submission._tcp.mail-auto', 1, 1, 587, 'mail-auto-mx.zhp.pl.'),
    SRV('_imaps._tcp.mail-auto', 1, 1, 993, 'mail-auto-mx.zhp.pl.'),
    SRV('_pop3s._tcp.mail-auto', 1, 1, 995, 'mail-auto-mx.zhp.pl.'),
    TXT("_dmarc.mail-auto", "v=DMARC1; p=reject; rua=mailto:dmarc_agg@vali.email; ruf=mailto:dmarc-ruf@zhp.pl; fo=1; adkim=s; aspf=s;"),

    // no-reply - jak wyżej ale również poza ZHP
    Delegation_A_WithCfProxy('no-reply', '213.189.38.137'),
    MX('no-reply', 0, 'mail-auto-mx.zhp.pl.'),
    TXT('no-reply', "v=spf1 ip4:213.189.38.137 -all"),
    TXT('dkim._domainkey.no-reply', "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0CFb/wtwohc5iWniDnBIFnu+X6Sg6qxs/xJcHvEWCETfvNIdLgArvJVoCo1Uk2j4rHUUGXwAf7yifMnC2AFOS2wdtbOtdMhkVC1IhUTD7L3k+eWuAWxReF8mHPzFiDrNbP1i8gQ0wJQdiYk/iDqfEajL/0BgOVxu1Hjty0I+hCfc4KN6tvZj8lut7zd4Mfcw+AJDpV1oYN6xb6PSe3Gl/dBfZhhAr+OsTPb4rGZ+5vLdDe9lglFf16Z08jVVjvHpylb3UDSbTEURpTzyK7HCMBpVto6aX6TtblhUdM1IWRivae3uLG0JHYTlc1axWXdt8w+lY8KIi70r0ozLGGwvGwIDAQAB"),
    TXT("_dmarc.no-reply", "v=DMARC1; p=reject; rua=mailto:dmarc_agg@vali.email; ruf=mailto:dmarc-ruf@zhp.pl; fo=1; adkim=s; aspf=s;"),

    Delegation_A_WithCfProxy('czat', '51.75.54.175'),  // MS365-18876

    // Azure Edek
    Delegation_A_WithCfProxy('ed', '104.214.218.237'),
    Delegation_A_WithCfProxy('edek', '104.214.218.237'),

    // Synology
    Delegation_A_WithCfProxy('krecik', '213.189.38.130'),

    // A zhp.pl
    // TODO Ustalić czyje to
    Delegation_A_WithCfProxy('archiwum', '51.75.54.175'),
    Delegation_A_WithCfProxy('bazy', '51.75.54.175'),
    Delegation_A_WithCfProxy('covid-zaswiadczenia', '51.75.54.175'),
    Delegation_A_WithCfProxy('czuwaj', '51.75.54.175'),
    Delegation_A_WithCfProxy('dokumenty', '51.75.54.175'),
    Delegation_A_WithCfProxy('e', '51.75.54.175'),
    Delegation_A_WithCfProxy('ekodruzyna', '51.75.54.175'),
    Delegation_A_WithCfProxy('haliz', '51.75.54.175'),
    Delegation_A_WithCfProxy('intranet', '51.75.54.175'),
    Delegation_A_WithCfProxy('kursy', '51.75.54.175'),
    Delegation_A_WithCfProxy('lacznosc', '51.75.54.175'),
    Delegation_A_WithCfProxy('lesneplemiona', '51.75.54.175'),
    Delegation_A_WithCfProxy('natropie', '51.75.54.175'),
    Delegation_A_WithCfProxy('odkrywcy', '51.75.54.175'),
    Delegation_A_WithCfProxy('rajdodkrywcow', '51.75.54.175'),
    Delegation_A_WithCfProxy('repozytorium', '51.75.54.175'),
    Delegation_A_WithCfProxy('sluzba', '51.75.54.175'),
    Delegation_A_WithCfProxy('starszyzna', '51.75.54.175'),
    Delegation_A_WithCfProxy('stock', '51.75.54.175'),
    Delegation_A_WithCfProxy('stopka', '51.75.54.175'),
    Delegation_A_WithCfProxy('strony', '51.75.54.175'),
    Delegation_A_WithCfProxy('youthwave', '51.75.54.175')
);
