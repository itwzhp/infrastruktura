D_EXTEND('zhp.pl',
    A('host', '51.75.54.175'), // dla nessus    
    A('emblematy', '51.75.54.175'),
    A('rundeck', '51.75.54.175'),
    Delegation_A_CF('work', '51.75.54.175', CF_PROXY_ON),
    Delegation_A_CF('bip', '51.75.54.175', CF_PROXY_ON),
    Delegation_A_CF('zapytaj', '51.75.54.175', CF_PROXY_ON),

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
    A('checkmk', '213.189.38.137')
);
