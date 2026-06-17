# Informatiearchitectuur keukendesign.nl

Doel: een optimale websitestructuur ontwerpen voor betere vindbaarheid, begrijpelijkheid, gebruikerservaring, conversie en schaalbaarheid. Dit document is een ontwerpdocument; er is niets geïmplementeerd.

## Uitgangspunten

De nieuwe informatiearchitectuur moet vijf problemen oplossen:

- Bezoekers moeten sneller begrijpen wat Stadshaege levert: persoonlijke bulthaup-keukens op maat vanuit Amersfoort.
- Oriënterende bezoekers moeten makkelijk van inspiratie naar advies en afspraak kunnen bewegen.
- SEO-landingspagina’s moeten unieke zoekintenties bedienen zonder dubbele of dunne content.
- Projectfoto’s moeten beter worden benut als bewijs, met context en interne links.
- De structuur moet later uitbreidbaar zijn met nieuwe projecten, materialen, apparatuur, FAQ’s en regio-content.

De aanbevolen structuur is daarom taakgericht, niet alleen productgericht:

- **Inspireren:** projecten, stijlen, opstellingen.
- **Begrijpen:** bulthaup-systemen, materialen, apparatuur.
- **Plannen:** advies, werkwijze, afspraak voorbereiden.
- **Converteren:** showroomafspraak, bellen, mailen, route.

## Primaire Sitemap

```text
/
/bulthaup/
/bulthaup/b1/
/bulthaup/b2/
/bulthaup/b3/
/bulthaup/materialen/
/bulthaup/systemen-en-indeling/

/projecten/
/projecten/kleine-keukens/
/projecten/keukens-met-eiland/
/projecten/hoekkeukens/
/projecten/grote-leefkeukens/
/projecten/[project-slug]/

/advies/
/advies/werkwijze/
/advies/afspraak-voorbereiden/
/advies/montage-en-service/
/advies/veelgestelde-vragen/

/showroom/
/showroom/route-en-parkeren/

/apparatuur/
/apparatuur/koken-en-ovens/
/apparatuur/afzuiging/
/apparatuur/koelen/
/apparatuur/kranen-en-water/

/keukens-amersfoort/
/contact/
/privacy/
```

## Secundaire SEO-Sitemap

Deze pagina’s zijn zinvol als ze unieke content krijgen en intern logisch worden gekoppeld. Ze moeten geen duplicaten worden van bulthaup- of projectpagina’s.

```text
/design-keukens/
/greeploze-keukens/
/keukens-op-maat/
/moderne-keukens/
/luxe-keukens/
/keukens-utrecht/
/keukens-het-gooi/
```

Gebruik deze pagina’s alleen wanneer ze elk een eigen zoekintentie bedienen:

- `design-keukens`: designprincipes, materiaalrust, architectuur, bulthaup als designmerk.
- `greeploze-keukens`: bediening, greepprofielen, touch, b1/b3-verschillen, onderhoud.
- `keukens-op-maat`: proces, maatvoering, ruimteanalyse, plafondhoge kasten, praktische indeling.
- `moderne-keukens`: stijl en toepassing, met concrete voorbeelden.
- `luxe-keukens`: premium materialen, service, afwerking, langdurige kwaliteit.
- `keukens-utrecht` en `keukens-het-gooi`: alleen als er projectcases en regionale relevantie zijn.

## Pagina’s Die Samengevoegd of Herzien Moeten Worden

| Huidige content/URL | Advies | Reden |
| --- | --- | --- |
| `/gerealiseerd/` | Wordt `/projecten/` | Duidelijkere, schaalbare term en beter geschikt voor casecontent. |
| `/gerealiseerd-2/` | Redirect naar `/projecten/` | Dubbele content voorkomen. |
| `/ontwerpen/` en subpagina’s | Onderbrengen onder `/projecten/` en SEO-pagina’s | Opstellingen horen bij projectfilters en landingspagina’s. |
| `/werkwijze/` en stappen | Onderbrengen onder `/advies/werkwijze/` | Werkwijze is onderdeel van planning/advies. |
| `/showroom/*` | Eén sterke showroomsectie | Huidige subpagina’s lijken leeg/dun; showroom moet ervaringsgericht worden. |
| `/apparatuur/atag/`, `/miele/`, etc. | Niet als merkpagina tenzij uniek gevuld | Merkenlijst is minder nuttig dan keuzehulp per functie. |
| `/bulthaup/bulthaup-b1/` | `/bulthaup/b1/` | Korter, duidelijker, beter leesbaar. |
| `/bulthaup/bulthaup-b2/` | `/bulthaup/b2/` | Korter, duidelijker, beter leesbaar. |
| `/bulthaup/bulthaup-b3/` | `/bulthaup/b3/` | Korter, duidelijker, beter leesbaar. |

Bij live migratie moeten bestaande URL’s met 301-redirects worden opgevangen. Dit document implementeert die redirects niet.

## Primaire Navigatie

Aanbevolen hoofdnavigatie:

```text
Home
Bulthaup
Projecten
Advies
Showroom
Apparatuur
Contact
```

### Navigatiegedrag

- **Bulthaup** opent naar b1, b2, b3, materialen, systemen en indeling.
- **Projecten** opent naar overzicht, kleine keukens, keukens met eiland, hoekkeukens en grote leefkeukens.
- **Advies** opent naar werkwijze, afspraak voorbereiden, montage/service en veelgestelde vragen.
- **Showroom** opent naar showroom, route en parkeren.
- **Contact** blijft een directe pagina, geen dropdown.

### Primaire CTA in Header

Gebruik één vaste actie:

```text
Maak een afspraak
```

Secundaire mobiele acties:

```text
Bel
Route
```

Waarom: bellen is nu belangrijk, maar “Maak een afspraak” past beter bij premium maatwerk, verlaagt verkoopdruk en sluit aan op showroomgericht advies.

## Paginahiërarchie

### Niveau 1: Kernpagina’s

Deze pagina’s moeten in de hoofdnavigatie of footer zichtbaar zijn:

- Home
- Bulthaup
- Projecten
- Advies
- Showroom
- Apparatuur
- Contact
- Keukens Amersfoort

### Niveau 2: Ondersteunende Beslispagina’s

Deze pagina’s helpen bezoekers vergelijken, voorbereiden en vertrouwen opbouwen:

- Bulthaup b1
- Bulthaup b2
- Bulthaup b3
- Materialen
- Systemen en indeling
- Werkwijze
- Afspraak voorbereiden
- Montage en service
- Veelgestelde vragen
- Route en parkeren

### Niveau 3: Schaalbare Content

Deze pagina’s kunnen groeien zonder de hoofdnavigatie complexer te maken:

- Projectcases
- Projectcategorieën
- Apparatuurkeuzehulpen
- Materiaalverdiepingen
- Lokale/regiopagina’s
- SEO-landingspagina’s
- Inspiratie-artikelen

## Contentgroepen

### 1. Merk en Product

Doel: uitleggen waarom bulthaup en welk systeem past.

Pagina’s:

- `/bulthaup/`
- `/bulthaup/b1/`
- `/bulthaup/b2/`
- `/bulthaup/b3/`
- `/bulthaup/materialen/`
- `/bulthaup/systemen-en-indeling/`

Belangrijkste inhoud:

- Verschillen tussen b1, b2 en b3.
- Materiaalkeuze, fronten, werkbladen, hout, lak, aluminium, rvs.
- Praktische functies: lades, nissen, wandpanelen, apparatuurintegratie.
- Showroomverwijzing: welke systemen zijn te zien en te ervaren.

### 2. Inspiratie en Bewijs

Doel: bezoekers laten zien dat Stadshaege dit type keuken daadwerkelijk ontwerpt en realiseert.

Pagina’s:

- `/projecten/`
- Projectcategorieën
- Individuele projectcases

Belangrijkste inhoud:

- Curated projectoverzicht met filters.
- Caseverhalen met opdracht, oplossing, materiaal, systeem, apparatuur en regio.
- Foto’s met context in plaats van lange ongestructureerde beeldreeksen.
- CTA per case: “Bespreek een vergelijkbaar ontwerp”.

### 3. Advies en Planning

Doel: drempel naar afspraak verlagen en het persoonlijke proces tastbaar maken.

Pagina’s:

- `/advies/`
- `/advies/werkwijze/`
- `/advies/afspraak-voorbereiden/`
- `/advies/montage-en-service/`
- `/advies/veelgestelde-vragen/`

Belangrijkste inhoud:

- Persoonlijke aanpak van Filip Leenman.
- Dagelijkse kooklogistiek: boodschappen, voorraad, koelkast, ontbijt, afval, samen koken.
- Proces: oriëntatie, wensen, 3D-ontwerp, calculatie, inmeten, bestellen, montage, nazorg.
- Checklist voor afspraakvoorbereiding.

### 4. Showroom en Contact

Doel: conversie naar fysiek bezoek, telefoontje of mail.

Pagina’s:

- `/showroom/`
- `/showroom/route-en-parkeren/`
- `/contact/`

Belangrijkste inhoud:

- Wat is er te zien in de showroom?
- Waarom moet je materialen en systemen ervaren?
- Openingstijden.
- Afspraakmogelijkheden.
- Route en parkeren.
- Telefoon, mobiel, e-mail.

### 5. Apparatuur en Functionaliteit

Doel: apparatuur niet als merkenlijst presenteren, maar als keuzehulp binnen het ontwerp.

Pagina’s:

- `/apparatuur/`
- `/apparatuur/koken-en-ovens/`
- `/apparatuur/afzuiging/`
- `/apparatuur/koelen/`
- `/apparatuur/kranen-en-water/`

Belangrijkste inhoud:

- Welke apparatuur past bij welke kookstijl?
- Kookplaat, ovens, stoomoven, afzuiging, koeling, wijnklimaat, Quooker.
- Merken als bewijs en keuzeopties, niet als hoofdstructuur.

### 6. Lokale Vindbaarheid

Doel: lokale zoekvragen bedienen zonder generieke duplicatie.

Pagina’s:

- `/keukens-amersfoort/`
- Eventueel later `/keukens-utrecht/`
- Eventueel later `/keukens-het-gooi/`

Belangrijkste inhoud:

- Showroomlocatie.
- Regionale projecten.
- Route/parkeren.
- Lokale ervaring sinds 1998.
- Contact/afspraak bovenaan.

## Contenttemplates

### Template: Projectcase

```text
Titel: Bulthaup b3 keuken met kookeiland in [plaats/type woning]

1. Hero-afbeelding
2. Korte projectsamenvatting
3. De vraag
4. De ontwerpuitdaging
5. De oplossing
6. Materialen en systeem
7. Apparatuur en functies
8. Fotogalerij
9. Gerelateerde projecten
10. CTA: Bespreek een vergelijkbaar ontwerp
```

### Template: SEO-Landingspagina

```text
1. Zoekintentie direct beantwoorden
2. Korte Stadshaege/bulthaup-positionering
3. Belangrijkste mogelijkheden
4. Relevante projectvoorbeelden
5. Praktische ontwerpkeuzes
6. Veelgestelde vragen
7. Interne links naar bulthaup, advies en projecten
8. Afspraak-CTA
```

### Template: Adviespagina

```text
1. Wat levert persoonlijk keukenadvies op?
2. Voor wie is dit relevant?
3. Proces in stappen
4. Wat neemt de bezoeker mee?
5. Wat doet Stadshaege?
6. Veelgestelde vragen
7. Afspraak maken
```

### Template: Product-/Systeempagina

```text
1. Wat is dit systeem?
2. Voor welke gebruiker/ruimte past het?
3. Belangrijkste eigenschappen
4. Materialen en functies
5. Voorbeelden uit projecten
6. Vergelijking met andere systemen
7. Te ervaren in showroom
8. Afspraak-CTA
```

## Interne Linkstructuur

### Hoofdprincipe

Elke commerciële pagina moet drie routes bieden:

- Naar **bewijs**: relevante projecten.
- Naar **begrip**: product-, materiaal- of adviespagina.
- Naar **actie**: afspraak/contact/showroom.

### Linkclusters

#### Bulthaup Cluster

```text
/bulthaup/
  → /bulthaup/b1/
  → /bulthaup/b2/
  → /bulthaup/b3/
  → /bulthaup/materialen/
  → /projecten/
  → /showroom/
  → /advies/
```

Elke b1/b2/b3-pagina linkt naar:

- Relevante projectcases.
- Materialen.
- Systemen en indeling.
- Afspraak voorbereiden.
- Showroom.

#### Project Cluster

```text
/projecten/
  → categorieën
  → individuele cases
  → /bulthaup/b1|b2|b3/
  → /advies/
  → /showroom/
```

Elke projectcase linkt naar:

- Systeem: b1/b2/b3.
- Opstelling: eiland, hoek, klein, groot.
- Materiaalpagina indien relevant.
- Apparatuurcategorie indien relevant.
- CTA naar afspraak.

#### Advies Cluster

```text
/advies/
  → /advies/werkwijze/
  → /advies/afspraak-voorbereiden/
  → /advies/montage-en-service/
  → /advies/veelgestelde-vragen/
  → /projecten/
  → /showroom/
```

Elke adviespagina linkt naar:

- Contact/afspraak.
- Projecten als bewijs.
- Bulthaup-systemen als keuzecontext.

#### Lokale Cluster

```text
/keukens-amersfoort/
  → /showroom/
  → /showroom/route-en-parkeren/
  → regionale projectcases
  → /advies/
  → /contact/
```

Deze pagina moet vanuit footer, contact, showroom en projectcases terug gelinkt worden.

#### Apparatuur Cluster

```text
/apparatuur/
  → /apparatuur/koken-en-ovens/
  → /apparatuur/afzuiging/
  → /apparatuur/koelen/
  → /apparatuur/kranen-en-water/
  → relevante projectcases
  → /advies/
```

Apparatuurpagina’s moeten niet geïsoleerd staan. Ze moeten terug naar ontwerpkeuzes en projectvoorbeelden.

## Footerstructuur

De footer moet navigatie, lokale vindbaarheid en conversie ondersteunen.

```text
Stadshaege Keukendesign
Grote Haag 15
3811 HH Amersfoort
033-4627130
06-21295370
info@keukendesign.nl

Afspraak
- Maak een afspraak
- Showroom bezoeken
- Route en parkeren
- Afspraak voorbereiden

Keukens
- Bulthaup keukens
- Bulthaup b1
- Bulthaup b2
- Bulthaup b3
- Design keukens
- Greeploze keukens
- Keukens op maat

Inspiratie
- Projecten
- Kleine keukens
- Keukens met eiland
- Hoekkeukens
- Grote leefkeukens

Advies
- Werkwijze
- Montage en service
- Apparatuur
- Veelgestelde vragen

Regio
- Keukens Amersfoort
- Keukens Utrecht
- Keukens Het Gooi

Sociaal
- Instagram
- Facebook
- Twitter/X

Juridisch
- Privacy
- Voorwaarden
```

Footerprioriteit op mobiel:

1. Afspraak maken
2. Bellen
3. Route
4. Openingstijden
5. Hoofdlinks

## Belangrijkste Gebruikersflows

### Flow 1: Oriënterende Verbouwer

```text
Home
→ Projecten
→ Projectcase
→ Advies
→ Afspraak voorbereiden
→ Maak een afspraak
```

Doel: bezoeker ziet voorbeelden, begrijpt het proces en voelt zich voorbereid om contact op te nemen.

Belangrijke linkmomenten:

- Home toont 3-4 projecttegels.
- Projectcase linkt naar advies en afspraak.
- Adviespagina bevat proces en drempelverlagende voorbereiding.

### Flow 2: Bulthaup-Georiënteerde Bezoeker

```text
Google / direct
→ Bulthaup
→ b1/b2/b3 vergelijking
→ Relevante projecten
→ Showroom
→ Maak een afspraak
```

Doel: bezoeker snapt het merk en de systemen, ziet bewijs en wil het in de showroom ervaren.

Belangrijke linkmomenten:

- Bulthaup-overzicht linkt direct naar b1, b2, b3.
- Elke systeempagina linkt naar passende cases.
- Showroomblok staat op elke bulthaup-pagina.

### Flow 3: Lokale Zoeker

```text
Google: keukens Amersfoort
→ Keukens Amersfoort
→ Showroom / Route
→ Projecten in regio
→ Contact / Bel
```

Doel: snelle lokale herkenning en directe actie.

Belangrijke linkmomenten:

- Adres, telefoon en afspraak staan bovenaan.
- Regionale projecten bewijzen lokale ervaring.
- Route/parkeren is direct bereikbaar.

### Flow 4: Praktische Kookliefhebber

```text
Home / Advies
→ Keukenspecialist-content binnen Advies
→ Apparatuur of Systemen en indeling
→ Projectcase met vergelijkbare oplossing
→ Maak een afspraak
```

Doel: bezoeker herkent dat Stadshaege ontwerpt vanuit dagelijks gebruik, niet alleen uiterlijk.

Belangrijke linkmomenten:

- Adviespagina benoemt kookgedrag, logistiek, ergonomie en lichtval.
- Apparatuurpagina’s koppelen terug naar indeling en projectcases.

### Flow 5: Inspiratiezoeker

```text
Projecten
→ Filter: eiland / klein / hoek / groot
→ Projectcase
→ Gerelateerde projecten
→ Advies
→ Afspraak
```

Doel: bezoeker kan door inspiratie bladeren zonder te verdwalen en krijgt op natuurlijke momenten context en CTA.

Belangrijke linkmomenten:

- Projectoverzicht heeft categorieën.
- Elk project heeft gerelateerde projecten.
- Na 2-3 projectviews moet er een duidelijke afspraakroute zijn.

### Flow 6: Terugkerende of Warme Bezoeker

```text
Home
→ Contact
→ Bel / mail / route
```

Doel: minimale frictie voor mensen die al overtuigd zijn.

Belangrijke linkmomenten:

- Header bevat “Maak een afspraak”.
- Mobiel bevat directe belactie.
- Footer bevat alle contactgegevens.

## Zoekintentie Naar Pagina Mapping

| Zoekintentie | Primaire pagina | Ondersteunende pagina’s |
| --- | --- | --- |
| bulthaup keuken | `/bulthaup/` | b1, b2, b3, projecten, showroom |
| bulthaup b3 | `/bulthaup/b3/` | materialen, projecten, showroom |
| design keuken | `/design-keukens/` | bulthaup, projecten, advies |
| greeploze keuken | `/greeploze-keukens/` | b1, b3, projecten |
| keuken op maat | `/keukens-op-maat/` | advies, werkwijze, projecten |
| keukens Amersfoort | `/keukens-amersfoort/` | showroom, route, contact |
| kleine keuken | `/projecten/kleine-keukens/` | advies, systemen, projectcases |
| keuken met eiland | `/projecten/keukens-met-eiland/` | projectcases, advies |
| keukenadvies | `/advies/` | werkwijze, afspraak voorbereiden |
| keuken showroom Amersfoort | `/showroom/` | route, contact, projecten |
| Bora / afzuiging | `/apparatuur/afzuiging/` | apparatuur, advies, projectcases |

## Schaalbaarheid

### Nieuwe Projecten

Nieuwe projecten moeten als individuele cases worden toegevoegd en gekoppeld aan:

- Systeem: b1, b2, b3.
- Opstelling: eiland, hoek, klein, groot.
- Materiaal: hout, lak, aluminium, rvs, steen, dekton.
- Regio: Amersfoort, Utrecht, Gooi, andere plaats.
- Apparatuur: Bora, Miele, Gaggenau, Quooker, Liebherr, etc.

### Nieuwe SEO-Pagina’s

Alleen toevoegen wanneer er voldoende unieke content en projectbewijs is. Nieuwe SEO-pagina’s moeten minimaal hebben:

- Unieke zoekintentie.
- Minimaal 2-3 relevante interne links.
- Relevante projectvoorbeelden.
- Afspraak-CTA.
- Geen duplicatie van bestaande tekst.

### Nieuwe Adviescontent

Nieuwe adviesartikelen horen onder `/advies/` en moeten teruglinken naar:

- Afspraak voorbereiden.
- Relevante projectcases.
- Showroom.
- Contact.

## Prioriteiten Voor Latere Implementatie

### Fase 1: Fundament

- Hoofdnavigatie en footerstructuur vastleggen.
- Home, bulthaup, projecten, advies, showroom en contact als kernroutes definiëren.
- Afspraak-CTA consistent maken.
- Dubbele/lege URL’s inventariseren voor redirects of content.

### Fase 2: Content Herstructureren

- Gerealiseerde keukens omzetten naar projectoverzicht.
- Eerste 6-10 projectcases maken.
- Bulthaup b1/b2/b3-pagina’s vullen.
- Advies/werkwijze samenbrengen.

### Fase 3: SEO en Schaalbaarheid

- SEO-landingspagina’s uniek herschrijven.
- Apparatuurstructuur omzetten van merken naar keuzehulp.
- FAQ en afspraakvoorbereiding toevoegen.
- Lokale/regio-content uitbreiden op basis van echte projecten.

## Conclusie

De optimale structuur voor keukendesign.nl is compact aan de bovenkant en schaalbaar in de diepte. De hoofdnavigatie moet bezoekers snel naar Bulthaup, Projecten, Advies, Showroom, Apparatuur en Contact leiden. Daaronder kunnen projectcases, systemen, materialen, apparatuurkeuzes en SEO-pagina’s groeien zonder de site onoverzichtelijk te maken.

De belangrijkste verandering is dat de site niet langer vooral een verzameling losse pagina’s en galerijen moet zijn, maar een begeleide route: inspireren, begrijpen, plannen en afspraak maken. Daarbij moeten de bestaande sterke punten behouden blijven: persoonlijke expertise, bulthaup-focus, praktische ontwerpkwaliteit, lokale betrouwbaarheid en veel eigen beeldmateriaal.
