var cyberFolksNs = ['ns1.cyberfolks.pl.', 'ns2.cyberfolks.pl.', 'ns3.cyberfolks.pl.'];
var keiNs = ['ns1.kei.pl.', 'ns2.kei.pl.'];
var nazwaNs = ['ns1.nazwa.pl.', 'ns2.nazwa.pl.', 'ns3.nazwa.pl.'];
var slaskDataCenterNs = ['dns1.slaskdatacenter.pl.', 'dns2.slaskdatacenter.pl.', 'dns3.slaskdatacenter.pl.'];
var zenboxNs = ['ns1.zenbox.pl.', 'ns2.zenbox.pl.'];

D_EXTEND('zhp.pl',
    Delegation_NS('krakowska', zenboxNs),

    Delegation_NS('andrychow', zenboxNs),
    Delegation_NS('bochnia', zenboxNs),
    Delegation_NS('brzesko', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    A('gorczanski', '188.128.203.43'), // w trakcie wyjaśniania
    Delegation_NS('gorlice', zenboxNs),
    Delegation_NS('jordanow', zenboxNs),
    Delegation_NS('kety', zenboxNs),
    Delegation_NS('krakowkrowodrza', zenboxNs),
    Delegation_NS('krakownowahuta', zenboxNs),
    Delegation_NS('krakowpodgorze', cyberFolksNs),
    Delegation_NS('krakowsrodmiescie', zenboxNs),
    Delegation_NS('krzeszowice', slaskDataCenterNs),
    Delegation_NS('myslenice', zenboxNs),
    Delegation_NS('nowysacz', zenboxNs),
    Delegation_NS('olkusz', zenboxNs),
    Delegation_NS('oswiecim', zenboxNs),
    Delegation_NS('podhalanski', ['dns12.linuxpl.com.', 'ns12.linuxpl.com.']),
    Delegation_NS('podkrakowski', zenboxNs),
    Delegation_NS('tarnow', keiNs),
    Delegation_NS('trzebinia', zenboxNs),
    Delegation_NS('wadowice', cyberFolksNs),
    Delegation_NS('wieliczka', nazwaNs),

    Delegation_NS('kosarzyska', zenboxNs), // MS365-8116
    Delegation_NS('piaskidruzkow', zenboxNs) // MS365-8117
);
