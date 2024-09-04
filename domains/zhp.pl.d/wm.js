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
    Delegation_NS('gizycko', hostingWm), // MS365-30881
    Delegation_NS('goldap', hostingWm),
    Delegation_NS('ilawa', hostingWm),
    Delegation_NS('ketrzyn', hostingWm),
    Delegation_NS('lidzbark', hostingWm),
    Delegation_A_WithCfProxy('mazurski', '195.78.67.34'), // MS365-44428
    A('ftp.mazurski', '195.78.67.34'),
    Delegation_NS('morag', hostingWm),
    Delegation_NS('mragowo', hostingWm),
    Delegation_NS('nidzica', hostingWm),
    Delegation_NS('olecko', hostingWm),
    Delegation_A_WithCfProxy('olsztyn', '195.78.67.34'), // MS365-44451
    A('ftp.olsztyn', '195.78.67.34'),
    Delegation_NS('orneta', ['ns11.linuxpl.com.', 'dns11.linuxpl.com.']),
    Delegation_A('ostroda', ['195.78.67.34']),
    A('ftp.ostroda', ['195.78.67.34']),
    Delegation_NS('pisz', hostingWm),
    Delegation_NS('rodlo', hostingWm),
    Delegation_NS('szczytno', hostingWm), // MS365-30881
    Delegation_NS('warminski', hostingWm),
    Delegation_NS('ziemialidzbarska', hostingWm), // MS365-30881

    // Bazy
    Delegation_NS('przerwanki', hostingWm),
    Delegation_A_WithCfProxy('baldy', '195.78.67.34'), // MS365-44426
    A('ftp.baldy', '195.78.67.34'),
    Delegation_NS('perkoz', hostingWm),

    Delegation_A_WithCfProxy('grunwald', '51.75.54.175'),
    Ms365_Subdomain('grunwald','zhp.pl')
);
