# Związek Harcerstwa Polskiego - Infrastruktura

Repo używane przez Zespół ds. Infrastruktury Wydziału ds. IT GK ZHP

Aktualnie przechowuje DNS w Gicie - Opis ustawień DNS, wgrywany przez dnscontrol do dostawców (CloudFlare, Azure, OVH)

## Development
Aby zmienić coś w ustawieniach DNS-ów bez uprawnień w tym repozytorium:
1. Zrób [fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) tego repozytorium (można utrzymywać fork na każdą chorągiew, albo tworzyć za każdym razem jak potrzebny)
3. Nanieś zmiany w DNS-ach na branchu (standardowo zgodnie z git-flow nazwa brancha zaczyna się od `feature/`, ale nie jest to obowiązkowe)
4. Wystaw [Pull Request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork) na branch `main` na oryginalnym repozytorium
5. Jeśli nie będzie uwag, Wydział IT zmegre'uje zmiany je wystawi
