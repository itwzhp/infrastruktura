D_EXTEND('zhp.pl',
    // chorągiew
        TXT('_github-challenge-bialostockazhp.bialostocka', '871ae7c463'),
        Delegation_A('bialostocka', '195.78.66.229'),
        TXT('bialostocka', '2fdcbf72616cbfc6c32cb3b0e135eba136f945747962f8eb78addcb7603d5fa'), //weryfikacja do SSL
        Ms365_Subdomain('bialostocka', 'zhp.pl'),
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
        //brak
    //h. kolno
        Delegation_NS('kolno', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    //h. nadnarwianski w łomży
        Ms365_Subdomain('lomza', 'zhp.pl'),
    //h. sokółka
        Delegation_NS('sokolka', ['ns1.getspace.us.', 'ns2.getspace.us.']),
    //h. suwałki
        CNAME('*.suwalki', 'suwalki.zhp.pl.'),
        A('suwalki', '79.96.169.242'),
        Ms365_Subdomain('suwalki', 'zhp.pl') // MS365-32120
    //h. wschodniomazowiecki w zambrowie
        //brak
);
