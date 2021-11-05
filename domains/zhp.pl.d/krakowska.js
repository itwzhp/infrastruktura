D_EXTEND('zhp.pl',
    Delegation_NS('krakowska', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),

    Delegation_NS('andrychow', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    Delegation_NS('bochnia', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    Delegation_NS('brzesko', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    A('gorczanski', '188.128.203.43'), // w trakcie wyjaśniania
    Delegation_NS('gorlice', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    Delegation_NS('jordanow', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    Delegation_NS('kety', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    Delegation_NS('krakowkrowodrza', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    Delegation_NS('krakownowahuta', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    Delegation_NS('krakowpodgorze', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    Delegation_NS('krakowsrodmiescie', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    Delegation_NS('krzeszowice', ['dns1.slaskdatacenter.pl.', 'dns2.slaskdatacenter.pl.', 'dns3.slaskdatacenter.pl.']),
    Delegation_NS('myslenice', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    Delegation_NS('nowysacz', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    Delegation_NS('olkusz', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    Delegation_NS('oswiecim', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    Delegation_NS('podhalanski', ['dns12.linuxpl.com.', 'ns12.linuxpl.com.']),
    Delegation_NS('podkrakowski', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    Delegation_NS('tarnow', ['ns1.kei.pl.', 'ns2.kei.pl.']),
    Delegation_NS('trzebinia', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    Delegation_NS('wadowice', ['ns11.linuxpl.com.', 'dns11.linuxpl.com.']),
    Delegation_NS('wieliczka', ['ns1.nazwa.pl.', 'ns2.nazwa.pl.', 'ns3.nazwa.pl.']),

    Delegation_NS('kosarzyska', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']), // MS365-8116
    Delegation_NS('piaskidruzkow', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']), // MS365-8117

    //nie dzialają, do usunięcia?
    CNAME('*.skrzaty.wadowice', 'skrzaty.wadowice.zhp.pl.'), // w trakcie wyjaśniania
    A('skrzaty.wadowice', '62.129.222.4'), // w trakcie wyjaśniania
    MX('skrzaty.wadowice', 10, 'skrzaty.wadowice.zhp.pl.'), // w trakcie wyjaśniania
    Delegation_NS('oboz.krzeszowice', ['ns1.hostdns.pl.', 'ns2.hostdns.pl.']) // w trakcie wyjaśniania
);
