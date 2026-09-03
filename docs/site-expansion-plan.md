# Plán rozšíření webu TJ Sokol Bernartice nad Odrou

> **Stav:** první lokální implementace dokončena 2. září 2026; před veřejným nasazením zbývají obsahová a licenční potvrzení níže
> **Cíl první verze:** přenést jen obsah, který návštěvník skutečně hledá, a zachovat současný vizuální směr homepage.
> **Podklad:** [inventář původního webu](./original-site/README.md) a současná homepage v `src/pages/index.astro`.

## Stav implementace

| Oblast | Stav | Poznámka |
|---|---|---|
| Sdílený layout, navigace, patička | Hotovo | Včetně mobilního menu, klávesy Escape a GitHub Pages base path. |
| Program | Bezpečný prázdný stav | Chybí schválený aktuální zdroj termínů a jeho vlastník. |
| Oddíly | Hotovo jako šablona | Zobrazuje jen doložené minimum; aktuální skupiny, místa a termíny čekají na potvrzení TJ. |
| Sportoviště | Hotovo | Převzaté fotografie a jejich práva čekají na potvrzení. |
| Historie a galerie | Hotovo | Podklad končí rokem 2009; novější historii a práva k médiím musí potvrdit TJ. |
| Kontakt | Hotovo v patičce | Právní identita, předseda a telefon; bez nefunkčních historických e-mailů a formuláře. |
| Podpora MSK 2021–2025 | Hotovo jako lokální preview | Před publikací je nutné doložit smluvní podmínky publicity a schválené logo. |
| Build, typecheck, base-path a responzivní QA | Hotovo | Podrobnosti jsou v kořenovém `design-qa.md`. |

Evidence zdrojů a otevřených release podmínek je v [registru obsahu](./content-source-register.md).

## Doporučený výsledný web

Primární stránky:

```text
/                         Úvod
/program/                 Nadcházející akce
/oddily/                  Přehled oddílů
/oddily/[slug]/           Stejná stručná šablona každého oddílu
/historie/                Historie a galerie v jednom příběhu
/sportoviste/             Všechna tři sportoviště
```

Sekundární stránka: `/podpora/` — Podpora a partneři, včetně archivu MSK. Je dostupná z patičky a podle smluvních podmínek případně z klidného bloku před ní, ale nemá položku v hlavním menu.

Hlavní navigace: **Program · Oddíly · Historie · Sportoviště**. Logo vede na úvod. Kontakt a právní identita jsou v patičce; e-mail ani formulář se bez nového potvrzeného kontaktu nezobrazují. Technická 404 stránka není součástí informační architektury.

### Co sloučit

- **Historie + galerie:** jedna chronologická stránka. Každé období má krátký text, milník a několik souvisejících fotografií nebo album. Ne jeden dlouhý výpis obrázků.
- **Každý oddíl:** představení, pro koho je, kdy a kde se schází, kontakt, nejbližší akce a několik fotografií. Původní Nástěnka, Vedení, Aktuality a Galerie se nestaví jako samostatné podstránky.
- **Kontakt + vedení TJ:** schválené minimum je ve společné patičce; samostatná stránka a formulář vzniknou pouze tehdy, přibude-li nový e-mail, vlastník odpovědí a ochrana proti spamu.
- **Sportoviště:** tři místa na jedné stránce, případně s kotvami; bez tří téměř prázdných detailů.

### Co do první verze nepřenášet

- obecné Aktuality bez potvrzeného redaktora a publikačního rytmu;
- prázdné nástěnky, štítky, RSS, tiskovou verzi, fulltext a mapu webu;
- staré iframe prvky a Facebook feed;
- samostatné stránky jednotlivých fotografií;
- neověřené osoby, termíny, částky, názvy dotačních programů nebo účely podpory.

## Pořadí realizace

Práce je rozdělená do malých vertikálních celků. Každý celek má samostatně kontrolovatelný výsledek; další může začít až po splnění uvedené závislosti.

### E0 — Obsahový a provozní základ

#### T0.1 — Schválit mapu webu a migrace URL

**Závislost:** žádná
**Výstup:** tabulka všech původních URL se stavem `přenést / sloučit / přesměrovat / vynechat` a cílovou URL.

Hotovo, když:

- jsou schváleny názvy a účel všech cílových stránek výše;
- každá důležitá původní stránka má jednoznačný cíl;
- není slíben redirect, který na původním Webnode technicky neumíme nastavit.

#### T0.2 — Udělat inventář skutečného obsahu

**Závislost:** T0.1
**Výstup:** obsahová tabulka pro oddíly, události, sportoviště, historii, fotografie, kontakty a podporovatele.

U každé položky evidovat zdroj, vlastníka, datum ověření, stav aktuálnosti, právo publikace, cílovou stránku a chybějící údaje. U médií navíc původní URL, cílový lokální soubor, album, alt, popisek a stav schválení. Neúplná položka se nesmí tiše doplnit odhadem.

#### T0.3 — Určit vlastníka obsahu a zdroj programu

**Závislost:** T0.2
**Rozhodnutí:** kdo bude obsah upravovat a zda budou akce vedené přímo v repozitáři, nebo synchronizované při buildu z jednoho kalendáře s definovaným fallbackem.

Hotovo, když:

- existuje jeden zdroj pravdy pro události;
- je známý člověk a rytmus aktualizace;
- čas událostí se vyhodnocuje v `Europe/Prague` a je zajištěný pravidelný rebuild;
- homepage už nemusí obsahovat ručně napsanou ukázkovou akci.

Pouhý externí odkaz nesplňuje navržený scope Programu ani homepage. Lze jej zvolit jen jako výslovné zmenšení scope a následně změnit T3.4 i Definition of Done.

#### T0.4 — Uzavřít výběr a práva k médiím

**Závislost:** T0.2
**Výstup:** schválený výběr fotografií a dokumentů pro všechny cílové stránky, jejich zdroje, popisky a práva publikace; zvlášť kurátorský výběr pro historii.

#### T0.5 — Ověřit podmínky publicity MSK

**Závislost:** T0.2
**Výstup:** potvrzené znění, schválený zdroj loga, určená místa a doba zveřejnění pro každý relevantní smluvní vztah.

Před publikací loga je potřeba ověřit souhlas a aktuální vizuální manuál. Samostatnou žádost není nutné podávat pouze tehdy, pokud smlouva použití loga výslovně schvaluje ([Symboly kraje](https://www.msk.cz/cs/kraj/symboly/symboly-kraje-120/), [Užívání loga a znaku kraje](https://sluzby.msk.cz/sluzby/uzivani-loga-a-znaku-kraje)).

### E1 — Sdílená kostra bez změny vzhledu

#### T1.1 — Zachytit baseline současné homepage

**Závislost:** T0.1
**Výstup:** referenční screenshoty a ověřený stav na mobilu i desktopu před refaktorem.

Hotovo, když je zachycená homepage na šířkách 390 a 1440 px, včetně otevřeného mobilního menu a chování hlavičky při scrollu.

#### T1.2 — Vyjmout sdílený layout, hlavičku a patičku

**Závislost:** T1.1
**Výstup:** `BaseLayout`, `SiteHeader`, `SiteFooter`, navigační data, společné design tokeny a jeden helper pro interní URL; bez zamýšlené vizuální změny homepage.

Hotovo, když:

- homepage zůstává vizuálně a funkčně ekvivalentní baseline;
- desktopové a mobilní menu používají jediný seznam odkazů;
- všechny interní odkazy vycházejí z `import.meta.env.BASE_URL`; nezdůvodněné root-relative URL jsou zakázané;
- canonical například pro Program míří na `https://jirihanzelka.github.io/tj-sokol-bernartice-web/program/`;
- odkazy, public assety, OG URL, JSON-LD a pozdější sitemap používají tentýž base-path invariant;
- build projde.

Astro pro tento základ nabízí komponenty s typovanými props a sloty; routy vznikají ze souborů v `src/pages` ([Astro Components](https://docs.astro.build/en/basics/astro-components/), [Routing](https://docs.astro.build/en/guides/routing/)).

#### T1.3 — Připravit technický baseline kvality

**Závislost:** T1.2
**Výstup:** explicitní `check` script a potřebné dev dependencies, pravidla práce s obrázky a prázdný vstup pro obsahové kolekce.

Hotovo, když:

- production build i `check` běží neinteraktivně;
- výstup zůstává statický, bez server adapteru a UI frameworku;
- klientský JavaScript je omezený na menu a případný pozdější lightbox;
- `content.config.ts` roste až s jednotlivými feature, nevytváří předem nepoužité modely;
- produkční fotografie patří do `src/assets` a stabilní dokumenty/favicony do `public`;
- každý následující feature PR musí projít buildem, checkem a vlastní kontrolou odkazů a přístupnosti.

Jednotlivé feature přidají vlastní validované schéma přes [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/). Lokálně importované fotografie lze optimalizovat přes obrazové komponenty Astro ([Images](https://docs.astro.build/en/guides/images/)).

### E2 — Vizuální vzory a první review gate

#### T2.1 — Navrhnout reprezentativní detail oddílu

**Závislost:** T0.2, T1.2
**Výstup:** vizuální návrh desktop + mobil, který rozvine současnou homepage, nikoli nový nesouvisející styl.

Návrh musí ukázat:

- úvod stránky a stručné představení oddílu;
- praktické údaje „pro koho, kdy a kde“;
- kontakt, místo, volitelnou nejbližší akci a několik fotografií;
- stav s volitelnými bloky i bez nich;
- jasný přechod k Programu nebo ke společným kontaktním údajům v patičce.

**Review gate:** nejdřív schválit tento jeden vzor; teprve potom z něj odvodit další vnitřní stránky.

#### T2.2 — Dopsat malý systém vnitřních stránek

**Závislost:** schválený T2.1
**Výstup:** opakovatelné vzory `PageIntro`, nadpis sekce, karta oddílu, karta akce, karta sportoviště, prázdný stav a klidný blok podpory. Specifická časová osa a galerie se schválí zvlášť v T4.2.

Hotovo, když jsou doložené mobilní stavy, focus/hover stavy a pravidla pro délku textu. Nevytvářet komponentu pro každý obal; pouze pro opakovanou strukturu nebo vlastní chování.

### E3 — Nejdůležitější návštěvnické cíle

#### T3.1 — Kontakt a vedení TJ

**Závislost:** T1.3, T2.2, ověřené kontakty z T0.2
**Výstup:** validovaná globální kontaktní data v patičce: právní název, IČO, sídlo, předseda a telefon. E-mail, formulář ani samostatná `/kontakt/` nejsou součástí schváleného rozsahu.

Hotovo, když je možné kontakt použít bez formuláře a nejsou zveřejněné neověřené nebo zbytečné osobní údaje. Splněno 3. září 2026.

#### T3.2 — Přehled oddílů a jejich detail

**Závislost:** T1.3, T2.2
**Výstup:** validovaná kolekce oddílů, `/oddily/`, šest interních detailů a přepnutí příslušných odkazů na homepage.

Hotovo, když:

- všech šest oddílů používá jednu šablonu a staticky se generuje přes `getStaticPaths()`;
- každý detail má povinné minimum: pro koho, kdy, kde a koho kontaktovat;
- chybějící blok se nezobrazuje jako prázdná záložka;
- nohejbal může mít doplňkový externí odkaz, ale zůstává součástí jednotného přehledu.

#### T3.3 — Sportoviště

**Závislost:** T0.4, T1.3, T2.2
**Výstup:** validovaná data, `/sportoviste/` se třemi místy a přepnutý teaser na homepage; každé místo má adresu, stručné použití, schválenou fotografii a odkaz do mapy.

Hotovo, když stránka funguje bez mapového iframe, média mají rozměry a alt a informace se zbytečně neopakují.

#### T3.4 — Program

**Závislost:** rozhodnutý T0.3, T1.3, T2.2
**Výstup:** validovaná kolekce nebo build-time loader, `/program/` se seznamem budoucích akcí a přepnutá nejbližší akce na homepage.

Hotovo, když:

- akce jsou řazené chronologicky a minulá se nemůže tvářit jako nejbližší;
- homepage umí z téhož zdroje vybrat skutečně nejbližší akci;
- zrušená akce a prázdný nebo nedostupný zdroj mají srozumitelný stav;
- při chybějících datech se nezobrazí smyšlený příklad.

### E4 — Klubová paměť

#### T4.1 — Redakčně zpracovat historii

**Závislost:** T0.2, T0.4
**Výstup:** krátká schválená časová osa; každý bod má význam pro návštěvníka, zdroj a související médium jen tam, kde opravdu pomáhá.

#### T4.2 — Schválit vizuální návrh historie a galerie

**Závislost:** T2.2, T4.1
**Výstup:** návrh desktop + mobil s časovou osou, albem, jednotlivou fotografií, popisky a stavy pro malé i větší množství médií.

#### T4.3 — Implementovat `/historie/`

**Závislost:** T0.4, T1.3, schválený T4.2
**Výstup:** jedna responzivní stránka „Historie a galerie“.

Hotovo, když:

- historie a fotografie tvoří jeden čitelný příběh a jeden bod navigace;
- historický text a alba mají validované schéma;
- produkční obrázky jsou lokální, ze schválených zdrojů, mají rozměry, alt a popisky; screenshoty auditu nejsou produkční zdroj;
- obrázky pod prvním viewportem se načítají odloženě;
- fotografie lze otevřít i bez povinného JavaScriptu;
- volitelný lightbox je samostatný pozdější úkol, nikoli podmínka spuštění.

Součástí tasku je přepnutí položky Historie v navigaci a relevantního vstupu z homepage.

### E5 — Podpora a partneři

#### T5.1 — Převést ověřený archiv MSK

**Závislost:** T1.3
**Výstup:** strukturovaná data pro pět potvrzených roků, včetně rozhodnutí, zda archiv uchová dobové `statement` a `thanks`, nebo použije jasně označenou jednotnou redakční parafrázi:

| Rok podpory | Původní oznámení | Zveřejněno |
|---:|---|---:|
| 2025 | [Podpora MSK 2025](https://tjbernasticenadodrou.webnode.cz/news/podpora-msk-2025/) | 17. 3. 2026 13:17 |
| 2024 | [Podpora MSK 2024](https://tjbernasticenadodrou.webnode.cz/news/podpora-msk-2024/) | 7. 11. 2024 07:28 |
| 2023 | [Podpora MSK 2023](https://tjbernasticenadodrou.webnode.cz/news/podpora-msk-2023/) | 7. 2. 2024 07:31 |
| 2022 | [Podpora MSK 2022](https://tjbernasticenadodrou.webnode.cz/news/podpora-msk-2022/) | 12. 12. 2022 12:48 |
| 2021 | [Podpora MSK 2021](https://tjbernasticenadodrou.webnode.cz/news/podpora-msk-2021/) | 14. 12. 2021 15:24 |

Pozor: uvedené datum je **přesně zobrazený údaj původního webu o zveřejnění**, bez potvrzeného časového pásma; nepřevádět jej automaticky na UTC. Není to datum poskytnutí podpory. Původní stránky potvrzují jen podporu a spolufinancování TJ z rozpočtu Moravskoslezského kraje v příslušném roce; neobsahují částku, projekt, účel, dotační program ani číslo smlouvy. Rok 2026 se bez nového dokladu nepřidává.

#### T5.2 — Vytvořit `/podpora/` a povinnou atribuci

**Závislost:** T5.1, schválené logo a znění z T0.5, T2.2
**Výstup:** evergreen stránka „Podpora a partneři“, odkaz v patičce a smluvně požadovaná publicita na všech určených místech a po stanovenou dobu.

Hotovo, když:

- archiv obsahuje všech pět ověřených roků 2021–2025 a je na starém webu obsahově nezávislý; zdrojové odkazy zůstávají pouze v interní dokumentaci;
- lokální logo pochází ze schváleného podkladu MSK nebo smluvních materiálů, má evidovaný zdroj/verzi, není svévolně upravené a dodržuje aktuální manuál;
- atribuce má jednoznačný přístupný název bez duplicitního čtení: `alt="Moravskoslezský kraj"`, nebo `alt=""`, pokud stejný název poskytuje bezprostřední viditelný text či odkaz;
- je-li doložena podpora pro aktuální rok, její smluvně požadovaná publicita je viditelná v určeném rozsahu; jinak stránka uvádí pouze doložené roky 2021–2025;
- stránka ani metadata nedoplňují neověřené dotační detaily.

Součástí tasku je odkaz v patičce a pouze ta další umístění, která vyžadují potvrzené smluvní podmínky.

### E6 — Release a kontrola kvality

#### T6.1 — Metadata, 404 a migrační dokončení

**Závislost:** E3–E5
**Výstup:** unikátní title/description, canonical respektující base path, Open Graph, nainstalovaná a nastavená `@astrojs/sitemap`, zdrojová `src/pages/404.astro` a podle skutečného obsahu `SportsOrganization`/`Event` JSON-LD.

Hotovo, když jsou implementované cílové URL a zaznamenaný stav každé staré URL. Přesměrování se slibují pouze tam, kde máme technickou kontrolu nad původní adresou.

#### T6.2 — Technická a obsahová QA

**Závislost:** T6.1
**Výstup:** protokol kontroly, opravené blokující chyby a finální obsahový souhlas.

Minimální kontrola:

- production build, `astro check` a validace kolekcí;
- crawl produkčního preview pod skutečným GitHub Pages base path, včetně interních odkazů, public assetů a 404 assetů;
- mobilní šířky 320, 390, 430 a desktop 768, 1024, 1440 px;
- ovládání klávesnicí, viditelný focus, Escape u menu, logická hierarchie nadpisů, jeden `h1` a WCAG AA kontrast;
- dotykové cíle alespoň 44 px, `prefers-reduced-motion` a žádný horizontální scroll;
- kontrola výkonu obrázků a načítání galerie;
- druhá osoba ověří kontakty, historii, akce a podporu proti zdrojům;
- obsahový vlastník podepíše finální kontrolu.

## Doporučené implementační balíčky

Pro přehledný review a malé riziko změn seskupit práci takto:

1. **PR 1 — Foundation:** T1.1–T1.3, bez vizuální změny.
2. **Design gate:** T2.1–T2.2, schválení před stavbou opakovaných vnitřních stránek.
3. **PR 2 — Kontakt:** T3.1 ve společné patičce bez samostatné stránky.
4. **PR 3 — Oddíly:** T3.2 a jeho vstupy z navigace/homepage.
5. **PR 4 — Program:** T3.4 a skutečná nejbližší akce na homepage.
6. **PR 5 — Sportoviště:** T3.3 a jeho teaser na homepage.
7. **Design gate + PR 6 — Historie a galerie:** T4.1–T4.3 a jeho vstup z navigace/homepage.
8. **PR 7 — Podpora MSK:** T5.1–T5.2 a patička.
9. **PR 8 — SEO, úplné QA a release:** T6.1–T6.2 včetně celkové vizuální regrese proti T1.1.

Každý PR má obsahovat jen vlastní data, komponenty, routy a odpovídající kontrolu; nepřimíchávat plošný redesign.

## Blokující rozhodnutí před implementací

1. Kdo potvrdí texty, kontakty a výběr fotografií?
2. Kdo a jak bude spravovat program?
3. Které historické milníky a alba mají skutečnou hodnotu a máme k nim práva?
4. Jaké přesné znění a umístění podpory vyžadují smlouvy MSK pro aktuální rok?
5. Má nohejbal zůstat jen základním profilem s externím odkazem, nebo má mít plný interní obsah?

## Definition of Done první verze

První verze je hotová, až když návštěvník bez odchodu na starý web zjistí:

- co se nejbližší dobou koná;
- jaké oddíly existují, pro koho jsou a koho kontaktovat;
- kde se sportuje;
- jaká je historie Sokola a kde najde vybrané fotografie;
- jak kontaktovat TJ;
- kdo klub podporoval v doložených letech a kdo jej podporuje aktuálně, pouze je-li to doloženo.

Současně nesmí web obsahovat prázdné rubriky, smyšlená data, nepovolená média ani důležité funkce závislé jen na externím iframe.
