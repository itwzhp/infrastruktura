require("./functions/ms365.js");
require("./functions/delegation.js");

var REG_OVH = NewRegistrar("ovh", "OVH");
var REG_NONE = NewRegistrar('none', 'NONE');
var CLOUDFLARE = NewDnsProvider('cloudflare', 'CLOUDFLAREAPI');

D("zhp.net.pl", REG_NONE,
    DnsProvider(CLOUDFLARE),
    DefaultTTL(3600),

    A('@', '89.161.251.118'),
    CNAME('www', 'zhp.net.pl.'),
    CNAME('*', 'zhp.net.pl.'),
    AAAA('ipv6', '2a02:25a9:20:376::1'),
    CNAME('poczta', 'login.microsoftonline.com.'),

    Delegation_NS("14gzrafiki", ["ns1.cba.pl.", "ns2.cba.pl."]),
    Delegation_NS("347", ["ns1.atthost.pl.", "ns2.atthost.pl."]),
    Delegation_NS("4szczep", ["dns1.slaskdatacenter.pl.", "dns2.slaskdatacenter.pl.", "dns3.slaskdatacenter.pl."]),
    Delegation_NS("czarna5", ["ns1.dhosting.pl.", "ns2.dhosting.pl."]),
    Delegation_NS("hgrgorzow", ["ns1.atthost.pl.", "ns2.atthost.pl."]),
    Delegation_NS("lapmyduchy", ["ns1.atthost.pl.", "ns2.atthost.pl."]),
    Delegation_NS("poszukiwaczeprzygod", ["ns1.cba.pl.", "ns2.cba.pl."]),
    Delegation_NS("rajdpozazasiegiem", ["ns1.atthost.pl.", "ns2.atthost.pl."]),
    Delegation_NS("5shbrzask", ["ns1.cba.pl.", "ns2.cba.pl.", "ns3.cba.pl."]), // MS365-4643
    Delegation_NS("4shfeniks", ["ns1.atthost.pl.", "ns2.atthost.pl."]), // MS365-4651

    Delegation_A("157pdh", "91.227.123.80"),
    Delegation_A("zlotaosemka", "185.54.184.244"),

    Ms365_Subdomain("grupy", "zhp.net.pl"),
    Ms365_Root("zhp.net.pl")
)
