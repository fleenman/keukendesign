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
  base_url: https://api.netlify.com
  auth_endpoint: auth
```

Controleer na het aanmaken of koppelen van de GitHub-repository dat `repo` exact overeenkomt met `eigenaar/repository`. De branch is `main`.

## Authenticatie

Decap CMS commit naar GitHub namens een ingelogde gebruiker. Daarvoor is een OAuth-configuratie nodig. GitHub Pages is statische hosting en kan de OAuth callback niet zelf afhandelen.

De huidige configuratie gebruikt daarom de Netlify OAuth endpoint als externe OAuth proxy:

```yaml
base_url: https://api.netlify.com
auth_endpoint: auth
```

Dit is alleen de authenticatielaag voor Decap CMS; de site blijft op GitHub Pages staan en content blijft in GitHub als Markdown.

Alternatief kan een eigen OAuth proxy voor Decap CMS/GitHub worden gebruikt. Zet dan `base_url` in `public/admin/config.yml` naar die proxy en laat `auth_endpoint` overeenkomen met de proxyroute.

De OAuth-app moet toegang krijgen tot deze repository. Voor een private repository is minimaal toegang nodig om content te lezen en commits te schrijven. Beperk toegang bij voorkeur tot deze repository.

Zonder OAuth-configuratie opent `/admin` wel, maar kan Decap niet inloggen of wijzigingen naar GitHub committen.

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

Dit is nodig zolang GitHub Pages de site publiceert onder `https://jleenman.github.io/keukendesign/`. Als de custom domain `www.keukendesign.nl` actief is in GitHub Pages, kan `public_folder` terug naar `/uploads`.

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

Daardoor verwijzen Nuxt-assets, fonts en publieke afbeeldingen naar de juiste submap op `jleenman.github.io`. Als GitHub Pages later volledig op `www.keukendesign.nl` draait, verwijder deze environment variable of zet hem op `/`.

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
