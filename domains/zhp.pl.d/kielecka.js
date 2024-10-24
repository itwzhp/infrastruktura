D_EXTEND('zhp.pl',

    Delegation_NS('kielecka', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    Delegation_NS('jedrzejow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('kielcemiasto', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('kielcepoludnie', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('kielcepowiat', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_A_WithCfProxy('konskie', '193.143.77.14'), // MS365-46307
    Delegation_A_WithCfProxy('ostrowiecswietokrzyski', '185.255.40.22'), // MS365-47109
    Ms365_Subdomain('ostrowiecswietokrzyski','zhp.pl'),
    Delegation_NS('skarzysko', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('starachowice', ['ns5.webd.pl.', 'ns7.webd.pl.']),
    Delegation_NS('staszow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_A_WithCfProxy('szczekociny', '185.255.40.22'),

    // Directory listing
    Delegation_A('opatow', '62.129.228.173'),

    Delegation_NS('festiwal-kielce', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('dhkielce', ['ns7.webd.pl.', 'ns5.webd.pl.']),

    Delegation_NS('rajdswietokrzyski', ['ns5.webd.pl.', 'ns7.webd.pl.'])
);
