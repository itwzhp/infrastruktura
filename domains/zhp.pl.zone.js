D('zhp.pl', ovhRegistrar, DnsProvider(cloudflareProvider), DefaultTTL(3600),
    A('@', '51.75.54.175', CF_PROXY_ON),
    CNAME('www', 'zhp.pl.', CF_PROXY_ON),
    Ms365_Root('zhp.pl'),
    Redirects(require('./redirects/redirectFiles/zhp.pl.json'))
);

require_glob('zhp.pl.d/');

// TODO lines below require clean-up
D_EXTEND('zhp.pl',
    TXT('_acme-challenge.haliz', 'jd-YDJYrtRp7nynl5NEJyNrHqwrtfpm7j1H-rOJ5LfQ'),
    TXT('_github-challenge-itwzhp.gk', 'e9917cb777'),
    TXT('_github-challenge-itwzhp', 'da1510325a'),
    CNAME('646napfp2tt7', 'gv-4pvab7ilnxipxn.dv.googlehosted.com.'),
    Delegation_NS('admin', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),  //??
    Delegation_A('archiwum', '51.75.54.175'),                       //??
    
    CNAME('autodiscover.jpt', 'autodiscover.outlook.com.'),         //??
    CNAME('enterpriseenrollment.jpt', 'enterpriseenrollment.manage.microsoft.com.'),
    CNAME('enterpriseregistration.jpt', 'enterpriseregistration.windows.net.'),
    MX('jpt', 0, 'jpt-zhp-pl.mail.protection.outlook.com.'),
    TXT('jpt', 'v=spf1 include:spf.protection.outlook.com -all'),
    CNAME('msoid.jpt', 'clientconfig.microsoftonline-p.net.'),

    Delegation_A('bazy', '51.75.54.175'),
    Delegation_A('covid-zaswiadczenia', '51.75.54.175'),
    Delegation_A('czat', '51.75.54.175'),
    Delegation_A('czuwaj', '51.75.54.175'),
    Delegation_NS('czuwaj2', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_A('dk', '51.75.54.175'),
    Delegation_A('dokumenty', '51.75.54.175'),
    Delegation_NS('e-aos', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_A('e', '51.75.54.175'),
    A('ed', '104.214.218.237'),
    A('edek', '104.214.218.237'),
    A('edeklaracja', '51.105.209.75'),
    A('edev', '213.189.38.133'),
    A('edev2', '213.189.38.133'),
    A('edruzyna', '213.189.38.133'),
    A('ehufiec', '213.189.38.133'),
    Delegation_A('ekodruzyna', '51.75.54.175'),
    CNAME('ftp', 'zhp.pl.'), // ???
    Delegation_A('haliz', '51.75.54.175'),
    A('harc2o', '51.75.54.175'),
    Delegation_A('hib', '51.75.54.175'),
    A('integrationservice', '104.214.218.237'), // ?
    Delegation_A('intranet', '51.75.54.175'),
    A('komunikaty.gk', '51.75.54.175'),
    Delegation_A('kursy', '51.75.54.175'),
    Delegation_A('lacznosc', '51.75.54.175'),
    Delegation_A('lesneplemiona', '51.75.54.175'),
    Delegation_NS('limev3', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    A('limev4', '51.75.54.175'),
    Delegation_A('lotnictwo', '51.75.54.175'),
    Delegation_NS('mailing', ['redir1.freshmail.pl.', 'redir2.freshmail.pl.']),
    CNAME('msoid', 'clientconfig.microsoftonline-p.net.'),
    Delegation_A('natropie', '51.75.54.175'),
    Delegation_NS('nml', ['ns1.atthost.pl.', 'ns2.atthost.pl.']), // ?
    Delegation_A('odkrywcy', '51.75.54.175'),
    TXT('ovhcontrol', 'aoRqdwWKKnTDamiIqv6uqQ'),
    Delegation_A('panel', '51.75.54.175'),
    Delegation_NS('pielgrzymka', ['dns.smarthost.pl.', 'dns2.smarthost.pl.', 'dns3.smarthost.pl.']), // ?
    Delegation_A('powodydodumy', '51.75.54.175'),
    A('qnapgk', '213.189.38.134'),
    Delegation_NS('rajdgranica', ['dns1.linuxpl.com.', 'dns2.linuxpl.com.', 'dns3.linuxpl.com.']), // cert error ale coś za nim jest
    Delegation_A('rajdodkrywcow', '51.75.54.175'),
    A('raporty.odkrywcy', '51.75.54.175'),
    Delegation_A('repozytorium', '51.75.54.175'),
    Delegation_A('sluzba', '51.75.54.175'),
    Delegation_A('spadochroniarze', '51.75.54.175'),
    Delegation_A('specjalnosci', '51.75.54.175'),
    Delegation_A('starszyzna', '51.75.54.175'),
    Delegation_A('stock', '51.75.54.175'),
    Delegation_A('stopka', '51.75.54.175'),
    Delegation_A('strony', '51.75.54.175'),
    Delegation_A('turniej', '51.75.54.175'),
    Delegation_A('turniejgromad', '51.75.54.175'),
    A('veturi', '213.189.38.133'),
    A('vpngk', '213.189.38.130'),
    Delegation_A('watra', '51.75.54.175'),
    Delegation_NS('westerplatte', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']), // cert error ale coś za nim stoi
    CNAME('youthwave', 'zhp.pl.'),
    Delegation_A('zgloszenia-rajdodkrywcow', '51.75.54.175')
);
