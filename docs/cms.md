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
  site_domain: www.keukendesign.nl
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
/uploads/bestand.jpg
```

Dit sluit aan op het canonical domein `https://www.keukendesign.nl`. De GitHub Pages subpad-URL `https://jleenman.github.io/keukendesign/` is alleen nog een technische fallback; de productiebuild is gericht op het custom domain.

Dit werkt met de bestaande statische build, omdat alles onder `public/` direct wordt meegekopieerd naar de gegenereerde site.

## Build en deploy

Decap CMS voegt alleen statische bestanden toe en introduceert geen database of API-based CMS. De bestaande build blijft hetzelfde:

```bash
npm run build
```

Bij deploy naar static hosting worden `/admin`, `/uploads` en de rest van `public/` automatisch meegenomen.

Voor GitHub Pages bouwt `.github/workflows/deploy.yml` met:

```yaml
NUXT_APP_BASE_URL: /
```

Daardoor verwijzen Nuxt-assets, fonts, publieke afbeeldingen en `/admin/` naar root-paden op `www.keukendesign.nl`.

Let op: bij GitHub Pages met een custom Actions workflow is `public/CNAME` niet genoeg. GitHub negeert dat bestand voor de Pages-instelling; het custom domain moet ook in de repository-instellingen onder Pages staan. Voor deze site hoort daar `www.keukendesign.nl` te staan. De DNS moet `www.keukendesign.nl` als CNAME naar `jleenman.github.io` laten wijzen; zolang het domein nog naar de oude WordPress/Apache-host wijst, opent `/admin/` daar de WordPress-admin in plaats van Decap CMS.

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
