var atthost = '185.255.40.43';

D_EXTEND('zhp.pl',
    // Chorągiew
    Delegation_A('zachpom', atthost),
    Delegation_A('zachodniopomorska', atthost),
    Ms365_Subdomain('zachpom','zhp.pl'),
         
    Delegation_CNAME('parasol.zachpom.zhp.pl.', 'zachpom.zhp.pl.'),
    Delegation_CNAME('portal.zachpom.zhp.pl.', 'zachpom.zhp.pl.'),
         
    Delegation_CNAME('zlot.zachpom.zhp.pl.', 'zachpom.zhp.pl.'),
    
    // Hufce
    Delegation_A('swinoujscie', atthost),
    Ms365_Subdomain('swinoujscie','zhp.pl'),
	
    Delegation_A('szczecin', atthost),
    Ms365_Subdomain('szczecin','zhp.pl'),

    Delegation_A('szczecindabie', atthost),
    Ms365_Subdomain('szczecindabie','zhp.pl'),

    Delegation_A('szczecinek', atthost),
    Ms365_Subdomain('szczecinek','zhp.pl'),

    Delegation_A('szczecinpogodno', atthost),
    Ms365_Subdomain('szczecinpogodno','zhp.pl'),

    Delegation_A('kolobrzeg', atthost),
    Ms365_Subdomain('kolobrzeg','zhp.pl'),

    Delegation_A('koszalin', atthost),
    Ms365_Subdomain('koszalin','zhp.pl'),

    Delegation_A('goleniow', atthost),
    Ms365_Subdomain('goleniow','zhp.pl'),

    Delegation_A('police', atthost),
    Ms365_Subdomain('police','zhp.pl'),

    Delegation_A('stargard', atthost),
    Ms365_Subdomain('stargard','zhp.pl'),

    Delegation_A('mysliborz', atthost),
    Ms365_Subdomain('mysliborz','zhp.pl'),

    Delegation_A('slawno', atthost),
    Ms365_Subdomain('slawno','zhp.pl'))
