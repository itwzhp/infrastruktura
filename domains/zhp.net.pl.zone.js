require("./functions/office.js");
require("./functions/delegacja.js");

var REG_OVH = NewRegistrar("ovh", "OVH");
var CLOUDFLARE = NewDnsProvider('cloudflare','CLOUDFLAREAPI');

D("zhp.net.pl", REG_OVH,
	DnsProvider(CLOUDFLARE),
	DefaultTTL(3600),

	A('@', '89.161.251.118'),
	CNAME('www', 'zhp.net.pl.'),
	CNAME('*', 'zhp.net.pl.'),
	AAAA('ipv6', '2a02:25a9:20:376::1'),
	CNAME('poczta', 'login.microsoftonline.com.'),

	//SOA('@', 'zhp.net.pl.', 'root.zhp.net.pl.', 2035687237, 7200, 3600, 86400, 3600),

	Delegacja_NS("14gzrafiki", ["ns1.cba.pl.", "ns2.cba.pl."]),
	// NS('14gzrafiki', 'ns2.cba.pl.', TTL(1)),
	// NS('14gzrafiki', 'ns1.cba.pl.', TTL(1)),

	Delegacja_NS("347", ["ns1.atthost.pl.", "ns2.atthost.pl."]),
	// NS('347', 'ns2.atthost.pl.', TTL(1)),
	// NS('347', 'ns1.atthost.pl.', TTL(1)),

	Delegacja_NS("4szczep", ["dns1.slaskdatacenter.pl.","dns2.slaskdatacenter.pl.","dns3.slaskdatacenter.pl."]),
	// NS('4szczep', 'dns3.slaskdatacenter.pl.', TTL(1)),
	// NS('4szczep', 'dns2.slaskdatacenter.pl.', TTL(1)),
	// NS('4szczep', 'dns1.slaskdatacenter.pl.', TTL(1)),

	Delegacja_NS("czarna5", ["ns1.dhosting.pl.", "ns2.dhosting.pl."]),
	// NS('czarna5', 'ns2.dhosting.pl.', TTL(1)),
	// NS('czarna5', 'ns1.dhosting.pl.', TTL(1)),

	Delegacja_NS("hgrgorzow", ["ns1.atthost.pl.", "ns2.atthost.pl."]),
	// NS('hgrgorzow', 'ns2.atthost.pl.', TTL(1)),
	// NS('hgrgorzow', 'ns1.atthost.pl.', TTL(1)),

	Delegacja_NS("lapmyduchy", ["ns1.atthost.pl.", "ns2.atthost.pl."]),
	// NS('lapmyduchy', 'ns2.atthost.pl.', TTL(1)),
	// NS('lapmyduchy', 'ns1.atthost.pl.', TTL(1)),

	Delegacja_NS("poszukiwaczeprzygod", ["ns1.cba.pl.", "ns2.cba.pl."]),
	// NS('poszukiwaczeprzygod', 'ns1.cba.pl.', TTL(1)),
	// NS('pprzygod.cba.pl', 'ns2.cba.pl.', TTL(1)),

	Delegacja_NS("rajdpozazasiegiem", ["ns1.atthost.pl.", "ns2.atthost.pl."]),
	// NS('rajdpozazasiegiem', 'ns2.atthost.pl.', TTL(1)),
	// NS('rajdpozazasiegiem', 'ns1.atthost.pl.', TTL(1))

	Delegacja_A("157pdh", "91.227.123.80"),
	// A('157pdh', '91.227.123.80', TTL(1)),
	// CNAME('www.157pdh', '157pdh.zhp.net.pl.', TTL(1)),

	Delegacja_A("1szdw", "188.49.77.144"),
	// A('1szdw', '188.49.77.144', TTL(1)),

	Delegacja_A("21", "185.255.40.24"),
	// A('21', '185.255.40.24', TTL(1)),

	Delegacja_A("5czarna", "185.54.184.244"),
	// A('5czarna', '185.54.184.244', TTL(1)),

	Delegacja_A("zlotaosemka", "185.54.184.244"),
	// A('zlotaosemka', '185.54.184.244', TTL(1)),

	Delegacja_CNAME("40sgz", "40sgz.pe.hu."),
	// CNAME('40sgz', '40sgz.pe.hu.', TTL(1)),

	Delegacja_CNAME("adrenalinazgierz", "dyskadrenalina.wix.com."),
	// CNAME('adrenalinazgierz', 'dyskadrenalina.wix.com.', TTL(1)),

	MS365("zhp.net.pl"),
	// CNAME('autodiscover', 'autodiscover.outlook.com.'),
	// CNAME('sip', 'sipdir.online.lync.com.'),
	// CNAME('lyncdiscover', 'webdir.online.lync.com.'),
	// CNAME('enterpriseregistration', 'enterpriseregistration.windows.net.'),
	// CNAME('enterpriseenrollment', 'enterpriseenrollment.manage.microsoft.com.'),
	// SRV('_sip._tls', 100, 1, 443, 'sipdir.online.lync.com.', TTL(1)),
	// SRV('_sipfederationtls._tcp', 100, 1, 5061, 'sipfed.online.lync.com.', TTL(1)),
	// MX('@', 0, 'zhp-net-pl.mail.protection.outlook.com.'),

	MS365("grupy.zhp.net.pl")
	// CNAME('autodiscover.grupy', 'autodiscover.outlook.com.'),
	// CNAME('sip.grupy', 'sipdir.online.lync.com.'),
	// CNAME('lyncdiscover.grupy', 'webdir.online.lync.com.'),
	// SRV('_sip._tls.grupy', 100, 1, 443, 'sipdir.online.lync.com.'),
	// SRV('_sipfederationtls._tcp.grupy', 100, 1, 5061, 'sipfed.online.lync.com.'),
	// MX('grupy', 0, 'grupy-zhp-net-pl.mail.protection.outlook.com.'),

	// TXT('grupy', 'v=spf1 include:spf.protection.outlook.com -all'),
	// TXT('@', 'v=spf1 ip4:89.161.251.118 ip4:89.161.251.119 ip4:89.161.251.120 ip4:89.161.251.115 ip4:89.161.251.116 include:spf.protection.outlook.com ~all')
)
