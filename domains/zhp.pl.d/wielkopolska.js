D_EXTEND('zhp.pl',
    Delegation_A('wielkopolska', '2.57.138.154'), // MS365-13911

    Delegation_NS('konin', ['ns1.kylos.pl.', 'ns2.kylos.pl.']),
    Delegation_NS('poznansrodmiescie', ['ns1.cal.pl.', 'ns2.cal.pl.']),
    Delegation_NS('poznanwilda', ['ns1.hostdmk.net.', 'ns2.hostdmk.net.']),
    Delegation_NS('siodemka', ['ns1.cal.pl.', 'ns2.cal.pl.']),

    Delegation_A('turek', '94.154.117.200'),
    Ms365_Subdomain('turek','zhp.pl'),
    Delegation_NS('wolsztyn', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('wrzesnia', ['ns1.interian.pl.', 'ns3.tomkii.net.']),
    Delegation_NS('wschowa', ['ns1.atthost.pl.', 'ns2.atthost.pl.']), // MS365-9328

    Delegation_A('nowemiasto', '185.23.21.18'),
    Delegation_A('gniezno', '178.32.205.96'),
    Delegation_A('poznangrunwald', '94.23.27.27'),

    Delegation_NS('wzlot', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    Delegation_NS('wlkp', ['ns1.zenbox.pl.', 'ns2.zenbox.pl.'])
);
