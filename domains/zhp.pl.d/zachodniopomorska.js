D_EXTEND('zhp.pl',
	Delegation_NS('swinoujscie', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('szczecin', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('szczecindabie', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('szczecinek', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('szczecinpogodno', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('kolobrzeg', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('koszalin', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('goleniow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('police', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('zachpom', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('stargard', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('mysliborz', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	
	Delegation_NS('slawno', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
	
	MX('stargard', 0, 'stargard-zhp-pl.mail.protection.outlook.com.'),
	
	CNAME('autodiscover.szczecinpogodno', 'autodiscover.outlook.com.'),
	
	CNAME('autodiscover.stargard', 'autodiscover.outlook.com.'),

    TXT('stargard', 'v=spf1 include:spf.protection.outlook.com -a'),
    TXT('mysliborz', 'v=spf1 include:spf.protection.outlook.com -all'),	
	TXT('szczecin', 'v=spf1 include:spf.protection.outlook.com -all'),
    TXT('szczecindabie', 'v=spf1 include:spf.protection.outlook.com -all'),
    TXT('szczecinek', 'v=spf1 include:spf.protection.outlook.com -all'),
	TXT('swinoujscie', 'v=spf1 include:spf.protection.outlook.com -all'),
	TXT('koszalin', 'v=spf1 include:spf.protection.outlook.com -all'))