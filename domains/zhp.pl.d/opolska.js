D_EXTEND('zhp.pl',
  Delegation_NS('opolska', ['a.eco.atman.pl.', 'b.eco.atman.pl.']),

  Delegation_NS('brzeg', ['a.eco.atman.pl.', 'b.eco.atman.pl.']),
  Delegation_NS('glubczyce', ['ns1.ehost.pl.', 'ns2.ehost.pl.']),
  Delegation_NS('kedzierzynkozle', ['a.eco.atman.pl.', 'b.eco.atman.pl.']),
  Delegation_NS('krapkowice', ['a.eco.atman.pl.', 'b.eco.atman.pl.']),
  Delegation_NS('nysa', ['a.eco.atman.pl.', 'b.eco.atman.pl.']),
  Delegation_NS('opole', ['a.eco.atman.pl.', 'b.eco.atman.pl.']),
  Delegation_NS('praszka', ['a.eco.atman.pl.', 'b.eco.atman.pl.']),

  // to przykrywa czasem wpisy SPF ze strefy praszki, co może odbijać maile
  TXT('praszka', 'YCt6GUiBSQdODPJJJ9SnkA'),

  CNAME('opolemiasto', 'opole.zhp.pl.')
);
