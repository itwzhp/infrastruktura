require("./functions/office.js");
require("./functions/delegacja.js");

var REG_OVH = NewRegistrar("ovh", "OVH");
var REG_NONE = NewRegistrar('none', 'NONE');
var CLOUDFLARE = NewDnsProvider('cloudflare','CLOUDFLAREAPI');

D("zhp.net.pl", REG_NONE,
	DnsProvider(CLOUDFLARE),
	DefaultTTL(3600),

	A('@', '89.161.251.118'),
	CNAME('www', 'zhp.net.pl.'),
	CNAME('*', 'zhp.net.pl.'),
	AAAA('ipv6', '2a02:25a9:20:376::1'),
	CNAME('poczta', 'login.microsoftonline.com.'),

	CNAME("autodiscover", "autodiscover.outlook.com."),
	TXT("@", "v=spf1 ip4:89.161.251.118 ip4:89.161.251.119 ip4:89.161.251.120 ip4:89.161.251.115 ip4:89.161.251.116 include:spf.protection.outlook.com ~all"),
	MX("@", 0, "zhp-net-pl.mail.protection.outlook.com."),

	Delegacja_NS("14gzrafiki", ["ns1.cba.pl.", "ns2.cba.pl."]),

	Delegacja_NS("347", ["ns1.atthost.pl.", "ns2.atthost.pl."]),

	Delegacja_NS("4szczep", ["dns1.slaskdatacenter.pl.","dns2.slaskdatacenter.pl.","dns3.slaskdatacenter.pl."]),

	Delegacja_NS("czarna5", ["ns1.dhosting.pl.", "ns2.dhosting.pl."]),

	Delegacja_NS("hgrgorzow", ["ns1.atthost.pl.", "ns2.atthost.pl."]),

	Delegacja_NS("lapmyduchy", ["ns1.atthost.pl.", "ns2.atthost.pl."]),

	Delegacja_NS("poszukiwaczeprzygod", ["ns1.cba.pl.", "ns2.cba.pl."]),

	Delegacja_NS("rajdpozazasiegiem", ["ns1.atthost.pl.", "ns2.atthost.pl."]),

	Delegacja_A("157pdh", "91.227.123.80"),

	Delegacja_A("1szdw", "188.49.77.144"),

	Delegacja_A("21", "185.255.40.24"),

	Delegacja_A("5czarna", "185.54.184.244"),

	Delegacja_A("zlotaosemka", "185.54.184.244"),

	Delegacja_CNAME("40sgz", "40sgz.pe.hu."),

	Delegacja_CNAME("adrenalinazgierz", "dyskadrenalina.wix.com."),

	MS365("grupy.zhp.net.pl")

)
