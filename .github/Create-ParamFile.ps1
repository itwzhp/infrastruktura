$domains = Get-Item domains/redirects/redirectFiles/*.json |
    Where-Object { -not $_.Name.EndsWith('.schema.json') } |
    Where-Object { $_.Name -ne 'example.com.json' } |
    Foreach-Object {
        $base = $_.Name -replace '.json'
        Get-Content $_ |
            ConvertFrom-Json |
            Get-Member -Type NoteProperty |
            Where-Object { -not $_.Name.StartsWith('$') } |
            Foreach-Object -Begin $null -Process { $_.Name + '.' + $base } { 'www.' + $_.Name + '.' + $base } -End $null
    }
$domainsJson = $domains | ConvertTo-Json -Compress
Write-Output "Domains: $domainsJson"
Write-Output "
{
    `"`$schema`": `"https://schema.management.azure.com/schemas/2019-04-01/deploymentParameters.json#`",
    `"contentVersion`": `"1.0.0.0`",
    `"parameters`": {
        `"domains`": {
            `"value`": $domainsJson
        }
    }
}" > domain.parameters.json
