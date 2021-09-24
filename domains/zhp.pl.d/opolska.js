D_EXTEND('zhp.pl',

  CNAME('autodiscover.opolska', 'autodiscover.outlook.com.'),
  CNAME('enterpriseenrollment.opolska', 'enterpriseenrollment.manage.microsoft.com.'),
  CNAME('enterpriseregistration.opolska', 'enterpriseregistration.windows.net.'),
  MX('opolska', 0, 'opolska-zhp-pl.mail.protection.outlook.com.'),
  TXT('opolska', 'v=spf1 include:spf.protection.outlook.com -all'),
  Delegation_NS('opolska', ['a.eco.atman.pl.', 'b.eco.atman.pl.']),

);