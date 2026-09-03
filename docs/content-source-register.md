# Registr zdrojů a stavu obsahu

Stav k 2. září 2026. Tento soubor odděluje technicky implementovaný obsah od toho, co je schválené k veřejnému nasazení.

| Oblast | Zdroj | Stav ověření | Podmínka před publikací |
|---|---|---|---|
| Seznam šesti oddílů | Veřejné stránky původního Webnode | Existence oddílů ověřena | TJ potvrdí aktuální skupiny, náplň, místa, termíny a kontakty. |
| Program | Starý vložený Google kalendář | Staré opakované termíny nejsou považované za aktuální | Určit jeden současný zdroj pravdy a vlastníka aktualizací. |
| Tři sportoviště a GPS | Veřejná stránka Sportoviště na Webnode | Názvy a GPS ověřené proti zdroji | TJ potvrdí současné využití a právo znovu zveřejnit fotografie. |
| Historie 1919–2009 | Klubová prezentace na původní stránce Historie | Milníky ověřené proti prezentaci | TJ potvrdí redakční znění, novější období a práva ke kronikám. |
| Historické fotografie | Galerie původního Webnode | První čtyři datace ověřené; ostatní mají jen pracovní vizuální popis | TJ potvrdí popisky, osoby, místo, datum a práva ke každému souboru. |
| Kontakt a vedení | ARES, spolkový rejstřík a potvrzení TJ | Právní identita a předseda ověřeni v registru; telefon potvrzen TJ 3. září 2026 | V patičce se zveřejní schválené údaje bez e-mailu a formuláře. |
| Podpora MSK 2021–2025 | Pět původních oznámení na Webnode | Roky, textový význam a zobrazená data ověřené | Doložit smluvní podmínky publicity, umístění, dobu zveřejnění a schválený soubor loga. |

## Lokální média

- `src/assets/history/` — kroniky a vybrané archivní fotografie stažené z původního Webnode; stav práv čeká na potvrzení TJ.
- `src/assets/venues/` — fotografie sportovišť stažené z původního Webnode; stav práv čeká na potvrzení TJ.
- `src/assets/supporters/msk.png` — přesná lokální kopie PNG 407 × 124 px použitého v oznámeních 2024–2025; nejde zatím o doložený smluvní podklad pro nové nasazení.
  - Zdroj: `https://e314c28072.cbaul-cdnwnd.com/9701ef97cc6cc07b6a5608ba96b99703/200000956-6bbc16bbc3/zve%C5%99ejn%C4%9Bn%C3%AD%20loga%20MSK.png`
  - SHA-256: `94d324a8eb168a6d7916f8e12ade48a9108f6ca9b4aae8fde28f58df721094e2`
  - `Last-Modified` zdroje při ověření: 7. listopadu 2024

Do potvrzení práv k médiím a publicity MSK je implementace vhodná k lokálnímu obsahovému a vizuálnímu review, nikoli k automatickému veřejnému nasazení. Schválený telefon a identifikační údaje jsou v patičce; nefunkční historické e-maily zůstávají mimo web.

## Checklist obsahového doplnění

Stav k 3. září 2026. Jednotlivé body se uzavírají až po potvrzení TJ; veřejný registr lze použít pro právní identitu, ne jako náhradu za potvrzení provozních kontaktů.

- [x] **Kontakt a vedení** — právní identita, předseda a telefon v patičce; bez e-mailu a formuláře.
- [ ] **Aktuální program** — určit zdroj termínů a člověka odpovědného za aktualizaci.
- [ ] **Praktické údaje oddílů** — pro koho, kdy, kde a kontakt pro všech šest oddílů.
- [ ] **Média a publicita** — potvrdit práva k fotografiím a kronikám a podmínky použití loga MSK.

## Kontakt a vedení — pracovní inventář

### Právní identita

Tyto údaje potvrzuje ARES i spolkový rejstřík pro IČO 43961096:

| Pole | Aktuální záznam | Stav |
|---|---|---|
| Název | TJ Sokol Bernartice nad Odrou,spolek | Ověřeno v registru |
| IČO | 43961096 | Ověřeno v registru |
| Právní forma | Spolek | Ověřeno v registru |
| Sídlo | č.p. 80, 741 01 Bernartice nad Odrou | Ověřeno v registru |
| Statutární orgán | Ing. Dušan Glogar, předseda | Aktuální záznam bez data výmazu; vznik funkce 4. 11. 2016 |
| Způsob jednání | Předseda zastupuje spolek samostatně | Ověřeno v registru |

Zdroje: [ARES – ekonomický subjekt](https://ares.gov.cz/ekonomicke-subjekty-v-be/rest/ekonomicke-subjekty/43961096) a [ARES – veřejný rejstřík](https://ares.gov.cz/ekonomicke-subjekty-v-be/rest/ekonomicke-subjekty-vr/43961096).

### Provozní kontakt k potvrzení TJ

**Rozhodnutí 3. září 2026:** nový web zatím zůstane bez e-mailového kontaktu. Historické nefunkční adresy se nepřevezmou; kontakt se doplní až po dodání nové potvrzené adresy.

Veřejný rozsah je uzavřený: právní název, IČO, sídlo, předseda Ing. Dušan Glogar a telefon `+420 604 610 507`. Ostatní členové původního výboru se bez nového potvrzení nezveřejní.

| Zdroj | Údaj | Stav |
|---|---|---|
| Původní Webnode | `admin@tjsokolbernarticenadodrou.cz` | Neplatný: doména neexistuje; z nového webu byl odstraněn |
| Web obce, článek vydaný 29. 3. 2020 | Ing. Dušan Glogar, `+420 604 610 507`, `vedeni@tjsokolbernarticenadodrou.cz` | E-mail je neplatný; telefon potvrdila TJ 3. září 2026 |
| Původní Webnode | GPS `49°36'31.293\"N, 17°56'50.986\"E` | Vztahuje se k sídlu; zveřejnění není nutné, pokud bude adresa odkazovat do mapy |

Zdroje: [původní kontakt](https://tjbernasticenadodrou.webnode.cz/kontakty/) a [profil TJ na webu obce](https://www.bernarticenadodrou.cz/spolkova-cinnost/tj-sokol).

DNS ověření 3. září 2026 vrátilo pro `tjsokolbernarticenadodrou.cz` stav `NXDOMAIN`: doména nemá registraci ani poštovní záznamy. Všechny níže uvedené role-based e-maily na této doméně jsou proto historické a nesmí se převzít na nový web.

### Původní seznam vedení k potvrzení TJ

Následující údaje jsou pouze inventář starého Webnode. S výjimkou statutárního předsedy nebyla jejich aktuálnost potvrzena v současném zdroji.

| Osoba | Původní role | Původní kontakt / poznámka |
|---|---|---|
| Ing. Dušan Glogar | Předseda TJ, vedoucí ASPV | Statutární funkci potvrzuje rejstřík |
| Ing. Ivan Košťál | Člen výboru, tajemník | Historický `tajemnik@…`; doména dnes neexistuje |
| Ing. Eliška Milatová | Členka výboru, pokladník | Historický `pokladnik@…`; doména dnes neexistuje |
| Ing. Ladislav Glogar | Člen výboru | Bez uvedeného kontaktu |
| Libor Stavinoha | Člen výboru | Bez uvedeného kontaktu |
| Aleš Hubr | Člen výboru, vedoucí florbalu | Historický `florbal@…`; doména dnes neexistuje |
| Tomáš Staněk | Člen výboru, odpovědný za kopanou | Historický `kopana@…`; doména dnes neexistuje |
| Bc. Jiří Papák | Člen výboru, odpovědný za kopanou | Historický `kopana@…`; doména dnes neexistuje |
| Daniela Horutová | Členka výboru, vedoucí volejbalu | Starý web uvádí pravděpodobně chybně napsanou doménu e-mailu; nutno dodat znovu |
| Pavel Zelenka ml. | Člen výboru, odpovědný za nohejbal | Historický `nohejbal@…`; doména dnes neexistuje |

Zdroj: [původní stránka vedení](https://tjbernasticenadodrou.webnode.cz/kontakty/vedeni/).

### Možné budoucí rozšíření

- nový veřejný e-mail, pokud jej TJ zřídí;
- aktuální členy celého výboru, pokud je bude chtít zveřejnit;
- kontakty vedoucích jednotlivých oddílů;
- kontaktní formulář pouze tehdy, bude-li mít vlastníka a ochranu proti spamu.
