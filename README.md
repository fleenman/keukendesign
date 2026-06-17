# Stadshaege Keukendesign Static Site

Statische Nuxt/Vue-website voor keukendesign.nl, gebouwd volgens de documentatie in `docs/`.

## Commands

```bash
npm install
npm run dev
npm run audit:content
npm run sitemap
npm run generate
npm run build
npm run preview:static
```

## Architectuur

- Nuxt static generation.
- Output voor GitHub Pages: `.output/public`.
- Geen backend, server runtime, database, productie-SSR of eigen formulierendpoint.
- Contentdata staat als Markdown in `content/site.md`, `content/pages/*.md` en `content/projects/*.md`.
- `npm run generate:content` genereert de Nuxt-modules onder `content/generated/`.
- Geselecteerde media staat in `public/media/`.
- Het merkfont `RotiSemiSans` staat in `public/fonts/` en is verplicht voor herkenbare bulthaup/Stadshaege-typografie.

## Content

Projectcases staan in `content/projects/*.md`. Gebruik alleen gegevens die uit de huidige content, bestandsnamen of documentatie te onderbouwen zijn. Verzin geen klant-, locatie-, budget- of projectdetails.

## Deployment

GitHub Actions draait `npm ci`, `npm run build` en publiceert `.output/public` naar GitHub Pages.
