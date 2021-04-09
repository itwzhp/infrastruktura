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
	
	AAAA('ipv6.zlot.zachpom', '2a02:25a9:20:720::1'),	
	AAAA('ipv6.zachodniopomorska', '2a02:25a9:20:721::1'),
	
    A('zlot.zachpom', '89.161.255.32'),
	A('zachodniopomorska', '89.161.255.33'),

	CNAME('*.zlot.zachpom', 'zlot.zachpom.zhp.pl.'),
	CNAME('*.zachodniopomorska', 'zachodniopomorska.zhp.pl.'),
	
	MX('zlot.zachpom', 10, 'zlot.zachpom.zhp.pl.'),
	MX('zachodniopomorska', 10, 'zachodniopomorska-zhp-pl.mail.protection.outlook.com.'),
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