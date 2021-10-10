# Redirect engine

Silnik do zarządzania redirectami napisany w JS (Node.JS) do działania na Azure Functions.

## Dodawanie przekierowań

Przekierowania dopisuje się w odpowiednim pliku `*.json` (każdy plik to inna domena) w folderze `redirectFiles`, dodając
nowy obiekt do tablicy:

```json5
{
    // subdomena, na jakiej ma działać przekierowanie
    "przyklad": {
        // dokąd przekierować; wymagane
        "target": "https://example.com",

        // kod HTTP przekierowania, do wyboru 301 (przekierowanie stałe) lub 302 (tymczasowe).
        // Wymagane
        "method": 301,

        // czy dopisać do przekierowania ścieżkę domeny (np. w https://zhp.pl/kontakt ścieżką jest /kontakt).
        // Opcjonalne, domyślnie false
        "includePath": false
    }
}
```

Jeśli powyższy obiekt dodamy do pliku `zhp.net.pl.json`, to przejście pod adres https://przyklad.zhp.net.pl przekieruje
nas pod https://example.com.

## Uruchamianie

### Testy:

`jest`
lub
`npm run test`

Testy znajdują się w folderze `__tests__`, aktualnie są dwa:

* `redirectHttp.test.js`, testujący samą funkcję (silnik), sprawdzając, czy poprawnie odczytuje targety przekierowań z
  JSONów i czy zwraca odpowiednie nagłówki,
* `redirectFiles.test.js`, sprawdzający, czy JSONy z konfiguracjami przekierowań (`redirectFiles/*.json`) są w poprawnym
  formacie (`redirectFiles/redirect.schema.json`).

### Uruchamianie lokalne

Z zainstalowanym [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
, [Azure Functions Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=windows%2Ccsharp%2Cbash#v2):

`func start`

_(https://docs.microsoft.com/en-us/azure/azure-functions/create-first-function-cli-node?tabs=azure-cli%2Cbrowser#run-the-function-locally)_

### Pushowanie do Azure Functions

Z zainstalowanym Azure CLI, Azure Functions Core Tools
i [będąc zalogowanym do Azure](https://docs.microsoft.com/en-us/cli/azure/reference-index?view=azure-cli-latest#az_login):

`func azure functionapp publish <APP_NAME>`

Gdzie `<APP_NAME>` jest nazwą aplikacji w Azure.

_(https://docs.microsoft.com/en-us/azure/azure-functions/create-first-function-cli-node?tabs=azure-cli%2Cbrowser#deploy-the-function-project-to-azure)_

## CI/CD

### Testy

Plik akcji: `.github/workflows/redirects-tests.yml`

Uruchamia testy w każdym PR i każdym pushu, który zmienia cokolwiek w folderze `domains/redirects`. Waliduje także plik
ARM (redirects.arm.json). Wymaga stworzenia
sekretu `AZURE_CREDENTIALS` ([punkt 2, komenda druga](https://github.com/marketplace/actions/azure-login#configure-deployment-credentials))
, oraz wypełnienia w pliku akcji zmiennych środowiskowych `AZURE_SUBSCRIPTION_ID` i `AZURE_RESOURCE_GROUP`.

### Deployment na Azure Functions

Plik akcji: `.github/workflows/redirects-push.yml`

Uruchamia testy i deployment funkcji po każdym pushu na branch `main`, który zmienia cokolwiek w
folderze `domains/redirects`. Wymaga stworzenia sekretu `AZURE_FUNCTIONAPP_PUBLISH_PROFILE` zawierający profil
publikowania ([-> Dokumentacja](https://docs.microsoft.com/en-us/azure/azure-functions/functions-how-to-github-actions?tabs=javascript#generate-deployment-credentials))
. Wymaga istniejącej funkcji, której nazwę ustawia się w pliku akcji w zmiennej środowiskowej `AZURE_FUNCTIONAPP_NAME`.

## Tworzenie funkcji na Azure

W repozytorium znajduje się plik `redirects.arm.json`, który można wykorzystać do stworzenia wszystkich potrzebnych
zasobów w grupie zasobów na Azure. W pliku jako zmienne zapisane są domyślne nazwy, które można/trzeba zmienić w razie
potrzeby.
