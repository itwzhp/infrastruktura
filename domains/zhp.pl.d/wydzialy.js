D_EXTEND('zhp.pl',
    // Harcerska Szkoła Ratownictwa (HSR)
    Delegation_A('hsr', '51.75.54.175'),
    Ms365_Subdomain('hsr', 'zhp.pl'),

    // Wydział Komunikacji i Promocji
    TXT('@', 'google-site-verification=3EJuMBYjCQrS-ZAOYHkyxjweNONPhVoGS8ONaOKSY14'), // MS365-8164

    // Centrum Wychowania Morskiego
    A('cwm', '51.75.54.175'),
    Ms365_Subdomain('cwm', 'zhp.pl'),

    // Imprezy centralne
    Delegation_A('swiatlo', '51.75.54.175'),
    A('ej2020', '51.75.54.175'),
    A('jamboree2019', '51.75.54.175'),
    Delegation_A('cej2022', '51.75.54.175'),
         
    // Ogólnoharcerskie przedsięwzięcia
    Delegation_A('harc-quiz', '137.74.3.247'),
         
    Delegation_A('fsj', '51.75.54.175'),
    CNAME('s4s', 'zhp-scouts4scouts-app.azurewebsites.net.'),  // this is required for Azure certificates. Maybe this should be the implementation of Delegation_CNAME?
    CNAME('www.s4s', 'zhp-scouts4scouts-app.azurewebsites.net.')
);
