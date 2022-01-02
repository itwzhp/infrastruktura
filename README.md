# Związek Harcerstwa Polskiego - Infrastruktura

Repo używane przez Zespół ds. Infrastruktury Wydziału ds. IT GK ZHP

Aktualnie przechowuje DNS w Gicie - Opis ustawień DNS, wgrywany przez dnscontrol do dostawców (CloudFlare, Azure, OVH)

## Zasady dokonywania zmian
Zmiany dokonywane w tym repozytorium powinny być zgodne z [Instrukcją harcerskiego Internetu, bezpieczeństwa danych i
bezpiecznej pracy z systemami informatycznymi](https://gkzhp.sharepoint.com/sites/dokumentyzhp/Lists/Dokumenty%20ZHP/Attachments/3159/u_gk_179_2020_za%C5%82%C4%85cznik%20Instrukcja%20harcerskiego%20internetu%20i%20bezpiecze%C5%84stwa.docx?web=1)
będącą załącznikiem do [Uchwały Głównej Kwatery ZHP nr 179/2020 z dnia 21 września 2020 r. w sprawie Instrukcji
harcerskiego Internetu, bezpieczeństwa danych i bezpiecznej pracy z systemami informatycznymi](https://apps.powerapps.com/play/3aa72b2f-ee91-473f-833b-6f0085a13c18?tenantId=e1368d1e-3975-4ce6-893d-fc351fd44dcd&ID=3159).

## Development
Aby zmienić coś w ustawieniach DNS-ów bez uprawnień w tym repozytorium:
1. Zrób [fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) tego repozytorium (można utrzymywać fork na każdą chorągiew, albo tworzyć za każdym razem jak potrzebny)
3. Nanieś zmiany w DNS-ach na branchu (standardowo zgodnie z git-flow nazwa brancha zaczyna się od `feature/`, ale nie jest to obowiązkowe)
4. Wystaw [Pull Request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork) na branch `main` na oryginalnym repozytorium
5. Jeśli nie będzie uwag, Wydział IT zmegre'uje zmiany je wystawi
