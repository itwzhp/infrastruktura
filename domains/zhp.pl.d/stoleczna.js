D_EXTEND('zhp.pl',

    Delegation_NS('stoleczna', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    
    // Ogólnopolskie
    Delegation_NS('abc', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('arsenal', ['ns1.unixstorm.org.', 'ns2.unixstorm.org.']),


    // Hufiec Błonie (s)
    Delegation_NS('blonie', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    

    // Hufiec Celestynów (s)
    Delegation_NS('celestynow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    

    // Hufiec Garwolin (s)
    Delegation_NS('garwolin', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    
    // Hufiec Grodzisk Mazowiecki (s)
    Delegation_NS('grodziskmazowiecki', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),


    // Hufiec Legionowo
    Delegation_NS('legionowo', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),


    // Hufiec Milanowek 
    Delegation_NS('milanowek', ['ns5.webd.pl.', 'ns7.webd.pl.']),
    Ms365_Subdomain('milanowek', 'zhp.pl'),


    // Hufiec Nowy Dwór Mazowiecki
    AAAA('ipv6.nowydwormazowiecki', '2a02:25a9:0:4893::1'),
    A('nowydwormazowiecki', '62.129.232.147'),
    CNAME('*.nowydwormazowiecki', 'nowydwormazowiecki.zhp.pl.'),
    Ms365_Subdomain('nowydwormazowiecki', 'zhp.pl'),

    AAAA('ipv6.nowydwormaz', '2a02:25a9:0:4893::1'),
    A('nowydwormaz', '62.129.232.147'),
    MX('nowydwormaz', 10, 'nowydwormaz.zhp.pl.'),
    CNAME('*.nowydwormaz', 'nowydwormaz.zhp.pl.'),
    
    AAAA('ipv6.mzkk.nowydwormaz', '2a02:25a9:0:4893::1'),
    A('mzkk.nowydwormaz', '62.129.232.147'),
    MX('mzkk.nowydwormaz', 10, 'mzkk.nowydwormaz.zhp.pl.'),
    TXT('mzkk.nowydwormaz', 'v=spf1 mx a ptr ~all'),
    CNAME('*.mzkk.nowydwormaz', 'mzkk.nowydwormaz.zhp.pl.'),

    AAAA('ipv6.wakacje.nowydwormaz', '2a02:25a9:0:4893::1'),
    A('wakacje.nowydwormaz', '62.129.232.147'),
    MX('wakacje.nowydwormaz', 10, 'wakacje.nowydwormaz.zhp.pl.'),
    CNAME('*.wakacje.nowydwormaz', 'wakacje.nowydwormaz.zhp.pl.'),

    AAAA('ipv6.zuchy.nowydwormaz', '2a02:25a9:0:4893::1'),
    A('zuchy.nowydwormaz', '62.129.232.147'),

    AAAA('ipv6.wps.nowydwormaz', '2a02:25a9:0:4893::1'),
    A('wps.nowydwormaz', '62.129.232.147'),

    AAAA('ipv6.1msdhiz.nowydwormaz', '2a02:25a9:0:4893::1'),
    A('1msdhiz.nowydwormaz', '62.129.232.147'),
    MX('1msdhiz.nowydwormaz', 10, '1msdhiz.nowydwormaz.zhp.pl.'),
    CNAME('*.1msdhiz.nowydwormaz', '1msdhiz.nowydwormaz.zhp.pl.'),
    
    AAAA('ipv6.21mdh.nowydwormaz', '2a02:25a9:0:4893::1'),
    A('21mdh.nowydwormaz', '62.129.232.147'),
    MX('21mdh.nowydwormaz', 10, '21mdh.nowydwormaz.zhp.pl.'),
    TXT('21mdh.nowydwormaz', 'v=spf1 mx a ptr ~all'),
    CNAME('*.21mdh.nowydwormaz', '21mdh.nowydwormaz.zhp.pl.'),
    
    AAAA('ipv6.22mdh.nowydwormaz', '2a02:25a9:0:4893::1'),
    A('22mdh.nowydwormaz', '62.129.232.147'),
    MX('22mdh.nowydwormaz', 10, '22mdh.nowydwormaz.zhp.pl.'),
    TXT('22mdh.nowydwormaz', 'v=spf1 mx a ptr ~all'),
    CNAME('*.22mdh.nowydwormaz', '22mdh.nowydwormaz.zhp.pl.'),

    AAAA('ipv6.2dh.nowydwormaz', '2a02:25a9:0:4893::1'),
    A('2dh.nowydwormaz', '62.129.232.147'),
    MX('2dh.nowydwormaz', 10, '2dh.nowydwormaz.zhp.pl.'),
    TXT('2dh.nowydwormaz', 'v=spf1 mx a ptr ~all'),
    CNAME('*.2dh.nowydwormaz', '2dh.nowydwormaz.zhp.pl.'),
    
    AAAA('ipv6.7nwgdhiz.nowydwormaz', '2a02:25a9:0:4893::1'),
    A('7nwgdhiz.nowydwormaz', '62.129.232.147'),
    MX('7nwgdhiz.nowydwormaz', 10, '7nwgdhiz.nowydwormaz.zhp.pl.'),
    TXT('7nwgdhiz.nowydwormaz', 'v=spf1 mx a ptr ~all'),
    CNAME('*.7nwgdhiz.nowydwormaz', '7nwgdhiz.nowydwormaz.zhp.pl.'),

    AAAA('ipv6.bohater.nowydwormaz', '2a02:25a9:0:4893::1'),
    A('bohater.nowydwormaz', '62.129.232.147'),
    MX('bohater.nowydwormaz', 10, 'bohater.nowydwormaz.zhp.pl.'),
    TXT('bohater.nowydwormaz', 'v=spf1 mx a ptr ~all'),
    CNAME('*.bohater.nowydwormaz', 'bohater.nowydwormaz.zhp.pl.'),    

    AAAA('ipv6.izba.nowydwormaz', '2a02:25a9:0:4893::1'),
    A('izba.nowydwormaz', '62.129.232.147'),
    MX('izba.nowydwormaz', 10, 'izba.nowydwormaz.zhp.pl.'),
    CNAME('*.izba.nowydwormaz', 'izba.nowydwormaz.zhp.pl.'),
    
    AAAA('ipv6.jas2010.nowydwormaz', '2a02:25a9:0:4893::1'),
    A('jas2010.nowydwormaz', '62.129.232.147'),
    MX('jas2010.nowydwormaz', 10, 'jas2010.nowydwormaz.zhp.pl.'),
    CNAME('*.jas2010.nowydwormaz', 'jas2010.nowydwormaz.zhp.pl.'),


    // Hufiec Otwock
    Delegation_NS('gazeta.otwock', ['ns3.clientnshosting.net.', 'ns4.clientnshosting.net.']),
    Delegation_NS('hiks.otwock', ['ns3.clientnshosting.net.', 'ns4.clientnshosting.net.']),
    Delegation_NS('hix.otwock', ['ns3.clientnshosting.net.', 'ns4.clientnshosting.net.']),
    Delegation_NS('imprezy.otwock', ['ns1.a2webhosting.com.', 'ns2.a2webhosting.com.']),
    Delegation_NS('przecinek.otwock', ['ns3.clientnshosting.net.', 'ns4.clientnshosting.net.']),
    Delegation_NS('zarzewie.otwock', ['ns3.clientnshosting.net.', 'ns4.clientnshosting.net.']),
    Delegation_NS('zawiszatka.otwock', ['ns3.clientnshosting.net.', 'ns4.clientnshosting.net.']),
    Delegation_NS('broda.otwock', ['ns3.clientnshosting.net.', 'ns4.clientnshosting.net.']),
    Delegation_NS('piotrekbroda.otwock', ['ns3.clientnshosting.net.', 'ns4.clientnshosting.net.']),
    
    AAAA('ipv6.otwock', '2a02:25a9:0:2637::1'),
    A('otwock', '62.129.198.55'),
    CNAME('*.otwock', 'otwock.zhp.pl.'),
    Ms365_Subdomain('otwock', 'zhp.pl'),
    
    AAAA('ipv6.30plus.otwock', '2a02:25a9:0:2637::1'),
    A('30plus.otwock', '62.129.198.55'),
    MX('30plus.otwock', 10, '30plus.otwock.zhp.pl.'),
    TXT('30plus.otwock', 'v=spf1 mx a ptr ~all'),
    CNAME('*.30plus.otwock', '30plus.otwock.zhp.pl.'),
    
    AAAA('ipv6.7sdhs.otwock', '2a02:25a9:0:2637::1'),
    A('7sdhs.otwock', '62.129.198.55'),
    MX('7sdhs.otwock', 10, '7sdhs.otwock.zhp.pl.'),
    TXT('7sdhs.otwock', 'v=spf1 mx a ptr ~all'),
    CNAME('*.7sdhs.otwock', '7sdhs.otwock.zhp.pl.'),
    
    AAAA('ipv6.azymut.otwock', '2a02:25a9:0:2637::1'),
    A('azymut.otwock', '62.129.198.55'),
    MX('azymut.otwock', 10, 'azymut.otwock.zhp.pl.'),
    TXT('azymut.otwock', 'v=spf1 mx a ptr ~all'),
    CNAME('*.azymut.otwock', 'azymut.otwock.zhp.pl.'),
    
    AAAA('ipv6.gala2012.otwock', '2a02:25a9:0:2637::1'),
    A('gala2012.otwock', '62.129.198.55'),
    MX('gala2012.otwock', 10, 'gala2012.otwock.zhp.pl.'),
    CNAME('*.gala2012.otwock', 'gala2012.otwock.zhp.pl.'),
    
    AAAA('ipv6.hkt.otwock', '2a02:25a9:0:2637::1'),
    A('hkt.otwock', '62.129.198.55'),
    MX('hkt.otwock', 10, 'hkt.otwock.zhp.pl.'),
    CNAME('*.hkt.otwock', 'hkt.otwock.zhp.pl.'),
    
    AAAA('ipv6.niesmiertelni.otwock', '2a02:25a9:0:2637::1'),
    A('niesmiertelni.otwock', '62.129.198.55'),
    MX('niesmiertelni.otwock', 10, 'niesmiertelni.otwock.zhp.pl.'),
    CNAME('*.niesmiertelni.otwock', 'niesmiertelni.otwock.zhp.pl.'),
    
    AAAA('ipv6.rojsosny.otwock', '2a02:25a9:0:2637::1'),
    A('rojsosny.otwock', '62.129.198.55'),
    MX('rojsosny.otwock', 10, 'rojsosny.otwock.zhp.pl.'),
    CNAME('*.rojsosny.otwock', 'rojsosny.otwock.zhp.pl.'),
    
    AAAA('ipv6.sp5zdh.otwock', '2a02:25a9:0:2637::1'),
    A('sp5zdh.otwock', '62.129.198.55'),
    MX('sp5zdh.otwock', 10, 'sp5zdh.otwock.zhp.pl.'),
    CNAME('*.sp5zdh.otwock', 'sp5zdh.otwock.zhp.pl.'),
    
    AAAA('ipv6.wosp.otwock', '2a02:25a9:0:2637::1'),
    A('wosp.otwock', '62.129.198.55'),
    MX('wosp.otwock', 10, 'wosp.otwock.zhp.pl.'),
    CNAME('*.wosp.otwock', 'wosp.otwock.zhp.pl.'),
    
    AAAA('ipv6.zawiszacy.otwock', '2a02:25a9:0:2637::1'),
    A('zawiszacy.otwock', '62.129.198.55'),
    MX('zawiszacy.otwock', 10, 'zawiszacy.otwock.zhp.pl.'),
    CNAME('*.zawiszacy.otwock', 'zawiszacy.otwock.zhp.pl.'),

    CNAME('kalendarz.otwock', 'ghs.google.com.'),
    CNAME('mail.otwock', 'ghs.google.com.'),
    CNAME('dokumenty.otwock', 'ghs.google.com.'),


    // Hufiec Piaseczno
    A('piaseczno', '178.32.203.125'),
    CNAME('www.piaseczno', 'piaseczno.zhp.pl.'),
    Ms365_Subdomain('piaseczno', 'zhp.pl'),


    // Hufiec Piastów
    Delegation_NS('piastow', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),
    Ms365_Subdomain('piastow', 'zhp.pl'),

    // Hufiec Pruszków
    AAAA('ipv6.pruszkow', '2a02:25a9:0:5888::1'),
    A('pruszkow', '89.161.136.136'),
    CNAME('*.pruszkow', 'pruszkow.zhp.pl.'),
    Ms365_Subdomain('pruszkow', 'zhp.pl'),

    AAAA('ipv6.14.pruszkow', '2a02:25a9:0:5888::1'),
    A('14.pruszkow', '89.161.136.136'),
    MX('14.pruszkow', 10, '14.pruszkow.zhp.pl.'),
    CNAME('*.14.pruszkow', '14.pruszkow.zhp.pl.'),
    
    AAAA('ipv6.3pdh.pruszkow', '2a02:25a9:0:5888::1'),
    A('3pdh.pruszkow', '89.161.136.136'),
    MX('3pdh.pruszkow', 10, '3pdh.pruszkow.zhp.pl.'),
    TXT('3pdh.pruszkow', 'v=spf1 mx a ptr ~all'),
    CNAME('*.3pdh.pruszkow', '3pdh.pruszkow.zhp.pl.'),
    
    AAAA('ipv6.esh.pruszkow', '2a02:25a9:0:5888::1'),
    A('esh.pruszkow', '89.161.136.136'),
    MX('esh.pruszkow', 10, 'esh.pruszkow.zhp.pl.'),
    CNAME('*.esh.pruszkow', 'esh.pruszkow.zhp.pl.'),
    
    AAAA('ipv6.ewik.pruszkow', '2a02:25a9:0:5888::1'),
    A('ewik.pruszkow', '89.161.136.136'),
    MX('ewik.pruszkow', 10, 'ewik.pruszkow.zhp.pl.'),
    CNAME('*.ewik.pruszkow', 'ewik.pruszkow.zhp.pl.'),
    
    AAAA('ipv6.historia.pruszkow', '2a02:25a9:0:5888::1'),
    A('historia.pruszkow', '89.161.136.136'),
    MX('historia.pruszkow', 10, 'historia.pruszkow.zhp.pl.'),
    CNAME('*.historia.pruszkow', 'historia.pruszkow.zhp.pl.'),
    
    AAAA('ipv6.knieja.pruszkow', '2a02:25a9:0:5888::1'),
    A('knieja.pruszkow', '89.161.136.136'),
    MX('knieja.pruszkow', 10, 'knieja.pruszkow.zhp.pl.'),
    TXT('knieja.pruszkow', 'v=spf1 mx a ptr ~all'),
    CNAME('*.knieja.pruszkow', 'knieja.pruszkow.zhp.pl.'),
    
    AAAA('ipv6.pomoc.pruszkow', '2a02:25a9:0:5888::1'),
    A('pomoc.pruszkow', '89.161.136.136'),
    MX('pomoc.pruszkow', 10, 'pomoc.pruszkow.zhp.pl.'),
    CNAME('*.pomoc.pruszkow', 'pomoc.pruszkow.zhp.pl.'),
    
    AAAA('ipv6.twierdza.pruszkow', '2a02:25a9:0:5888::1'),
    A('twierdza.pruszkow', '89.161.136.136'),
    MX('twierdza.pruszkow', 10, 'twierdza.pruszkow.zhp.pl.'),
    TXT('twierdza.pruszkow', 'v=spf1 mx a ptr ~all'),
    CNAME('*.twierdza.pruszkow', 'twierdza.pruszkow.zhp.pl.'),
    
    AAAA('ipv6.shds.pruszkow', '2a02:25a9:0:5888::1'),
    A('shds.pruszkow', '89.161.136.136'),
    MX('shds.pruszkow', 10, 'shds.pruszkow.zhp.pl.'),
    CNAME('*.shds.pruszkow', 'shds.pruszkow.zhp.pl.'),
    
    AAAA('ipv6.shdw.pruszkow', '2a02:25a9:0:5888::1'),
    A('shdw.pruszkow', '89.161.136.136'),
    MX('shdw.pruszkow', 10, 'shdw.pruszkow.zhp.pl.'),
    CNAME('*.shdw.pruszkow', 'shdw.pruszkow.zhp.pl.'),
    
    AAAA('ipv6.paderewski.pruszkow', '2a02:25a9:0:5888::1'),
    A('paderewski.pruszkow', '89.161.136.136'),
    MX('paderewski.pruszkow', 10, 'paderewski.pruszkow.zhp.pl.'),
    CNAME('*.paderewski.pruszkow', 'paderewski.pruszkow.zhp.pl.'),

    
    // Hufiec Sulejówek (s)
    Delegation_NS('sulejowek', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),


    // Hufiec Warszawa-Centrum
    Delegation_NS('warszawacentrum', ['dns10.linuxpl.com.', 'ns10.linuxpl.com.']),
    Ms365_Subdomain('warszawacentrum', 'zhp.pl'),
    
    Ms365_Subdomain('centrum', 'zhp.pl'),


    // Hufiec Warszawa-Mokotów
    Delegation_NS('mokotow', ['ns1.unixstorm.org.', 'ns2.unixstorm.org.']),


    // Hufiec Warszawa-Ochota
    Delegation_NS('warszawaochota', ['ns100.ovh.net.', 'dns100.ovh.net.']),


    // Hufiec Warszawa-Praga-Południe (s)
    Delegation_NS('pragapoludnie', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    
    // Hufiec Warszawa-Praga-Północ
    Delegation_NS('pragapolnoc', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),


    // Hufiec Warszawa-Ursus-Włochy (s)
    Delegation_NS('ursuswlochy', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),


    // Hufiec Warszawa-Ursynów (s)
    Delegation_NS('ursynow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    
    // Hufiec Warszawa-Wawer
    Delegation_NS('wawer', ['ns1.x14.eu.', 'ns3.x25.pl.']),

    
    // Hufiec Warszawa-Wola (s)
    Delegation_NS('wola', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),


    // Hufiec Warszawa-Żoliborz (s)
    Delegation_NS('warszawazoliborz', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Ms365_Subdomain('warszawazoliborz', 'zhp.pl'),

    Delegation_NS('zoliborz', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),


    // Hufiec Wołomin (s)
    Delegation_NS('wolomin', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    
    // Hufiec Ząbki (s)
    Delegation_NS('zabki', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    
    // Hufiec Zielonka
    Delegation_NS('zielonka', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    
    // Hufiec Konstancin (s)
    Delegation_NS('konstancin', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    
    Ms365_Subdomain('tluszcz', 'zhp.pl'),

);
