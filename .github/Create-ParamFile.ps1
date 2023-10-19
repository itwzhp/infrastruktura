$domains = Get-Item domains/redirects/redirectFiles/*.json |
    Where-Object { -not $_.Name.EndsWith('.schema.json') } |
    Where-Object { $_.Name -ne 'example.com.json' } |
    Foreach-Object {
        $base = $_.Name -replace '.json'

        $content = Get-Content $_ |
            ConvertFrom-Json

        $content |
            Get-Member -Type NoteProperty |
            Where-Object { $_.Name.StartsWith('$') } |
            Foreach-Object { $content.PSObject.Properties.Remove($_.Name) }

        $content.PSObject.Properties.Name |
            Foreach-Object {
                $addWww = $content |
                Select-Object -ExpandProperty $_ |
                Select includeWww

                $addWww = $addWww.includeWww

                if($null -eq $addWww -or $true -eq $addWww) {
                    'www.' + $_ + '.' + $base
                }

                $_ + '.' + $base
            }
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
