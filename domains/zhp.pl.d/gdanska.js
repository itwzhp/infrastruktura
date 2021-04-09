D_EXTEND('zhp.pl',
    Delegation_NS('gdanska', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),

    Delegation_NS('gdansk', ['dns1.thecamels.org.', 'dns2.thecamels.org.']),
    Delegation_NS('gdanskportowa', ['dns1.thecamels.org.', 'dns2.thecamels.org.']),
    Delegation_NS('gdanskwrzeszczoliwa', ['ns10.ovh.net.', 'dns10.ovh.net.']),
    Delegation_CNAME('gdanskprzymorze', 'ghs.google.com.'),
    Delegation_NS('starogard', ['ns108.ovh.net.', 'dns108.ovh.net.']), // MS365-7432

    //TODO probably deletable:
    Delegation_NS('gdanskaksztalcenie', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    Delegation_NS('jasien.gdansk', ['ns1.gbzl.pl.', 'ns2.gbzl.pl.']),
    CNAME('portowa', 'gdanskportowa.zhp.pl.'))
