# Methode: van bestaande content naar een GitHub Pages website

Deze methode is bedoeld voor Codex-projecten waarin een bestaande website, map met content, PDF's, markdownbestanden of andere lokale bronnen worden omgezet naar een moderne statische website. De standaarduitkomst is een GitHub Pages geschikte site met sterke typografie, passende visuele effecten en een duidelijke bezoekersflow.

De methode is generiek. Gebruik de inhoud, doelgroep en toon van het project als uitgangspunt; kopieer geen visuele stijl uit een ander project zonder reden.

## 1. Onderzoek eerst de bron

Begin niet met bouwen. Lees eerst wat er al is.

Controleer:

- bestaande website of screenshots
- lokale contentbestanden
- PDF's, afbeeldingen, logo's en downloads
- bestaande README of instructies
- gewenste talen
- huidige navigatie of contentstructuur
- doelgroep en primaire actie
- technische randvoorwaarden voor hosting

Maak daarna een korte analyse:

- wat is het doel van de site?
- wat is de belangrijkste inhoud?
- welke route moet een nieuwe bezoeker volgen?
- wat moet downloadbaar blijven?
- welke content moet echte HTML worden?
- welke onderdelen zijn alleen ondersteunend?

## 2. Bepaal de bezoekersreis

Ontwerp eerst de flow, niet de pagina's los van elkaar. De juiste flow hangt af van het project, de doelgroep, het kennisniveau van de bezoeker en de actie die de site moet uitlokken.

Begin daarom met vragen:

- wie komt hier voor het eerst binnen?
- wat weet die bezoeker al?
- wat wil de bezoeker bereiken?
- wat moet de bezoeker begrijpen voordat de primaire actie logisch voelt?
- is de site bedoeld om te lezen, kopen, boeken, downloaden, vertrouwen op te bouwen, of iets anders?
- welke route is voor mobiel realistisch?
- welke route is voor desktop logisch?

Kies daarna een flow die bij het project past.

Voorbeelden:

- Een essay of manifest kan werken met: orientatie -> kernvraag -> samenvatting -> volledige tekst.
- Een productsite kan beter werken met: probleem -> product -> bewijs -> prijzen/contact.
- Een portfolio kan werken met: selectie werk -> case detail -> werkwijze -> contact.
- Een lokale organisatie kan werken met: identiteit -> praktische informatie -> programma/agenda -> contact.
- Een documentatieproject kan werken met: quick start -> concepten -> handleiding -> referentie.

Dit zijn geen vaste templates. Gebruik ze alleen als denkmodellen.

Als twee pagina's hetzelfde doen, voeg ze samen of maak hun rol scherper. Elke pagina moet een eigen taak hebben.

Voor elke pagina:

- doel
- primaire lezer
- belangrijkste vraag die de pagina beantwoordt
- gewenste actie
- volgende stap
- vorige stap indien onderdeel van een leesflow

Controleer altijd of de flow echt klopt:

- kan een nieuwe bezoeker zonder voorkennis volgen wat er gebeurt?
- is er nergens een overbodige tussenpagina?
- is de belangrijkste pagina niet te diep verstopt?
- staan samenvattingen, downloads en volledige content op de juiste plek?
- kloppen next/previous knoppen in beide richtingen en in alle talen?

## 3. Kies een statische stack

Gebruik bij voorkeur Nuxt 3 voor Vue-projecten:

- `nuxi generate`
- output in `.output/public`
- geen server runtime nodig
- geschikt voor GitHub Pages

Aanbevolen structuur:

```text
content/
  en/
  nl/
public/
  downloads/
components/
pages/
layouts/
assets/css/
.github/workflows/
```

Gebruik Tailwind CSS als utility layer, maar leg projectspecifieke interacties en effecten vast in componenten en gewone CSS waar dat duidelijker is.

## 4. Zet content om naar echte webcontent

PDF's mogen downloadbaar blijven, maar de hoofdinhoud moet ook als HTML leesbaar zijn.

Werkwijze:

- extraheer tekst uit PDF's of bronbestanden
- corrigeer extractieruis
- behoud hoofdstukstructuur
- maak markdown of JSON als lokale contentbron
- maak anchors voor hoofdstukken
- maak voetnoten klikbaar
- maak citaten en belangrijke passages scanbaar
- voeg printstijl toe waar relevant

Let op:

- verwijder dubbele paginanummers
- herstel rare regelafbrekingen
- corrigeer voetnootplaatsing
- voorkom inhoudsopgave-ruis in hoofdcontent
- laat downloads in `public/downloads`

## 5. Ontwerp visueel vanuit het doel

De visuele ervaring moet het doel van de site versterken.

Voor een essay, manifest of inhoudelijke site:

- typografie is hoofdbeeld
- sobere kleurkeuze
- veel witruimte
- sterke leesbaarheid
- geen stockfoto's tenzij inhoudelijk noodzakelijk
- effecten zijn ondersteunend, niet decoratief

Voor een product, campagne of portfolio:

- laat product of resultaat snel zien
- gebruik echte of gegenereerde beelden waar passend
- maak de primaire actie duidelijk

Voor interactieve of experientiele sites:

- gebruik canvas, SVG, WebGL of Three.js alleen als het iets toevoegt
- respecteer `prefers-reduced-motion`
- test mobiel en desktop
- voorkom horizontale scroll
- voorkom effecten die tekst of navigatie hinderen

## 6. Bouw effecten als componenten

Maak visuele effecten herbruikbaar.

Voorbeelden:

- scroll reveal via IntersectionObserver
- groeiende SVG-lijnen
- subtiele WebGL-achtergrond
- sticky inhoudsopgave
- actieve hoofdstukmarkering
- popovers voor voetnoten of referenties
- copy-knoppen voor citaten

Effectregels:

- progressive enhancement
- geen zware dependency zonder noodzaak
- fallback bij reduced motion
- geen layout shift
- geen horizontale overflow
- touch/mobile expliciet testen

## 7. Maak navigatie betrouwbaar

Voor meertalige sites:

- taalwissel op elke pagina
- gelijke routes per taal
- canonical per taal
- hreflang voor beschikbare talen
- consistente labels

Voor leesflows:

- previous en next kloppen op elke pagina
- samenvattingspagina's zitten in de hoofdflow als ze belangrijk zijn
- downloads zijn bereikbaar maar vervangen de HTML-content niet
- hoofdstukanchors scrollen niet onder de sticky header

## 8. SEO en metadata

Elke route krijgt:

- title
- description
- og:title
- og:description
- canonical
- hreflang indien meertalig

Controleer ook:

- favicon
- theme-color
- viewport meta
- semantische headings
- alt-teksten voor echte beelden

## 9. GitHub Pages deployment

Gebruik een workflow die bij push naar `main`:

1. dependencies installeert
2. `npm run generate` draait
3. `.output/public` publiceert naar GitHub Pages

Let op:

- configureer `app.baseURL` als de site onder een subpad draait
- gebruik `CNAME` alleen bij custom domain hosting
- documenteer DNS en custom domain setup in README
- zorg dat alle statische routes direct werken na deploy

## 10. README voor publieke repository

De README moet minimaal uitleggen:

- lokaal draaien
- dependencies installeren
- static build genereren
- deploy naar GitHub Pages
- custom domain instellen
- waar content aangepast wordt
- waar downloads vervangen worden
- hoe issues gebruikt mogen worden

## 11. Verificatiechecklist

Voor oplevering:

- `npm install` werkt
- `npm run dev` werkt
- `npm run generate` werkt
- routes bestaan na static generation
- downloads werken
- taalwissel werkt
- interne links werken
- previous/next klopt
- mobiele layout heeft geen horizontale scroll
- popovers/modals zijn sluitbaar op touch
- sticky headers bedekken anchors niet
- reduced motion wordt gerespecteerd
- Lighthouse is minimaal goed op performance, accessibility en SEO

## 12. PR-werkwijze

Werk in kleine PR's:

- basisproject en static deploy
- contentextractie
- visuele ervaring
- leesflow en navigatie
- mobiele polish
- SEO en documentatie

Elke PR bevat:

- korte samenvatting
- wat gewijzigd is
- waarom
- verificatiecommando's
- bekende beperkingen of vervolgpunten

## 13. Belangrijke les

Een indrukwekkende website ontstaat niet door effecten toe te voegen aan willekeurige content. Eerst moet de inhoud kloppen, daarna de reis, daarna de visuele intensiteit.

De beste volgorde is:

1. Begrijp de bron.
2. Ontwerp de bezoekersreis.
3. Maak content echt leesbaar op het web.
4. Bouw de statische site.
5. Voeg effecten toe die het doel versterken.
6. Test mobiel, desktop en deploy.

Als de flow niet klopt, voelt zelfs een mooie site onrustig. Als de flow klopt, kunnen visuele effecten de inhoud dragen in plaats van maskeren.
