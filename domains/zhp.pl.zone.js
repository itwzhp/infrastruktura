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
    Delegation_NS('e-aos', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('limev3', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('mailing', ['redir1.freshmail.pl.', 'redir2.freshmail.pl.']),
    Delegation_NS('pielgrzymka', ['dns.smarthost.pl.', 'dns2.smarthost.pl.', 'dns3.smarthost.pl.']), // ?
    Delegation_NS('rajdgranica', ['dns1.linuxpl.com.', 'dns2.linuxpl.com.', 'dns3.linuxpl.com.']), // cert error ale coś za nim jest
    Delegation_NS('westerplatte', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']), // cert error ale coś za nim stoi

    // A zhp.pl
    Delegation_A('archiwum', '51.75.54.175'),                       //??
    Delegation_A('bazy', '51.75.54.175'),
    Delegation_A('covid-zaswiadczenia', '51.75.54.175'),
    Delegation_A('czat', '51.75.54.175'),
    Delegation_A('czuwaj', '51.75.54.175'),
    Delegation_A('dokumenty', '51.75.54.175'),
    Delegation_A('e', '51.75.54.175'),
    Delegation_A('ekodruzyna', '51.75.54.175'),
    Delegation_A('haliz', '51.75.54.175'),
    Delegation_A('harc2o', '51.75.54.175'),
    Delegation_A('hib', '51.75.54.175'),
    Delegation_A('intranet', '51.75.54.175'),
    Delegation_A('komunikaty.gk', '51.75.54.175', 'zhp.pl'),
    Delegation_A('kursy', '51.75.54.175'),
    Delegation_A('lacznosc', '51.75.54.175'),
    Delegation_A('lesneplemiona', '51.75.54.175'),
    Delegation_A('limev4', '51.75.54.175'),
    Delegation_A('natropie', '51.75.54.175'),
    Delegation_A('odkrywcy', '51.75.54.175'),
    Delegation_A('panel', '51.75.54.175'),
    Delegation_A('rajdodkrywcow', '51.75.54.175'),
    Delegation_A('repozytorium', '51.75.54.175'),
    Delegation_A('sluzba', '51.75.54.175'),
    Delegation_A('specjalnosci', '51.75.54.175'),
    Delegation_A('starszyzna', '51.75.54.175'),
    Delegation_A('stock', '51.75.54.175'),
    Delegation_A('stopka', '51.75.54.175'),
    Delegation_A('strony', '51.75.54.175'),
    Delegation_A('turniej', '51.75.54.175'),
    Delegation_A('turniejgromad', '51.75.54.175'),
    Delegation_A('watra', '51.75.54.175'),
    Delegation_A('youthwave', '51.75.54.175'),

    // Azure
    Delegation_A('ed', '104.214.218.237'),
    Delegation_A('edek', '104.214.218.237'),

    // TODO ustalić co to
    A('integrationservice', '104.214.218.237'), // serwer edka ale do czego ta domena?
    A('qnapgk', '213.189.38.134'),
    A('vpngk', '213.189.38.130'), // ?
    CNAME('ftp', 'zhp.pl.') // ???
);

require_glob('zhp.pl.d/');

