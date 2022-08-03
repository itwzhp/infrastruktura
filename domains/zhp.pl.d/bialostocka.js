D_EXTEND('zhp.pl',

    TXT('_github-challenge-bialostockazhp.bialostocka', '871ae7c463'),
    Ms365_Subdomain('bialostocka', 'zhp.pl'),
    Delegation_A('bialostocka', '195.78.66.229'),

    CNAME('*.by.bialostocka', 'by.bialostocka.zhp.pl.'),
    A('by.bialostocka', '79.96.169.242'),

    CNAME('*.pilot.bialostocka', 'pilot.bialostocka.zhp.pl.'),
    A('pilot.bialostocka', '79.96.169.242'),

    A('wedrownicy.bialostocka', '79.96.169.242'),

    Ms365_Subdomain('augustow', 'zhp.pl'),  // MS365-16444

    CNAME('*.bielskpodlaski', 'bielskpodlaski.zhp.pl.'),
    A('bielskpodlaski', '79.96.169.242'),

    CNAME('*.grajewo', 'grajewo.zhp.pl.'),
    A('grajewo', '79.96.169.242'),

    CNAME('*.suwalki', 'suwalki.zhp.pl.'),
    A('suwalki', '79.96.169.242'),

    Delegation_NS('bialystok', ['dns11.linuxpl.com.', 'ns11.linuxpl.com.']),
    Delegation_NS('kolno', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    // Delegation_NS('lomza', ['ns1.datasferix.pl.', 'ns2.datasferix.pl.']),
    Delegation_NS('sokolka', ['ns1.getspace.us.', 'ns2.getspace.us.'])
);
