D_EXTEND('zhp.pl',
    // hufce
    Delegation_NS('lodzbaluty', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('tomaszowmaz', ['ns1.he.net.', 'ns2.he.net.', 'ns3.he.net.']),
    Delegation_NS('dolinapilicy', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('inowlodz', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('lodzgorna', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('osiemnastka', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('reduta', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('lodzpolesie', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    Delegation_NS('zkk.lodzpolesie', ['ns-pl.1and1-dns.pl.', 'ns-pl.1and1-dns.biz.']),
    Delegation_NS('lodzsrodmiescie', ['ns1.oiq.pl.', 'ns2.oiq.pl.']),
    Delegation_NS('lodzwidzew', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('piotrkow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('kutno', ['dns1.mydevil.net.', 'dns2.mydevil.net.']),
    Delegation_NS('lask', ['ns1.iq.pl.', 'ns2.iq.pl.']),
    Delegation_NS('opoczno', ['dns12.linuxpl.com.', 'ns12.linuxpl.com.']),
    Delegation_NS('radomsko', ['ns1.webserwer.pl.', 'ns2.webserwer.pl.']),
    Delegation_NS('skierniewice', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    Delegation_NS('uniejow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    //Delegation_NS('zdunskawola', ['fns1.42.pl.', 'fns2.42.pl.']),
    Delegation_NS('zdunskawola', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('zgierz', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    Delegation_NS('pabianice', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    A('brzeziny', '212.191.78.183'),
    A('konstantynow', '85.232.255.122'),
    A('sieradz', '85.232.255.122'),

    Delegation_A('lowicz', '85.128.206.44'),
    MX('lowicz', 10, 'lowicz.zhp.pl.'),

    // Bazy
    Delegation_NS('malecz', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('zalecze', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    //Chorągiew
    Delegation_NS('lodzka', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Ms365_Subdomain('lodzka', 'zhp.pl')
);
