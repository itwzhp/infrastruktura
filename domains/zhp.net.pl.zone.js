D('zhp.net.pl', noneRegistrar, DnsProvider(cloudflareProvider), DefaultTTL(3600),
    Delegation_A_WithCfProxy('@', '51.75.54.175'),
    CNAME('www', 'zhp.net.pl.'),

    Ms365_Root('zhp.net.pl'),
    DMARC('reject'),
    
    // grupy.zhp.net.pl
    Ms365_Subdomain('grupy', 'zhp.net.pl'),
    DMARC('reject', 'reject', 'grupy'), // strict DMARC - only Office 365 in this subdomain

    // other subdomains
    Delegation_NS('347', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('4szczep', ['dns1.slaskdatacenter.pl.', 'dns2.slaskdatacenter.pl.', 'dns3.slaskdatacenter.pl.']),
    Delegation_NS('czarna5', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('hgrgorzow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('lapmyduchy', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('5shbrzask', ['ns1.cba.pl.', 'ns2.cba.pl.', 'ns3.cba.pl.']), // MS365-4643
    Delegation_NS('4shfeniks', ['ns1.atthost.pl.', 'ns2.atthost.pl.']), // MS365-4651

    Delegation_A('157pdh', '91.227.123.80'),
    
    // Silnik przekierowań
    Redirects(require('./redirects/redirectFiles/zhp.net.pl.json'))
)
