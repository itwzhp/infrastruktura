D_EXTEND('zhp.pl',
    A('host', '51.75.54.175'), // dla nessus    
    A('emblematy', '51.75.54.175'),
    A('rundeck', '51.75.54.175'),
    Delegation_A_WithCfProxy('work', '51.75.54.175'),
    Delegation_A_WithCfProxy('bip', '51.75.54.175'),
    Delegation_A_WithCfProxy('zapytaj', '51.75.54.175'),

    // 213.189.38.138
    A('preprod-tipi', '213.189.38.138'),
    A('demo-tipi', '213.189.38.138'),
    A('nessus', '213.189.38.138'),
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
    A('checkmk', '213.189.38.137'),

    // Azure Edek
    Delegation_A('ed', '104.214.218.237'),
    Delegation_A('edek', '104.214.218.237'),

    // A zhp.pl 
    // TODO Ustalić czyje to
    Delegation_A('archiwum', '51.75.54.175'),
    Delegation_A('bazy', '51.75.54.175'),
    Delegation_A('covid-zaswiadczenia', '51.75.54.175'),
    Delegation_A('czat', '51.75.54.175'),
    Delegation_A('czuwaj', '51.75.54.175'),
    Delegation_A('dokumenty', '51.75.54.175'),
    Delegation_A('e', '51.75.54.175'),
    Delegation_A('ekodruzyna', '51.75.54.175'),
    Delegation_A('haliz', '51.75.54.175'),
    Delegation_A('harc2o', '51.75.54.175'),
    Delegation_A('hib', '51.75.54.175'),
    Delegation_A('intranet', '51.75.54.175'),
    Delegation_A('komunikaty.gk', '51.75.54.175', 'zhp.pl'),
    Delegation_A('kursy', '51.75.54.175'),
    Delegation_A('lacznosc', '51.75.54.175'),
    Delegation_A('lesneplemiona', '51.75.54.175'),
    Delegation_A('limev4', '51.75.54.175'),
    Delegation_A('natropie', '51.75.54.175'),
    Delegation_A('odkrywcy', '51.75.54.175'),
    Delegation_A('panel', '51.75.54.175'),
    Delegation_A('rajdodkrywcow', '51.75.54.175'),
    Delegation_A('repozytorium', '51.75.54.175'),
    Delegation_A('sluzba', '51.75.54.175'),
    Delegation_A('specjalnosci', '51.75.54.175'),
    Delegation_A('starszyzna', '51.75.54.175'),
    Delegation_A('stock', '51.75.54.175'),
    Delegation_A('stopka', '51.75.54.175'),
    Delegation_A('strony', '51.75.54.175'),
    Delegation_A('turniej', '51.75.54.175'),
    Delegation_A('turniejgromad', '51.75.54.175'),
    Delegation_A('watra', '51.75.54.175'),
    Delegation_A('youthwave', '51.75.54.175')
);
