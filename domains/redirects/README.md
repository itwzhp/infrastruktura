# Redirect engine

Silnik do zarządzania redirectami napisany w JS (Node.JS) do działania na Azure Functions.

## Uruchamianie

### Testy:

`jest`
lub
`npm run test`

Testy znajdują się w folderze `__tests__`, aktualnie są dwa:

* `redirectHttp.test.js`, testujący samą funkcję (silnik), sprawdzając, czy poprawnie odczytuje targety przekierowań z
  JSONów i czy zwraca odpowiednie nagłówki,
* `redirectFiles.test.js`, sprawdzający, czy JSONy z konfiguracjami przekierowań (`redirectFiles/*.json`) są w poprawnym formacie (`redirectFiles/redirect.schema.json`).

### Uruchamianie lokalne

Z zainstalowanym [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli), [Azure Functions Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=windows%2Ccsharp%2Cbash#v2):

`func start`

_(https://docs.microsoft.com/en-us/azure/azure-functions/create-first-function-cli-node?tabs=azure-cli%2Cbrowser#run-the-function-locally)_

### Pushowanie do Azure Functions

Z zainstalowanym Azure CLI, Azure Functions Core Tools i [będąc zalogowanym do Azure](https://docs.microsoft.com/en-us/cli/azure/reference-index?view=azure-cli-latest#az_login):

`func azure functionapp publish <APP_NAME>`

Gdzie `<APP_NAME>` jest nazwą aplikacji w Azure.

_(https://docs.microsoft.com/en-us/azure/azure-functions/create-first-function-cli-node?tabs=azure-cli%2Cbrowser#deploy-the-function-project-to-azure)_
