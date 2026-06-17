# Wow-factor aanbevelingen voor keukendesign.nl

Onderzoek naar moderne browsertechnieken die de nieuwe website kunnen versterken. Uitgangspunt: effecten zijn alleen zinvol wanneer ze bijdragen aan begrip, betrokkenheid, vertrouwen of conversie. Dit document is adviserend; er is niets geïmplementeerd.

## Architectuurcorrectie

De website wordt expliciet gebouwd als **statische GitHub Pages website**. Alle aanbevolen effecten moeten werken binnen static output vanuit een GitHub repository, zonder backend, server runtime, database of verplichte externe CMS-laag. Effecten die serverfuncties, runtime image services of eigen API’s nodig hebben zijn uitgesloten; interactieve functies moeten client-side, build-time of via gewone statische assets werken.

## Bronnen en technische basis

Gebruikte primaire bronnen:

- [MDN: View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API)
- [MDN: CSS scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations)
- [MDN: Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [MDN: Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion)
- [MDN: WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)
- [three.js docs](https://threejs.org/docs/index.html)
- [web.dev: high-performance CSS animations](https://web.dev/articles/animations-guide)
- [Leaflet](https://leafletjs.com/)
- [MDN: Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)

Belangrijke technische uitgangspunten:

- View Transitions kunnen context behouden tussen pagina’s en states.
- Scroll-driven animations kunnen animaties koppelen aan scrollprogressie in plaats van tijd.
- Intersection Observer is geschikt voor progressieve onthulling zonder voortdurend scrollposities op de main thread te meten.
- Motion moet altijd `prefers-reduced-motion` respecteren.
- WebGL/Three.js is krachtig, maar moet spaarzaam en doelgericht worden ingezet vanwege performance, batterij, complexiteit en toegankelijkheid.
- Animaties blijven het meest performant wanneer ze voornamelijk `transform` en `opacity` gebruiken.

## Ontwerpprincipe

De site verkoopt geen entertainmentproduct, maar een premium maatwerkkeuken. Wow-factor moet daarom niet spektakel zijn, maar **rustige overtuiging**:

- Laat materialen beter begrijpen.
- Laat ontwerpkeuzes logisch voelen.
- Laat projectfoto’s meer betekenis krijgen.
- Maak de route naar afspraak vloeiender.
- Verhoog vertrouwen door aandacht, precisie en polish.

Vermijd effecten die alleen decoratief zijn, afleiden van foto’s of de site zwaarder maken zonder inhoudelijke opbrengst.

## Beoordelingsmatrix

| Techniek | Aanbevolen niveau | Begrip | Betrokkenheid | Vertrouwen | Conversie |
| --- | --- | --- | --- | --- | --- |
| Micro-interacties | Hoog | Middel | Hoog | Hoog | Hoog |
| Progressieve content-onthulling | Hoog | Hoog | Middel | Hoog | Middel |
| Projectfilter-interacties | Hoog | Hoog | Hoog | Middel | Hoog |
| View transitions | Middel | Middel | Middel | Hoog | Middel |
| Scroll storytelling | Middel | Hoog | Hoog | Middel | Middel |
| Interactieve kaarten | Middel | Hoog | Middel | Hoog | Hoog |
| Interactieve diagrammen | Middel | Hoog | Middel | Hoog | Middel |
| Dynamische achtergronden | Laag | Laag | Middel | Laag | Laag |
| WebGL / Three.js | Selectief | Middel | Hoog | Middel | Laag-Middel |
| Zware page transitions | Laag | Laag | Middel | Laag | Laag |

## Aanbevolen Set Effecten

### 1. Subtiele micro-interacties

Gebruik voor:

- Projectcards.
- CTA-knoppen.
- Navigatie-dropdowns.
- Filterchips.
- Afspraakformulier.
- Telefoon/route-acties op mobiel.

Voorbeelden:

- Projectcard toont bij hover/focus systeem, materiaal en locatie.
- CTA krijgt subtiele beweging of kleurverdieping bij hover/focus.
- Filterchip animeert kort bij selectie.
- Formulier geeft rustige inline feedback.

Voordelen:

- Verhoogt gevoel van kwaliteit en precisie.
- Maakt interactieve elementen herkenbaar.
- Ondersteunt conversie zonder schreeuwerige verkoop.

Nadelen:

- Kan onrustig worden als elke component beweegt.
- Vereist consistente motionregels.

Performance impact:

- Laag, mits beperkt tot `transform` en `opacity`.
- Geen layout-animaties zoals width, height, top of left.

Mobiele impact:

- Hover valt weg; gebruik tap states, pressed states en duidelijke focus.
- Animaties korter houden op mobiel.

Toegankelijkheid impact:

- Focus states mogen niet alleen kleur of beweging gebruiken.
- Respecteer `prefers-reduced-motion`.

Aanbeveling:

- Wel doen. Dit is de veiligste en meest waardevolle wow-factor.

### 2. Progressieve content-onthulling

Gebruik voor:

- Homepage-secties.
- Adviesproces.
- Projectdetails.
- FAQ-blokken.
- Materiaal-/apparatuurkeuzes.

Voorbeelden:

- Secties verschijnen subtiel wanneer ze in beeld komen.
- Processtappen worden één voor één zichtbaar.
- Projectcase onthult uitdaging, oplossing en materiaalkeuzes in logische volgorde.

Voordelen:

- Maakt complexe informatie lichter verteerbaar.
- Stuurt aandacht zonder bezoeker te dwingen.
- Past bij het idee van een begeleid showroomgesprek.

Nadelen:

- Te veel reveal-effecten maken content traag of voorspelbaar.
- Content mag nooit onbereikbaar zijn zonder JavaScript.

Performance impact:

- Laag tot middel.
- Gebruik Intersection Observer of CSS waar mogelijk.
- Vermijd zware scroll event handlers.

Mobiele impact:

- Goed toepasbaar, maar animatieafstand klein houden.
- Geen vertraagde onthulling van essentiële contactinformatie.

Toegankelijkheid impact:

- Content moet in DOM aanwezig blijven.
- Reduced motion: direct tonen of alleen fade zonder beweging.

Aanbeveling:

- Wel doen, vooral voor proces en projectverhalen.

### 3. Projectfilters met vloeiende herordening

Gebruik voor:

- Projectoverzicht.
- Projectcategorieën zoals eiland, klein, hoek, grote leefkeuken.
- Materiaal- en systeemfilters.

Voorbeelden:

- Filterchips voor b1/b2/b3, eiland, hout, aluminium, regio.
- Resultaten herordenen met korte fade/scale.
- Actieve filters blijven zichtbaar als chips.

Voordelen:

- Verhoogt begrip: bezoekers vinden voorbeelden die lijken op hun situatie.
- Maakt de grote fotobibliotheek bruikbaar.
- Sterke conversiewaarde doordat relevante projecten sneller worden gevonden.

Nadelen:

- Vereist goede metadata per project.
- Te veel filters kunnen complex worden.

Performance impact:

- Laag bij tientallen projecten.
- Middel bij honderden projecten zonder virtualisatie of server-side filtering.

Mobiele impact:

- Filterchips moeten horizontaal scrollbaar of als bottom sheet beschikbaar zijn.
- Resultatenlijst moet snel blijven.

Toegankelijkheid impact:

- Filters moeten keyboard-bedienbaar zijn.
- Gebruik `aria-pressed` of checkbox-semantiek.
- Announce aantal resultaten na filterwijziging.

Aanbeveling:

- Hoogste prioriteit voor projectpagina’s.

### 4. View transitions tussen projectoverzicht en projectcase

Gebruik voor:

- Projectcard → projectdetail.
- Projectdetail → gerelateerd project.
- Filterstate → detail en terug.

Voorbeelden:

- De projectfoto vloeit van card naar hero.
- Terugknop behoudt context en scrollpositie.

Voordelen:

- Bezoeker behoudt ruimtelijke context.
- Premium gevoel zonder zware animatie.
- Ondersteunt exploratie van projecten.

Nadelen:

- Browserondersteuning en implementatie moeten progressief worden behandeld.
- Te opvallende transitions kunnen traag of gimmicky voelen.

Performance impact:

- Laag tot middel.
- Beperk tot afbeelding en titel; niet de hele pagina laten bewegen.

Mobiele impact:

- Zeer kort houden.
- Bij reduced motion uitschakelen.

Toegankelijkheid impact:

- Focus moet correct naar de nieuwe pagina/heading gaan.
- Reduced motion respecteren.

Aanbeveling:

- Gefaseerd doen. Goed voor polish, niet noodzakelijk voor MVP.

### 5. Scroll storytelling voor het adviesproces

Gebruik voor:

- Advies/werkwijze pagina.
- Homepageblok “van oriëntatie tot realisatie”.

Voorbeelden:

- Links vaste korte procesnavigatie, rechts tekst en beeld per stap.
- Progress indicator: oriëntatie, gesprek, ontwerp, calculatie, inmeten, montage, nazorg.
- Foto’s of schetsen wisselen rustig per stap.

Voordelen:

- Maakt een grote aankoop overzichtelijk.
- Verhoogt vertrouwen in het proces.
- Past goed bij de bestaande content over 3D-ontwerp, calculatie en montage.

Nadelen:

- Kan snel zwaar of geforceerd worden.
- Scrolljacking is uitgesloten; natuurlijke scroll moet blijven.

Performance impact:

- Laag tot middel met CSS scroll-driven animations.
- Middel tot hoog bij custom JavaScript scroll timelines of zware beeldwissels.

Mobiele impact:

- Op mobiel liever gewone gestapelde cards met subtiele progressie.
- Geen pinned sections die viewportproblemen geven.

Toegankelijkheid impact:

- Contentvolgorde moet logisch blijven zonder animatie.
- Reduced motion: statische stappenlijst.

Aanbeveling:

- Wel doen op adviespagina, maar ingetogen en zonder scrolljacking.

### 6. Interactieve materiaal- en systeemdiagrammen

Gebruik voor:

- Bulthaup b1/b2/b3 vergelijking.
- Materialenpagina.
- Systeem en indeling.
- Apparatuurkeuze.

Voorbeelden:

- Klikbare vergelijkingstabel b1/b2/b3.
- Diagram van keukenworkflow: voorraad → koelen → voorbereiden → koken → afwassen → afval.
- Materiaalmatrix met onderhoud, uitstraling en toepassing.

Voordelen:

- Verhoogt begrip.
- Maakt expertise zichtbaar.
- Helpt bezoekers betere vragen stellen voor een afspraak.

Nadelen:

- Vereist inhoudelijke precisie.
- Kan onderhoud vragen bij productwijzigingen.

Performance impact:

- Laag als gebouwd met HTML/CSS/SVG.
- Geen WebGL nodig.

Mobiele impact:

- Gebruik tabs, accordions of horizontale vergelijking met sticky rijlabels.

Toegankelijkheid impact:

- Diagram moet tekstalternatief hebben.
- Interactieve onderdelen moeten keyboard-bedienbaar zijn.

Aanbeveling:

- Wel doen. Hoge inhoudelijke waarde, lage technische risico’s.

### 7. Interactieve showroomkaart

Gebruik voor:

- Showroompagina.
- Contactpagina.
- Footer/routeblok.

Voorbeelden:

- Kaart met Grote Haag 15.
- Parkeergarage Koestraat en Q-Park Mondriaan als markers.
- Knoppen: route openen, bellen, afspraak maken.

Voordelen:

- Verbetert lokale UX.
- Verhoogt vertrouwen en bezoekintentie.
- Lost praktische frictie op.

Nadelen:

- Externe maptiles/scripts hebben privacy- en performance-impact.
- Cookie/consent en tracking moeten netjes worden geregeld.

Performance impact:

- Middel als interactieve kaart direct laadt.
- Laag als kaart lazy-loaded wordt na klik “Toon kaart”.
- Leaflet is relatief licht, maar tiles blijven netwerkverkeer.

Mobiele impact:

- Goed bruikbaar als kaart niet de hele pagina overneemt.
- Routeknop is belangrijker dan vrij pannen/zoomen.

Toegankelijkheid impact:

- Kaart moet begeleid worden door tekstadres, routebeschrijving en links.
- Keyboardbediening en focus states controleren.

Aanbeveling:

- Wel doen als progressive enhancement: eerst statisch contactblok, kaart pas laden op interactie of onder de vouw.

### 8. Page transitions

Gebruik voor:

- Subtiele fade tussen top-level pagina’s.
- Projectoverzicht naar projectcase.

Voordelen:

- Verbetert gevoel van samenhang.
- Kan perceived latency verlagen.

Nadelen:

- Overdreven page transitions voelen snel traag.
- Kan focus en scrollpositie verstoren.

Performance impact:

- Laag bij View Transition API met eenvoudige snapshots.
- Middel als JavaScript routing en custom transitions worden toegevoegd.

Mobiele impact:

- Kort houden, maximaal 150-250 ms.

Toegankelijkheid impact:

- Focusmanagement is verplicht.
- Reduced motion uitschakelen.

Aanbeveling:

- Alleen subtiel toepassen; geen zware full-screen wipes.

### 9. Dynamische achtergronden

Gebruik voor:

- Niet aanbevolen als standaard patroon.
- Eventueel alleen een heel subtiele material texture of lichte foto-parallax in hero.

Voordelen:

- Kan sfeer versterken.

Nadelen:

- Leid snel af van keukenfotografie.
- Kan premium rust verminderen.
- Verhoogt performancekosten zonder veel begrip.

Performance impact:

- Laag bij statische CSS/textuur.
- Middel tot hoog bij video, canvas of WebGL.

Mobiele impact:

- Vaak negatief door batterij, dataverbruik en scrolljank.

Toegankelijkheid impact:

- Bewegende achtergronden kunnen hinderlijk zijn.
- Contrast en leesbaarheid komen snel onder druk.

Aanbeveling:

- Meestal vermijden. Gebruik echte projectfotografie als visueel fundament.

### 10. WebGL / Three.js

Gebruik uitsluitend voor een inhoudelijk sterke toepassing:

- 3D materiaal-/frontvisualisatie.
- Eenvoudige keukenindeling-viewer.
- Interactieve b3 wand-/nisstructuur.

Niet gebruiken voor:

- Decoratieve draaiende objecten.
- Abstracte dynamische achtergronden.
- Een volledige configurator in de eerste versie.

Voordelen:

- Kan complexe ruimtelijke of materiaalkeuzes tastbaar maken.
- Sterk onderscheidend als het echt helpt bij begrip.

Nadelen:

- Hoge ontwikkel- en onderhoudskosten.
- Assetoptimalisatie, fallback, browser/deviceverschillen en testing zijn substantieel.
- Kan afleiden van echte fotografie.

Performance impact:

- Hoog.
- GPU, geheugen, batterij en laadtijd worden geraakt.
- Texturen, modellen en shaders moeten strikt geoptimaliseerd worden.

Mobiele impact:

- Risicovol op oudere telefoons.
- Moet lazy-loaded zijn en een statisch alternatief hebben.
- Niet automatisch starten boven de vouw.

Toegankelijkheid impact:

- Canvas-content heeft tekstalternatieven nodig.
- Keyboard- en screenreader-equivalenten zijn noodzakelijk.
- Reduced motion en low-power scenario’s moeten fallback krijgen.

Aanbeveling:

- Niet in MVP. Later alleen als aparte, optionele module met duidelijke inhoudelijke waarde.

## Niet Aanbevolen Effecten

### Scrolljacking

Niet gebruiken. Het voelt onrustig, breekt verwachte browserinteractie en schaadt mobiele bruikbaarheid.

### Autoplay video als hero

Niet standaard gebruiken. Het verhoogt dataverbruik en kan afleiden. Een stille, korte showroomvideo kan later optioneel, maar projectfotografie is waarschijnlijk sterker.

### Zware 3D achtergrond

Niet gebruiken. Het draagt weinig bij aan keukenkeuze en schaadt performance en rust.

### Overmatige parallax

Alleen zeer subtiel, en nooit als inhoudsdrager. Grote panning/scaling kan vestibulaire klachten triggeren.

## Performance-richtlijnen

- Gebruik animaties primair op `transform` en `opacity`.
- Vermijd animatie van layout- en paint-zware eigenschappen.
- Lazy-load zware media, kaarten en eventuele 3D modules.
- Gebruik responsive images en moderne formaten.
- Beperk JavaScript voor motion; CSS waar mogelijk.
- Gebruik Intersection Observer voor reveal/lazy behavior.
- Houd animaties kort: meestal 120-300 ms.
- Gebruik `will-change` spaarzaam en tijdelijk.
- Meet op echte mobiele apparaten, niet alleen desktop.

## Mobiele Richtlijnen

- Mobiel krijgt minder motion dan desktop.
- Geen pinned scroll storytelling op kleine schermen.
- Projectfilters moeten snel en touchvriendelijk zijn.
- CTA’s blijven belangrijker dan visuele effecten.
- Kaarten laden pas wanneer de bezoeker route/showroominformatie nodig heeft.
- WebGL/Three.js nooit automatisch laden op mobiel.

## Toegankelijkheidsrichtlijnen

- Respecteer `prefers-reduced-motion`.
- Zorg dat alle content zonder animatie beschikbaar blijft.
- Gebruik duidelijke focus states.
- Maak interactieve diagrammen keyboard-bedienbaar.
- Geef canvas/WebGL en kaarten tekstalternatieven.
- Behoud logische heading- en DOM-volgorde.
- Vermijd motion die grote objecten laat schalen, pannen of roteren.
- Animatie mag niet nodig zijn om informatie te begrijpen.

## Aanbevolen Implementatievolgorde

### Fase 1: Hoog rendement, laag risico

- Micro-interacties voor CTA’s, kaarten/cards, filters en formulieren.
- Progressieve onthulling van secties via Intersection Observer.
- Projectfilters met subtiele result transitions.
- Accordions voor FAQ, voorbereiding en technische details.
- Statische routekaart/contactblok met optionele lazy-loaded interactieve kaart.

Waarom:

- Verbetert UX en conversie direct.
- Laag technisch risico.
- Goed mobiel en toegankelijk te maken.

### Fase 2: Inhoudelijke wow-factor

- Scroll storytelling voor adviesproces.
- Interactieve b1/b2/b3 vergelijking.
- Interactieve keukenworkflow: opslag, voorbereiden, koken, afzuiging, spoelen, afval.
- View transitions tussen projectcards en projectcases.

Waarom:

- Verhoogt begrip en vertrouwen.
- Maakt Stadshaege’s expertise zichtbaar.
- Past bij premium, zonder gimmick.

### Fase 3: Alleen bij duidelijke meerwaarde

- Three.js/WebGL materiaalviewer of eenvoudige ruimtelijke module.
- Optionele showroomvisualisatie.
- Geavanceerde page transitions.

Waarom:

- Kan onderscheidend zijn, maar alleen als er voldoende budget, content en onderhoudscapaciteit is.

## Aanbevolen Effectenset Voor De Nieuwe Site

De ideale set voor keukendesign.nl:

1. **Subtiele micro-interacties** op knoppen, projectcards, filters en formulierfeedback.
2. **Progressieve content-onthulling** voor homepage, adviesstappen en projectcases.
3. **Projectfilters met vloeiende result transitions** voor het projectoverzicht.
4. **Interactiearme scroll storytelling** voor het adviesproces, met statische mobiele fallback.
5. **Interactieve HTML/SVG-diagrammen** voor b1/b2/b3, materialen en keukenworkflow.
6. **Lazy-loaded interactieve showroomkaart** met parkeer- en routeinformatie.
7. **Subtiele View Transitions** tussen projectoverzicht en projectdetail, alleen als progressive enhancement.

Niet aanbevolen voor de eerste versie:

- WebGL/Three.js als hero of achtergrond.
- Zware dynamische achtergronden.
- Scrolljacking.
- Autoplay video als primaire hero.
