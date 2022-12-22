D('bikejamboree.pl', noneRegistrar, DnsProvider(ovhProvider), DefaultTTL(3600),
  
  // główna strona - frontend
    A('@', '51.75.54.175'),
    CNAME('www', '@'),

  // strona główna - backend
    A('work', '51.75.54.175'),
  
  // stara wersja strony (archiwum)
    A('a', '51.75.54.175'),
  
  // frontend w wersji dev
    A('dev', '51.75.54.175'), 
  
    Ms365_Root('bikejamboree.pl')
);
