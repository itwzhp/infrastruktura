var ogicom = ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.'];
var thecamels = ['dns1.thecamels.org.', 'dns2.thecamels.org.'];

D_EXTEND('zhp.pl',
    // Chorągiew
    Delegation_A('gdanska', '5.252.231.221'), 
    Ms365_Subdomain('gdanska','zhp.pl'),

    // Hufce
    Delegation_NS('gdansk', ['dns1.thecamels.org.', 'dns2.thecamels.org.']),
    Delegation_NS('gdanskportowa', ['dns1.thecamels.org.', 'dns2.thecamels.org.']),
    Delegation_NS('gdanskwrzeszczoliwa', ['ns10.ovh.net.', 'dns10.ovh.net.']),
    Delegation_A('starogard', '128.204.216.115'), // MS365-43838
    Ms365_Subdomain('starogard','zhp.pl'),
    Delegation_NS('czarnawoda', ['ns7.webd.pl.', 'ns5.webd.pl.']),
    Delegation_NS('kartuzy', ['ns1.hostbox.pl.', 'ns2.hostbox.pl.']),
    Delegation_NS('kwidzyn', ['ns1.netmark.pl.', 'ns2.netmark.pl.', 'ns3.netmark.pl.', 'ns4.netmark.pl.']),
    Delegation_NS('lebork', ['dns11.linuxpl.com.', 'ns11.linuxpl.com.']),
    Delegation_NS('miastko', ['ns7.webd.pl.', 'ns5.webd.pl.']),
    Delegation_NS('puck', ogicom),
    Delegation_A_WithCfProxy('sopot', '193.143.77.18'),
    Ms365_Subdomain('sopot','zhp.pl'),
    Delegation_NS('tczew', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    Delegation_NS('wejherowo', ['ns1.iq.pl.', 'ns2.iq.pl.']),
    Delegation_A_WithCfProxy('malbork','178.32.203.125'),

    Ms365_Subdomain('gdynia','zhp.pl'),
    Ms365_Subdomain('koscierzyna','zhp.pl'),
    Ms365_Subdomain('slupsk','zhp.pl'),

    // Bazy
    Delegation_NS('starekarpno', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
    Ms365_Subdomain('czernica','zhp.pl'),
    Delegation_A_WithCfProxy('czernica', '51.75.54.175'),

    // Przedsięwzięcia
    Delegation_CNAME('jott.gdanska.zhp.pl.', 'gdanska.zhp.pl.'),
    
    // System ewidencji sprzętu
    CNAME("sprzet.gdanska", "server3.mountdevs.net."),
    CNAME("api.sprzet.gdanska", "server3.mountdevs.net."));
