D_EXTEND('zhp.pl',
    // Chorągiew
    Delegation_NS('wm', ['fns1.42.pl.', 'fns2.42.pl.']),
    Delegation_NS('warminskomazurska', ['fns1.42.pl.', 'fns2.42.pl.']),

    // Hufce
    Delegation_NS('bartoszyce', ['fns1.42.pl.', 'fns2.42.pl.']),
    Delegation_NS('biskupiec', ['fns1.42.pl.', 'fns2.42.pl.']),
    Delegation_NS('braniewo', ['fns1.42.pl.', 'fns2.42.pl.']),
    Delegation_NS('dobremiasto', ['fns1.42.pl.', 'fns2.42.pl.']),
    Delegation_NS('dzialdowo', ['fns1.42.pl.', 'fns2.42.pl.']),
    Delegation_NS('elblag', ['dns1.82-300.pl.', 'dns2.82-300.pl.']),
    Delegation_NS('elk', ['fns1.42.pl.', 'fns2.42.pl.']),
    Delegation_NS('gizycko', ['ns1.fc.pl.', 'ns2.fc.pl.']),
    Delegation_NS('goldap', ['fns1.42.pl.', 'fns2.42.pl.']),
    Delegation_NS('ilawa', ['fns1.42.pl.', 'fns2.42.pl.']),
    Delegation_NS('ketrzyn', ['fns1.42.pl.', 'fns2.42.pl.']),
    Delegation_NS('lidzbark', ['fns1.42.pl.', 'fns2.42.pl.']),
    Delegation_NS('morag', ['fns1.42.pl.', 'fns2.42.pl.']),
    Delegation_NS('mragowo', ['fns1.42.pl.', 'fns2.42.pl.']),
    Delegation_NS('nidzica', ['fns1.42.pl.', 'fns2.42.pl.']),
    Delegation_NS('olecko', ['fns1.42.pl.', 'fns2.42.pl.']),
    Delegation_NS('orneta', ['ns11.linuxpl.com.', 'dns11.linuxpl.com.']),
    Delegation_NS('ostroda', ['fns1.42.pl.', 'fns2.42.pl.']),
    Delegation_NS('pisz', ['fns1.42.pl.', 'fns2.42.pl.']),
    Delegation_NS('rodlo', ['fns1.42.pl.', 'fns2.42.pl.']),
    Delegation_NS('warminski', ['fns1.42.pl.', 'fns2.42.pl.']),
    Delegation_NS('wegorzewo', ['fns1.42.pl.', 'fns2.42.pl.']),

    // Bazy
    Delegation_NS('przerwanki', ['fns1.42.pl.', 'fns2.42.pl.']),
    Delegation_NS('baldy', ['ns1.cba.pl.', 'ns2.cba.pl.', 'ns3.cba.pl.']),

    CNAME('autodiscover.grunwald', 'autodiscover.outlook.com.'),
    TXT('grunwald', 'v=spf1 include:spf.protection.outlook.com -all'),
    Delegation_A('grunwald', '51.75.54.175'),
    MX('grunwald', 0, 'grunwald-zhp-pl.mail.protection.outlook.com.'),

    // Czy to potrzebne?
    Delegation_NS('stronanidzica', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('nidzica2', ['ns1.atthost.pl.', 'ns2.atthost.pl.'])
);
