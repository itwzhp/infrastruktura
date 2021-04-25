BeforeAll {
    $dnsConfig = Get-Content dns-config.json | ConvertFrom-Json
    $allEntries = $dnsConfig.domains | ForEach-Object {$_}
}

Describe "DNS Config" {

    It "shouldn't have any MX outside MS 365"{
        $allEntries |
            Where-Object {$_.type -eq 'MX' } |
            Where-Object {$_.target -notlike '*.mail.protection.outlook.com.'} |
            Should -BeNullOrEmpty
    }
}
