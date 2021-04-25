BeforeAll {
    $dnsConfig = ConvertFrom-Json -InputObject dns-config/dns-config.json
}

Describe "DNS Config" {
    It "shouldn't have any MX outside MS 365"{
        $dnsConfig.domains |
            ForEach-Object {$_}
            Where-Object {$_.type -eq 'MX' } |
            Where-Object {$_.target -notlike '*.mail.protection.outlook.com.'} |
            Should -BeNullOrEmpty
    }
}
