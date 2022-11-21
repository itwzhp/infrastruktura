D_EXTEND('zhp.pl',
    A('host', '51.75.54.175'), // dla nessus
    Delegation_A_WithCfProxy('emblematy', '51.75.54.175'),
    Delegation_A_WithCfProxy('rundeck', '51.75.54.175'),
    Delegation_A_WithCfProxy('work', '51.75.54.175'),
    Delegation_A_WithCfProxy('work-dev', '51.75.54.175'),
    Delegation_A_WithCfProxy('bip', '51.75.54.175'),
    Delegation_A_WithCfProxy('zapytaj', '51.75.54.175'),

    // 213.189.38.138
    Delegation_A_WithCfProxy('preprod-tipi', '213.189.38.138'),
    Delegation_A_WithCfProxy('demo-tipi', '213.189.38.138'),
    Delegation_A_WithCfProxy('nessus', '213.189.38.138'),
    A('vault', '213.189.38.138'),

    // 51.83.143.218
    A('tipi', '51.83.143.218'),

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
    TXT('mail-auto', "v=spf1 mx -all"),
    SRV('_submission._tcp.mail-auto', 1, 1, 587, 'mail-auto-mx.zhp.pl.'),
    SRV('_imaps._tcp.mail-auto', 1, 1, 993, 'mail-auto-mx.zhp.pl.'),
    SRV('_pop3s._tcp.mail-auto', 1, 1, 995, 'mail-auto-mx.zhp.pl.'),
    // musze ustalić czy poniższe są potrzebne
    // SRV('_imap._tcp.mail-auto', 1, 1, 143, 'mail-auto.zhp.pl.'),
    // SRV('_pop3._tcp.mail-auto', 1, 1, 110, 'mail-auto.zhp.pl.'),

    Delegation_A_WithCfProxy('czat', '51.75.54.175'),  // MS365-18876

    // Azure Edek
    Delegation_A_WithCfProxy('ed', '104.214.218.237'),
    Delegation_A_WithCfProxy('edek', '104.214.218.237'),

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
    Delegation_A_WithCfProxy('hib', '51.75.54.175'),
    Delegation_A_WithCfProxy('intranet', '51.75.54.175'),
    Delegation_A_WithCfProxy('komunikaty.gk', '51.75.54.175', 'zhp.pl'),
    Delegation_A_WithCfProxy('kursy', '51.75.54.175'),
    Delegation_A_WithCfProxy('lacznosc', '51.75.54.175'),
    Delegation_A_WithCfProxy('lesneplemiona', '51.75.54.175'),
    Delegation_A_WithCfProxy('limev4', '51.75.54.175'),
    Delegation_A_WithCfProxy('natropie', '51.75.54.175'),
    Delegation_A_WithCfProxy('odkrywcy', '51.75.54.175'),
    Delegation_A_WithCfProxy('panel', '51.75.54.175'),
    Delegation_A_WithCfProxy('rajdodkrywcow', '51.75.54.175'),
    Delegation_A_WithCfProxy('repozytorium', '51.75.54.175'),
    Delegation_A_WithCfProxy('sluzba', '51.75.54.175'),
    Delegation_A_WithCfProxy('starszyzna', '51.75.54.175'),
    Delegation_A_WithCfProxy('stock', '51.75.54.175'),
    Delegation_A_WithCfProxy('stopka', '51.75.54.175'),
    Delegation_A_WithCfProxy('strony', '51.75.54.175'),
    Delegation_A_WithCfProxy('turniejgromad', '51.75.54.175'),
    Delegation_A_WithCfProxy('watra', '51.75.54.175'),
    Ms365_Subdomain('watra','zhp.pl'),
    Delegation_A_WithCfProxy('youthwave', '51.75.54.175')
);
