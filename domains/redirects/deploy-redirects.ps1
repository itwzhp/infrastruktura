class Redirect {
    [string]$From
    [System.Uri]$To
    [Int32]$Method
}

function Import-RedirectDescriptions {
    [OutputType([Redirect[]])]
    param()

    $inputFiles = Get-Item ./domains/redirects/*.json
    foreach ($file in $inputFiles) {
        Write-Host "Reading file $file..."

        $suffix = '.' + $file.BaseName
        $data = Get-Content $file | ConvertFrom-Json
        $data.PSObject.Properties |
            ForEach-Object { New-Object Redirect -Property @{
                From = $_.Name + $suffix
                To = $_.Value.target
                Method = $_.Value.method
            }}

        Write-Host "Finished reading $file."
    }
}

function Invoke-PleskApiRequest {
    [OutputType([xml])]
    param (
        [Parameter(Mandatory=$true)]
        [xml]
        $body
    )

    Write-Host 'Doing the request...'
    $response = Invoke-WebRequest -Uri 'https://zhp.pl:8443/enterprise/control/agent.php' `
        -Method POST `
        -Headers @{"key" = $env:PLESK_API_KEY} `
        -ContentType 'application/xml' `
        -Body $body.OuterXml

    $responseXml = [xml]$response.Content
    Write-Host "Request finished, got code" $response.StatusCode
    if ($response.StatusCode -ne 200 -or $responseXml.packet.system.status -eq "error") {
        throw "Error while connecting to Plesk. StatusCode: ${$response.StatusCode}, body: ${$response.Content}"
    }

    return [xml]$response.Content
}

function Get-CurrentPleskRedirects {
    [OutputType([Redirect[]])]
    param()

    $config = Invoke-PleskApiRequest('<?xml version="1.0"?>
    <packet>
        <site>
            <get>
                <filter>
                    <parent-name>redirects.zhp.pl</parent-name>
                </filter>
                <dataset>
                    <gen_info />
                    <hosting />
                </dataset>
            </get>
        </site>
    </packet>')

    $config.packet.site.get.result |
        ForEach-Object { New-Object Redirect -Property @{
            From=$_.data.gen_info.name
            To=$_.data.hosting.std_fwd.dest_url
            Method=$_.data.hosting.std_fwd.http_code
        } }
}

function Compare-RedirectsSets {
    param (
        [Parameter(Mandatory=$true)]
        [Redirect[]]
        $currentRedirects,
        [Parameter(Mandatory=$true)]
        [Redirect[]]
        $desiredRedirects
    )

    $currentFroms = $currentRedirects | ForEach-Object {$_.From}
    $desiredFroms = $desiredRedirects | ForEach-Object {$_.From}

    $redirectsToRemove = $currentRedirects | Where-Object { $_.From -notin $desiredFroms }
    $redirectsToAdd = $desiredRedirects | Where-Object { $_.From -notin $currentFroms }
    $redirectsToUpdate = $desiredRedirects | Where-Object {
        $desiredRedirect = $_
        $existingRedirect = $currentRedirects | Where-Object { $_.From -eq $desiredRedirect.From }
        return $existingRedirect -and (($existingRedirect.To -ne $desiredRedirect.To) -or ($existingRedirect.Method -ne $desiredRedirect.Method))
    }

    return @{Add=$redirectsToAdd ; Remove=$redirectsToRemove ; Update=$redirectsToUpdate}
}

function Update-Redirects {
    [CmdletBinding()]
    param (
        [Parameter()]
        [Redirect[]]
        $Add,
        [Parameter()]
        [Redirect[]]
        $Remove,
        [Parameter()]
        [Redirect[]]
        $Update
    )

    if(-not $Add -and -not $Remove -and -not $Update) {
        return
    }

    $requestStream = New-Object System.IO.StringWriter
    $requestStream.Write('<?xml version="1.0"?>')

    $opt = New-Object System.Xml.XmlWriterSettings
    $opt.OmitXmlDeclaration = $true
    $writer = [System.Xml.XmlWriter]::Create($requestStream, $opt)

    $writer.WriteStartElement("packet")
    $writer.WriteStartElement("site")

    foreach ($redirect in $Add) {
        $writer.WriteStartElement("add")

            $writer.WriteStartElement("gen_setup")
                $writer.WriteElementString("name", $redirect.From)
                $writer.WriteElementString("webspace-name", "redirects.zhp.pl")
            $writer.WriteEndElement()

            $writer.WriteStartElement("hosting")
                $writer.WriteStartElement("std_fwd")
                    $writer.WriteElementString("dest_url", $redirect.To)
                    $writer.WriteElementString("http_code", $redirect.Method)
                $writer.WriteEndElement()
            $writer.WriteEndElement()

        $writer.WriteEndElement()
    }

    if($Remove) {
        $writer.WriteStartElement("del")
            $writer.WriteStartElement("filter")

            foreach ($redirect in $Remove) {
                $writer.WriteElementString("name", $redirect.From)
            }

            $writer.WriteEndElement()
        $writer.WriteEndElement()
    }

    foreach ($redirect in $Update) {
        $writer.WriteStartElement("set")

            $writer.WriteStartElement("filter")
                $writer.WriteElementString("name", $redirect.From)
            $writer.WriteEndElement()

            $writer.WriteStartElement("values")

                $writer.WriteStartElement("hosting")
                    $writer.WriteStartElement("std_fwd")
                        $writer.WriteElementString('dest_url', $redirect.To)
                        $writer.WriteElementString('http_code', $redirect.Method)
                    $writer.WriteEndElement()
                $writer.WriteEndElement()

            $writer.WriteEndElement()

        $writer.WriteEndElement()
    }

    $writer.WriteEndElement()
    $writer.WriteEndElement()

    $writer.Flush()

    $xml = $requestStream.ToString()

    Write-Host "Sending request" $xml
    Write-Host "Received" (Invoke-PleskApiRequest $xml).OuterXml
}

$delta = Compare-RedirectsSets (Get-CurrentPleskRedirects) (Import-RedirectDescriptions)
Update-Redirects -Add $delta.Add  -Remove $delta.Remove -Update $delta.Update
