D_EXTEND('zhp.pl',

    Delegation_NS('kp', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    Delegation_NS('brodnica', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('bydgoszcz', ['ns1.ibc.pl.', 'ns2.ibc.pl.']),
    Delegation_NS('chelmza', ['dns10.linuxpl.com.', 'ns10.linuxpl.com.']),
    Delegation_NS('chojnice', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('golubdobrzyn', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('grudziadz', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('inowroclaw', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('koronowo', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('paluki', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('swiecie', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('torun', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('wloclawek', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    Delegation_NS('powiatwloclawek', ['ns3.biznes-host.pl.', 'ns4.biznes-host.pl.']),
    CNAME('wloclawekpowiat', 'powiatwloclawek.zhp.pl.'),
    
    CNAME('*.tuchola', 'tuchola.zhp.pl.'),
    A('tuchola', '89.161.238.192'),
    MX('tuchola', 10, 'tuchola.zhp.pl.'),
    
    CNAME('*.hks.tuchola', 'hks.tuchola.zhp.pl.'),
    A('hks.tuchola', '89.161.238.192'),
    MX('hks.tuchola', 10, 'hks.tuchola.zhp.pl.'),

    Delegation_NS('festiwalbrodnica', ['ns1.manifo.org.', 'ns2.manifo.org.'])
);