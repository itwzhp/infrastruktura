D_EXTEND('zhp.pl',

	TXT('_github-challenge-bialostockazhp.bialostocka', '871ae7c463'),
  Ms365_Subdomain('bialostocka','zhp.pl'),
	Delegation_A('bialostocka', '195.78.66.229'),

	CNAME('*.by.bialostocka', 'by.bialostocka.zhp.pl.'),
	A('by.bialostocka', '79.96.169.242'),
	MX('by.bialostocka', 10, 'by.bialostocka.zhp.pl.'),

	CNAME('*.pilot.bialostocka', 'pilot.bialostocka.zhp.pl.'),
	A('pilot.bialostocka', '79.96.169.242'),
	MX('pilot.bialostocka', 10, 'pilot.bialostocka.zhp.pl.'),

	CNAME('*.poczta.bialostocka', 'poczta.bialostocka.zhp.pl.'),
	MX('poczta.bialostocka', 10, 'poczta.bialostocka.zhp.pl.'),
	A('poczta.bialostocka', '79.96.169.242'),

	A('wedrownicy.bialostocka', '79.96.169.242'),


	CNAME('*.augustow', 'augustow.zhp.pl.'),
	A('augustow', '79.96.169.242'),
	MX('augustow', 10, 'augustow.zhp.pl.'),

	CNAME('*.bielskpodlaski', 'bielskpodlaski.zhp.pl.'),
	A('bielskpodlaski', '79.96.169.242'),
	MX('bielskpodlaski', 10, 'bielskpodlaski.zhp.pl.'),

	CNAME('*.grajewo', 'grajewo.zhp.pl.'),
	A('grajewo', '79.96.169.242'),
	MX('grajewo', 10, 'grajewo.zhp.pl.'),

	CNAME('*.suwalki', 'suwalki.zhp.pl.'),
	A('suwalki', '79.96.169.242'),
	MX('suwalki', 10, 'suwalki.zhp.pl.'),

	Delegation_NS('bialystok', ['dns11.linuxpl.com.', 'ns11.linuxpl.com.']),
	Delegation_NS('kolno', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
	Delegation_NS('lomza', ['ns1.datasferix.pl.', 'ns2.datasferix.pl.']),
	Delegation_NS('sokolka', ['ns1.getspace.us.', 'ns2.getspace.us.'])
);
