D_EXTEND('zhp.pl',
    Delegation_NS('podkarpacka', ['dns8.linuxpl.com.', 'ns8.linuxpl.com.']),

    Delegation_NS('debica', ['dns1.mydevil.net.', 'dns2.mydevil.net.']),
    Delegation_NS('jaroslaw', ['ns1.cyberfolks.pl.', 'ns2.cyberfolks.pl.', 'ns3.cyberfolks.pl.']), // MS365-12758
    Delegation_NS('kolbuszowa', ['ns1.cyberfolks.pl.', 'ns2.cyberfolks.pl.', 'ns3.cyberfolks.pl.']), // MS365-7389
    Delegation_NS('krosno', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    Delegation_NS('lancut', ['ns1.kylos.pl.', 'ns2.kylos.pl.']),
    Delegation_NS('lezajsk', ['ns1.statnet.pl.', 'ns2.statnet.pl.']),
    Delegation_A('mielec', '79.133.210.186'), // MS365-7714
    Delegation_NS('rzeszow', ['ns1.datasferix.pl.', 'ns2.datasferix.pl.']), //MS365-9823
    Ms365_Subdomain('sanok', 'zhp.pl'), //MS365-13468
    Delegation_NS('stalowawola', ['ns1.domena.pl.', 'ns2.domena.pl.']),

    //Baza Hufca Ziemi Sanockiej
    Delegation_NS('berdo', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    CNAME('www.lancut', 'lancut.zhp.pl.')
);
