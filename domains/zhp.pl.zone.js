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

    // NS
    Delegation_NS('limev3', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('pielgrzymka', ['dns.smarthost.pl.', 'dns2.smarthost.pl.', 'dns3.smarthost.pl.']), // ?
    Delegation_NS('rajdgranica', ['dns1.linuxpl.com.', 'dns2.linuxpl.com.', 'dns3.linuxpl.com.']), // cert error ale coś za nim jest
    Delegation_NS('westerplatte', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']), // cert error ale coś za nim stoi

    // TODO ustalić co to
    Delegation_A_WithCfProxy('e-aos', '51.75.54.175'),
    A('qnapgk', '213.189.38.134'),
    A('vpngk', '213.189.38.130'), // ?
    A('ftp', '51.75.54.175'), // pozwala ominąć proxy CF

    // Ignore cloudflare zerotrust records
    IGNORE_TARGET("**.cfargotunnel.com.", "CNAME")
);

require_glob('zhp.pl.d/');

