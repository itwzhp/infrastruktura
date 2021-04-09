D_EXTEND('zhp.pl',
    Delegation_NS('gdanska', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),

    Delegation_NS('gdansk', ['dns1.thecamels.org.', 'dns2.thecamels.org.']),
    Delegation_NS('gdanskportowa', ['dns1.thecamels.org.', 'dns2.thecamels.org.']),
    Delegation_NS('gdanskwrzeszczoliwa', ['ns10.ovh.net.', 'dns10.ovh.net.']),
    Delegation_NS('starogard', ['ns108.ovh.net.', 'dns108.ovh.net.']), // MS365-7432
    Delegation_NS('czarnawoda', ['ns7.webd.pl.', 'ns5.webd.pl.']),
    Delegation_NS('kartuzy', ['ns1.hostbox.pl.', 'ns2.hostbox.pl.']),
    Delegation_NS('kwidzyn', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    Delegation_NS('lebork', ['dns11.linuxpl.com.', 'ns11.linuxpl.com.']),
    Delegation_NS('miastko', ['ns7.webd.pl.', 'ns5.webd.pl.']),
    Delegation_NS('puck', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.']),
    Delegation_NS('slupsk', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    Delegation_NS('sopot', ['ns1.ehost.pl.', 'ns2.ehost.pl.']),
    Delegation_NS('tczew', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    Delegation_NS('wejherowo', ['ns1.iq.pl.', 'ns2.iq.pl.']),

    Ms365_Subdomain('gdynia','zhp.pl'),

    Delegation_NS('starekarpno', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    Delegation_A('morenka', '87.98.239.16'),

    // TODO get rid of gmail (move to MS365 or delete)
    TXT('morenka', 'v=spf1 include:aspmx.googlemail.com ~all'),
    MX('morenka', 1, 'aspmx.l.google.com.'));
