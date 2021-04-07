# to run locally: .\domains\convert.ps1 > .\domains\zhp.pl.zone.js &&  docker run --rm -it -v ${PWD}:/dns/  stackexchange/dnscontrol dnscontrol preview
# do not merge this file
$inputPath = 'domains\zhp.pl.csv'
Set-Content -Path $inputPath -Value ((Get-Content $inputPath) -replace "`t", ', ')
$data = Import-Csv $inputPath |
        sort-object -Property host |
        Where-Object {-not ($_.type -eq 'NS' -and $_.content -match '.home.pl') }

function Remove-Suffix($in){
    if($in -eq 'zhp.pl')
    {
        '@'
    }
    else
    {
        $in -replace '.zhp.pl',''
    }
}

"require('./functions/ms365.js');
require('./functions/delegation.js');

var REG_NONE = NewRegistrar('none', 'NONE');
var AZURE = NewDnsProvider('azuredns_main', 'AZURE_DNS');

D('zhp.pl', REG_NONE,
    DnsProvider(AZURE),
    DefaultTTL(3600),"

($data | foreach-object {
    $entry = $_
    switch ($entry.type) {
        'A'     { "    A('$(Remove-Suffix $entry.host)', '$($entry.content)')" }
        'NS'    { "    Delegation_NS('$(Remove-Suffix $entry.host)', ['$(($entry.content, $entry.content2, $entry.content3, $entry.content4 | Where-Object {$_} | Select-Object -Unique | Foreach-Object {$_ + '.'}) -join "', '")'])" }
        'CNAME' { "    CNAME('$(Remove-Suffix $entry.host)', '$($entry.content).')" }
        'MX'    { "    MX('$(Remove-Suffix $entry.host)', $(($entry.content -split ' ')[0]), '$(($entry.content -split ' ')[1]).')" }
        'AAAA'  { "    AAAA('$(Remove-Suffix $entry.host)', '$($entry.content)')" }
        'TXT'   { "    TXT('$(Remove-Suffix $entry.host)', '$($entry.content)')" }
        'SOA'   {}
        'SRV'   {}
        Default { throw "UNKNOWN TYPE: $($entry.type)" }
    }
}) -join ',' + [System.Environment]::Newline

");"
