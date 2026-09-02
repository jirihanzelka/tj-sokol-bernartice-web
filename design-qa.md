# Design QA — rozšíření webu TJ Sokol

## Evidence

- Zdrojový vizuál homepage, desktop: `/Users/jirka/Development/tj-sokol-bernartice-web/implementation-desktop.jpg` (1426 × 1014 px).
- Zdrojový vizuál homepage, mobil: `/Users/jirka/Development/tj-sokol-bernartice-web/implementation-mobile.jpg` (416 × 901 px; původní zachycený mobilní stav).
- Zdrojová stránka historie: `/Users/jirka/Development/tj-sokol-bernartice-web/docs/original-site/screenshots/03-history.jpg`.
- Implementace homepage, desktop: `/Users/jirka/Development/tj-sokol-bernartice-web/design-qa-home-desktop.jpg` (1425 × 1004 px).
- Implementace homepage, mobil: `/Users/jirka/Development/tj-sokol-bernartice-web/design-qa-home-mobile.jpg` (390 × 818 px).
- Implementace historie, desktop: `/Users/jirka/Development/tj-sokol-bernartice-web/design-qa-history-desktop.jpg` (1425 × 1004 px).
- Implementace historie, mobil: `/Users/jirka/Development/tj-sokol-bernartice-web/design-qa-history-mobile.jpg` (390 × 818 px).
- Otevřené mobilní menu: `/Users/jirka/Development/tj-sokol-bernartice-web/design-qa-menu-mobile.jpg`.
- Prohlížeč: Codex in-app browser proti `http://127.0.0.1:4321/tj-sokol-bernartice-web/`.

Homepage screenshoty zachycují stav před následným dočasným vyřazením Kontaktů; aktuální navigace bez Kontaktů byla znovu ověřena v živém lokálním náhledu.

Zdrojová a implementační homepage byly porovnány společně při téměř shodné desktopové hustotě. Původní stránka historie a nová historie byly porovnány společně jako informační a vizuální transformace, nikoli jako pixelový klon.

## Výsledek vizuálního srovnání

Homepage zachovává původní vizuální jazyk: Manrope, červenou značku, velkou fotografii u Odry, bílou plovoucí hlavičku, stejné měřítko hero textu, trojici rychlých vstupů a střídmé linky. Záměrné změny jsou pouze obsahové a navigační: přibyly Historie a Sportoviště, zmizel nadbytečný desktopový hamburger a smyšlená ukázková akce byla nahrazena poctivým prázdným stavem.

Historie převádí úzký, dlouhý Webnode výpis do stejného design systému jako homepage: jasný úvod, jeden výrazný archivní snímek, editovaná časová osa, čtyři dochované kroniky a kurátorská galerie. Obsah zůstává čitelný bez povinného JavaScriptu.

## Povinné fidelity plochy

- Typografie: self-hosted Manrope zůstává beze změny; velikosti a řezy navazují na homepage.
- Barvy: zachované tokeny `--red`, `--ink`, `--soft`, `--line` a doplněný pouze neutrální `--muted`.
- Layout: stejné velké okraje, výrazná typografická hierarchie, tenké dělicí linky a střídání bílé, šedé, černé a červené plochy.
- Assety: původní symbol Sokola a lokální fotografie; žádné placeholdery, CSS kresby ani improvizované logo.
- Responsivita: bez horizontálního scrollu při kontrolovaných šířkách 320, 390, 430, 768, 1023 a 1439 px.
- Obrázky: explicitní rozměry, Astro optimalizace, lazy loading pod prvním viewportem a smysluplné alternativní texty.

## Interakční a technická kontrola

- Ověřené routy na desktopu i mobilu: `/`, `/program/`, `/oddily/`, detail oddílu, `/sportoviste/`, `/historie/`, `/podpora/`.
- Všech šest detailů oddílů vzniká z jedné dynamické šablony přes `getStaticPaths()`.
- Mobilní menu: otevření, zavření odkazem, klikem mimo menu, resize a klávesou Escape; `aria-expanded`, `aria-controls`, landmark a návrat fokusu jsou funkční.
- Aktivní položka navigace používá `aria-current="page"` a je viditelná i v horním stavu stránky.
- Interní URL, favicon, optimalizované obrázky, canonical, Open Graph a sitemap respektují GitHub Pages base path `/tj-sokol-bernartice-web/`.
- 404 je `noindex` a nemá canonical, `og:url` ani `og:image`.
- Prohlížeč: 0 console errors, 0 warnings; všechny viditelné obrázky se načetly.
- Externí odkazy na nohejbal, oznámení MSK 2025 a oficiální web MSK odpověděly HTTP 200 při ověření 2. září 2026.
- `npm run build`: exit 0; Astro check 23 souborů, 0 errors, 0 warnings, 0 hints; 13 statických stránek a 58 optimalizovaných obrazových výstupů.
- `git diff --check`: exit 0.

## Review a opravy

### Pass 1 — architektura a stránky

- Vytažen společný layout, hlavička, patička, design tokeny a base-path helper.
- Přidány Program, Oddíly, Sportoviště, Historie a galerie, Podpora a 404; Kontakt byl následně dočasně vyřazen do dodání nové adresy.
- Smysluplně sloučeny původní historie s galerií a podstránky oddílů do jedné šablony.

### Pass 2 — nezávislý code, content a compliance review

- Breakpoint navigace posunut na 1080 px a ověřen na hraně bez překryvu.
- Doplněna klávesa Escape, klik mimo menu, mobilní landmark, aktivní stav a výchozí OG obrázek.
- Neověřená současná tvrzení o oddílech a sportovištích nahrazena doloženým minimem.
- Zpřesněny historické milníky, galerie a upozornění na konec podkladu v roce 2009.
- Kontaktní stránka, staré adresy i související výzvy byly odstraněné; nový kontakt zatím není nahrazený odhadem.
- Podpora jednoznačně uvádí jen roky 2021–2025 a výslovně netvrdí podporu 2026.

### Pass 3 — responzivní a obsahová regrese

- Opraven třípixelový overflow na nejmenší šířce odstraněním pevného `min-width` body.
- Galerie přeuspořádána tak, aby poslední řada neměla osamocenou kartu.
- Build, base path, metadata, lokální média, mobilní menu a všechny hlavní routy znovu ověřeny.

## Oddělené release podmínky

Vizuální a technická implementace prošla. Veřejné nasazení ale zůstává vědomě oddělené: TJ musí potvrdit vlastnictví a práva k převzatým fotografiím a kronikám a smluvní podmínky použití loga MSK. Kontakt je do dodání nového e-mailu mimo web. Evidence je v `docs/content-source-register.md`. Žádný commit ani push v tomto běhu neproběhl.

## Final result

final result: passed
