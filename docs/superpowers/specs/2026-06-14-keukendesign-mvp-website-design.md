# Ontwerp: Keukendesign.nl MVP Website

Datum: 2026-06-14

## Status

Goedgekeurd ontwerp voor implementatie van de volledige MVP-website volgens `docs/build-plan.md`.

De workspace `/Users/jleenman/GitHub/keukendesign` is op dit moment geen Git-repository. De ontwerpdocument-stap is uitgevoerd, maar committen is daardoor niet mogelijk (`git rev-parse --show-toplevel` geeft `not a git repository`).

## Bronnen Van Waarheid

Alle documenten onder `/docs` zijn leidend. De implementatie mag uitsluitend keuzes overnemen die daaruit volgen.

Belangrijkste bronnen:

- `docs/build-plan.md`
- `docs/technical-architecture.md`
- `docs/architecture-correction-summary.md`
- `docs/information-architecture.md`
- `docs/ux-strategy.md`
- `docs/website-analysis.md`
- `docs/reference-research.md`
- `docs/wow-factor-recommendations.md`
- `docs/github-pages-website-generation-method.md`

## Scope

De scope is het MVP uit `docs/build-plan.md`.

Het MVP bevat:

- Homepage.
- Projectoverzicht.
- 6 tot 10 sterke projectcases.
- Bulthaup-overzicht.
- Basis b1-, b2- en b3-pagina's.
- Adviespagina.
- Showroompagina.
- Contactpagina.
- Lokale pagina `keukens-amersfoort`.
- Privacy-pagina.
- Ondersteunende routes waar voldoende content bestaat: werkwijze, afspraak voorbereiden, route en parkeren, en basis-apparatuurcontent.

Secundaire SEO-pagina's zoals `design-keukens`, `greeploze-keukens`, `keukens-op-maat`, `keukens-utrecht` en `keukens-het-gooi` gaan alleen live als er unieke, niet-dubbele content voor beschikbaar is. Anders worden ze uitgesteld, samengevoegd of via een statische migratiestrategie opgevangen.

## Architectuur

De website wordt een statische Nuxt/Vue-site voor GitHub Pages.

Productierandvoorwaarden:

- Static output via `nuxi generate`.
- Publicatie-output: `.output/public`.
- Hosting: GitHub Pages.
- Deployment: GitHub Actions.
- Content: Markdown met YAML frontmatter in de repository.
- Media: repository-assets onder een publieke mediastructuur.
- Geen backend.
- Geen server runtime.
- Geen database.
- Geen productie-SSR.
- Geen eigen formulierendpoint.
- Geen runtime image optimizer.
- Geen verplichte externe CMS-laag.

Vue wordt selectief gebruikt voor progressive enhancement: filters, accordions, mobiele navigatie, lichte micro-interacties en eventuele lazy-loaded kaart. Basiscontent moet als statische HTML beschikbaar blijven.

## Contentmodel

Content wordt omgevormd vanuit `source/` naar gestructureerde Markdown-content.

Projectcases gebruiken minimaal:

- Titel.
- Slug.
- Systeem.
- Opstelling.
- Materialen.
- Regio.
- Coverbeeld.
- Galerij.
- Korte projectsamenvatting.
- Vraag.
- Ontwerpuitdaging.
- Oplossing.
- Apparatuur en functies.
- SEO-title en description.

Er worden geen projectdetails verzonnen. Als bestaande content of bestandsnamen onvoldoende context geven, wordt die case beperkt gebruikt of gemarkeerd als contentaanvulling.

## UX-Richting

De gekozen homepage- en siteflow is optie A: begeleide showroomroute.

Flow:

1. Heldere hero met echte Stadshaege/bulthaup-keukenfoto.
2. Positionering: persoonlijk ontworpen bulthaup-keukens in Amersfoort.
3. Bewijs: sinds 1998 en ruim 40 jaar keukenvakkennis.
4. Primaire CTA: `Maak een afspraak`.
5. Secundaire CTA: `Bekijk projecten`.
6. Drie routes: inspiratie, bulthaup begrijpen, advies of afspraak.
7. Geselecteerde projecten.
8. Waarom Stadshaege.
9. Bulthaup b1/b2/b3 in een scanbare vergelijking.
10. Adviesproces.
11. Showroom/contactblok.

De site moet voelen als een persoonlijk showroomgesprek: rustig, deskundig, visueel overtuigend en praktisch.

## Visuele Richting

De visuele taal is rustig, premium en persoonlijk.

Richtlijnen:

- Echte projectfotografie is het visuele fundament.
- Geen decoratieve dynamische achtergronden.
- Geen WebGL/Three.js in het MVP.
- Geen autoplay videohero.
- Geen scrolljacking.
- Geen schreeuwerige verkooptaal of kortingscommunicatie.
- Korte, scanbare tekstblokken.
- Contextlabels bij beelden: systeem, opstelling, materiaal, regio.
- CTA's zichtbaar maar adviserend van toon.

## Typografie

`RotiSemiSans` is verplicht, omdat dit het bulthaup-font is.

De huidige site gebruikt:

```css
@font-face {
  font-family: "RotiSemiSans";
  font-style: normal;
  font-weight: 400;
  src: url("https://keukendesign.nl/wp/media/rotissemisansstd-webfont.woff") format("woff");
}
```

Implementatiekeuze:

- `RotiSemiSans` wordt self-hosted in de nieuwe statische site, mits licentie/eigenaarschap voor Stadshaege/keukendesign.nl klopt.
- `RotiSemiSans` wordt minimaal gebruikt voor logo/wordmark, navigatie, headings, labels, CTA's en belangrijke systeem-/projectmetadata.
- Roboto is niet verplicht.
- Bodytekst gebruikt tijdens implementatie de best passende leesbare combinatie: breder `RotiSemiSans` of een neutrale system sans fallback.
- Er wordt geen extra extern font toegevoegd zonder duidelijke reden.
- Font loading gebruikt `font-display: swap`.

## Mobiele Ervaring

Mobiel is leidend.

Vereisten:

- Compacte navigatie.
- Snelle acties: afspraak, bellen, mailen, route.
- Projectcards als verticale lijst.
- Horizontale filterchips of compacte filterbediening.
- Accordions voor FAQ, voorbereiding en technische details.
- Sticky mobiele actiebalk op commerciële pagina's.
- Bel- en afspraakactie altijd binnen een kort scrollmoment bereikbaar.

## Interactie

Toegestane MVP-interacties:

- Keyboard-bedienbare navigatie.
- Projectfilters op systeem, opstelling, materiaal en regio.
- Resultaatmelding bij filterwijzigingen.
- Accordions voor FAQ/voorbereiding/details.
- Subtiele micro-interacties op CTA's, cards en filters.
- Progressieve content-onthulling met reduced-motion fallback.
- Lazy-loaded kaart alleen als progressive enhancement.

Niet in MVP:

- Volwaardige zoekfunctie tenzij contentvolume en planning dit rechtvaardigen.
- WebGL/Three.js.
- Configurator.
- Zware page transitions.
- Eigen serverformulier.

## SEO

SEO wordt volledig statisch opgebouwd.

Vereisten:

- Unieke title en meta description per kernroute.
- Canonical URL's.
- Open Graph metadata.
- Projectcover als project-OG-image waar beschikbaar.
- Fallback social image.
- Structured data waar zinvol: LocalBusiness, BreadcrumbList en project/article-achtige content.
- `sitemap.xml`.
- `robots.txt`.
- Schone URL's en deep links.
- Interne linkstructuur volgens `docs/information-architecture.md`.

## Performance

Vereisten:

- Static HTML.
- Minimale JavaScript.
- Vue alleen waar echte gebruikerswaarde is.
- Responsive images met `srcset` en `sizes`.
- Lazy-load afbeeldingen onder de vouw.
- Preload alleen de primaire hero-afbeelding.
- Geen runtime image optimizer.
- Geen zware media boven de vouw.
- Fonts beperken tot noodzakelijke bestanden.

## Toegankelijkheid

Vereisten:

- Semantische HTML.
- Logische headingstructuur.
- Landmarks.
- Zichtbare focus states.
- Keyboard-bedienbare navigatie, filters en accordions.
- Alt-teksten voor projectbeelden.
- `prefers-reduced-motion` respecteren.
- Kleurcontrast controleren.
- Kaart en visuele diagrammen hebben tekstalternatieven.

## Contact En Conversie

Primaire conversie:

```text
Maak een persoonlijke showroomafspraak
```

Secundaire acties:

- Bel direct.
- Mail een vraag.
- Route bekijken.
- Bekijk projecten.
- Afspraak voorbereiden.

Contactgegevens worden consistent gebruikt:

- Stadshaege Keukendesign.
- Grote Haag 15, 3811 HH Amersfoort.
- 033-4627130.
- 06-21295370.
- info@keukendesign.nl.

MVP-formulierstrategie:

- Geen eigen backendformulier.
- Contact loopt via telefoon, mail en route.
- Een externe formulierdienst komt alleen na expliciete latere keuze.

## Implementatienotitie Contentuitbreiding

Datum: 2026-06-14

Na controle van `source/gerealiseerd/index.md`, `source/bulthaup/keukenspecialist/index.md`, `source/advies/index.md` en `source/contact/index.md` is de eerste smalle projectselectie uitgebreid.

Vastgelegde keuzes:

- Het projectoverzicht bevat 30 projectcases, gegroepeerd uit alle herkenbare projectreeksen in `source/gerealiseerd/index.md`.
- Projectcases gebruiken galerijen met in totaal 103 projectbeelden.
- De content-audit controleert dat elk volledig projectbeeld uit `source/gerealiseerd/index.md` in een projectgalerij terugkomt.
- Het mediakopie-script publiceert automatisch alle volledige projectbeelden uit `source/gerealiseerd/index.md`; thumbnails worden uitgesloten.
- De eigenaarfoto's van Filip Leenman zijn gebruikt op home, advies en contact, omdat de broncontent daar zijn persoonlijke adviesrol, kookervaring en jarenlange vakervaring expliciet benoemt.
- De gebouwfoto's van Stadshaege zijn gebruikt op showroom en route/parkeren, omdat `source/contact/index.md` de fysieke locatie, ingang en parkeersituatie beschrijft.
- Route- en parkeerinformatie over parkeergarage Koestraat en Q-Park Mondriaan is toegevoegd aan de routepagina en contactpagina.
- Niet alle 327 mediabestanden worden gepubliceerd: thumbnails en niet-projectmedia blijven uitgesloten, conform de performance- en repositorygrootte-risico's in `docs/build-plan.md` en `docs/technical-architecture.md`.

## Implementatienotitie Wow-Factor

Datum: 2026-06-14

Op verzoek is de statische MVP uitgebreid met moderne browsertechnieken uit `docs/wow-factor-recommendations.md`, zonder WebGL, videohero of serverafhankelijke functionaliteit.

Vastgelegde keuzes:

- Secties krijgen progressieve onthulling via Intersection Observer; zonder JavaScript of bij `prefers-reduced-motion` blijft alle content direct zichtbaar.
- Projectfilters gebruiken Vue `TransitionGroup` voor rustige result transitions.
- Projectkaarten en galerijbeelden krijgen micro-interacties op `transform`, `opacity` en `filter`, niet op layout-eigenschappen.
- Interne navigatie gebruikt de View Transition API waar ondersteund, met normale navigatie als fallback.
- Knoppen hebben vaste, contrastrijke achtergronden op lichte, donkere en fotografische achtergronden.

## Acceptatiecriteria

Het MVP is klaar wanneer:

- Alle MVP-routes statisch gegenereerd worden.
- De site zonder backend, server runtime, database of productie-SSR werkt.
- Deep links naar alle kernroutes direct laden.
- Homepage, projecten, projectcases, bulthaup, advies, showroom, contact en keukens Amersfoort inhoudelijk gevuld zijn.
- Alle projectreeksen uit `source/gerealiseerd/index.md` als projectcase of projectgalerij terugkomen.
- Er geen verzonnen projectdetails zijn.
- `RotiSemiSans` correct en zichtbaar wordt gebruikt.
- De primaire CTA overal consistent is.
- Mobiele bel-, mail- en routeacties werken.
- `sitemap.xml` en `robots.txt` aanwezig zijn.
- Elke kernpagina unieke metadata en Open Graph metadata heeft.
- Afbeeldingen geoptimaliseerd en voorzien van alt-teksten zijn.
- Navigatie, filters en accordions keyboard-bedienbaar zijn.
- Reduced motion wordt gerespecteerd.
- Interne links, mediareferenties en frontmatter gecontroleerd worden.
- GitHub Actions static output succesvol kan publiceren naar GitHub Pages.

## Belangrijke Keuzes Voor Implementatie

- Build volgens het MVP uit `docs/build-plan.md`, niet alle toekomstige uitbreidingen.
- Homepage volgt de begeleide showroomroute.
- Projecten worden centraal bewijs, geen losse fotodump.
- Bulthaup b1/b2/b3 worden scanbaar vergeleken.
- Advies en showroom krijgen duidelijke conversieroutes.
- RotiSemiSans is verplicht als merkfont.
- Roboto is optioneel en mag worden vervangen door een beter passende bodystrategie.
- Geen serverafhankelijke functionaliteit toevoegen.
- Geen dunne SEO-pagina's live zetten.
- Wow-factor blijft licht, browser-native en progressief: geen WebGL, scrolljacking of zware decoratieve effecten.
