D_EXTEND('zhp.pl',
    Delegation_NS('podkarpacka', ['dns8.linuxpl.com.', 'ns8.linuxpl.com.']),

    Delegation_NS('debica', ['dns1.mydevil.net.', 'dns2.mydevil.net.']),
    Delegation_A('jaroslaw', '138.201.75.66'), // MS365-26353
    Delegation_NS('kolbuszowa', ['ns1.cyberfolks.pl.', 'ns2.cyberfolks.pl.', 'ns3.cyberfolks.pl.']), // MS365-7389
    Delegation_NS('krosno', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    Delegation_NS('lancut', ['ns1.kylos.pl.', 'ns2.kylos.pl.']),
    Delegation_NS('lezajsk', ['ns1.statnet.pl.', 'ns2.statnet.pl.']),
    Delegation_A('mielec', '79.133.210.186'), // MS365-7714
    Ms365_Subdomain('nisko', 'zhp.pl'), //MS365-36698
    Delegation_NS('rzeszow', ['1.dns.zetohosting.pl.', '2.dns.zetohosting.pl.']), // MS365-26673
    Delegation_A_WithCfProxy('sanok', '185.255.40.30'), //MS365-42396
    Ms365_Subdomain('sanok', 'zhp.pl'), //MS365-13468
    Delegation_NS('stalowawola', ['ns1.domena.pl.', 'ns2.domena.pl.']),

    //Baza Hufca Ziemi Sanockiej
    Delegation_NS('berdo', ['ns1.atthost.pl.', 'ns2.atthost.pl.'])
);
