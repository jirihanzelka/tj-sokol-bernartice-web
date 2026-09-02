# Původní web: inventář stránek a komponent

Stav zachycení: 2. září 2026
Zdroj: [tjbernasticenadodrou.webnode.cz](https://tjbernasticenadodrou.webnode.cz/)
Účel: podklad pro následný plán migrace obsahu na nový web. Tento dokument zatím neurčuje, co se má převzít, sloučit nebo zahodit.

## Závěr

Původní web má přibližně 33 hlavních URL, ale jen asi 12 skutečně odlišných typů stránek. Největší hodnotu pro další návrh nemá kopírování starého rozvržení, nýbrž zachování obsahu a sestavení malé sady opakovatelných komponent: společná kostra webu, navigace oddílů, aktuality, události, kontakty a vedení, galerie a sportoviště.

Nový web zatím pokrývá pouze úvodní stránku. Má moderní hlavičku, mobilní menu, hero, rychlé odkazy, jednu událost, přehled oddílů, stručný přehled sportovišť, klubový blok a patičku. Tyto části jsou ale stále přímo v jednom souboru `src/pages/index.astro`; samostatné stránkové a obsahové komponenty zatím neexistují. Odkazy na oddíly a kalendář stále vedou na původní web.

## Rozsah a limity

- Zachycen byl veřejný web bez přihlášení a bez odesílání formuláře.
- Mapa webu, hlavní stránkové typy a jedna výjimka (samostatný nohejbal) byly ověřeny v živém webu.
- Kalendář, Facebook a mapa jsou externí vložené prvky; jejich obsah se může měnit nezávisle na webu.
- Kontaktní mapa zůstala v zachyceném stavu prázdná. Není proto potvrzeno, zda je dlouhodobě nefunkční, nebo se pouze nenačetla.
- Nebyly otevřeny jednotlivé fotografie, stažen historický soubor, otestován tisk/RSS ani odeslán kontaktní formulář.
- Přístupnost byla posouzena z viditelného stavu a stromu přístupnosti, nikoli úplným klávesnicovým nebo WCAG testem.

## Informační architektura

```text
TJ Sokol
├── Úvod
├── Historie
├── Kalendář akcí
├── Novinky / Zajímavosti
├── Oddíly
│   ├── Kopaná
│   │   ├── Nástěnka
│   │   ├── Novinky / Zajímavosti
│   │   ├── Vedení
│   │   └── Galerie
│   ├── Volejbal
│   │   ├── Nástěnka
│   │   ├── Vedení
│   │   └── Galerie
│   ├── Florbal
│   │   ├── Nástěnka
│   │   ├── Novinky / Zajímavosti
│   │   ├── Vedení
│   │   └── Galerie
│   ├── Nohejbal (jedna souhrnná stránka + externí web)
│   ├── Turistika
│   │   ├── Nástěnka
│   │   ├── Novinky / Zajímavosti
│   │   ├── Vedení
│   │   └── Galerie
│   └── ASPV
│       ├── Nástěnka
│       ├── Novinky / Zajímavosti
│       ├── Vedení
│       └── Galerie
├── Sportoviště
└── Kontakty
    └── Vedení tělovýchovné jednoty
```

Mimo hlavní strom existují detailní články, stránky jednotlivých fotografií, štítky, RSS, tisk a mapa webu.

## Typy stránek

| # | Typ / příklad | Co obsahuje | Stav původní stránky |
|---:|---|---|---|
| 1 | Úvod | představení TJ, odkazy na oddíly, aktuality, kalendář, Facebook | Funkční, ale přeplněný a vizuálně zastaralý |
| 2 | Mapa webu | úplný strom hlavních stránek | Funkční a užitečný jako migrační evidence |
| 3 | Historie | období, soubor ke stažení, rozsáhlá fotogalerie | Obsahově hodnotná, extrémně dlouhá |
| 4 | Kalendář | textový úvod a Google Calendar | Funkční externí vložení, slabá kontrola nad prezentací |
| 5 | Seznam aktualit | název a datum článku | Funkční, ale obsahově řídký a převážně starý |
| 6 | Přehled oddílů | šest obrazových vstupů | Funkční, obrázky mají slabou informační a přístupnou kvalitu |
| 7 | Úvod oddílu | název, krátký popis, kalendář | Funkční, závislý na externím kalendáři |
| 8 | Nástěnka | volný obsah oddílu | U zachyceného příkladu prázdná; samostatná stránka nepřináší hodnotu |
| 9 | Vedení oddílu | jména, role, e-maily | Užitečný obsah, velmi prostá struktura |
| 10 | Galerie | alba a náhledy | Funkční, slabé názvy obrázků a zastaralé ovládání |
| 11 | Aktuality oddílu | seznam článků oddílu | Funkční, ale často s jedním starým záznamem |
| 12 | Sportoviště | popis, fotografie a GPS tří míst | Jeden z nejhodnotnějších obsahových zdrojů; stránka je dlouhá a část obsahu se opakuje |
| 13 | Kontakty | identita organizace, sídlo, GPS, mapa, formulář | Kritická informace; mapa se při auditu nezobrazila |
| 14 | Detail článku | datum, text, obrázek/logo, sdílení, návrat | Funkční, minimální šablona |
| 15 | Vedení TJ | osoby, role a kontakty | Užitečný obsah, chybí jasné seskupení a konzistentní pole |
| 16 | Samostatná stránka oddílu | hero fotografie, popis, aktualita, externí odkaz, kalendář | Funkční výjimka oproti běžné struktuře oddílů |
| 17 | Mobilní zobrazení | stejná desktopová stránka ve viewportu 390 × 844 | Nefunkční responzivita; dokument zůstává široký 1265 px |

## Základní komponenty pro další plán

Toto je inventář, nikoli schválený implementační návrh.

### Společná kostra

| Komponenta | Pozorovaný obsah / chování | Poznámka pro plán |
|---|---|---|
| `SiteHeader` | značka TJ, hlavní navigace | Nová homepage už má moderní variantu |
| `DesktopNavigation` | odkazy Úvod, Historie, Kalendář, Aktuality, Oddíly, Sportoviště, Kontakty | Bude nutné rozhodnout finální strom nového webu |
| `MobileNavigation` | na původním webu chybí | Nová homepage ji už obsahuje |
| `PageLayout` | hlavička, levý sidebar, obsahová karta, patička | Starý sidebar nekopírovat automaticky; rozdělit jeho funkce |
| `Breadcrumbs` | hierarchie TJ → Oddíly → oddíl → podstránka | Užitečné hlavně na hlubších stránkách |
| `PageHeader` | název a volitelný úvod | Sdílený základ pro většinu podstránek |
| `RichTextContent` | odstavce, mezititulky, odkazy, soubory | Potřebný pro historii i obecné informace |
| `SiteFooter` | copyright a pomocné odkazy | Nová homepage už má vlastní základ |

### Opakovaný obsah

| Komponenta | Použití | Potřebná data |
|---|---|---|
| `SectionIndex` / `SectionCard` | přehled šesti oddílů | název, krátký popis, obrázek, URL |
| `SectionNavigation` | podstránky jednoho oddílu | oddíl, dostupné sekce, aktivní položka |
| `SectionIntro` | úvod oddílu | název, popis, hero fotografie |
| `NewsList` | centrální i oddílové aktuality | nadpis, datum, perex, oddíl, obrázek, URL |
| `ArticleDetail` | detail aktuality | nadpis, datum, tělo, média, přílohy |
| `EventCard` / `EventList` | nejbližší akce a kalendář | datum, čas, místo, oddíl, popis, URL |
| `PeopleList` / `PersonCard` | vedení TJ a oddílů | jméno, role, oddíl, kontakt |
| `AlbumList` / `Gallery` | historie a oddíly | album, náhled, fotografie, popisek, datum |
| `VenueCard` / `VenueDetail` | sportoviště | název, popis, adresa/GPS, fotografie, mapa |
| `ContactDetails` | organizace a oddíly | název, IČ, adresa, e-mail, telefon, GPS |
| `ContactForm` | zpráva organizaci | jméno, e-mail, předmět, text, souhlas/ochrana proti spamu |
| `DownloadLink` | historické dokumenty a přílohy | název, typ, velikost, soubor |
| `ExternalEmbed` | kalendář, mapa, sociální síť | poskytovatel, URL/ID, fallback stav |
| `EmptyState` | prázdná nástěnka nebo seznam | srozumitelná informace a případná další akce |

### Prvky, které nejsou automaticky kandidáty na převzetí

- samostatná prázdná „Nástěnka“ pro každý oddíl;
- štítkový mrak;
- globální fulltextové hledání pro malý web;
- RSS a tisk jako dominantní pomocné odkazy;
- duplicitní odkazy na oddíly a nástěnky v sidebaru;
- Webnode branding a starý Facebook iframe;
- kompletní Google Calendar iframe jako hlavní způsob prezentace programu.

Tyto prvky mohou mít náhradu, ale jejich zachování se má rozhodnout až podle reálných potřeb správců a návštěvníků.

## Co už pokrývá nový web

| Oblast původního webu | Stav na nové homepage |
|---|---|
| Značka a hlavní navigace | Ano, v moderní podobě |
| Mobilní menu | Ano |
| Úvodní sdělení | Ano, nahrazeno hero blokem |
| Rychlé vstupy | Ano |
| Nejbližší událost | Ano, zatím statický příklad |
| Přehled oddílů | Ano, odkazy vedou na původní web |
| Přehled sportovišť | Ano, pouze stručný seznam |
| Klubové představení | Ano, stručně |
| Kontakt | Pouze výzva a patička, bez detailů |
| Historie | Ne |
| Seznam a detail aktualit | Ne |
| Samostatné stránky oddílů | Ne |
| Vedení a kontaktní osoby | Ne |
| Galerie | Ne |
| Plný program / kalendář | Ne, odkazuje na původní web |
| Detail sportovišť | Ne |

## Hlavní zjištění pro budoucí plán

### Co na původním webu funguje

- Návštěvník snadno rozpozná šest oddílů a základní oblasti webu.
- Všechny stránky používají stejnou kostru a drobečkovou navigaci.
- Kontakty na organizaci i vedoucí oddílů jsou přímo dohledatelné.
- Historie a sportoviště obsahují materiál, který by byla škoda ztratit.
- Kalendář je sdílený napříč hlavním webem a oddíly.

### UX rizika

- Stejné cíle jsou současně v horním menu, sidebaru i obsahu; hierarchie je zbytečně roztříštěná.
- Důležité a aktuální informace nejsou vizuálně oddělené od archivního obsahu.
- Některé samostatné stránky jsou prázdné nebo obsahují jediný starý záznam.
- Externí iframe prvky vytvářejí nekonzistentní vzhled a mohou se načíst prázdné.
- Galerie a dlouhé fotografické stránky nemají pohodlné filtrování, členění ani čitelné popisky.
- Struktura oddílů není jednotná: nohejbal používá jednu souhrnnou stránku a externí web, ostatní oddíly mají různé podstránky.

### Rizika přístupnosti

- Původní stránka nemá `meta viewport`; při mobilním viewportu 390 × 844 zůstal dokument široký 1265 px a vyžaduje horizontální posun.
- Text, navigace a klikací cíle jsou velmi malé, zejména v hlavičce a patičce.
- Vizuální kontrast drobného textu na béžovém a tmavém pozadí může být nedostatečný; nebyl změřen.
- Struktura nadpisů se používá i pro běžné odstavce a seznamy, takže čtení pomocí asistivních technologií nemusí odpovídat vizuální hierarchii.
- Odkazy fotografií v galerii mají jako přístupný název technickou cestu souboru, nikoli popis fotografie.
- Kontaktní formulář má v zachyceném stromu popisky polí, ale nebylo ověřeno ovládání klávesnicí, hlášení chyb ani úspěšné odeslání.

## Reprezentativní screenshoty

Všechny screenshoty pocházejí ze stejného živého auditu. Vysoké stránky jsou uloženy celé, proto obsahují i velkou plochu mimo pevně široký původní web.

### 1. Úvod

![Původní úvodní stránka](screenshots/01-home.jpg)

### 2. Mapa webu

![Mapa původního webu](screenshots/02-sitemap.jpg)

### 3. Historie

![Původní stránka historie](screenshots/03-history.jpg)

### 4. Kalendář akcí

![Původní kalendář akcí](screenshots/04-calendar.jpg)

### 5. Seznam aktualit

![Původní seznam aktualit](screenshots/05-news-list.jpg)

### 6. Přehled oddílů

![Původní přehled oddílů](screenshots/06-sections-index.jpg)

### 7. Úvod oddílu

![Původní úvod oddílu kopané](screenshots/07-section-home.jpg)

### 8. Nástěnka

![Původní prázdná nástěnka](screenshots/08-bulletin-board.jpg)

### 9. Vedení oddílu

![Původní vedení oddílu](screenshots/09-section-leadership.jpg)

### 10. Galerie

![Původní galerie oddílu](screenshots/10-gallery.jpg)

### 11. Aktuality oddílu

![Původní aktuality oddílu](screenshots/11-section-news.jpg)

### 12. Sportoviště

![Původní sportoviště](screenshots/12-facilities.jpg)

### 13. Kontakty

![Původní kontaktní stránka](screenshots/13-contacts.jpg)

### 14. Detail článku

![Původní detail aktuality](screenshots/14-article.jpg)

### 15. Vedení TJ

![Původní vedení tělovýchovné jednoty](screenshots/15-organization-leadership.jpg)

### 16. Samostatný nohejbal

![Původní samostatná stránka nohejbalu](screenshots/16-nohejbal-single-page.jpg)

### 17. Mobilní viewport

![Původní homepage v mobilním viewportu](screenshots/17-home-mobile-viewport.jpg)

## Otázky pro navazující plán

1. Kdo bude nový web aktualizovat a jak jednoduchá musí být správa obsahu?
2. Má být jedna společná sada aktualit a událostí s filtrem podle oddílu, nebo samostatné sekce?
3. Které oddíly mají dnes skutečně aktivní obsah a kdo ho vlastní?
4. Má nový web zobrazovat interní seznam událostí, nebo jen bezpečně integrovat Google Calendar?
5. Které historické fotografie a dokumenty se mají zachovat v plném rozsahu?
6. Má kontaktní formulář zůstat, nebo stačí jasné kontakty na TJ a jednotlivé oddíly?
7. Má být nohejbal sjednocen s ostatními oddíly, nebo zůstat odkazem na vlastní web?
