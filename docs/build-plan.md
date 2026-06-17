# Build-plan nieuwe website keukendesign.nl

Dit build-plan gebruikt alle bestaande documentatie als bron van waarheid. Het plan beschrijft wat gebouwd moet worden, in welke volgorde en met welke risico’s. Er is in dit document niets geïmplementeerd.

## Architectuurcorrectie

De website wordt expliciet gebouwd als **statische GitHub Pages website** vanuit een GitHub repository. De productiearchitectuur is:

- Vue/Nuxt static generation.
- Static output geschikt voor GitHub Pages.
- Markdown/content-file based workflow.
- Media vanuit de repository.
- Deployment via GitHub Actions.
- Geen backend.
- Geen server runtime.
- Geen database.
- Geen verplichte externe CMS-laag.
- Geen productie-SSR.

Alle fases in dit build-plan moeten binnen deze randvoorwaarden blijven.

## Bronnen van Waarheid

De volgende documenten zijn leidend:

- `docs/technical-architecture.md`: technische architectuur, GitHub Pages, static generation, contentworkflow, SEO, deployment en performance.
- `docs/architecture-correction-summary.md`: gecorrigeerde architectuurkeuze en risico’s voor GitHub Pages.
- `docs/website-analysis.md`: doelgroepen, persona’s, informatiebehoeften, zwakke plekken, ontbrekende content en conversiekansen.
- `docs/information-architecture.md`: sitemap, navigatie, paginahiërarchie, contentgroepen, interne links en footerstructuur.
- `docs/ux-strategy.md`: homepageconcept, paginatypen, mobiele/desktopervaring, interactiepatronen en conversiestrategie.
- `docs/reference-research.md`: marktpatronen, best practices en onderdelen die behouden moeten blijven.
- `docs/wow-factor-recommendations.md`: toegestane moderne browsertechnieken en implementatievolgorde.
- `docs/github-pages-website-generation-method.md`: algemene methode voor een GitHub Pages geschikte statische website.
- `source/`: bestaande geëxporteerde content en media, met 38 Markdownbestanden en 327 mediabestanden.

## MVP

Het MVP moet de nieuwe website bruikbaar, vindbaar, snel en conversiegericht maken zonder de scope te verbreden naar zware interactieve modules.

### MVP-doel

Een statische GitHub Pages website die bezoekers snel laat begrijpen:

- Wat Stadshaege keukendesign levert.
- Waarom bulthaup en Stadshaege relevant zijn.
- Welke projecten en voorbeelden er zijn.
- Hoe het advies- en showroomproces werkt.
- Hoe iemand direct een afspraak, belactie, mail of routeactie start.

### MVP-inhoud

Het MVP bevat minimaal:

- Homepage met duidelijke positionering, echte keukenfotografie, projectroutes, bulthaup-intro, adviesproces en showroom/contactblok.
- Projectoverzicht op basis van gecureerde projecten.
- Minimaal 6 tot 10 uitgewerkte projectcases met context, foto’s, systeem, materiaal, opstelling, apparatuur en CTA.
- Bulthaup-overzicht met b1/b2/b3-verwijzing.
- Basis b1-, b2- en b3-pagina’s, of alleen live zetten wanneer ze inhoudelijk voldoende gevuld zijn.
- Adviespagina met werkwijze, afspraakvoorbereiding en persoonlijke ontwerpbenadering.
- Showroompagina met adres, openingstijden, route, parkeren, wat er te zien is en afspraak-CTA.
- Contactpagina met telefoon, mobiel, e-mail, route en afspraakmicrocopy.
- Lokale pagina `keukens-amersfoort` met lokale relevantie, showroominformatie en projectverwijzingen.
- Privacy-pagina.

### MVP-functionaliteit

Het MVP bevat minimaal:

- Statische routing voor alle publieke pagina’s.
- Responsive navigatie met primaire CTA “Maak een afspraak”.
- Mobiele bel-, mail- en routeacties.
- Projectcards met basisfilters op systeem, opstelling, materiaal en regio.
- Accordions voor FAQ of afspraakvoorbereiding.
- Statische SEO-metadata per route.
- `sitemap.xml`.
- `robots.txt`.
- Open Graph metadata.
- Responsive images, lazy-loading en alt-teksten.
- Contentvalidatie voor verplichte frontmatter.
- GitHub Actions deployment naar GitHub Pages.

### Bewust buiten MVP

Niet in MVP:

- WebGL/Three.js.
- Volledige keukenconfigurator.
- Zware page transitions.
- Autoplay videohero.
- Uitgebreide PWA-functionaliteit.
- Eigen server-side formulieren.
- Runtime CMS.
- Databasegedreven zoekfunctie.
- Uitgebreide regionale pagina’s zonder unieke projectbasis.

## Implementatiefases

### Fase 0: Pre-build beslissingen

Doel: scope vastzetten voordat er code wordt gebouwd.

Acties:

- Bevestig Nuxt static generation als voorkeursstack.
- Leg outputpad voor GitHub Pages vast.
- Kies URL-strategie: trailing slash, canonical domein en oude URL-aanpak.
- Bepaal of `www.keukendesign.nl` als custom domain wordt gebruikt.
- Leg formulierstrategie vast: MVP met mail/telefoon/route, of expliciet een statische externe formulierdienst.
- Kies analyticsstrategie: geen analytics, of alleen een eenvoudig extern script zonder eigen backend.
- Kies zoekstrategie: projectfilters in MVP, Pagefind pas wanneer contentvolume dit rechtvaardigt.

Resultaat:

- Een definitieve technische scope voor de eerste build.
- Geen open keuzes die de architectuur later kunnen ondermijnen.

### Fase 1: Contentmodel en contentcuratie

Doel: de bestaande content omvormen naar schaalbare Markdowncontent.

Acties:

- Inventariseer alle content uit `source/`.
- Map huidige pagina’s naar de nieuwe sitemap uit `docs/information-architecture.md`.
- Definieer frontmatter-schema’s voor pagina’s, projectcases, SEO-landingspagina’s en apparatuurcontent.
- Selecteer de beste projectfoto’s en koppel die aan concrete cases.
- Schrijf of herschrijf de eerste projectcases volgens het projectcase-template.
- Ontdubbel overlappende content rond designkeukens, greeploze keukens, keukens op maat, keukens Amersfoort en gerealiseerde projecten.
- Markeer lege of dunne pagina’s als vullen, samenvoegen of niet publiceren.
- Definieer alt-teksten en bestandsnamen voor gekozen media.

Resultaat:

- Een bruikbare contentbasis voor het MVP.
- Duidelijke contenttemplates.
- Minder dubbele en dunne content.

### Fase 2: Statische projectbasis

Doel: het technische fundament neerzetten zonder visuele complexiteit.

Acties:

- Richt Nuxt/Vue static generation in.
- Maak basislayouts voor standaardpagina, homepage, projectoverzicht, projectcase, adviespagina, showroom/contact en SEO-landingspagina.
- Configureer Markdowncontent als bron.
- Configureer statische routing en prerendering.
- Plaats repositorymedia onder een GitHub Pages geschikte publieke mediastructuur.
- Voeg basis CSS, typografie, spacing en design tokens toe.
- Voeg semantische HTML-structuur toe voor headings, landmarks en navigatie.

Resultaat:

- Een lokale statische site die content uit Markdown kan renderen.
- Geen serverroutes, API routes of runtime-afhankelijkheden.

### Fase 3: IA, navigatie en gebruikersflows

Doel: de bezoekersroutes uit de documentatie werkend maken.

Acties:

- Bouw primaire navigatie: Home, Bulthaup, Projecten, Advies, Showroom, Apparatuur, Contact.
- Bouw mobiele navigatie met duidelijke acties: afspraak, bel, route.
- Bouw footerstructuur met contactgegevens, afspraaklinks, keukens, inspiratie, advies, regio en juridisch.
- Implementeer interne linkclusters: bulthaup, projecten, advies, lokaal en apparatuur.
- Voeg CTA-blokken toe aan commerciële pagina’s.
- Zorg dat de belangrijkste flows werken:
  - Home → Projecten → Projectcase → Advies → Afspraak.
  - Bulthaup → b1/b2/b3 → Projecten → Showroom → Afspraak.
  - Keukens Amersfoort → Showroom/Route → Contact/Bel.

Resultaat:

- De site is navigeerbaar volgens de nieuwe informatiearchitectuur.
- Elke commerciële pagina biedt bewijs, begrip en actie.

### Fase 4: MVP-paginatypen

Doel: de belangrijkste pagina’s inhoudelijk en visueel afronden.

Acties:

- Bouw homepage volgens het concept “Persoonlijk ontworpen bulthaup-keukens in Amersfoort”.
- Bouw projectoverzicht met filterchips en projectcards.
- Bouw projectcase-template met hero, projectsamenvatting, vraag, uitdaging, oplossing, materialen, apparatuur, galerij en CTA.
- Bouw bulthaup-overzicht en systeempagina’s.
- Bouw adviespagina met processtappen en afspraakvoorbereiding.
- Bouw showroompagina met wat te ervaren is, adres, openingstijden, parkeren en route.
- Bouw contactpagina met duidelijke bel-, mail- en routeacties.
- Bouw basis SEO-landingspagina’s alleen wanneer unieke content beschikbaar is.

Resultaat:

- Het MVP heeft de kernpagina’s die nodig zijn voor begrip, vertrouwen, SEO en conversie.

### Fase 5: SEO, metadata en migratie

Doel: de statische site vindbaar en indexeerbaar maken.

Acties:

- Voeg unieke title en meta description toe per pagina.
- Voeg canonical URL’s toe.
- Voeg Open Graph metadata en fallback social image toe.
- Voeg structured data toe waar zinvol: LocalBusiness, BreadcrumbList en Article/Project.
- Genereer `sitemap.xml` uit contentroutes.
- Publiceer `robots.txt`.
- Definieer URL-migratielijst voor belangrijke oude URL’s.
- Gebruik statische redirectpagina’s of behoud oude URL’s waar mogelijk.
- Controleer lege, dubbele of dunne pagina’s vóór publicatie.

Resultaat:

- De site is technisch klaar voor indexatie binnen statische hostingbeperkingen.

### Fase 6: Performance, media en toegankelijkheid

Doel: de site snel, stabiel en toegankelijk maken.

Acties:

- Optimaliseer gekozen beelden naar webformaten en passende resoluties.
- Maak thumbnails voor projectoverzichten.
- Gebruik `srcset`, `sizes`, lazy-loading en preload voor alleen de belangrijkste hero-afbeelding.
- Beperk JavaScript tot noodzakelijke interacties.
- Voeg keyboard-bediening toe voor menu’s, filters, accordions en zoekoverlay indien aanwezig.
- Voeg zichtbare focus states toe.
- Respecteer `prefers-reduced-motion`.
- Controleer contrast, headingstructuur, landmarks en alt-teksten.
- Definieer performancebudgetten voor homepage, projectoverzicht en projectcase.

Resultaat:

- De statische website blijft licht genoeg voor GitHub Pages en mobiel gebruik.

### Fase 7: GitHub Pages deployment

Doel: reproduceerbare build en publicatie.

Acties:

- Maak GitHub Actions workflow voor install, checks, static generation en deploy naar GitHub Pages.
- Configureer outputdirectory.
- Voeg optioneel CNAME toe als custom domain wordt gebruikt.
- Documenteer lokale developmentcommands.
- Voeg checks toe voor contentfrontmatter, ontbrekende media, interne links, sitemap en build-output.
- Test directe deep links naar statisch gegenereerde routes.

Resultaat:

- De site kan automatisch als static output naar GitHub Pages worden gedeployed.

### Fase 8: Polish en lichte wow-factor

Doel: de site premium laten voelen zonder performance of toegankelijkheid te schaden.

Acties:

- Voeg subtiele micro-interacties toe aan CTA’s, projectcards, filters en navigatie.
- Voeg progressieve content-onthulling toe met reduced-motion fallback.
- Voeg result transitions toe aan projectfilters.
- Voeg accordions toe voor FAQ, voorbereiding en technische details.
- Voeg optioneel een statisch routeblok met lazy-loaded kaart toe.

Resultaat:

- De website voelt zorgvuldiger en moderner, zonder zware effecten.

## Afhankelijkheden

### Inhoudelijke afhankelijkheden

- Definitieve projectselectie voor MVP.
- Per project minimaal: titel, systeem, opstelling, materiaal, regio, coverbeeld, galerij, korte vraag en oplossing.
- Beslissing welke b1/b2/b3-content live mag in MVP.
- Contactgegevens, openingstijden, route- en parkeerinformatie.
- Afspraakmicrocopy: wat gebeurt er na contact, wat neemt de bezoeker mee, is het vrijblijvend.
- Privacytekst en eventuele juridische pagina’s.

### Technische afhankelijkheden

- Keuze voor Nuxt static generation of Vue-only static build; aanbeveling is Nuxt.
- Node/pnpm-versie.
- GitHub Pages-instellingen.
- Custom domain/DNS-keuze.
- Outputdirectory voor deployment.
- Contentvalidatieschema.
- Image optimalisatieproces.
- Eventuele Pagefind-integratie als zoek wordt opgenomen.

### Ontwerpafhankelijkheden

- Definitieve visuele richting: rustig, premium, persoonlijk, niet schreeuwerig.
- Keuze van typografie, kleurpalet en spacing.
- Selectie van hero- en fallback Open Graph-afbeeldingen.
- Fotocuratie per paginatype.
- Mobiele actiebalk en headergedrag.

### Beslissingsafhankelijkheden

- Wel of geen formulier in MVP.
- Wel of geen analytics in MVP.
- Welke oude URL’s behouden moeten blijven.
- Welke SEO-landingspagina’s genoeg unieke inhoud hebben om live te gaan.
- Welke media niet in de productierepo thuishoren vanwege omvang of kwaliteit.

## Risico’s

### GitHub Pages beperkingen

Risico:

- Geen server runtime, server-side redirects, server-side formulieren, runtime image optimization of database.

Mitigatie:

- Alle functionaliteit build-time, static of client-side ontwerpen.
- Formulieren beperken tot mail/telefoon/route of expliciet externe statische formulierdienst.
- Redirects oplossen via URL-behoud of statische redirectpagina’s.
- Afbeeldingen vooraf of tijdens build optimaliseren.

### Repositorygrootte door media

Risico:

- 327 mediabestanden kunnen repositorygrootte en buildtijd verhogen, zeker als originelen blijven staan.

Mitigatie:

- Media audit vóór implementatie.
- Alleen geselecteerde beelden publiceren.
- Max resoluties en bestandsformaten vastleggen.
- Thumbnails en responsive varianten genereren.

### Contentkwaliteit en ontbrekende cases

Risico:

- Veel bestaande foto’s hebben nog geen projectverhaal, waardoor projectcases dun blijven.

Mitigatie:

- MVP beperken tot 6 tot 10 sterke cases.
- Eerst casecontext toevoegen aan geselecteerde projecten.
- Niet alle oude galerijen tegelijk migreren.

### Dubbele of dunne SEO-content

Risico:

- Oude overlap rond designkeukens, greeploze keukens, keukens op maat en regionale pagina’s kan SEO schaden.

Mitigatie:

- Elke landingspagina krijgt eigen zoekintentie.
- Pagina’s zonder unieke waarde niet live zetten.
- Interne links sturen naar duidelijke clusters.

### Te veel interactie in eerste versie

Risico:

- Wow-factor kan performance, toegankelijkheid en scope schaden.

Mitigatie:

- In MVP alleen micro-interacties, filters, accordions en lichte onthulling.
- WebGL/Three.js en zware transitions uitstellen.
- Reduced-motion en keyboardbediening verplicht testen.

### Onvoldoende conversiehelderheid

Risico:

- De site wordt visueel mooier maar bezoekers weten nog steeds niet wanneer of hoe ze contact moeten opnemen.

Mitigatie:

- Eén primaire CTA: “Maak een afspraak”.
- CTA-blokken op homepage, projectcases, bulthaup, advies, showroom en lokale pagina.
- Mobiel altijd snelle bel-, mail- en routeacties.

### URL-migratie

Risico:

- Oude URL’s kunnen verkeer of SEO-waarde verliezen.

Mitigatie:

- Oude URL-inventaris maken vóór implementatie.
- Belangrijke URL’s behouden waar mogelijk.
- Statische redirectpagina’s maken waar behoud niet logisch is.

## Quick Wins

Deze verbeteringen leveren snel waarde en passen binnen de statische architectuur:

- Eén consequente CTA-tekst: “Maak een afspraak”.
- Contactgegevens consistent tonen: telefoon, mobiel, e-mail, adres en route.
- Homepage hero vervangen door heldere positionering en één sterk beeld.
- Lange fotoreeksen cureren naar compacte projectselecties.
- Projectfoto’s labelen met systeem, opstelling, materiaal en regio.
- Mobiele bel- en routeknoppen prominent maken.
- Adviesproces in 5 tot 7 duidelijke stappen tonen.
- Afspraakvoorbereiding toevoegen als scanbaar blok.
- `keukens-amersfoort` bovenaan voorzien van lokale informatie en contactblok.
- `gerealiseerd` en `gerealiseerd-2` ontdubbelen.
- Lege of dunne b1/b2/b3-pagina’s vullen of niet publiceren.
- Basis FAQ toevoegen op advies/showroom.
- `robots.txt`, sitemap en Open Graph fallbackbeeld meteen meenemen.

## Toekomstige Uitbreidingen

### Contentuitbreidingen

- Meer projectcases per opstelling, systeem, materiaal en regio.
- Verdiepende materiaalpagina’s.
- Apparatuurkeuzehulpen per functie.
- FAQ-uitbreiding rond levertijd, montage, onderhoud, garantie en verbouwing.
- Regiopagina’s voor Utrecht en Het Gooi, alleen met unieke regionale voorbeelden.
- Checklist “voorbereiding showroomafspraak”.
- Reviews of klantverhalen gekoppeld aan projecten.

### Functionele uitbreidingen

- Pagefind of vergelijkbare statische zoekfunctie.
- Uitgebreidere projectfilters.
- Interactieve b1/b2/b3-vergelijking.
- Interactieve keukenworkflow voor voorraad, voorbereiden, koken, spoelen en afval.
- Lazy-loaded interactieve kaart met parkeren en route.
- Subtiele View Transitions tussen projectoverzicht en projectcases.

### Visuele uitbreidingen

- Scroll storytelling voor de advies/werkwijze-pagina.
- Meer detailfotografie van materialen, fronten, werkbladen en interieurs.
- Betere social sharing visuals per project.
- Eventueel een korte stille showroomvideo, alleen als performance en inhoudelijke waarde kloppen.

### Technische uitbreidingen

- Contentvalidatie uitbreiden met schema checks per contenttype.
- Automatische image pipeline voor responsive varianten.
- Linkchecker in GitHub Actions.
- Lighthouse/pa11y smoke checks in CI.
- Optionele statische PWA-basics zoals manifest en offline fallback.
- Git-based redactie-interface, alleen als Markdown via GitHub te omslachtig blijkt.

## Implementatievolgorde in Eén Overzicht

1. Pre-build beslissingen vastleggen.
2. Contentmodel en projectselectie maken.
3. Statische Nuxt/Vue-basis opzetten.
4. Layouts en paginatypen bouwen.
5. Navigatie, footer en CTA-flow bouwen.
6. MVP-content migreren en herschrijven.
7. Projectfilters en basisinteracties toevoegen.
8. SEO, sitemap, robots en Open Graph toevoegen.
9. Media optimaliseren.
10. Toegankelijkheid en performance controleren.
11. GitHub Actions deployment inrichten.
12. Staging/preview controleren via GitHub Pages output.
13. Oude URL’s en livegang voorbereiden.

## Acceptatiecriteria Voor MVP

Het MVP is pas klaar voor publicatie wanneer:

- Alle MVP-routes als statische HTML worden gegenereerd.
- De site zonder backend, server runtime, database of verplichte CMS-laag werkt.
- Deep links naar alle belangrijke routes direct laden op GitHub Pages.
- Homepage, projecten, projectcase, bulthaup, advies, showroom, contact en keukens Amersfoort inhoudelijk gevuld zijn.
- Minimaal 6 tot 10 projectcases echte context bevatten.
- De primaire CTA overal consistent is.
- Mobiele bel-, mail- en routeacties werken.
- `sitemap.xml` en `robots.txt` aanwezig zijn.
- Elke belangrijke pagina unieke metadata en Open Graph metadata heeft.
- Afbeeldingen geoptimaliseerd en voorzien van alt-teksten zijn.
- Navigatie, filters en accordions keyboard-bedienbaar zijn.
- Reduced motion wordt gerespecteerd.
- Interne links en mediareferenties gecontroleerd zijn.
- GitHub Actions de static output succesvol kan publiceren naar GitHub Pages.

## Niet Doen Zonder Nieuwe Beslissing

De volgende keuzes vallen buiten dit build-plan en mogen niet stilzwijgend worden toegevoegd:

- Backend of server runtime.
- Productie-SSR.
- Database.
- Verplichte externe CMS-laag.
- Server-side zoekfunctie.
- Eigen formulierendpoint.
- Runtime image service.
- Zware WebGL/Three.js-module.
- Volwaardige configurator.
- Nieuwe hostingroute buiten GitHub Pages.

## Conclusie

De beste bouwroute is eerst orde, inhoud en conversie; daarna polish. Het MVP moet de sterke bestaande basis van Stadshaege beter presenteren: persoonlijke expertise, bulthaup-focus, projectfotografie, lokale showroom en rustige afspraakconversie. Technisch blijft de site volledig statisch en GitHub Pages-compatible.
