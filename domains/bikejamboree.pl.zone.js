D('bikejamboree.pl', noneRegistrar, DnsProvider(ovhProvider), DefaultTTL(3600),
    A('@', '51.75.54.175'),
    CNAME('www', '@'),

    A('a', '128.204.219.231'),
    Ms365_Root('bikejamboree.pl')
);
