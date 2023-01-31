D_EXTEND('zhp.pl',

    // Chorągiew
    Delegation_NS('stoleczna', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    // Ogólnopolskie
    Delegation_A('arsenal', '91.227.122.220'),
    Delegation_A('2013.arsenal', '91.227.122.220', 'zhp.pl'),
    Delegation_A('2014.arsenal', '91.227.122.220', 'zhp.pl'),
    Delegation_A('2016.arsenal', '91.227.122.220', 'zhp.pl'),
    Delegation_A('2017.arsenal', '91.227.122.220', 'zhp.pl'),
    Delegation_A('2018.arsenal', '91.227.122.220', 'zhp.pl'),
    Delegation_A('2019.arsenal', '91.227.122.220', 'zhp.pl'),
    Delegation_A('2020.arsenal', '91.227.122.220', 'zhp.pl'),
    Delegation_A('2021.arsenal', '91.227.122.220', 'zhp.pl'),
    Delegation_A('podajdalej.arsenal', '91.227.122.220', 'zhp.pl'),
    Delegation_A('pytania.arsenal', '91.227.122.220', 'zhp.pl'),
    Delegation_A('rejestracja.arsenal', '91.227.122.220', 'zhp.pl'),

    // Dobre pytanie, potrzebna migracja do Office365 - w pierwszej kolejności chcemy odzyskać dane z Google Workspace
    CNAME('dokumenty.arsenal', 'ghs.google.com.'),
    CNAME('kalendarz.arsenal', 'ghs.google.com.'),
    CNAME('poczta.arsenal', 'ghs.google.com.'),
    CNAME('strony.arsenal', 'ghs.google.com.'),
    MX('arsenal', 10, 'ASPMX.L.GOOGLE.COM.'),
    MX('arsenal', 20, 'ALT1.ASPMX.L.GOOGLE.COM.'),
    MX('arsenal', 30, 'ASPMX2.GOOGLEMAIL.COM.'),
    MX('arsenal', 40, 'ASPMX3.GOOGLEMAIL.COM.'),
    MX('arsenal', 50, 'ASPMX4.GOOGLEMAIL.COM.'),
    MX('arsenal', 60, 'ASPMX5.GOOGLEMAIL.COM.'),
    TXT('arsenal', '"v=spf1 include:_spf.google.com ~all"'),
    TXT('google._domainkey.arsenal', '"v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDD6QASh2jZ4WgKUAOBtvYl9yOmanGPN75ET/SCCHigkJIY5Mp0og6hka9c1ExqAYWhaWOf+GxBQk7vtoy5rXzGA6UxFFB5sYX2OWhQWrHhSjo1eA6QgkeXZ0p7w09f8bP7JeiHVy2vPL/DDEuWEpzupEwfb1wWw/gK+5c2tt89lwIDAQAB"'),


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
    Delegation_A('warszawazoliborz', '185.255.40.28'),
    Ms365_Subdomain('warszawazoliborz', 'zhp.pl'),
    Delegation_NS('wolomin', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('zabki', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('konstancin', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),


    // Hufiec Legionowo
    Delegation_NS('legionowo', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),


    // Hufiec Milanowek
    Delegation_A('milanowek', '194.181.228.45'),
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
    Delegation_A('mokotow', '91.227.122.220'),
    Delegation_A('154.mokotow', '91.227.122.220', 'zhp.pl'),
    Delegation_A('208.mokotow', '91.227.122.220', 'zhp.pl'),
    Delegation_A('40naobozie.mokotow', '91.227.122.220', 'zhp.pl'),
    Delegation_A('50.mokotow', '91.227.122.220', 'zhp.pl'),
    Delegation_A('60i148.mokotow', '91.227.122.220', 'zhp.pl'),
    Delegation_A('60wdh.mokotow', '91.227.122.220', 'zhp.pl'),
    Delegation_A('69wdhiz.mokotow', '91.227.122.220', 'zhp.pl'),
    Delegation_A('dok.mokotow', '91.227.122.220', 'zhp.pl'),
    Delegation_A('e-rajd.mokotow', '91.227.122.220', 'zhp.pl'),
    Delegation_A('gra.mokotow', '91.227.122.220', 'zhp.pl'),
    Delegation_A('hkr.mokotow', '91.227.122.220', 'zhp.pl'),
    Delegation_A('marek.mokotow', '91.227.122.220', 'zhp.pl'),
    Delegation_A('new.mokotow', '91.227.122.220', 'zhp.pl'),
    Delegation_A('oboz.mokotow', '91.227.122.220', 'zhp.pl'),
    Delegation_A('old.mokotow', '91.227.122.220', 'zhp.pl'),
    Delegation_A('postoj.mokotow', '91.227.122.220', 'zhp.pl'),
    Delegation_A('spacer.mokotow', '91.227.122.220', 'zhp.pl'),
    Delegation_A('stopa.mokotow', '91.227.122.220', 'zhp.pl'),
    Delegation_A('szczep40.mokotow', '91.227.122.220', 'zhp.pl'),
    Delegation_A('szczep413.mokotow', '91.227.122.220', 'zhp.pl'),
    Delegation_A('wedrownicy.mokotow', '91.227.122.220', 'zhp.pl'),

    // Google Sites
    CNAME('1procent.mokotow', 'ghs.google.com.'),
    CNAME('ksh.mokotow', 'ghs.google.com.'),
    CNAME('przewodnikowski.mokotow', 'ghs.google.com.'),

    // Ktoś tego używa?
    CNAME('dokumenty.mokotow', 'ghs.google.com.'),
    CNAME('kalendarz.mokotow', 'ghs.google.com.'),
    CNAME('poczta.mokotow', 'ghs.google.com.'),
    CNAME('strony.mokotow', 'ghs.google.com.'),

    // Microsoft 365
    CNAME('autodiscover.mokotow', 'autodiscover.outlook.com.'),
    CNAME('enterpriseenrollment.mokotow', 'enterpriseenrollment.manage.microsoft.com.'),
    CNAME('enterpriseregistration.mokotow', 'enterpriseregistration.windows.net.'),
    CNAME('lyncdiscover.mokotow', 'webdir.online.lync.com.'),
    CNAME('sip.mokotow', 'sipdir.online.lync.com.'),
    MX('mokotow', 0, 'mokotow-zhp-pl.mail.protection.outlook.com.'),
    SRV('_sip._tls.mokotow', 1, 100, 443, 'sipdir.online.lync.com.'),
    SRV('_sipfederationtls._tcp.mokotow', 1, 100, 5061, 'sipfed.online.lync.com.'),
    TXT('mokotow', 'v=spf1 include:spf.protection.outlook.com -all'),


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

    AAAA('ipv6.otwock', '2a02:25a9:0:2637::1'),
    Delegation_A('otwock', '62.129.198.55'),
    Ms365_Subdomain('otwock', 'zhp.pl'),

    AAAA('ipv6.wosp.otwock', '2a02:25a9:0:2637::1'),
    Delegation_A('wosp.otwock', '62.129.198.55', 'zhp.pl'),

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

    AAAA('ipv6.paderewski.pruszkow', '2a02:25a9:0:5888::1'),
    Delegation_A('paderewski.pruszkow', '89.161.136.136', 'zhp.pl'),

    AAAA('ipv6.shds.pruszkow', '2a02:25a9:0:5888::1'),
    Delegation_A('shds.pruszkow', '89.161.136.136', 'zhp.pl'),

    // szczep --> błędne kodowanie znaków
    AAAA('ipv6.shdw.pruszkow', '2a02:25a9:0:5888::1'),
    Delegation_A('shdw.pruszkow', '89.161.136.136', 'zhp.pl'),

    AAAA('ipv6.knieja.pruszkow', '2a02:25a9:0:5888::1'),
    Delegation_A('knieja.pruszkow', '89.161.136.136', 'zhp.pl'),

    AAAA('ipv6.twierdza.pruszkow', '2a02:25a9:0:5888::1'),
    Delegation_A('twierdza.pruszkow', '89.161.136.136', 'zhp.pl')
);
