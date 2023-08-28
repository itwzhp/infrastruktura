D('zhp.pl', ovhRegistrar, DnsProvider(cloudflareProvider), DefaultTTL(3600),
    // Main domain
    A('@', '51.75.54.175', CF_PROXY_ON),
    CNAME('www', 'zhp.pl.', CF_PROXY_ON),
    Ms365_Root('zhp.pl'),

    // Special
    Ms365_Subdomain('jpt', 'zhp.pl'),
    TXT('_acme-challenge.haliz', 'jd-YDJYrtRp7nynl5NEJyNrHqwrtfpm7j1H-rOJ5LfQ'),
    TXT('_github-challenge-itwzhp.gk', 'e9917cb777'),
    TXT('_github-challenge-itwzhp', 'da1510325a'),
    TXT('ovhcontrol', 'aoRqdwWKKnTDamiIqv6uqQ'),
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

