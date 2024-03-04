D('bikejamboree.pl', noneRegistrar, DnsProvider(ovhProvider), DefaultTTL(3600),
  
  // główna strona - frontend
  Delegation_A_WithCfProxy('@', '51.75.54.175'),
  CNAME('www', '@'),

  // strona główna - backend
  Delegation_A_WithCfProxy('work', '51.75.54.175'),
  
  // stara wersja strony (archiwum)
  Delegation_A_WithCfProxy('a', '51.75.54.175'),
  
  // frontend w wersji dev
  Delegation_A_WithCfProxy('dev', '51.75.54.175'), 
  
  Ms365_Root('bikejamboree.pl')
);
