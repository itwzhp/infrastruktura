D_EXTEND('zhp.pl',
    // chorągiew
        TXT('_github-challenge-bialostockazhp.bialostocka', '871ae7c463'),
        Delegation_A('bialostocka', '195.78.66.229'),
        TXT('bialostocka', '2fdcbf72616cbfc6c32cb3b0e135eba136f945747962f8eb78addcb7603d5fa'), //weryfikacja do SSL
        Ms365_Subdomain('bialostocka', 'zhp.pl'),
        CNAME('uskrzydleni.bialostocka','uskrzydleni2024-crf6dhaaadhahvcm.canadacentral-01.azurewebsites.net.'),
        TXT('asuid.uskrzydleni.bialostocka', 'FA6C7891B686D83BD39C01C3933ECF3718D5E4E3D4045FAD095DFA10279DA424'),
    //h. augustów
        Ms365_Subdomain('augustow', 'zhp.pl'),  // MS365-16444
        Delegation_A('augustow', '195.78.66.229'),
    //h. białystok
        Ms365_Subdomain('bialystok', 'zhp.pl'),
        Delegation_A('bialystok', '195.78.66.229'),
    //h. biebrzański w grajewie
        CNAME('*.grajewo', 'grajewo.zhp.pl.'),
        A('grajewo', '79.96.169.242'),
        Ms365_Subdomain('biebrzanski', 'zhp.pl'), // MS365-32124
    //h. bielsk podlaski
        Ms365_Subdomain('bielskpodlaski', 'zhp.pl'),
    //h. kolno
        Delegation_A('kolno', '185.204.219.239'),
        Ms365_Subdomain('kolno', 'zhp.pl'),
    //h. nadnarwianski w łomży
        Ms365_Subdomain('lomza', 'zhp.pl'),
    //h. sokółka
        Delegation_A('sokolka', '178.63.30.0'),
        Ms365_Subdomain('sokolka', 'zhp.pl'),
    //h. suwałki
        CNAME('*.suwalki', 'suwalki.zhp.pl.'),
        A('suwalki', '79.96.169.242'),
        Ms365_Subdomain('suwalki', 'zhp.pl'), // MS365-32120
    //h. wschodniomazowiecki w zambrowie
        Ms365_Subdomain('wschodniomazowiecki', 'zhp.pl')
);
