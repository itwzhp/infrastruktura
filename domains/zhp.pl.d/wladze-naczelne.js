D_EXTEND('zhp.pl',
    Ms365_Subdomain('gk', 'zhp.pl'), 
    A('gk', '89.161.251.118'),
    CNAME('selector1._domainkey.gk', 'selector1-gk-zhp-pl._domainkey.gkzhp.onmicrosoft.com.'), // TODO move to Ms365_Subdomain function
    CNAME('selector2._domainkey.gk', 'selector2-gk-zhp-pl._domainkey.gkzhp.onmicrosoft.com.'), // TODO move to Ms365_Subdomain function

    Ms365_Subdomain('ckr', 'zhp.pl'),
    A('ckr', '51.75.54.175'),

    Ms365_Subdomain('rn', 'zhp.pl'),
    A('rn', '89.161.251.118'),
    
    Ms365_Subdomain('nsh', 'zhp.pl'),
    A('nsh', '89.161.251.118')
);
