D_EXTEND('zhp.pl',
    // Harcerska Szkoła Ratownictwa (HSR)
    Delegation_A_WithCfProxy('hsr', '51.75.54.175'),
    Ms365_Subdomain('hsr', 'zhp.pl'),

    // Wydział Komunikacji i Promocji
    TXT('@', 'google-site-verification=3EJuMBYjCQrS-ZAOYHkyxjweNONPhVoGS8ONaOKSY14'), // MS365-8164

    // Centrum Wychowania Morskiego
    Delegation_A_WithCfProxy('cwm', '51.75.54.175'),
    Ms365_Subdomain('cwm', 'zhp.pl'),

    // Muzeum Harcerstwa
    Ms365_Subdomain('muzeumharcerstwa', 'zhp.pl'),
    Delegation_A('muzeumharcerstwa', '185.36.169.152'),

    // Wydział Inspiracji i Poradnictwa
    Delegation_A_WithCfProxy('cbp', '51.75.54.175'),
    Delegation_A_WithCfProxy('cbp-dev', '51.75.54.175'),

    // Imprezy centralne
    Delegation_A_WithCfProxy('swiatlo', '51.75.54.175'),
    Delegation_A_WithCfProxy('ej2020', '51.75.54.175'),
    Delegation_A_WithCfProxy('jamboree2019', '51.75.54.175'),
    Delegation_A_WithCfProxy('cej2022', '51.75.54.175'),

    // Ogólnoharcerskie przedsięwzięcia
    Delegation_A('harc-quiz', '137.74.3.247'),
    Delegation_A_WithCfProxy('fsj', '51.75.54.175'),
    Delegation_A_WithCfProxy('archiwum.fsj.zhp.pl.', '51.75.54.175'), // MS365-16341 // BUG CF SSL ERROR

    // Władze naczelne
    Ms365_Subdomain('gk', 'zhp.pl'),
    Ms365_Subdomain('rn', 'zhp.pl'),
    Ms365_Subdomain('nsh', 'zhp.pl'),
    Ms365_Subdomain('ckr', 'zhp.pl'),
    Delegation_A_WithCfProxy('ckr', '51.75.54.175')
);
