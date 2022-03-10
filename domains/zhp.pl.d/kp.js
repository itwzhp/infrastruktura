D_EXTEND('zhp.pl',
    Delegation_NS('kp', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    // Bazy
    Delegation_NS('folusz', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('polko', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    // Hufce
    Delegation_NS('brodnica', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('bydgoszcz', ['ns1.ibc.pl.', 'ns2.ibc.pl.']),
    Delegation_NS('chelmza', ['dns10.linuxpl.com.', 'ns10.linuxpl.com.']),
    Delegation_NS('chojnice', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('golubdobrzyn', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('grudziadz', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('inowroclaw', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('koronowo', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('nml', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('paluki', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('swiecie', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('torun', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('wloclawek', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    Delegation_NS('powiatwloclawek', ['ns3.biznes-host.pl.', 'ns4.biznes-host.pl.']),
    CNAME('wloclawekpowiat', 'powiatwloclawek.zhp.pl.'),

    Delegation_NS('kopernikanski', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('festiwalbrodnica', ['ns1.manifo.org.', 'ns2.manifo.org.'])
);
