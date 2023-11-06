var cyberfolksNs = ['ns1.cyberfolks.pl.', 'ns2.cyberfolks.pl.', 'ns3.cyberfolks.pl.'];

D_EXTEND('zhp.pl',

    //Strona chorągwi     
    Ms365_Subdomain('dolnoslaska','zhp.pl'),
    Delegation_A('dolnoslaska', '213.32.10.111'),
    Delegation_NS('archiwumdolnoslaska', ['ns1.cyberfolks.pl.', 'ns2.cyberfolks.pl.', 'ns3.cyberfolks.pl.']),     
	Delegation_NS('dolnoslaska2', cyberfolksNs),
	Delegation_NS('dolnoslaska3', cyberfolksNs),

	// Bazy
    Delegation_NS('czarna', cyberfolksNs),
    Delegation_NS('czarna2', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('pobierowo', cyberfolksNs),
    Delegation_NS('pobierowo2', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('rozewie', ['ns1.cyberfolks.pl.', 'ns2.cyberfolks.pl.', 'ns3.cyberfolks.pl.']),

    // Hufce
	Delegation_NS('boleslawiec', ['ns1.cba.pl.', 'ns2.cba.pl.', 'ns3.cba.pl.']),
	Delegation_NS('bystrzycaklodzka', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    Delegation_NS('dzierzoniow', ['ns.lh.pl.', 'ns2.lighthosting.net.', 'ns2.lh.pl.']),
  	Delegation_NS('glogow', ['ns1.cyberfolks.pl.', 'ns2.cyberfolks.pl.', 'ns3.cyberfolks.pl.']),
	Delegation_NS('jawor', ['dns11.linuxpl.com.', 'ns11.linuxpl.com.']),
	Delegation_NS('karkonoski', ['ns1.ehost.pl.', 'ns2.ehost.pl.']),
	Delegation_NS('klodzko', ['dns8.linuxpl.com.', 'ns8.linuxpl.com.']),
    Delegation_NS('legnica', cyberfolksNs),  // MS365-14080
	Delegation_NS('luban', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
	Delegation_NS('lubin', ['ns1.hostdmk.net.', 'ns2.hostdmk.net.']),
	Delegation_NS('lagiewniki', ['dns3.hitme.net.pl.', 'dns4.hitme.net.pl.']),
	Ms365_Subdomain('milicz', 'zhp.pl'),
	Delegation_NS('olesnica', ['ns1.datanet.pl.', 'ns2.datanet.pl.']),
	Delegation_NS('olawa', ['ns12.linuxpl.com.', 'dns12.linuxpl.com.']),
    Delegation_NS('srodaslaska', ['dns8.linuxpl.com.', 'ns8.linuxpl.com.']),
	Delegation_NS('swidnica', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
   	Delegation_NS('walbrzych', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
	Delegation_NS('wroclaw', ['dns20.ovh.net.', 'ns20.ovh.net.']),
	Delegation_NS('wroclawpolnoc', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('wroclawpoludnie', ['ns.lh.pl.', 'ns2.lighthosting.net.', 'ns2.lh.pl.']),
	Delegation_NS('wroclawwschod', ['ns1.hostido.net.pl.','ns2.hostido.net.pl.', 'ns3.hostido.net.pl.']),
    Delegation_NS('zmigrod', ['ns.lh.pl.', 'ns2.lighthosting.net.']),

    Delegation_NS('bumerang', ['ns.lh.pl.', 'ns2.lighthosting.net.', 'ns2.lh.pl.']),
    Delegation_NS('rajdgranica', ['ns1.cyberfolks.pl.', 'ns2.cyberfolks.pl.', 'ns3.cyberfolks.pl.'])
);
