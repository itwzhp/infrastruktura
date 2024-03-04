D('1procent.pl', noneRegistrar, DnsProvider(ovhProvider), DefaultTTL(3600),
    Delegation_A_WithCfProxy('@', '51.75.54.175'),
    CNAME('www', '@'),
    CNAME('ftp', '@')
);
