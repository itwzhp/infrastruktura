D_EXTEND('zhp.pl',
  //Strona chorągwi
  Delegation_A_WithCfProxy('opolska', '149.56.30.175'),
  Delegation_A_WithCfProxy('przekierowania.opolska', '149.56.30.175'),

  //CNAME pod podstrony chorągwiane
  CNAME('ninja.opolska', 'opolska.zhp.pl.');
  CNAME('przekierowania.opolska', 'opolska.zhp.pl.');
  CNAME('dokumenty.opolska', 'opolska.zhp.pl.');
  
  //Strony hufców
  Delegation_A_WithCfProxy('brzeg', '149.56.30.175'),
  Delegation_A_WithCfProxy('kedzierzynkozle', '149.56.30.175'),
  Delegation_A_WithCfProxy('krapkowice', '149.56.30.175'),
  Delegation_A_WithCfProxy('nysa', '149.56.30.175'),
  Delegation_A_WithCfProxy('opole', '149.56.30.175'),

  //CNAME pod przekierowania ehufcowe
  CNAME('dokumenty.brzeg', 'brzeg.zhp.pl.');
  CNAME('dokumenty.kedzierzynkozle', 'kedzierzynkozle.zhp.pl.');
  CNAME('dokumenty.krapkowice', 'krapkowice.zhp.pl.');
  CNAME('dokumenty.nysa', 'nysa.zhp.pl.');
  CNAME('dokumenty.opole', 'opole.zhp.pl.');

  //Rekordy pod Office365.
  Ms365_Subdomain('opolska','zhp.pl'),
  Ms365_Subdomain('brzeg','zhp.pl'),
  Ms365_Subdomain('kedzierzynkozle','zhp.pl'),
  Ms365_Subdomain('krapkowice','zhp.pl'),
  Ms365_Subdomain('nysa','zhp.pl'),
  Ms365_Subdomain('opole','zhp.pl'),
  Ms365_Subdomain('praszka','zhp.pl'),
    
  Delegation_NS('glubczyce', ['ns1.ehost.pl.', 'ns2.ehost.pl.']),
);
