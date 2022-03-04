D('bikejamboree.pl', noneRegistrar, DnsProvider(ovhProvider), DefaultTTL(3600),
    A('@', '51.75.54.175'),
    CNAME('www', '@'),

    A('a', '51.75.54.175'),
    Ms365_Root('bikejamboree.pl')
);
