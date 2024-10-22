D_EXTEND('zhp.pl',

    // Chorągiew
    Delegation_NS('stoleczna', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    // Ogólnopolskie
    Delegation_A_WithCfProxy('arsenal', '109.95.159.40'),
    Ms365_Subdomain('arsenal', 'zhp.pl'),


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
    Delegation_A('warszawazoliborz', '185.255.40.57'),
    Ms365_Subdomain('warszawazoliborz', 'zhp.pl'),
    Delegation_NS('wolomin', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('zabki', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('konstancin', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),


    // Hufiec Legionowo
    Delegation_A('legionowo', '77.55.253.56'),
    Ms365_Subdomain('legionowo', 'zhp.pl'),    


    // Hufiec Milanowek
    Delegation_A('milanowek', '194.181.228.45'),
    Ms365_Subdomain('milanowek', 'zhp.pl'),


    // Hufiec Piaseczno
    Delegation_A('piaseczno', '178.32.203.125'),
    Ms365_Subdomain('piaseczno', 'zhp.pl'),
    Delegation_A('wataha.piaseczno', '178.32.203.125', 'zhp.pl'),


    // Hufiec Piastów
    Delegation_NS('piastow', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),


    // Hufiec Warszawa-Centrum
    Delegation_NS('warszawacentrum', ['dns10.linuxpl.com.', 'ns10.linuxpl.com.']),
    Ms365_Subdomain('centrum', 'zhp.pl'),


    // Hufiec Warszawa-Mokotów
    Delegation_A_WithCfProxy('mokotow', '109.95.159.40'),
    Delegation_A_WithCfProxy('moko', '109.95.159.40'),
    Delegation_A('208.mokotow', '109.95.159.40', 'zhp.pl'),
    Delegation_A('50.mokotow', '109.95.159.40', 'zhp.pl'),
    Delegation_A('60wdh.mokotow', '109.95.159.40', 'zhp.pl'),
    Delegation_A('spacer.mokotow', '109.95.159.40', 'zhp.pl'),
    Delegation_A('stopa.mokotow', '109.95.159.40', 'zhp.pl'),
    Delegation_A('szczep40.mokotow', '109.95.159.40', 'zhp.pl'),
    Delegation_A('szczep413.mokotow', '109.95.159.40', 'zhp.pl'),
    Delegation_A('nowy.szczep413.mokotow', '109.95.159.40', 'zhp.pl'),
    Ms365_Subdomain('mokotow', 'zhp.pl'),


    // Hufiec Warszawa-Ochota
    Delegation_NS('warszawaochota', ['ns100.ovh.net.', 'dns100.ovh.net.']),


    // Hufiec Warszawa-Praga-Północ
    Delegation_A('pragapolnoc', '185.255.40.53'),
    Ms365_Subdomain('pragapolnoc', 'zhp.pl'),


    // Hufiec Warszawa-Wawer
    Delegation_NS('wawer', ['ns1.x14.eu.', 'ns3.x25.pl.']),


    // Hufiec Zielonka
    Delegation_A('zielonka', '185.255.40.35'),
    Ms365_Subdomain('zielonka', 'zhp.pl'), // MS365-8313


    // Hufiec Nowy Dwór Mazowiecki
    AAAA('ipv6.nowydwormazowiecki', '2a02:25a9:0:4893::1'),
    Delegation_A('nowydwormazowiecki', '62.129.232.147'),
    Ms365_Subdomain('nowydwormazowiecki', 'zhp.pl'),

    AAAA('ipv6.nowydwormaz', '2a02:25a9:0:4893::1'),
    Delegation_A('nowydwormaz', '62.129.232.147'),
    

    // Hufiec Otwock
    AAAA('ipv6.otwock', '2a02:25a9:0:2637::1'),
    Delegation_A('otwock', '62.129.198.55'),
    Ms365_Subdomain('otwock', 'zhp.pl'),

    AAAA('ipv6.wosp.otwock', '2a02:25a9:0:2637::1'),
    Delegation_A('wosp.otwock', '62.129.198.55', 'zhp.pl'),

    AAAA('ipv6.szareszeregi.otwock', '2a02:25a9:0:2637::1'),
    Delegation_A('szareszeregi.otwock', '62.129.198.55', 'zhp.pl'),


    // Hufiec Pruszków - MS365-24169
    Delegation_A('pruszkow', '185.255.40.54'),
    Ms365_Subdomain('pruszkow', 'zhp.pl'),

    Delegation_A('14.pruszkow', '185.255.40.54', 'zhp.pl'),
    Delegation_A('paderewski.pruszkow', '185.255.40.54', 'zhp.pl'),
    Delegation_A('shds.pruszkow', '185.255.40.54', 'zhp.pl'),
    Delegation_A('szaniec.pruszkow', '185.255.40.54', 'zhp.pl')
);
