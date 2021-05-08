D_EXTEND('zhp.pl',
    
    // Delegacja domeny hufca Babimojsko-Sulechowski
    Ms365_Subdomain('sulechow','zhp.pl'),
    
    // Delegacja domeny hufca Gorzów
    Delegation_NS('gorzow', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']), 
    
    // Delegacja domeny hufca Międzychód
    Delegation_NS('miedzychod', ['ns1.hostinghouse.pl.', 'ns2.hostinghouse.pl.']), 
	
    // Delegacja domeny hufca Międzyrzecz
    Ms365_Subdomain('miedzyrzecz','zhp.pl'), 
	
    //Delegacja domeny hufca Nowa Sól
    Delegation_CNAME('nowasol', 'ghs.google.com.'),
    
    // Delegacja domeny hufca Słubice
    Delegation_NS('slubice', ['ns1.atthost.pl.', 'ns2.atthost.pl.']), 
    
    //Delegacja domeny hufca Strzelce 
    Ms365_Subdomain('strzelce','zhp.pl'),
    Delegation_A('strzelce','185.135.90.126'),
    A('*.strzelce', '185.135.90.126'), 
    
    // Delegacja domeny hufca Sulęcin
    Ms365_Subdomain('sulecin','zhp.pl'),
    
    //Delegacja domeny hufca Szprotawa
    Delegation_NS('szprotawa', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']), 
    
    // Delegacja domeny hufca Zielona Góra
    Delegation_NS('zielonagora', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.']), 
    
    // Delegacja domeny hufca Żary
    Ms365_Subdomain('zary','zhp.pl'),
    
    //domena chorągwi
    Delegation_NS('lubuska', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.'])	
);
