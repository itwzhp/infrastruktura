var cyberfolksNs = ['ns1.cyberfolks.pl.', 'ns2.cyberfolks.pl.', 'ns3.cyberfolks.pl.'];

D_EXTEND('zhp.pl',
	Delegation_NS('dolnoslaska', ['ns1.nazwa.pl.', 'ns2.nazwa.pl.', 'ns3.nazwa.pl.']),
	Delegation_NS('dolnoslaska2', cyberfolksNs),
	Delegation_NS('dolnoslaska3', cyberfolksNs),

	// Bazy
    Delegation_NS('czarna', cyberfolksNs),
    Delegation_NS('czarna2', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('pobierowo', cyberfolksNs),
    Delegation_NS('pobierowo2', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('rozewie', ['ns1.cyberfolks.pl.', 'ns2.cyberfolks.pl.', 'ns3.cyberfolks.pl.']),

    // Hufce
	Ms365_Subdomain('bierutow', 'zhp.pl'),
	Delegation_NS('boleslawiec', ['ns1.cba.pl.', 'ns2.cba.pl.', 'ns3.cba.pl.']), // TODO poprawić wpisy MS365
	Delegation_NS('bystrzycaklodzka', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),// TODO poprawić wpisy MS365
    Ms365_Subdomain('dzierzoniow', 'zhp.pl'),
	Delegation_NS('glogow', ['ns1.cyberfolks.pl.', 'ns2.cyberfolks.pl.', 'ns3.cyberfolks.pl.']),
	Delegation_NS('jawor', ['dns11.linuxpl.com.', 'ns11.linuxpl.com.']),// TODO poprawić wpisy MS365
	Delegation_NS('karkonoski', ['ns1.ehost.pl.', 'ns2.ehost.pl.']), // TODO poprawić wpisy MS365 (SPF)
	Delegation_NS('katy', ['ns5.webd.pl.', 'ns7.webd.pl.']),
	Delegation_NS('klodzko', ['dns8.linuxpl.com.', 'ns8.linuxpl.com.']),
    Delegation_NS('legnica', cyberfolksNs),  // MS365-14080
	Delegation_NS('luban', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
	Delegation_NS('lubin', ['ns1.hostdmk.net.', 'ns2.hostdmk.net.']), // TODO poprawić wpisy MS365
	Delegation_NS('lagiewniki', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
	Delegation_NS('olesnica', ['ns1.datanet.pl.', 'ns2.datanet.pl.']),
	Delegation_NS('olawa', ['ns12.linuxpl.com.', 'dns12.linuxpl.com.']),
	Ms365_Subdomain('polkowice', 'zhp.pl'),
	Delegation_NS('srodaslaska', ['dns8.linuxpl.com.', 'ns8.linuxpl.com.']), // TODO poprawić wpisy MS365
	Ms365_Subdomain('sycow', 'zhp.pl'),
	Delegation_NS('swidnica', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
	Delegation_NS('walbrzych', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']), // TODO poprawić wpisy MS365
	Delegation_NS('wroclaw', ['dns20.ovh.net.', 'ns20.ovh.net.']),
	Delegation_NS('wroclawpolnoc', ['ns1.atthost.pl.', 'ns2.atthost.pl.']), // TODO poprawić wpisy MS365(CNAME)
	Delegation_NS('wroclawpoludnie', ['ns.lh.pl.', 'ns2.lighthosting.net.', 'ns2.lh.pl.']), // TODO poprawić wpisy MS365 (CNAME)
	Delegation_NS('wroclawwschod', ['ns.lh.pl.', 'ns2.lighthosting.net.']), // TODO poprawić wpisy MS365
    Ms365_Subdomain('zgorzelec', 'zhp.pl'),
	Delegation_NS('zmigrod', ['ns.lh.pl.', 'ns2.lighthosting.net.']),

    Delegation_NS('bumerang', ['ns.lh.pl.', 'ns2.lighthosting.net.', 'ns2.lh.pl.']),
    Delegation_NS('rajdgranica', ['dns1.linuxpl.com.', 'dns2.linuxpl.com.', 'dns3.linuxpl.com.'])
);
