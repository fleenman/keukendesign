# Architectuurcorrectie samenvatting

## 1. Aangepaste documenten

De volgende documenten zijn aangepast:

- `docs/technical-architecture.md`
  - Volledig herschreven naar een GitHub Pages-only architectuur.
  - Cloudflare Pages als aanbeveling verwijderd.
  - Netlify/Cloudflare/Vercel/eigen servers uitgesloten als onderzoeks- of productiepad.
  - SSR uitgesloten als productiearchitectuur.
  - Serverless/backend/database/CMS-verplichtingen verwijderd.

- `docs/ux-strategy.md`
  - Sectie “Architectuurcorrectie” toegevoegd.
  - Vastgelegd dat alle UX-patronen static-compatible moeten zijn en geen backend/API/serverruntime mogen vereisen.

- `docs/wow-factor-recommendations.md`
  - Sectie “Architectuurcorrectie” toegevoegd.
  - Vastgelegd dat effecten binnen GitHub Pages/static output moeten werken.
  - Serverfuncties, runtime image services en eigen API’s uitgesloten als vereiste.

Niet aanwezig in de huidige repository en daarom niet aangepast:

- `docs/build-plan.md`
- `docs/implementation-plan.md`
- `docs/website-concept.md`

Overige bestaande documenten zijn gecontroleerd:

- `docs/information-architecture.md`
- `docs/reference-research.md`
- `docs/website-analysis.md`
- `docs/github-pages-website-generation-method.md`

Daarin zijn geen strijdige productiearchitectuurkeuzes gevonden die aanpassing vereisten.

## 2. Verwijderde keuzes

De volgende keuzes zijn verwijderd als leidende of mogelijke productiearchitectuur:

- Cloudflare Pages als primaire hosting.
- Netlify als hostingalternatief.
- Vercel of eigen servers als relevante opties.
- SSR als productiepad.
- Serverless functies als architectuuraanname.
- Eigen backend/API voor formulieren, zoek of content.
- Databaseafhankelijkheid.
- Externe CMS-laag als vereiste.
- Runtime image optimization als aanname.
- Server-side formulierverwerking binnen eigen infrastructuur.

Wat nog wel mag:

- Client-side interacties.
- Build-time generatie.
- Markdown-content uit de repository.
- Media uit de repository.
- Statische zoekindex.
- Optionele externe analytics of formulierdienst, alleen als expliciet gekozen en zonder eigen backend.

## 3. Leidende architectuur

De leidende architectuur is:

```text
GitHub repository
  → Markdown/content files
  → Vue of Nuxt static generation
  → static HTML/CSS/JS/media output
  → GitHub Actions build
  → GitHub Pages hosting
```

Harde randvoorwaarden:

- GitHub Pages hosting.
- Static output.
- Geen backend.
- Geen server runtime.
- Geen database.
- Geen verplichte externe CMS-laag.
- Geen productie-SSR.
- Media worden vanuit de repository gepubliceerd.
- SEO-bestanden zoals `sitemap.xml`, `robots.txt`, metadata en Open Graph worden statisch gegenereerd.

Voorkeursrichting:

- Nuxt static generation met Vue.
- Markdown + YAML frontmatter als contentmodel.
- GitHub Actions voor build en deploy.
- Pagefind of vergelijkbare build-time static search.
- Responsive imagevarianten vooraf of tijdens build genereren.

## 4. Overblijvende risico’s voor GitHub Pages

### Repositorygrootte en media

Veel grote foto’s kunnen de repository zwaar maken en GitHub Actions builds vertragen.

Mitigatie:

- Beeldselectie vóór implementatie.
- Webformaten en maximale resoluties vastleggen.
- Geen onnodige originelen publiceren.

### Geen server-side formulieren

GitHub Pages kan geen formulierdata verwerken.

Mitigatie:

- MVP met telefoon, mail en route-CTA’s.
- Als formulier nodig is: vooraf expliciet een statische-site-compatible externe formulierdienst kiezen.

### Redirectbeperkingen

GitHub Pages heeft minder flexibele redirectmogelijkheden dan platforms met edge/serverconfiguratie.

Mitigatie:

- Belangrijke URL’s behouden waar mogelijk.
- Statische redirectpagina’s gebruiken waar nodig.
- URL-migratieplan vóór implementatie vastleggen.

### Geen runtime image optimalisatie

Afbeeldingen moeten vooraf of tijdens build worden geoptimaliseerd.

Mitigatie:

- Image buildscript of static-compatible Nuxt image workflow.
- `srcset`, `sizes`, lazy-loading en geoptimaliseerde thumbnails.

### Geen server-side zoekfunctie

Zoek moet client-side of build-time werken.

Mitigatie:

- Pagefind of vergelijkbare statische zoekindex.
- Zoekindex lazy-loaden.

### Geen runtime CMS

Contentwijzigingen lopen via Git/Markdown en rebuild.

Mitigatie:

- Contenttemplates.
- Frontmatter-validatie.
- GitHub editor of later optionele Git-based redactie-interface.

## 5. Acties nodig vóór implementatie

1. Kies definitief tussen Vue-only static build en Nuxt static generation.
   - Aanbeveling blijft Nuxt static generation.

2. Leg GitHub Pages outputpad vast.
   - Bijvoorbeeld Nuxt `nuxi generate` output naar `.output/public`.

3. Bepaal URL-strategie.
   - Trailing slash ja/nee.
   - Oude URL’s behouden of redirectpagina’s maken.

4. Definieer contentmodel.
   - Projectcases.
   - Bulthaup-pagina’s.
   - Adviespagina’s.
   - SEO-landingspagina’s.

5. Definieer media-aanpak.
   - Max resoluties.
   - Thumbnailformaten.
   - Bestandsnamen.
   - Alt-teksten.

6. Bepaal formulierstrategie.
   - MVP: telefoon/mail/route.
   - Eventueel later externe formulierdienst.

7. Bepaal zoekstrategie.
   - Aanbevolen: Pagefind build-time index.

8. Bepaal analyticsstrategie.
   - Alleen statisch extern script indien nodig.
   - Geen self-hosted analytics of database.

9. Richt GitHub Actions deploymentplan in.
   - Install.
   - Contentvalidatie.
   - Static generate.
   - Deploy naar GitHub Pages.

10. Voeg validatie toe vóór release.
    - Interne links.
    - Ontbrekende media.
    - SEO-frontmatter.
    - Sitemap-output.
    - Robots.txt.
    - Accessibility smoke checks.

## Conclusie

De architectuur is nu gecorrigeerd naar één heldere lijn: **statische GitHub Pages website vanuit GitHub, gebouwd met Vue/Nuxt static generation en Markdown-content uit de repository**. Alle serverruntime-, backend-, database-, alternatieve hosting- en verplichte CMS-keuzes zijn uit de leidende architectuur verwijderd.
