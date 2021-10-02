D_EXTEND('zhp.pl',

    Delegation_NS('kielecka', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    Delegation_NS('jedrzejow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('kielcemiasto', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('kielcepoludnie', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('kielcepowiat', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('konskie', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('ostrowiec', ['dns1.onecik.pl.', 'dns2.onecik.pl.']),
    Delegation_NS('skarzysko', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('starachowice', ['ns5.webd.pl.', 'ns7.webd.pl.']),
    Delegation_NS('staszow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    // Directory listing
    MX('opatow', 10, 'opatow.zhp.pl.'),
    Delegation_A('opatow', '62.129.228.173'),

    CNAME('google46a5c5b885027ebd.kielcepowiat', 'google.com.'),
    Delegation_NS('festiwal-kielce', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('dhkielce', ['ns7.webd.pl.', 'ns5.webd.pl.']),

    Delegation_NS('rajdswietokrzyski', ['ns5.webd.pl.', 'ns7.webd.pl.'])
);
