D_EXTEND('zhp.pl',

    // Delegacja domeny hufca Babimojsko-Sulechowski
    Ms365_Subdomain('sulechow','zhp.pl'),

    // Delegacja domeny hufca Gorzów
    Delegation_NS('gorzow', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),

    // Delegacja domeny hufca Międzychód
    Ms365_Subdomain('miedzychod','zhp.pl'),

    // Delegacja domeny hufca Międzyrzecz
    Ms365_Subdomain('miedzyrzecz','zhp.pl'),

    //Delegacja domeny hufca Nowa Sól
    Delegation_A('nowasol', ['216.239.32.21', '216.239.34.21', '216.239.36.21', '216.239.38.21']), // W oparciu o https://support.google.com/blogger/answer/1233387?hl=en
    Ms365_Subdomain('nowasol','zhp.pl'), // MS365-35854

    // Delegacja domeny hufca Słubice
    Delegation_NS('slubice', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    //Delegacja domeny hufca Strzelce (zmienili nazwę na hufiec Strzelecko-Drezdenecki)
    Ms365_Subdomain('strzelce','zhp.pl'),
    Delegation_A('strzelce','185.135.90.126'),

    // Delegacja domeny hufca Sulęcin
    Ms365_Subdomain('sulecin','zhp.pl'),

    //Delegacja domeny hufca Szprotawa
    Delegation_NS('szprotawa', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']), //Hufiec został rozwiazany, dogaduję z chorągwią co dalej robimy

    // Delegacja domeny hufca Zielona Góra
    Delegation_NS('zielonagora', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']),

    // Delegacja domeny hufca Żary
    Ms365_Subdomain('zary','zhp.pl'),
    Delegation_A('zary', '5.252.231.83'), // MS365-11045

    //domena chorągwi
    Delegation_NS('lubuska', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.'])
);
