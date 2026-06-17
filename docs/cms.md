# Decap CMS setup

Deze site gebruikt Decap CMS als eenvoudige Git-based CMS-laag. De CMS-interface staat onder `/admin` en schrijft wijzigingen terug naar Markdown-bestanden in deze repository.

## Bestanden

- `public/admin/index.html` laadt Decap CMS vanaf de Decap CDN.
- `public/admin/config.yml` configureert de GitHub backend, collecties en uploads.
- `content/site.md` bevat sitebrede instellingen zoals contact, navigatie en footerlinks.
- `content/pages/*.md` bevat de huidige Nuxt-pagina's met route, SEO, titel, intro en hero-data.
- `content/projects/*.md` bevat de projectcases die de projectpagina, filters en detailpagina's voeden.
- `scripts/generate-content.mjs` genereert `content/generated/*.mjs` voor Nuxt.
- `public/uploads/` is de uploadmap voor afbeeldingen en andere media uit de CMS.

## Backend

De CMS-config gebruikt de GitHub backend:

```yaml
backend:
  name: github
  repo: jleenman/keukendesign
  branch: main
  site_domain: jleenman.github.io
  auth_scope: repo
```

Controleer na het aanmaken of koppelen van de GitHub-repository dat `repo` exact overeenkomt met `eigenaar/repository`. De branch is `main`.

## Authenticatie

Decap CMS commit naar GitHub namens een ingelogde gebruiker. De directe GitHub-backend vereist dat de gebruiker push access heeft op de content-repository. Voor deze repository betekent dit dat iedere CMS-gebruiker als collaborator minimaal write access nodig heeft op `jleenman/keukendesign`.

GitHub Pages is statische hosting en kan de OAuth callback niet zelf afhandelen. De publieke admin gebruikt daarom een repo-only fallback: een collaborator logt in met een eigen GitHub fine-grained token. De admin controleert de token eerst via de GitHub API op gebruiker en schrijfrechten voor `jleenman/keukendesign`. Alleen bij een geldige token wordt deze in browser-localStorage bewaard onder de standaard Decap-user key `decap-cms-user`. Bij een verlopen, ingetrokken of te beperkt token wordt de opgeslagen sessie verwijderd en verschijnt het loginformulier opnieuw. De token hoort nooit in de URL te blijven staan; als een browser toch op een `?token=...` URL belandt, verwijdert de admin die parameter direct en verwerkt hij de token via localStorage.

Maak per gebruiker een fine-grained personal access token in GitHub met:

- Repository access: alleen `jleenman/keukendesign`.
- Permissions: `Contents: Read and write`.
- Metadata: read-only, dit is standaard nodig voor GitHub API-toegang.

Voor klassieke tokens is de `repo` scope nodig, maar fine-grained tokens hebben de voorkeur omdat ze tot deze repository beperkt kunnen worden.

Alternatief kan later alsnog een eigen OAuth proxy voor Decap CMS/GitHub worden gebruikt. Zet dan `base_url` en `auth_endpoint` in `public/admin/config.yml` naar die proxyroute. De eerdere verwijzing naar `https://api.netlify.com/auth` is verwijderd, omdat die route zonder Netlify OAuth-provider voor deze site 404 geeft en de login blokkeert.

## Collecties

De CMS-config volgt de huidige Nuxt-contentstructuur:

- `Site instellingen`: `content/site.md` voor contactgegevens, navigatie en footer.
- `Website pagina's`: Markdown-bestanden onder `content/pages/`.
- `Projecten`: Markdown-bestanden onder `content/projects/`.
- `Documentatie`: Markdown-bestanden onder `docs/`, inclusief geneste documentatie.

Nieuwe pagina's worden aangemaakt als:

```text
content/pages/<slug>.md
```

Nieuwe projecten worden aangemaakt als:

```text
content/projects/<slug>.md
```

De oude WordPress-export onder `source/` is verwijderd. Decap toont dus geen oude WordPress-content meer.

## Afbeeldingen

Uploads worden opgeslagen in:

```text
public/uploads
```

In Markdown worden ze gerefereerd als:

```text
/uploads/bestand.jpg
```

Nuxt zet publieke assetpaden via `useAssetPath()` om naar de juiste base URL. Daardoor werkt `/uploads/bestand.jpg` lokaal en op `https://jleenman.github.io/keukendesign/`.

Dit werkt met de bestaande statische build, omdat alles onder `public/` direct wordt meegekopieerd naar de gegenereerde site.

## Build en deploy

Decap CMS voegt alleen statische bestanden toe en introduceert geen database of API-based CMS. De bestaande build blijft hetzelfde:

```bash
npm run build
```

Tijdens `npm run build` draait eerst:

```bash
npm run generate:content
```

Die stap leest `content/site.md`, `content/pages/*.md` en `content/projects/*.md` en schrijft de gegenereerde modules in `content/generated/`. Vue-pagina's importeren daarna dezelfde contracten als voorheen via `content/site.mjs`, `content/pages.mjs` en `content/projects.mjs`.

Bij deploy naar static hosting worden `/admin`, `/uploads` en de rest van `public/` automatisch meegenomen.

Voor GitHub Pages bouwt `.github/workflows/deploy.yml` met:

```yaml
NUXT_APP_BASE_URL: /keukendesign/
```

Daardoor verwijzen Nuxt-assets, fonts, publieke afbeeldingen en de footerlink naar de juiste submap op `jleenman.github.io/keukendesign`.

Let op: `/admin/` hoort in deze fase te worden geopend via `https://jleenman.github.io/keukendesign/admin/`. De root-URL `https://jleenman.github.io/admin/` hoort niet bij deze repositorysite.

## Lokale CMS-test

`local_backend: true` staat aan in `public/admin/config.yml`. Voor lokaal schrijven via Decap is een lokale Decap backend nodig:

```bash
npx decap-server
```

Draai daarnaast de Nuxt devserver:

```bash
npm run dev
```

Open daarna:

```text
http://127.0.0.1:3000/admin/
```

Decap gebruikt hash-routes. De collectielijst staat dus onder `/admin/#/collections/pages`, niet onder `/admin/collections/pages`.
