# UX-strategie nieuwe website keukendesign.nl

Ontwerpstrategie voor de ideale nieuwe website van Stadshaege keukendesign. Gebaseerd op de bestaande content in `source/`, de doelgroepanalyse, de informatiearchitectuur en het referentieonderzoek. Dit document beschrijft ontwerpkeuzes en hun waarde; er is niets geïmplementeerd.

## Architectuurcorrectie

De website wordt expliciet gebouwd als **statische GitHub Pages website**. Alle UX-patronen in dit document moeten passen binnen static output vanuit een GitHub repository, zonder backend, server runtime, database of verplichte externe CMS-laag. Interacties zoals filters, zoekoverlay, micro-interacties en kaarten moeten daarom client-side of build-time werken en mogen geen eigen API/backend vereisen.

## Strategisch Uitgangspunt

De nieuwe website moet voelen als een persoonlijk showroomgesprek voordat de bezoeker de showroom bezoekt: rustig, deskundig, visueel overtuigend en praktisch. De site moet niet proberen een grote internationale merkwebsite te worden. De kracht zit juist in de combinatie van bulthaup, lokale showroom, eigen ervaring, praktische kookkennis en persoonlijke begeleiding door Filip Leenman.

De UX moet daarom vier taken begeleiden:

- Inspireren met echte projecten en zorgvuldig gekozen fotografie.
- Uitleggen waarom bulthaup en Stadshaege passen bij de bezoeker.
- Voorbereiden op een persoonlijk adviesgesprek.
- Converteren naar afspraak, telefoontje, mail of showroombezoek.

Waarde: dit sluit aan op hoe premium keukens worden gekocht. Bezoekers beslissen niet impulsief; zij willen eerst vertrouwen, bewijs en grip op het proces.

## Homepage Concept

### Concept: “Persoonlijk ontworpen bulthaup-keukens in Amersfoort”

De homepage wordt geen lange fotogalerij, maar een begeleide route. Bovenaan staat direct:

- Een sterke hero met een echte Stadshaege/bulthaup-keuken.
- Een duidelijke positionering: persoonlijke bulthaup-keukens op maat, ontworpen vanuit woning, kookgedrag en dagelijks gebruik.
- Primaire CTA: “Maak een afspraak”.
- Secundaire CTA: “Bekijk projecten”.

Waarde: de bezoeker begrijpt in één scherm wat de site aanbiedt, waarom het relevant is en wat de volgende stap is.

### Homepage Opbouw

1. **Hero**

   Inhoud:

   - Grote keukenfoto.
   - Korte claim.
   - Eén zin met bewijs: sinds 1998 in Amersfoort, ruim 40 jaar keukenvakkennis.
   - CTA’s: afspraak maken, projecten bekijken.

   Waarde: combineert premium uitstraling met directe duidelijkheid en conversie.

2. **Drie Keuzeroutes**

   Blokken:

   - Ik zoek inspiratie.
   - Ik wil bulthaup begrijpen.
   - Ik wil advies of een afspraak.

   Waarde: bezoekers met verschillende intenties krijgen direct een passende route zonder te hoeven zoeken.

3. **Geselecteerde Projecten**

   3 tot 6 projecttegels met foto, opstelling, systeem en regio.

   Waarde: benut bestaande fotografie als bewijs, maar maakt die scanbaar en betekenisvol.

4. **Waarom Stadshaege**

   Korte sectie met persoonlijke expertise:

   - Ontwerp vanuit woning en gewoontes.
   - Praktische logistiek en ergonomie.
   - Materiaal, lichtval en architectuur.
   - Montage en service.

   Waarde: onderscheidt Stadshaege van generieke keukenzaken en internationale merkwebsites.

5. **Bulthaup in één oogopslag**

   Korte vergelijking of introductie van b1, b2 en b3.

   Waarde: helpt merkgerichte bezoekers en creëert interne links naar productpagina’s.

6. **Adviesproces in stappen**

   Oriëntatie → gesprek → 3D-ontwerp → calculatie → realisatie → nazorg.

   Waarde: verlaagt onzekerheid over het aankoopproces.

7. **Showroomblok**

   Adres, openingstijden, route/parkeren en afspraak-CTA.

   Waarde: maakt de fysieke showroom een logisch eindpunt van de online ervaring.

8. **Footer**

   Contact, afspraak, navigatie, regio, social en juridisch.

   Waarde: ondersteunt snelle beslissers en SEO via consistente interne links.

## Paginatypen

### 1. Projectoverzicht

Doel: inspiratie, bewijs en oriëntatie.

Structuur:

- Intro: “Gerealiseerde bulthaup-keukens door Stadshaege”.
- Filterchips: klein, eiland, hoek, grote leefkeuken, b1, b2, b3, hout, aluminium, wit, donker, regio.
- Projectcards met beeld, titel, korte kenmerken en CTA.
- Blok “Bespreek uw eigen ruimte”.

Waarde: vervangt de huidige lange beeldreeksen door een bruikbaar portfolio. Bezoekers vinden sneller voorbeelden die lijken op hun situatie.

### 2. Projectcase

Doel: projectbewijs verdiepen.

Structuur:

- Hero-afbeelding.
- Samenvatting met systeem, opstelling, materiaal, apparatuur en regio.
- De vraag.
- De ontwerpuitdaging.
- De oplossing.
- Fotogalerij.
- Gerelateerde projecten.
- CTA: “Bespreek een vergelijkbaar ontwerp”.

Waarde: maakt bestaande fotografie commercieel sterker. Een case laat niet alleen zien dat iets mooi is, maar bewijst denkwerk, maatwerk en ervaring.

### 3. Bulthaup Overzicht

Doel: merkwaarde en systeemkeuze uitleggen.

Structuur:

- Korte merkintro.
- Vergelijkingsblok b1/b2/b3.
- Materialen en functies.
- Projectvoorbeelden per systeem.
- Showroom-CTA.

Waarde: lost het huidige probleem op waarin b1/b2/b3 onvoldoende helder zijn en sommige URL’s leeg/dun zijn.

### 4. Bulthaup Systeempagina

Doel: helpen kiezen.

Structuur:

- Voor wie is dit systeem geschikt?
- Belangrijkste eigenschappen.
- Mogelijke materialen en opstellingen.
- Praktische pluspunten.
- Vergelijking met andere systemen.
- Relevante projecten.
- Afspraak-CTA.

Waarde: geeft bezoekers grip op complexiteit en ondersteunt SEO op specifieke bulthaup-termen.

### 5. Adviespagina

Doel: de persoonlijke aanpak verkopen zonder harde verkoopdruk.

Structuur:

- “Wat levert een adviesgesprek op?”
- Herkenbare vragen over koken, voorraad, ontbijt, afval, samen koken en ergonomie.
- Proces in stappen.
- Wat neemt de bezoeker mee?
- Wat doet Stadshaege?
- CTA: afspraak maken.

Waarde: benut de sterkste bestaande inhoud: Filip’s praktische, persoonlijke ontwerpbenadering.

### 6. Showroompagina

Doel: fysiek bezoek stimuleren.

Structuur:

- Wat is er te ervaren?
- Welke bulthaup-systemen/materialen zijn te zien?
- Waarom materialen live bekijken?
- Adres, openingstijden, route en parkeren.
- Afspraak-CTA en belactie.

Waarde: maakt de showroom onderdeel van de overtuiging, niet alleen een contactlocatie.

### 7. Apparatuurpagina

Doel: apparatuur koppelen aan kookstijl en ontwerp.

Structuur:

- Apparatuur kiezen vanuit dagelijks gebruik.
- Categorieën: koken/ovens, afzuiging, koelen, kranen/water.
- Merken als opties binnen context.
- Projectvoorbeelden met apparatuurkeuzes.
- Link naar advies.

Waarde: verandert een merkenlijst in een keuzehulp.

### 8. SEO-Landingspagina

Doel: vindbaarheid zonder duplicatie.

Structuur:

- Zoekintentie direct beantwoorden.
- Unieke uitleg.
- Relevante projecten.
- Interne links naar bulthaup, advies en showroom.
- FAQ-blok.
- Afspraak-CTA.

Waarde: ondersteunt SEO op termen als designkeukens, greeploze keukens, keukens op maat en keukens Amersfoort zonder de site rommelig te maken.

## Contentpresentatie

### Minder Foto’s Per Scherm, Meer Betekenis Per Foto

Gebruik per pagina een gecureerde selectie. Lange galerijen blijven beschikbaar in projectoverzichten of cases, maar niet boven alle tekst.

Waarde: bezoekers worden niet overspoeld en begrijpen beter waarom een foto relevant is.

### Contextlabels Bij Beelden

Voorbeelden:

- Bulthaup b3
- Kookeiland
- Donker aluminium
- Dekton werkblad
- Amersfoort

Waarde: foto’s worden scanbare informatie en dragen bij aan SEO, oriëntatie en filtering.

### Scanbare Tekstblokken

Gebruik korte alinea’s, tussenkoppen, bullets, vergelijkingstabellen en processtappen.

Waarde: premium bezoekers lezen selectief. Scanbaarheid verhoogt begrip zonder de rustige toon te verliezen.

### Persoonlijke Tekst Als Vertrouwensanker

De bestaande inhoud over koken, logistiek, architectuur, lichtval en eigen ervaring moet zichtbaar blijven, vooral op advies- en homepage.

Waarde: dit is onderscheidend en maakt Stadshaege geloofwaardiger dan een generieke merkdealer.

## Mobiele Ervaring

### Mobiele Prioriteiten

Op mobiel moet de site vooral snel duidelijkheid en actie bieden:

- Wat doet Stadshaege?
- Kan ik voorbeelden zien?
- Hoe maak ik een afspraak?
- Waar is de showroom?
- Kan ik direct bellen?

### Mobiele Navigatie

Gebruik een compacte menuknop met duidelijke hoofdroutes:

- Projecten
- Bulthaup
- Advies
- Showroom
- Apparatuur
- Contact

Onderaan of in de header:

- Maak afspraak
- Bel
- Route

Waarde: mobiele bezoekers zoeken vaak sneller contact of concrete locatie-informatie.

### Mobiele Contentpatronen

- Hero met korte tekst, niet te veel overlay.
- Horizontale filterchips voor projecten.
- Projectcards als verticale lijst.
- Accordion voor FAQ en technische details.
- Sticky onderste actiebalk op commerciële pagina’s.

Waarde: mobiele pagina’s blijven licht, scanbaar en conversiegericht.

### Mobiele Conversie

Belknop en afspraakknop moeten altijd binnen één scrollmoment bereikbaar zijn.

Waarde: vermindert frictie voor lokale en warme bezoekers.

## Desktop Ervaring

### Desktop Prioriteiten

Desktop is geschikt voor rustige oriëntatie, vergelijken en projectonderzoek:

- Grote beelden.
- Meer context naast beeld.
- Vergelijkingstabellen.
- Projectfilters.
- Meerdere routes naast elkaar.

### Desktop Layout

- Ruime hero’s met sterke fotografie.
- Maximaal leesbare tekstbreedte.
- Tweekolomssecties voor beeld + uitleg.
- Grid voor projectcards.
- Sticky rechterkolom of subtiele CTA bij lange advies-/SEO-pagina’s.

Waarde: desktopbezoekers kunnen dieper vergelijken zonder te verdwalen.

### Desktop Navigatie

Gebruik een vaste hoofdnavigatie met dropdowns of mega-menu’s voor:

- Bulthaup: b1, b2, b3, materialen, systemen.
- Projecten: categorieën en recente cases.
- Advies: werkwijze, afspraak voorbereiden, FAQ.

Waarde: maakt de schaalbare contentstructuur zichtbaar zonder de hoofdnavigatie te vergroten.

## Interactiepatronen

### Projectfilters

Filters:

- Opstelling: eiland, hoek, wand, klein, groot.
- Systeem: b1, b2, b3.
- Materiaal: hout, aluminium, lak, rvs, steen/dekton.
- Regio.

Waarde: bezoekers vinden sneller relevante voorbeelden en projectfoto’s worden meer dan decoratie.

### Vergelijkingsblokken

Voor b1/b2/b3 en apparatuurcategorieën.

Waarde: helpt bezoekers rationeel kiezen en verlaagt de drempel naar advies.

### Processtappen

Interactief of statisch:

1. Oriëntatie
2. Showroomgesprek
3. 3D-ontwerp
4. Calculatie
5. Inmeten
6. Montage
7. Nazorg

Waarde: maakt een grote aankoop overzichtelijk en betrouwbaar.

### Accordions

Gebruik voor FAQ, technische details, voorbereiding en apparatuurdetails.

Waarde: houdt pagina’s rustig, maar maakt verdieping beschikbaar.

### Gerelateerde Content

Onder elk project en elke productpagina:

- Gerelateerde projecten.
- Relevant advies.
- Showroomafspraak.

Waarde: ondersteunt interne links, SEO en doorstroming.

### Afspraakmodule

Geen zware configurator nodig. Wel een eenvoudige aanvraagflow:

- Naam
- E-mail
- Telefoon
- Korte vraag
- Voorkeursmomenten
- Optioneel: type project of fase

Waarde: sluit aan op premium adviesverkoop en maakt opvolging concreet.

## Zoekfunctionaliteit

### Interne Zoekfunctie

Een eenvoudige zoekfunctie is zinvol zodra projectcases en adviescontent groeien. Zoek moet minimaal vinden op:

- Projecttitel
- Opstelling
- Materiaal
- Systeem
- Plaats/regio
- Apparatuur
- Adviesonderwerpen

Waarde: helpt terugkerende bezoekers en mensen die gericht zoeken naar bijvoorbeeld “bora”, “eiland”, “eiken” of “Amersfoort”.

### Zoekervaring

Aanbevolen patroon:

- Zoekicoon in header.
- Zoekoverlay met invoer en suggesties.
- Snelle suggesties: projecten, bulthaup b3, afspraak, showroom, apparatuur.
- Resultaten gegroepeerd op Projecten, Advies, Bulthaup, Apparatuur.

Waarde: voorkomt een platte lijst met resultaten en helpt bezoekers sneller kiezen.

### Wanneer Niet Te Zwaar Maken

Bij weinig content is zoek minder belangrijk dan goede navigatie en filters. Start daarom met projectfilters en eenvoudige site search; breid later uit.

Waarde: houdt scope beheersbaar en voorkomt onnodige complexiteit.

## Conversiestrategie

### Primaire Conversie

De primaire conversie is:

```text
Maak een persoonlijke showroomafspraak
```

Waarde: dit past bij premium maatwerk, bij de rol van de showroom en bij de bestaande persoonlijke verkoopstijl.

### Secundaire Conversies

- Bel direct.
- Mail een vraag.
- Bekijk route.
- Download/lees afspraakvoorbereiding.
- Bekijk projecten.

Waarde: niet elke bezoeker is klaar voor een afspraak. Secundaire acties houden oriënterende bezoekers binnen de funnel.

### CTA-Strategie Per Pagina

| Paginatype | Primaire CTA | Secundaire CTA | Waarde |
| --- | --- | --- | --- |
| Home | Maak een afspraak | Bekijk projecten | Combineert actie met oriëntatie. |
| Projectoverzicht | Bespreek uw keukenplan | Filter projecten | Verbindt inspiratie aan advies. |
| Projectcase | Bespreek vergelijkbaar ontwerp | Bekijk gerelateerde projecten | Maakt bewijs direct converteerbaar. |
| Bulthaup | Ervaar bulthaup in de showroom | Vergelijk b1/b2/b3 | Koppelt productbegrip aan bezoek. |
| Advies | Plan een adviesgesprek | Afspraak voorbereiden | Verlaagt drempel. |
| Showroom | Maak showroomafspraak | Route bekijken / bel | Ondersteunt lokale intentie. |
| Apparatuur | Bespreek apparatuurkeuze | Bekijk projecten met deze oplossing | Plaatst merken in ontwerpcontext. |

### Conversie Zonder Hard Te Verkopen

De toon moet adviserend blijven. Gebruik microcopy zoals:

- “We nemen graag de tijd voor uw keukenplan.”
- “Neem gerust plattegrond of foto’s mee.”
- “Een afspraak helpt om materialen, systemen en mogelijkheden goed te ervaren.”

Waarde: past bij het rustige premiumkarakter en verlaagt weerstand.

## Ontwerpkeuzes en Waarde

### Keuze 1: Compacte Hoofdnavigatie

Waarde: voorkomt keuzestress en maakt de site begrijpelijker. De diepte zit in dropdowns, footer en interne links.

### Keuze 2: Projecten Als Centraal Bewijs

Waarde: de bestaande fotobibliotheek wordt een verkoopinstrument. Bezoekers zien niet alleen mooie keukens, maar begrijpen de oplossing.

### Keuze 3: Advies Als Eigen Hoofdroute

Waarde: Stadshaege onderscheidt zich met persoonlijke expertise. Door advies zichtbaar te maken, wordt de site minder productfolder en meer deskundige begeleiding.

### Keuze 4: Showroom Als Ervaringsplek

Waarde: premium materialen, systemen en afwerking moet je zien en aanraken. Dit maakt showroombezoek logisch en waardevol.

### Keuze 5: Bulthaup-Systemen Vergelijken

Waarde: bezoekers die al merkgericht zoeken krijgen grip op b1, b2 en b3. Dit verbetert vindbaarheid en vermindert onzekerheid.

### Keuze 6: Mobiele Actiebalk

Waarde: lokale bezoekers kunnen snel bellen, route openen of een afspraak starten zonder door lange pagina’s te scrollen.

### Keuze 7: Rustige Visuele Taal

Waarde: sluit aan bij premium keukens en voorkomt dat de site als standaard keukenwinkel voelt.

### Keuze 8: Filters en Zoekfunctie Gefaseerd

Waarde: projectfilters leveren direct gebruikerswaarde. Volledige zoekfunctionaliteit kan meegroeien met meer cases en content.

## Te Behouden Uit De Huidige Website

- Persoonlijke toon van Filip Leenman.
- Praktische ontwerpvragen rond koken, logistiek en dagelijks gebruik.
- Bulthaup-focus.
- Veel eigen projectfotografie.
- Lokale Amersfoort-identiteit.
- Rustige, niet-opdringerige commerciële toon.

Waarde: dit zijn de onderscheidende elementen. De nieuwe UX moet ze beter presenteren, niet vervangen.

## Te Vermijden

- Grote ongestructureerde fotoreeksen vóór de belangrijkste tekst.
- Dubbele SEO-pagina’s met bijna dezelfde inhoud.
- Lege of dunne sitemappagina’s.
- Apparatuur als pure merkenlijst.
- Te zware configurator of planner in de eerste versie.
- Schreeuwerige verkooptaal of kortingscommunicatie.

Waarde: deze patronen zouden begrip, premiumgevoel en conversie ondermijnen.

## Conclusie

De ideale nieuwe website is een rustige premium advieswebsite met sterke projecten, duidelijke bulthaup-uitleg en een consistente afspraakroute. De UX moet bezoekers niet alleen inspireren, maar ook helpen begrijpen wat bij hun woning, kookgedrag en budget past. De beste ontwerpkeuze is daarom een begeleide ervaring: eerst visueel vertrouwen, daarna praktische uitleg, vervolgens afspraak of showroombezoek.

De kern van het ontwerp is: **minder losse content, meer begeleide route**. Daarmee wordt de site beter vindbaar, begrijpelijker, prettiger op mobiel en desktop, en sterker in conversie zonder de persoonlijke signatuur van Stadshaege te verliezen.
