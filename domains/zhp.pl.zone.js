D('zhp.pl', ovhRegistrar, DnsProvider(cloudflareProvider), DefaultTTL(3600),
    // Main domain
    Delegation_A_WithCfProxy('@', '51.75.54.175'),
    CNAME('www', 'zhp.pl.', CF_PROXY_ON),
    Ms365_Root('zhp.pl'),

    // DMARC
    DMARC('reject'),
    TXT("zhp.net.pl._report._dmarc", "v=DMARC1"), // to comply with https://dmarc.org/2015/08/receiving-dmarc-reports-outside-your-domain/
    TXT("grupy.zhp.net.pl._report._dmarc", "v=DMARC1"), // #TODO Remove after DMARC record for grupy.zhp.net.pl was removed


    // Special
    Ms365_Subdomain('jpt', 'zhp.pl'),
    TXT('_acme-challenge.haliz', 'jd-YDJYrtRp7nynl5NEJyNrHqwrtfpm7j1H-rOJ5LfQ'),
    TXT('_github-challenge-itwzhp.gk', 'e9917cb777'),
    TXT('_github-challenge-itwzhp', 'da1510325a'),
    TXT('ovhcontrol', '0k7wyRzAzcuqF3qKnWZQhg'),
    Redirects(require('./redirects/redirectFiles/zhp.pl.json')),

    // TODO ustalić co to
    Delegation_A_WithCfProxy('e-aos', '51.75.54.175'),
    A('qnapgk', '213.189.38.134'),
    A('vpngk', '213.189.38.130'), // ?
    A('ftp', '51.75.54.175'), // pozwala ominąć proxy CF

    // Ignore cloudflare zerotrust records
    IGNORE_TARGET("**.cfargotunnel.com.", "CNAME")
);

require_glob('zhp.pl.d/');

