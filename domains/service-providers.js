var noneRegistrar = NewRegistrar('none', 'NONE');

var cloudflareProvider = NewDnsProvider('cloudflare', 'CLOUDFLAREAPI');
var azureProvider = NewDnsProvider('azuredns_main', 'AZURE_DNS');
var ovhProvider = NewDnsProvider('ovh', 'OVH');

var CF_PROXY_OFF = { 'cloudflare_proxy': 'off' };
var CF_PROXY_ON = { 'cloudflare_proxy': 'on' };
