D_EXTEND('zhp.pl',

  CNAME('autodiscover.opolska', 'autodiscover.outlook.com.'),
  CNAME('enterpriseenrollment.opolska', 'enterpriseenrollment.manage.microsoft.com.'),
  CNAME('enterpriseregistration.opolska', 'enterpriseregistration.windows.net.'),
  MX('opolska', 0, 'opolska-zhp-pl.mail.protection.outlook.com.'),
  TXT('opolska', 'v=spf1 include:spf.protection.outlook.com -all'),
  Delegation_NS('opolska', ['a.eco.atman.pl.', 'b.eco.atman.pl.']),

  Delegation_NS('brzeg', ['a.eco.atman.pl.', 'b.eco.atman.pl.']),
  Delegation_NS('glubczyce', ['ns1.ehost.pl.', 'ns2.ehost.pl.']),
  Delegation_NS('kedzierzynkozle', ['a.eco.atman.pl.', 'b.eco.atman.pl.']),
  Delegation_NS('krapkowice', ['a.eco.atman.pl.', 'b.eco.atman.pl.']),
  Delegation_NS('nysa', ['a.eco.atman.pl.', 'b.eco.atman.pl.']),
  Delegation_NS('opole', ['a.eco.atman.pl.', 'b.eco.atman.pl.']),
  Delegation_NS('praszka', ['a.eco.atman.pl.', 'b.eco.atman.pl.']),
  
  TXT('praszka', 'YCt6GUiBSQdODPJJJ9SnkA'),

  CNAME('opolemiasto', 'opole.zhp.pl.')
);