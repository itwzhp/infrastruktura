D_EXTEND('zhp.pl',
    // Harcerskie Muzeum Etnograficzne
    Delegation_A('hme', '109.95.157.35'),
    Ms365_Subdomain('hme','zhp.pl') // MS365-8065
         
     // Chorągiew
         
         
    Delegation_NS('slaska', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('slaska', 'v=spf1 include:spf.protection.outlook.com -all'),
    
        
     // Hufce (hosting chorągwi)
    Delegation_NS('bedzin', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('bedzin', 'v=spf1 include:spf.protection.outlook.com -all'),
    
    Delegation_NS('beskidzki', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('beskidzki', 'v=spf1 include:spf.protection.outlook.com -all'),
    
    Delegation_NS('bytom', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('bytom', 'v=spf1 include:spf.protection.outlook.com -all'),
    
    Delegation_NS('chorzow', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('chorzow', 'v=spf1 include:spf.protection.outlook.com -all'),
    
    Delegation_NS('chrzanow', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('chrzanow', 'v=spf1 include:spf.protection.outlook.com -all'),
          
    Delegation_NS('czechowice-dziedzice', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    MX('czechowice-dziedzice', 0, 'czechowicedziedzice-zhp-pl02e.mail.protection.outlook.com.'),
    TXT('czechowice-dziedzice', 'v=spf1 include:spf.protection.outlook.com -all'),
     CNAME('enterpriseenrollment.czechowice-dziedzice', 'enterpriseenrollment.manage.microsoft.com.'),
    CNAME('enterpriseregistration.czechowice-dziedzice', 'enterpriseregistration.windows.net.'),
    CNAME('lyncdiscover.czechowice-dziedzice', 'webdir.online.lync.com.'),
    CNAME('msoid.czechowice-dziedzice', 'clientconfig.microsoftonline-p.net.'),
     CNAME('sip.czechowice-dziedzice', 'sipdir.online.lync.com.'),
    CNAME('autodiscover.czechowice-dziedzice', 'autodiscover.outlook.com.'),
     
    Delegation_NS('czerwionka', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('czerwionka', 'v=spf1 include:spf.protection.outlook.com -all'),
            
    Delegation_NS('dabrowagornicza', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('dabrowagornicza', 'v=spf1 include:spf.protection.outlook.com -all'),
    
    Delegation_NS('gliwice', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('gliwice', 'v=spf1 include:spf.protection.outlook.com -all'),
        
    Delegation_NS('jastrzebiezdroj', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('jastrzebiezdroj', 'v=spf1 include:spf.protection.outlook.com -all'),
    
    Delegation_NS('jaworzno', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('jaworzno', 'v=spf1 include:spf.protection.outlook.com -all'),
    
    Delegation_NS('katowice', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
        
    Delegation_NS('klobuck', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('klobuck', 'v=spf1 include:spf.protection.outlook.com -all'),
          
    Delegation_NS('kuzniaraciborska', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('kuzniaraciborska', 'v=spf1 include:spf.protection.outlook.com -all'),
           
    Delegation_NS('mikolow', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('mikolow', 'v=spf1 include:spf.protection.outlook.com -all'),
    
    Delegation_NS('myslowice', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('myslowice', 'v=spf1 include:spf.protection.outlook.com -all'),
    
    Delegation_NS('myszkow', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('myszkow', 'v=spf1 include:spf.protection.outlook.com -all'),
    
    Delegation_NS('piekary', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('piekaryslaskie', ['fns1.42.pl.', 'fns2.42.pl.']),
    
    Delegation_NS('rudaslaska', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    
    Delegation_NS('rybnik', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('rybnik', 'v=spf1 include:spf.protection.outlook.com -all'),
    
    Delegation_NS('rydultowy', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('rydultowy', 'v=spf1 include:spf.protection.outlook.com -all'),
    
    Delegation_NS('siemianowice', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('siemianowice', 'v=spf1 include:spf.protection.outlook.com -all'),
    
    Delegation_NS('siemianowice', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('siemianowice', 'v=spf1 include:spf.protection.outlook.com -all'),
    
    Delegation_NS('sosnowiec', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('sosnowiec', 'v=spf1 include:spf.protection.outlook.com -all'),
    
    TXT('tarnowskiegory', 'v=spf1 include:spf.protection.outlook.com -all'),
    Delegation_NS('tarnowskiegory', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
        
    Delegation_NS('tychy', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('tychy', 'v=spf1 include:spf.protection.outlook.com -all'),
        
    Delegation_NS('wegierskagorka', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('wegierskagorka', 'v=spf1 include:spf.protection.outlook.com -all'),
    
    Delegation_NS('wodzislaw', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('wodzislaw', 'v=spf1 include:spf.protection.outlook.com -all'),
        
    Delegation_NS('zabrze', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('zabrze', 'v=spf1 include:spf.protection.outlook.com -all'),
    
    Delegation_NS('zawiercie', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('zawiercie', 'v=spf1 include:spf.protection.outlook.com -all'),
    
    Delegation_NS('zory', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('zory', 'v=spf1 include:spf.protection.outlook.com -all'),
    
    Delegation_NS('zywiec', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    TXT('zywiec', 'v=spf1 include:spf.protection.outlook.com -all')

 // Hufce (hosting zewnętrzny)

    Delegation_NS('lubliniec', ['ns1.ehost.pl.', 'ns2.ehost.pl.']),
    TXT('lubliniec', 'v=spf1 include:spf.protection.outlook.com -all'),
    MX('lubliniec', 0, 'lubliniec-zhp-pl.mail.protection.outlook.com.'),
    CNAME('sip.lubliniec', 'sipdir.online.lync.com.'),
    CNAME('msoid.lubliniec', 'clientconfig.microsoftonline-p.net.'),
    CNAME('lyncdiscover.lubliniec', 'webdir.online.lync.com.'),
    CNAME('enterpriseregistration.lubliniec', 'enterpriseregistration.windows.net.'),
    CNAME('autodiscover.lubliniec', 'autodiscover.outlook.com.'),
    CNAME('enterpriseenrollment.lubliniec', 'enterpriseenrollment.manage.microsoft.com.'),
        
    Delegation_NS('cieszyn', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    Delegation_NS('czestochowa', ['dns.trustnet.pl.', 'dns2.trustnet.pl.']),
    
    // Imprezy
     Delegation_NS('cmoksong', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    
    // Bazy
    Delegation_NS('kucoby', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    A('amonit', '109.95.158.82'),
    A('bazapajak', '91.211.221.203'),
         
    // Domenny pomocnicze _techniczne na serwery
    Delegation_NS('sl', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('sl1', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('sl2', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
         
);
