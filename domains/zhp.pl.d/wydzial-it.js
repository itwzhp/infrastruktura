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
    A('demo-tipi', '213.189.38.138'),
    Delegation_A_WithCfProxy('nessus', '213.189.38.138'),
    A('vault', '213.189.38.138'),
    A('mail-auto', '213.189.38.138'),

    // 51.83.143.218
    A('tipi', '51.83.143.218'),

    // 213.189.38.139
    A('mam-pomysl', '213.189.38.139'),
    A('jira', '213.189.38.139'),
    A('pomoc', '213.189.38.139'),

    // 213.189.38.137
    A('zeus', '213.189.38.137'),
    Delegation_A_WithCfProxy('checkmk', '213.189.38.137'),

    // Azure Edek
    Delegation_A_WithCfProxy('ed', '104.214.218.237'),
    Delegation_A('edek', '104.214.218.237'),

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
    Delegation_A_WithCfProxy('harc2o', '51.75.54.175'),
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
    Delegation_A_WithCfProxy('youthwave', '51.75.54.175')
);
