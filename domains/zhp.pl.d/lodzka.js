D_EXTEND('zhp.pl',
    Delegation_NS('lodzbaluty', ['dns.home.pl.', 'dns2.home.pl.', 'dns3.home.pl.']), // MS365-8785
    Delegation_NS('tomaszowmaz', ['ns1.he.net.', 'ns2.he.net.', 'ns3.he.net.']),

    Delegation_NS('dolinapilicy', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('inowlodz', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('lodzgorna', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    Delegation_NS('lodzpolesie', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    Delegation_NS('zkk.lodzpolesie', ['ns-pl.1and1-dns.pl.', 'ns-pl.1and1-dns.biz.']),

    Delegation_NS('lodzsrodmiescie', ['ns1.oiq.pl.', 'ns2.oiq.pl.']),
    Delegation_NS('lodzwidzew', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('piotrkow', ['ns10.az.pl.', 'ns11.az.pl.', 'ns12.az.pl.']),
    Delegation_NS('kutno', ['dns1.mydevil.net.', 'dns2.mydevil.net.']),
    Delegation_NS('lask', ['ns1.iq.pl.', 'ns2.iq.pl.']),
    Delegation_NS('opoczno', ['dns12.linuxpl.com.', 'ns12.linuxpl.com.']),
    Delegation_NS('radomsko', ['ns1.webserwer.pl.', 'ns2.webserwer.pl.']),
    Delegation_NS('skierniewice', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    Delegation_NS('uniejow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('zdunskawola', ['fns1.42.pl.', 'fns2.42.pl.']),
    Delegation_NS('zgierz', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),

    A('brzeziny', '212.191.78.183'),
    A('konstantynow', '85.232.255.122'),
    A('sieradz', '85.232.255.122'),

    A('lowicz', '85.128.206.44'),
    CNAME('www.lowicz', 'lowicz.zhp.pl.'),
    MX('lowicz', 10, 'lowicz.zhp.pl.'),

    A('pabianice', '79.133.210.186'),
    MX('pabianice', 0, 'pabianice-zhp-pl.mail.protection.outlook.com.'),
    TXT('pabianice', 'v=spf1 include:spf.protection.outlook.com -all'),
    Delegation_NS('zuchy.pabianice', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    A('wypoczynek.lodzka', '89.161.255.31'),
    CNAME('*.wypoczynek.lodzka', 'wypoczynek.lodzka.zhp.pl.'),
    MX('wypoczynek.lodzka', 10, 'wypoczynek.lodzka.zhp.pl.'),

    A('ratownicy.lodzka', '89.161.255.25'),
    CNAME('*.ratownicy.lodzka', 'ratownicy.lodzka.zhp.pl.'),
    MX('ratownicy.lodzka', 10, 'ratownicy.lodzka.zhp.pl.'),

    A('swieto2011.lodzka', '89.161.255.29'),
    CNAME('*.swieto2011.lodzka', 'swieto2011.lodzka.zhp.pl.'),
    MX('swieto2011.lodzka', 10, 'swieto2011.lodzka.zhp.pl.')
);
