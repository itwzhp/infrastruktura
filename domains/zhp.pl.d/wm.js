var hostingWm = ['ns1.cyberfolks.pl.', 'ns2.cyberfolks.pl.', 'ns3.cyberfolks.pl.'];

D_EXTEND('zhp.pl',
    // Chorągiew
    Delegation_NS('wm', hostingWm),
    Delegation_NS('warminskomazurska', hostingWm),

    // Hufce
    Delegation_NS('bartoszyce', hostingWm),
    Delegation_NS('biskupiec', hostingWm),
    Delegation_NS('braniewo', hostingWm),
    Delegation_NS('dzialdowo', hostingWm),
    Delegation_NS('elblag', hostingWm),
    Delegation_NS('elk', hostingWm),
    Delegation_NS('gizycko', ['ns1.fc.pl.', 'ns2.fc.pl.']),
    Delegation_NS('goldap', hostingWm),
    Delegation_NS('ilawa', hostingWm),
    Delegation_NS('ketrzyn', hostingWm),
    Delegation_NS('lidzbark', hostingWm),
    Delegation_NS('morag', hostingWm),
    Delegation_NS('mragowo', hostingWm),
    Delegation_NS('nidzica', hostingWm),
    Delegation_NS('olecko', hostingWm),
    Delegation_NS('orneta', ['ns11.linuxpl.com.', 'dns11.linuxpl.com.']),
    Delegation_NS('ostroda', ['fns1.42.pl.', 'fns2.42.pl.']),
    Delegation_NS('pisz', hostingWm),
    Delegation_NS('rodlo', hostingWm),
    Delegation_NS('warminski', hostingWm),

    // Bazy
    Delegation_NS('przerwanki', hostingWm),
    Delegation_NS('baldy', ['ns1.cba.pl.', 'ns2.cba.pl.', 'ns3.cba.pl.']),
    Delegation_NS('perkoz', hostingWm),

    Delegation_A('grunwald', '51.75.54.175'),
    Ms365_Subdomain('grunwald','zhp.pl')
);
