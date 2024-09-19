D_EXTEND('zhp.pl',
    // Chorągiew
    Delegation_NS('slaska', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),


    // Hufce (hosting chorągwi)
    Delegation_NS('bedzin', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('beskidzki', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('bytom', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('chorzow', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('chrzanow', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('czechowice-dziedzice', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('czerwionka', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('dabrowagornicza', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('gliwice', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('jastrzebiezdroj', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('jaworzno', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('katowice', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('klobuck', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('kuzniaraciborska', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('mikolow', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('myslowice', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('myszkow', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('piekary', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('rudaslaska', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('rybnik', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('rydultowy', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('siemianowice', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('sosnowiec', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('tarnowskiegory', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('tychy', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('wegierskagorka', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('wodzislaw', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('zabrze', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('zawiercie', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('zory', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('zywiec', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),


    // Hufce (hosting zewnętrzny)
    Delegation_NS('lubliniec', ['ns1.ehost.pl.', 'ns2.ehost.pl.']),

    Delegation_NS('cieszyn', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('czestochowa', ['dns.trustnet.pl.', 'dns2.trustnet.pl.']),

    // Imprezy
    Delegation_NS('cmoksong', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),

    // Bazy
    Delegation_NS('kucoby', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_A('amonit', '109.95.159.30'),  // MS365-45264
    Delegation_A('wilczysko', '109.95.156.188'), // MS365-33992
    Delegation_NS('bazapajak', ['dns3.trustnet.pl.', 'dns.trustnet.pl.', 'dns2.trustnet.pl.']),
    Delegation_A('pogorzelica', '109.95.158.127'), // MS365-33992
    Delegation_A_WithCfProxy('dwerniczek', '109.95.158.127'), // MS365-45265

    // Harcerskie Muzeum Etnograficzne
    Delegation_A('hme', '109.95.156.188'), // MS365-33992
    Ms365_Subdomain('hme', 'zhp.pl'), // MS365-8065
    CNAME('k2._domainkey.hme', 'dkim2.mcsv.net.'),
    CNAME('k3._domainkey.hme', 'dkim3.mcsv.net.'),

    // Domenny pomocnicze i techniczne na serwery - 4 serwery - usługi wykupione na choragiew
    Delegation_NS('sl1', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']), //Slaska1
    Delegation_NS('sl2', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']), // Slaska2
    Delegation_NS('sl3', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']), //Slaska3
    Delegation_NS('sl4', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),  //Slaska4
    Delegation_NS('sl5', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.'])  // Slaska5
);
