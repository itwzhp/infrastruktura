D_EXTEND('zhp.pl',

    // Chorągiew
    Delegation_NS('stoleczna', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    // Ogólnopolskie
    Delegation_NS('abc', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('arsenal', ['ns1.unixstorm.org.', 'ns2.unixstorm.org.']),


    // Hufce (hosting chorągwi)
    Delegation_NS('blonie', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('celestynow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('garwolin', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('grodziskmazowiecki', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('sulejowek', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('pragapoludnie', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('ursuswlochy', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('ursynow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('wola', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('zoliborz', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('warszawazoliborz', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Ms365_Subdomain('warszawazoliborz', 'zhp.pl'),
    Delegation_NS('wolomin', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('zabki', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('konstancin', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),


    // Hufiec Legionowo
    Delegation_NS('legionowo', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),


    // Hufiec Milanowek
    Delegation_NS('milanowek', ['ns5.webd.pl.', 'ns7.webd.pl.']),
    Ms365_Subdomain('milanowek', 'zhp.pl'),


    // Hufiec Piaseczno
    Delegation_A('piaseczno', '178.32.203.125'),
    Ms365_Subdomain('piaseczno', 'zhp.pl'),


    // Hufiec Piastów
    Delegation_NS('piastow', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),


    // Hufiec Warszawa-Centrum
    Delegation_NS('warszawacentrum', ['dns10.linuxpl.com.', 'ns10.linuxpl.com.']),
    Ms365_Subdomain('centrum', 'zhp.pl'),


    // Hufiec Warszawa-Mokotów
    Delegation_NS('mokotow', ['ns1.unixstorm.org.', 'ns2.unixstorm.org.']),


    // Hufiec Warszawa-Ochota
    Delegation_NS('warszawaochota', ['ns100.ovh.net.', 'dns100.ovh.net.']),


    // Hufiec Warszawa-Praga-Północ
    Delegation_NS('pragapolnoc', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),


    // Hufiec Warszawa-Wawer
    Delegation_NS('wawer', ['ns1.x14.eu.', 'ns3.x25.pl.']),


    // Hufiec Zielonka
    Delegation_NS('zielonka', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),



    // Hufiec Nowy Dwór Mazowiecki
    AAAA('ipv6.nowydwormazowiecki', '2a02:25a9:0:4893::1'),
    Delegation_A('nowydwormazowiecki', '62.129.232.147'),
    Ms365_Subdomain('nowydwormazowiecki', 'zhp.pl'),

    AAAA('ipv6.nowydwormaz', '2a02:25a9:0:4893::1'),
    Delegation_A('nowydwormaz', '62.129.232.147'),

    AAAA('ipv6.otwock', '2a02:25a9:0:2637::1'),
    Delegation_A('otwock', '62.129.198.55'),
    Ms365_Subdomain('otwock', 'zhp.pl'),

    AAAA('ipv6.wosp.otwock', '2a02:25a9:0:2637::1'),
    Delegation_A('wosp.otwock', '62.129.198.55', 'zhp.pl'),
    MX('wosp.otwock', 10, 'wosp.otwock.zhp.pl.'),

    // ktoś tego używa?
    CNAME('kalendarz.otwock', 'ghs.google.com.'),
    CNAME('mail.otwock', 'ghs.google.com.'),
    CNAME('dokumenty.otwock', 'ghs.google.com.'),


    // Hufiec Pruszków
    AAAA('ipv6.pruszkow', '2a02:25a9:0:5888::1'),
    Delegation_A('pruszkow', '89.161.136.136'),
    Ms365_Subdomain('pruszkow', 'zhp.pl'),

    AAAA('ipv6.14.pruszkow', '2a02:25a9:0:5888::1'),
    Delegation_A('14.pruszkow', '89.161.136.136', 'zhp.pl'),
    MX('14.pruszkow', 10, '14.pruszkow.zhp.pl.'),

    AAAA('ipv6.paderewski.pruszkow', '2a02:25a9:0:5888::1'),
    Delegation_A('paderewski.pruszkow', '89.161.136.136', 'zhp.pl'),
    MX('paderewski.pruszkow', 10, 'paderewski.pruszkow.zhp.pl.'),

    AAAA('ipv6.shds.pruszkow', '2a02:25a9:0:5888::1'),
    Delegation_A('shds.pruszkow', '89.161.136.136', 'zhp.pl'),
    MX('shds.pruszkow', 10, 'shds.pruszkow.zhp.pl.'),

    // szczep --> błędne kodowanie znaków
    AAAA('ipv6.shdw.pruszkow', '2a02:25a9:0:5888::1'),
    Delegation_A('shdw.pruszkow', '89.161.136.136', 'zhp.pl'),
    MX('shdw.pruszkow', 10, 'shdw.pruszkow.zhp.pl.'),

    AAAA('ipv6.knieja.pruszkow', '2a02:25a9:0:5888::1'),
    Delegation_A('knieja.pruszkow', '89.161.136.136', 'zhp.pl'),
    MX('knieja.pruszkow', 10, 'knieja.pruszkow.zhp.pl.'),
    TXT('knieja.pruszkow', 'v=spf1 mx a ptr ~all'),

    AAAA('ipv6.twierdza.pruszkow', '2a02:25a9:0:5888::1'),
    Delegation_A('twierdza.pruszkow', '89.161.136.136', 'zhp.pl'),
    MX('twierdza.pruszkow', 10, 'twierdza.pruszkow.zhp.pl.'),
    TXT('twierdza.pruszkow', 'v=spf1 mx a ptr ~all')
);
