BeforeDiscovery {
    $dnsConfig = Get-Content dns-config.json | ConvertFrom-Json
    $zones = $dnsConfig.domains
}

Describe "DNS Zone <zone.name>" -ForEach $zones {
    BeforeAll {
        $zone = $_
        $allEntries = $zone.records
    }

    It "should have no MX outside MS 365" {
        $externalMxWhitelist = @('mail-auto', 'no-reply', 'tipi')

        $allEntries |
            Where-Object {$_.type -eq 'MX' } |
            Where-Object {$_.target -notlike '*.mail.protection.outlook.com.'} |
            Where-Object {$_.name -notin $externalMxWhitelist} |
            Should -BeNullOrEmpty
    }

    Context "NS Entries" {
        BeforeAll {
            $delegatedDomains = $allEntries |
                Where-Object {$_.type -eq 'NS'} |
                ForEach-Object {$_.name} |
                Select-Object -Unique
        }

        It "should have no other entries with the same domain" {
            $allEntries |
                Where-Object {$_.type -ne 'NS' } |
                Where-Object {$_.name -in $delegatedDomains} |
                Should -BeNullOrEmpty
        }

        It "should have no other entries with subdomain" {
            $allEntries |
                ForEach-Object {$_.name} | Select-Object -Unique |
                Where-Object {
                    $domain = $_
                    $delegatedDomains.Where({ $domain.EndsWith(".$_") }, 'First').Count -gt 0
                } |
                Should -BeNullOrEmpty
        }
    }
}
