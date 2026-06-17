# Technische architectuur nieuwe website keukendesign.nl

## Architectuurcorrectie

De website wordt expliciet gebouwd als **statische GitHub Pages website** vanuit een GitHub repository. De productie-architectuur heeft:

- GitHub repository als bron.
- GitHub Pages als hosting.
- Static output.
- Geen backend.
- Geen server runtime.
- Geen database.
- Geen verplichte externe CMS-laag.
- Geen productie-SSR.

Andere hostingplatformen of eigen servers zijn geen onderdeel van deze architectuur. SSR wordt alleen genoemd om expliciet uit te sluiten: GitHub Pages serveert statische bestanden en kan geen server-rendering per request uitvoeren.

## Definitieve aanbeveling

Gebruik **Nuxt static generation met Vue, Markdown-content en GitHub Pages deployment via GitHub Actions**.

Aanbevolen stack:

```text
Framework: Nuxt
UI runtime: Vue
Rendering: static generation / prerendered HTML
Hosting: GitHub Pages
Deployment: GitHub Actions
Content: Markdown files + YAML frontmatter
Media: repository assets in public/media
Search: static client-side index, bij voorkeur Pagefind
SEO: statisch gegenereerde metadata, sitemap.xml, robots.txt, Open Graph en structured data
Analytics: privacyvriendelijk extern script optioneel, zonder backend-afhankelijkheid
PWA: alleen lichtgewicht manifest/offline fallback indien later zinvol
```

Waarom deze keuze:

- De site is een content- en leadgeneratiesite met projecten, advies, showroominformatie en SEO-landingspagina’s.
- Alle publieke pagina’s kunnen vooraf worden gegenereerd als statische HTML.
- GitHub Pages past bij de vaste hostingkeuze en vereist geen server runtime.
- Nuxt biedt Vue-componenten voor filters, accordions, zoekoverlay, micro-interacties en projectpresentatie.
- Markdown is de bron voor de huidige Nuxt-website: `content/site.md`, `content/pages/*.md` en `content/projects/*.md`.
- Een buildstap genereert lichte JavaScript-modules onder `content/generated/`, zodat Vue-componenten geen filesystem- of database-afhankelijkheid krijgen.
- GitHub Actions kan build, validatie en publicatie reproduceerbaar uitvoeren.

## Vue

Vue is de interactieve laag voor componenten die echte gebruikerswaarde toevoegen:

- Projectfilters.
- Zoekoverlay.
- Accordions voor FAQ en technische details.
- Interactieve b1/b2/b3 vergelijking.
- Formuliervalidatie voor mailto- of externe formulierflows.
- Micro-interacties op CTA’s, cards en navigatie.

Architectuurkeuze:

- Gebruik Vue selectief.
- Houd contentpagina’s statisch en licht.
- Vermijd een zware client-side app-shell.
- Client-side componenten moeten progressive enhancement zijn: basiscontent blijft zichtbaar zonder JavaScript.

## Nuxt static generation

Nuxt is geschikt omdat het routing, layouts, content rendering, componenten en static generation combineert.

Aanbevolen Nuxt-modus:

- `nuxi generate` voor statische output.
- Output geschikt maken voor GitHub Pages publicatie.
- Alle routes die publiek bereikbaar moeten zijn vooraf prerenderen.
- Geen Nitro server deployment gebruiken in productie.

Belangrijk:

- GitHub Pages kan alleen statische bestanden serveren.
- Dynamic server routes, API routes en server middleware zijn niet beschikbaar in productie.
- Functionaliteit die normaal server runtime vraagt, moet statisch, client-side of extern opgelost worden.

## SSG versus SSR

### SSG/static output

SSG is verplicht en leidend.

Voordelen:

- Werkt op GitHub Pages.
- Snelle HTML via statische hosting.
- SEO-vriendelijk.
- Geen runtime serverbeheer.
- Lage complexiteit.
- Eenvoudig te deployen via GitHub Actions.

Nadelen:

- Contentwijzigingen vereisen een rebuild.
- Geen server-side formulieren of database.
- Zoekindex moet tijdens build of client-side worden gemaakt.

### SSR

SSR is geen productieoptie.

Waarom niet:

- GitHub Pages voert geen Node/Nuxt server uit.
- Er is geen request-time rendering.
- Server routes, runtime API’s, databaseconnecties en server middleware werken niet op GitHub Pages.

Toegestane rol:

- SSR mag hooguit lokaal of conceptueel worden genoemd om aan te geven waarom het uitgesloten is.
- De implementatie moet static output als harde randvoorwaarde hebben.

## GitHub Pages hosting

GitHub Pages is de vaste hostinglaag.

Architectuurimplicaties:

- Alleen statische assets worden gepubliceerd.
- Publicatie gebeurt vanuit GitHub Actions naar Pages.
- Geen backendprocessen.
- Geen serverless functies.
- Geen database.
- Redirects zijn beperkt; waar mogelijk statische redirectpagina’s of behoud van URL’s gebruiken.
- Custom domain en HTTPS kunnen via GitHub Pages worden ingesteld.

Aanbevolen publicatie-output:

```text
.output/public
```

of het Nuxt-equivalent dat door `nuxi generate` wordt geproduceerd.

## Routing geschikt voor static hosting

Aanbevolen routing:

- Gebruik schone, vooraf gegenereerde routes.
- Vermijd runtime-only dynamic routes.
- Genereer projectpagina’s vanuit Markdown-frontmatter.
- Genereer categoriepagina’s vooraf.
- Behoud of redirect belangrijke oude URL’s waar mogelijk.

Routingregels:

- Elke contentpagina moet een fysieke statische HTML-output krijgen.
- Projectroutes worden tijdens build uit contentmetadata bepaald.
- Filteren gebeurt client-side op het projectoverzicht.
- Zoekresultaten worden client-side getoond op basis van een statische index.

GitHub Pages aandachtspunt:

- SPA fallback is niet ideaal voor SEO en directe deep links. Gebruik prerendered routes, geen client-only router voor contentpagina’s.

## Markdown/content-file workflow

Content leeft in de repository.

Aanbevolen structuur:

```text
content/
  pages/
  projecten/
  bulthaup/
  advies/
  apparatuur/
  seo/
public/
  media/
```

Projectcase frontmatter:

```yaml
title: "Bulthaup b3 keuken met kookeiland in Amersfoort"
slug: "bulthaup-b3-kookeiland-amersfoort"
system: "b3"
layout: "kookeiland"
materials: ["eiken", "aluminium", "dekton"]
appliances: ["Bora", "Miele"]
region: "Amersfoort"
featured: true
cover: "/media/projecten/..."
gallery:
  - "/media/projecten/..."
seo:
  title: "Bulthaup b3 keuken met kookeiland in Amersfoort"
  description: "..."
```

Voordelen:

- Volledige Git-historie.
- Geen externe CMS-verplichting.
- Content en code deployen samen.
- Projectfilters en SEO kunnen uit frontmatter worden opgebouwd.

Nadelen:

- Niet-technische redactie heeft GitHub-kennis of een eenvoudige editing workflow nodig.
- Media en metadata moeten consistent worden beheerd.

Definitieve keuze:

- Markdown files in Git zijn leidend.
- Een CMS is niet vereist voor launch.

## CMS opties binnen de randvoorwaarden

Er is **geen externe CMS-verplichting**.

Toegestane opties:

- GitHub web editor voor eenvoudige tekstwijzigingen.
- Lokale Markdown-editing.
- Later eventueel een Git-based editor die commits naar de repository maakt.

Niet leidend voor deze architectuur:

- Headless CMS als bron van waarheid.
- CMS dat runtime API-calls vereist voor productiepagina’s.
- Databasegedreven content.

Aanbeveling:

- Start zonder CMS.
- Definieer goede contenttemplates en validatiescripts.
- Evalueer pas later of een Git-based redactie-interface nodig is.

## Media vanuit repository

Alle media worden vanuit de repository gepubliceerd, bijvoorbeeld:

```text
public/media/
public/media/projecten/
public/media/showroom/
public/media/materialen/
```

Voordelen:

- Geen externe assetservice vereist.
- GitHub Pages publiceert assets samen met HTML.
- Eenvoudig te koppelen vanuit Markdown.

Beperkingen:

- Repositorygrootte en buildtijd kunnen oplopen bij veel grote foto’s.
- Git is niet ideaal voor extreem grote media-collecties.
- Afbeeldingsoptimalisatie moet tijdens build of vooraf gebeuren.

Aanbeveling:

- Bewaar originele megagrote beelden niet onnodig in de productierepo.
- Genereer geoptimaliseerde varianten voor web.
- Gebruik consistente bestandsnamen en alt-teksten.

## Image optimalisatie binnen GitHub Pages beperkingen

Omdat GitHub Pages geen runtime image service heeft, moeten afbeeldingen vóór of tijdens build worden geoptimaliseerd.

Aanpak:

- Genereer responsive varianten tijdens build of met een apart script.
- Gebruik moderne formaten waar praktisch mogelijk.
- Behoud fallback JPEG/PNG waar nodig.
- Gebruik `srcset` en `sizes`.
- Lazy-load afbeeldingen onder de vouw.
- Preload alleen de primaire hero-afbeelding.
- Houd projectoverzichten compact met thumbnails.

Nuxt Image:

- Kan nuttig zijn als static-compatible generatie correct wordt ingericht.
- Er mag geen runtime image optimizer worden verwacht op GitHub Pages.

Risico:

- Veel foto’s kunnen GitHub Actions buildtijd en repositorygrootte verhogen.

Mitigatie:

- Media audit vóór implementatie.
- Alleen geselecteerde projectbeelden publiceren.
- Beeldformaten en maximale afmetingen vastleggen.

## Zoekfunctionaliteit

Aanbevolen:

- Static search met **Pagefind** of vergelijkbare build-time index.

Waarom:

- Geen backend nodig.
- Past bij GitHub Pages.
- Index wordt tijdens build gegenereerd.
- Client-side zoekoverlay kan resultaten tonen.

Indexeer:

- Projecttitel.
- Systeem.
- Opstelling.
- Materiaal.
- Regio.
- Apparatuur.
- Adviesonderwerpen.
- SEO-landingspagina’s.

Niet gebruiken:

- Search API waarvoor server runtime nodig is.
- Databasegedreven zoekfunctie.

## SEO binnen statische beperkingen

SEO wordt volledig statisch opgebouwd.

Vereist:

- Statische HTML per route.
- Unieke title en meta description.
- Canonical URL.
- Open Graph metadata.
- Social image per hoofdtemplate of project.
- Structured data waar zinvol: LocalBusiness, BreadcrumbList, Article/Project.
- `sitemap.xml`.
- `robots.txt`.
- Schone URL’s.
- Interne linkstructuur volgens `docs/information-architecture.md`.

Migratie:

- Belangrijke oude URL’s behouden waar mogelijk.
- Als URL’s wijzigen, statische redirectstrategie bepalen.
- Lege/dunne pagina’s vullen of naar relevante statische pagina’s leiden.

## Sitemap.xml generatie

Sitemap moet tijdens build worden gegenereerd uit:

- Markdown-contentroutes.
- Projectroutes.
- SEO-landingspagina’s.
- Kernpagina’s.

Vereisten:

- Alleen indexeerbare pagina’s opnemen.
- Canonical productie-domein gebruiken.
- `lastmod` waar betrouwbaar beschikbaar.
- Geen zoek-/filterstates opnemen.

## Robots.txt

`robots.txt` wordt statisch gepubliceerd.

Aanbevolen inhoud:

```text
User-agent: *
Allow: /

Sitemap: https://www.keukendesign.nl/sitemap.xml
```

Bij staging of preview moet indexatie apart worden voorkomen, maar productie op GitHub Pages moet indexeerbaar zijn.

## Open Graph metadata

Elke belangrijke pagina krijgt:

- `og:title`
- `og:description`
- `og:type`
- `og:url`
- `og:image`
- Twitter/X card metadata indien gewenst.

Projectcases:

- Gebruik projectcover als Open Graph image.

Fallback:

- Eén algemene Stadshaege/bulthaup showroomafbeelding.

## Analytics

Analytics mag geen backend vereisen.

Geschikte opties:

- Eenvoudig privacyvriendelijk script zoals Plausible.
- GA4 alleen als advertentie-/marketingintegratie nodig is.
- Geen self-hosted analytics met database.

Te meten events:

- Klik op “Maak een afspraak”.
- Telefoonklik.
- Mailklik.
- Routeklik.
- Projectfiltergebruik.
- Zoekopdracht.

Architectuurkeuze:

- Analytics is optioneel en extern.
- De site zelf blijft statisch.

## Formulieren en contact

GitHub Pages heeft geen backend voor formulierverwerking.

Toegestane opties:

- `mailto:` als minimale oplossing.
- Externe formulierdienst met statische embed/post endpoint.
- Link naar e-mail/telefoon/route.

Niet toegestaan als architectuur-aanname:

- Eigen backend endpoint.
- Serverless function.
- Database voor leads.

Aanbeveling:

- MVP: duidelijke telefoon-, mail- en route-CTA’s.
- Als formulier nodig is: kies expliciet een externe statische-site-compatible formulierdienst vóór implementatie.

## Performance optimalisaties

Belangrijkste maatregelen:

- Static HTML genereren.
- JavaScript minimaliseren.
- Vue alleen voor echte interacties.
- Projectfilters client-side maar licht houden.
- Zoekindex lazy-loaden.
- Kaart pas laden na klik of onder de vouw.
- Responsive images gebruiken.
- Galerijen pagineren of beperken.
- CSS kritisch en compact houden.
- Fonts self-hosten of beperken.
- Geen zware WebGL/Three.js in MVP.

Performancebudgetten vóór implementatie:

- Homepage JS budget.
- Maximale hero-afbeelding.
- Maximale projectthumbnail.
- Maximale paginaweight voor mobiel.
- Lighthouse/Core Web Vitals streefwaarden.

## Toegankelijkheid

Vereisten:

- Semantische HTML.
- Logische headingstructuur.
- Keyboard-bedienbare navigatie, filters, accordions en zoek.
- Zichtbare focus states.
- Alt-teksten voor projectbeelden.
- Reduced motion respecteren.
- Kleurcontrast controleren.
- Formulierlabels en foutmeldingen toegankelijk maken als er een formulier komt.

Statische architectuur helpt toegankelijkheid omdat basiscontent als HTML beschikbaar is.

## PWA mogelijkheden

PWA is optioneel en beperkt.

Wel passend:

- Web app manifest.
- Theme color.
- Iconen.
- Eventueel offline fallback voor basispagina.

Niet passend voor MVP:

- Push notifications.
- App-install prompts.
- Aggressieve service-worker caching.
- Offline projectcatalogus.

Waarom:

- GitHub Pages kan statische PWA-assets serveren, maar caching mag contentupdates en SEO niet compliceren.
- De website is primair oriëntatie en conversie, geen dagelijkse app.

## Lokale development

Doel:

- Simpel starten.
- Eenvoudig content bewerken.
- Lokaal static output kunnen testen.

Aanbevolen commands:

```text
pnpm install
pnpm dev
pnpm generate
pnpm preview:static
```

Lokale checks:

- Contentfrontmatter validatie.
- Interne links.
- Ontbrekende media.
- Sitemap-output.
- Build-output voor GitHub Pages.

## Deployment via GitHub Actions

Workflow:

1. Checkout repository.
2. Setup Node.
3. Install dependencies.
4. Run lint/content checks.
5. Generate static site.
6. Upload artifact.
7. Deploy to GitHub Pages.

Belangrijke requirements:

- Outputdirectory expliciet instellen.
- Custom domain/CNAME indien nodig publiceren.
- Geen serverprocessen starten.
- Geen runtime secrets nodig voor normale build.
- Externe formulier/analytics keys alleen als statische publieke config toestaan.

## Repositorystructuur

Aanbevolen:

```text
app/
  components/
  layouts/
  pages/
  composables/
  assets/
content/
  pages/
  projecten/
  bulthaup/
  advies/
  apparatuur/
  seo/
public/
  media/
  robots.txt
docs/
scripts/
  validate-content/
```

## Validatie vóór implementatie

Vóór bouwen vastleggen:

- Nuxt static generation outputpad voor GitHub Pages.
- Base URL en canonical domein.
- URL-strategie: trailing slash ja/nee.
- Redirectstrategie voor oude URL’s.
- Contentfrontmatter schema.
- Mediaformaten en maximale beeldgroottes.
- Formulierkeuze: mailto of externe formulierdienst.
- Analyticskeuze.
- Searchkeuze en indexscope.

## Conclusie

De leidende architectuur is: **Nuxt/Vue static generation naar GitHub Pages, met Markdown-content en media uit de repository**.

Deze keuze ondersteunt SEO, performance, eenvoudige deployment en schaalbare content zonder backend, server runtime, database of verplichte CMS-laag. Alle interacties moeten binnen statische hosting passen: client-side filters, build-time search, statische SEO-bestanden, repositorymedia en optionele externe diensten voor analytics of formulieren.
