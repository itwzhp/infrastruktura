D_EXTEND('zhp.pl',
  //Strony i podstrony chorągwi
  Ms365_Subdomain('opolska','zhp.pl'),
  Delegation_A_WithCfProxy('opolska', '149.56.30.175'),
  Delegation_A_WithCfProxy('przekierowania.opolska', '149.56.30.175'),
  
  //Strony i podstrony chorągwi
  Delegation_A_WithCfProxy('brzeg', '149.56.30.175'),
  Delegation_A_WithCfProxy('kedzierzynkozle', '149.56.30.175'),
  Delegation_A_WithCfProxy('krapkowice', '149.56.30.175'),
  Delegation_A_WithCfProxy('nysa', '149.56.30.175'),
  Delegation_A_WithCfProxy('opole', '149.56.30.175'),

  Ms365_Subdomain('brzeg','zhp.pl'),
  Ms365_Subdomain('kedzierzynkozle','zhp.pl'),
  Ms365_Subdomain('krapkowice','zhp.pl'),
  Ms365_Subdomain('nysa','zhp.pl'),
  Ms365_Subdomain('opole','zhp.pl'),
  Ms365_Subdomain('praszka','zhp.pl'),
    
  Delegation_NS('glubczyce', ['ns1.ehost.pl.', 'ns2.ehost.pl.']),   
);
