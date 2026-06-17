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
```

Controleer na het aanmaken of koppelen van de GitHub-repository dat `repo` exact overeenkomt met `eigenaar/repository`. De branch is `main`.

## Authenticatie

Decap CMS commit naar GitHub namens een ingelogde gebruiker. Daarvoor is een OAuth-configuratie nodig.

Gebruik een van deze routes:

1. GitHub OAuth via de hostingprovider, bijvoorbeeld Netlify Identity/Git Gateway wanneer de site daar draait.
2. Een eigen OAuth proxy voor Decap CMS/GitHub, waarbij `base_url` in `public/admin/config.yml` naar die proxy wijst.

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
/uploads/bestand.jpg
```

Dit werkt met de bestaande statische build, omdat alles onder `public/` direct wordt meegekopieerd naar de gegenereerde site.

## Build en deploy

Decap CMS voegt alleen statische bestanden toe en introduceert geen database of API-based CMS. De bestaande build blijft hetzelfde:

```bash
npm run build
```

Bij deploy naar static hosting worden `/admin`, `/uploads` en de rest van `public/` automatisch meegenomen.

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
