# Decap CMS setup

Deze site gebruikt Decap CMS als eenvoudige Git-based CMS-laag. De CMS-interface staat onder `/admin` en schrijft wijzigingen terug naar Markdown-bestanden in deze repository.

## Bestanden

- `public/admin/index.html` laadt Decap CMS vanaf de Decap CDN.
- `public/admin/config.yml` configureert de GitHub backend, collecties en uploads.
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

GitHub Pages is statische hosting en kan de OAuth callback niet zelf afhandelen. De publieke admin gebruikt daarom een repo-only fallback: een collaborator logt in met een eigen GitHub fine-grained token. De admin bewaart dit token in browser-localStorage onder de standaard Decap-user key en Decap valideert daarna zelf of de GitHub-gebruiker write access heeft.

Maak per gebruiker een fine-grained personal access token in GitHub met:

- Repository access: alleen `jleenman/keukendesign`.
- Permissions: `Contents: Read and write`.
- Metadata: read-only, dit is standaard nodig voor GitHub API-toegang.

Voor klassieke tokens is de `repo` scope nodig, maar fine-grained tokens hebben de voorkeur omdat ze tot deze repository beperkt kunnen worden.

Alternatief kan later alsnog een eigen OAuth proxy voor Decap CMS/GitHub worden gebruikt. Zet dan `base_url` en `auth_endpoint` in `public/admin/config.yml` naar die proxyroute. De eerdere verwijzing naar `https://api.netlify.com/auth` is verwijderd, omdat die route zonder Netlify OAuth-provider voor deze site 404 geeft en de login blokkeert.

## Collecties

De CMS-config volgt de bestaande Markdown-structuur:

- `Pagina's`: alle Markdown-bestanden onder `source/`, inclusief geneste pagina's zoals `source/bulthaup/.../index.md`.
- `Documentatie`: Markdown-bestanden onder `docs/`, inclusief geneste documentatie.

Nieuwe pagina's worden aangemaakt als:

```text
source/<slug>/index.md
```

Daarmee blijft de bestaande map-per-pagina structuur intact.

## Afbeeldingen

Uploads worden opgeslagen in:

```text
public/uploads
```

In Markdown worden ze gerefereerd als:

```text
/keukendesign/uploads/bestand.jpg
```

Dit sluit aan op de huidige productie-URL `https://jleenman.github.io/keukendesign/`. Als later het custom domain `www.keukendesign.nl` actief wordt in GitHub Pages, kan `public_folder` naar `/uploads`.

Dit werkt met de bestaande statische build, omdat alles onder `public/` direct wordt meegekopieerd naar de gegenereerde site.

## Build en deploy

Decap CMS voegt alleen statische bestanden toe en introduceert geen database of API-based CMS. De bestaande build blijft hetzelfde:

```bash
npm run build
```

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
