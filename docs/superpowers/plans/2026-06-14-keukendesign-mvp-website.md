# Keukendesign MVP Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the complete Keukendesign.nl MVP as a static Nuxt/Vue website for GitHub Pages, using `/docs` as source of truth and `source/` as content/media input.

**Architecture:** The site is generated with Nuxt static generation and deployed as static files from `.output/public` to GitHub Pages. Content lives in repository Markdown/data files, media is self-hosted under `public/media`, and Vue is used only for progressive enhancement such as mobile navigation, filters and accordions.

**Tech Stack:** Nuxt 3, Vue 3, TypeScript, Markdown/data files, CSS custom properties, self-hosted `RotiSemiSans`, Node validation scripts, GitHub Actions, static HTML/CSS/JS output.

---

## File Structure

Create this structure:

```text
package.json
nuxt.config.ts
tsconfig.json
app.vue
README.md
.gitignore
.github/workflows/deploy.yml
assets/css/main.css
components/
  AppFooter.vue
  AppHeader.vue
  ContactActions.vue
  ContentSection.vue
  ProjectCard.vue
  ProjectFilters.vue
  ResponsiveImage.vue
  SeoJsonLd.vue
content/
  site.mjs
  projects.mjs
  pages/
    advies.md
    bulthaup.md
    bulthaup-b1.md
    bulthaup-b2.md
    bulthaup-b3.md
    contact.md
    keukens-amersfoort.md
    privacy.md
    showroom.md
pages/
  index.vue
  advies/index.vue
  advies/afspraak-voorbereiden.vue
  advies/werkwijze.vue
  bulthaup/index.vue
  bulthaup/b1.vue
  bulthaup/b2.vue
  bulthaup/b3.vue
  contact/index.vue
  keukens-amersfoort/index.vue
  privacy/index.vue
  projecten/index.vue
  projecten/[slug].vue
  showroom/index.vue
  showroom/route-en-parkeren.vue
public/
  CNAME
  fonts/
  media/
  robots.txt
scripts/
  audit-content.mjs
  copy-selected-media.mjs
  generate-sitemap.mjs
```

Responsibilities:

- `content/site.mjs`: site-wide navigation, contact details, footer links and canonical domain.
- `content/projects.mjs`: curated projectcase metadata and image references.
- `content/pages/*.md`: long-form page body copy sourced from `source/` and `/docs`, not invented.
- `components/*`: small reusable UI units.
- `pages/*`: route composition only; avoid putting content blobs in page components.
- `scripts/audit-content.mjs`: validates frontmatter/data, routes, image existence and required SEO fields.
- `scripts/generate-sitemap.mjs`: writes `public/sitemap.xml`.
- `assets/css/main.css`: design tokens, layout utilities, typography, accessible states and responsive rules.

## Task 1: Scaffold Static Nuxt Project

**Files:**
- Create: `package.json`
- Create: `nuxt.config.ts`
- Create: `tsconfig.json`
- Create: `app.vue`
- Create: `.gitignore`
- Create: `assets/css/main.css`

- [ ] **Step 1: Write the failing project-structure test**

Create `scripts/audit-content.mjs` with this first minimal check:

```js
import { existsSync } from 'node:fs'

const requiredFiles = [
  'package.json',
  'nuxt.config.ts',
  'app.vue',
  'assets/css/main.css',
]

const missing = requiredFiles.filter((file) => !existsSync(file))

if (missing.length) {
  console.error(`Missing required files: ${missing.join(', ')}`)
  process.exit(1)
}

console.log('Content audit passed')
```

- [ ] **Step 2: Run audit to verify it fails**

Run: `node scripts/audit-content.mjs`

Expected: FAIL with missing `package.json`, `nuxt.config.ts`, `app.vue` and `assets/css/main.css`.

- [ ] **Step 3: Create Nuxt package files**

Create `package.json`:

```json
{
  "name": "keukendesign-static-site",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "nuxt dev --host 127.0.0.1 --port 3000",
    "generate": "nuxt generate",
    "preview:static": "npx serve .output/public",
    "audit:content": "node scripts/audit-content.mjs",
    "sitemap": "node scripts/generate-sitemap.mjs",
    "build": "npm run audit:content && npm run sitemap && nuxt generate"
  },
  "dependencies": {
    "@nuxt/kit": "^3.17.0",
    "nuxt": "^3.17.0",
    "vue": "^3.5.0"
  },
  "devDependencies": {
    "serve": "^14.2.0",
    "typescript": "^5.8.0"
  }
}
```

Create `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'nl' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#f6f3ec' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'preload', href: '/fonts/rotissemisansstd-webfont.woff', as: 'font', type: 'font/woff', crossorigin: '' }
      ]
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/advies/',
        '/advies/afspraak-voorbereiden/',
        '/advies/werkwijze/',
        '/bulthaup/',
        '/bulthaup/b1/',
        '/bulthaup/b2/',
        '/bulthaup/b3/',
        '/contact/',
        '/keukens-amersfoort/',
        '/privacy/',
        '/projecten/',
        '/showroom/',
        '/showroom/route-en-parkeren/'
      ]
    }
  },
  routeRules: {
    '/**': { prerender: true }
  },
  compatibilityDate: '2026-06-14'
})
```

Create `tsconfig.json`:

```json
{
  "extends": "./.nuxt/tsconfig.json"
}
```

Create `app.vue`:

```vue
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

Create `.gitignore`:

```gitignore
.nuxt
.output
node_modules
.superpowers
.DS_Store
```

Create `assets/css/main.css` with initial tokens:

```css
@font-face {
  font-family: "RotiSemiSans";
  src: url("/fonts/rotissemisansstd-webfont.woff") format("woff");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

:root {
  --font-brand: "RotiSemiSans", system-ui, sans-serif;
  --font-body: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --color-ink: #252522;
  --color-muted: #68645c;
  --color-paper: #f7f4ef;
  --color-surface: #ffffff;
  --color-line: #ded8cf;
  --color-accent: #6f765f;
  --color-accent-dark: #4c5342;
  --space-page: clamp(1rem, 4vw, 4rem);
  --max-content: 1180px;
  --radius: 8px;
}

* { box-sizing: border-box; }

html {
  color: var(--color-ink);
  background: var(--color-paper);
  font-family: var(--font-body);
  line-height: 1.5;
  scroll-behavior: smooth;
}

body { margin: 0; }

body, button, input, textarea, select { font: inherit; }

a { color: inherit; }

img { display: block; max-width: 100%; height: auto; }

:focus-visible {
  outline: 3px solid var(--color-accent);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 4: Run audit to verify it passes**

Run: `node scripts/audit-content.mjs`

Expected: PASS with `Content audit passed`.

## Task 2: Add Site Data And Shared Layout

**Files:**
- Create: `content/site.mjs`
- Create: `layouts/default.vue`
- Create: `components/AppHeader.vue`
- Create: `components/AppFooter.vue`
- Create: `components/ContactActions.vue`
- Modify: `assets/css/main.css`
- Modify: `scripts/audit-content.mjs`

- [ ] **Step 1: Extend audit for site contact data**

Update `scripts/audit-content.mjs` to import `content/site.mjs` dynamically after the file exists. Add this check:

```js
const requiredContact = ['name', 'streetAddress', 'postalCode', 'city', 'phone', 'mobile', 'email']

async function validateSiteData() {
  if (!existsSync('content/site.mjs')) return
  const { site } = await import('../content/site.mjs')
  const missingContact = requiredContact.filter((key) => !site.contact?.[key])
  if (missingContact.length) {
    console.error(`Missing contact fields: ${missingContact.join(', ')}`)
    process.exit(1)
  }
}

await validateSiteData()
```

- [ ] **Step 2: Run audit to verify current state**

Run: `node scripts/audit-content.mjs`

Expected: PASS because `content/site.mjs` does not exist yet and the guard skips the import.

- [ ] **Step 3: Create site data**

Create `content/site.mjs`:

```ts
export const site = {
  name: 'Stadshaege Keukendesign',
  canonicalUrl: 'https://www.keukendesign.nl',
  description: 'Persoonlijk ontworpen bulthaup-keukens op maat vanuit de showroom in Amersfoort.',
  contact: {
    name: 'Stadshaege Keukendesign',
    streetAddress: 'Grote Haag 15',
    postalCode: '3811 HH',
    city: 'Amersfoort',
    phone: '033-4627130',
    mobile: '06-21295370',
    email: 'info@keukendesign.nl',
    routeUrl: 'https://www.google.com/maps/search/?api=1&query=Grote+Haag+15+3811+HH+Amersfoort'
  },
  navigation: [
    { label: 'Bulthaup', to: '/bulthaup/' },
    { label: 'Projecten', to: '/projecten/' },
    { label: 'Advies', to: '/advies/' },
    { label: 'Showroom', to: '/showroom/' },
    { label: 'Contact', to: '/contact/' }
  ],
  footerGroups: [
    {
      title: 'Afspraak',
      links: [
        { label: 'Maak een afspraak', to: '/contact/' },
        { label: 'Showroom bezoeken', to: '/showroom/' },
        { label: 'Route en parkeren', to: '/showroom/route-en-parkeren/' },
        { label: 'Afspraak voorbereiden', to: '/advies/afspraak-voorbereiden/' }
      ]
    },
    {
      title: 'Keukens',
      links: [
        { label: 'Bulthaup keukens', to: '/bulthaup/' },
        { label: 'Bulthaup b1', to: '/bulthaup/b1/' },
        { label: 'Bulthaup b2', to: '/bulthaup/b2/' },
        { label: 'Bulthaup b3', to: '/bulthaup/b3/' }
      ]
    },
    {
      title: 'Inspiratie',
      links: [
        { label: 'Projecten', to: '/projecten/' },
        { label: 'Keukens Amersfoort', to: '/keukens-amersfoort/' }
      ]
    },
    {
      title: 'Juridisch',
      links: [{ label: 'Privacy', to: '/privacy/' }]
    }
  ]
} as const
```

- [ ] **Step 4: Create header/footer components**

Create components exactly from the site data. Header must include skip link, navigation, `Maak een afspraak`, and mobile menu button with `aria-expanded`.

- [ ] **Step 5: Run audit**

Run: `node scripts/audit-content.mjs`

Expected: PASS and no missing contact fields.

## Task 3: Curate Media And Add RotiSemiSans

**Files:**
- Create: `scripts/copy-selected-media.mjs`
- Create: `public/fonts/rotissemisansstd-webfont.woff`
- Create/Copy: selected files under `public/media/`
- Modify: `scripts/audit-content.mjs`

- [ ] **Step 1: Write failing audit for required font**

Add this to `scripts/audit-content.mjs`:

```js
if (!existsSync('public/fonts/rotissemisansstd-webfont.woff')) {
  console.error('Missing required RotiSemiSans font at public/fonts/rotissemisansstd-webfont.woff')
  process.exit(1)
}
```

- [ ] **Step 2: Run audit to verify it fails**

Run: `node scripts/audit-content.mjs`

Expected: FAIL with missing RotiSemiSans font.

- [ ] **Step 3: Copy the font**

Use the already verified source:

```bash
mkdir -p public/fonts
curl -s -o public/fonts/rotissemisansstd-webfont.woff https://keukendesign.nl/wp/media/rotissemisansstd-webfont.woff
```

If network access is unavailable, copy the font from an approved local source and keep the same filename.

- [ ] **Step 4: Create selected media script**

Create `scripts/copy-selected-media.mjs`:

```js
import { copyFileSync, mkdirSync } from 'node:fs'
import { dirname } from 'node:path'

const files = [
  ['source/media/showroom-4-1616x1212.jpg', 'public/media/showroom/showroom-4-1616x1212.jpg'],
  ['source/media/bulthaup-b3-zwart-eiken-kast-bar-1616x1077.jpg', 'public/media/projecten/bulthaup-b3-zwart-eiken-kast-bar-1616x1077.jpg'],
  ['source/media/bulthaup-b3-eiland-wit-1616x1077.jpg', 'public/media/projecten/bulthaup-b3-eiland-wit-1616x1077.jpg'],
  ['source/media/bulthaup-b3-kaolin-flint-blad-1-1616x1077.jpg', 'public/media/projecten/bulthaup-b3-kaolin-flint-blad-1-1616x1077.jpg'],
  ['source/media/bulthaup-b3-en-b2-kast-noten-1616x1077.jpg', 'public/media/projecten/bulthaup-b3-en-b2-kast-noten-1616x1077.jpg'],
  ['source/media/bulthaup-b1-eiland-met-eiken-natuur-Amersfoort-2-1616x1077.jpg', 'public/media/projecten/bulthaup-b1-eiland-met-eiken-natuur-amersfoort-1616x1077.jpg'],
  ['source/media/bulthaup-b2.jpg', 'public/media/projecten/bulthaup-b2.jpg'],
  ['source/media/Kiezel-en-Flint-bulthaup-met-rvs-blad-2-1616x1077.jpg', 'public/media/projecten/kiezel-flint-rvs-blad-1616x1077.jpg']
]

for (const [from, to] of files) {
  mkdirSync(dirname(to), { recursive: true })
  copyFileSync(from, to)
}

console.log(`Copied ${files.length} selected media files`)
```

- [ ] **Step 5: Run media copy and audit**

Run: `node scripts/copy-selected-media.mjs && node scripts/audit-content.mjs`

Expected: media copied and audit passes.

## Task 4: Create Curated Project Data

**Files:**
- Create: `content/projects.mjs`
- Modify: `scripts/audit-content.mjs`
- Create: `components/ProjectCard.vue`
- Create: `components/ResponsiveImage.vue`

- [ ] **Step 1: Extend audit for 6-10 projectcases**

Add validation:

```js
async function validateProjects() {
  if (!existsSync('content/projects.mjs')) return
  const { projects } = await import('../content/projects.mjs')
  if (projects.length < 6 || projects.length > 10) {
    console.error(`Expected 6-10 MVP projects, found ${projects.length}`)
    process.exit(1)
  }
  for (const project of projects) {
    for (const key of ['title', 'slug', 'system', 'layout', 'region', 'cover', 'summary', 'question', 'challenge', 'solution']) {
      if (!project[key]) {
        console.error(`Project ${project.slug || project.title} missing ${key}`)
        process.exit(1)
      }
    }
    if (!existsSync(`public${project.cover}`)) {
      console.error(`Missing cover image for ${project.slug}: public${project.cover}`)
      process.exit(1)
    }
  }
}

await validateProjects()
```

- [ ] **Step 2: Create `content/projects.mjs` with 6-8 conservative cases**

Use only metadata supported by filenames/source. Example shape:

```ts
export type Project = {
  title: string
  slug: string
  system: 'b1' | 'b2' | 'b3'
  layout: string
  materials: string[]
  appliances: string[]
  region: string
  cover: string
  gallery: string[]
  summary: string
  question: string
  challenge: string
  solution: string
}

export const projects: Project[] = [
  {
    title: 'Bulthaup b3 keuken met zwart eiken bar',
    slug: 'bulthaup-b3-zwart-eiken-bar',
    system: 'b3',
    layout: 'bar',
    materials: ['zwart eiken'],
    appliances: [],
    region: 'Amersfoort en omgeving',
    cover: '/media/projecten/bulthaup-b3-zwart-eiken-kast-bar-1616x1077.jpg',
    gallery: ['/media/projecten/bulthaup-b3-zwart-eiken-kast-bar-1616x1077.jpg'],
    summary: 'Een gerealiseerde bulthaup b3 keuken waarin donkere houtafwerking en een barfunctie samenkomen.',
    question: 'Hoe krijgt een open keuken een rustige, sociale plek zonder dat de opstelling druk wordt?',
    challenge: 'De keuken moest representatief en bruikbaar blijven, met voldoende aandacht voor materiaalrust.',
    solution: 'De b3-opbouw combineert strakke fronten met een barzone die de keuken verbindt met de leefruimte.'
  }
]
```

Add 5-9 more entries using selected media. Do not invent exact street, client or budget details.

- [ ] **Step 3: Run audit**

Run: `node scripts/audit-content.mjs`

Expected: PASS with 6-10 valid projects.

## Task 5: Build Shared UI Components

**Files:**
- Create: `components/ContactActions.vue`
- Create: `components/ContentSection.vue`
- Create: `components/ProjectFilters.vue`
- Create: `components/SeoJsonLd.vue`
- Modify: `assets/css/main.css`

- [ ] **Step 1: Write component behavior requirements in audit**

Add static checks for component files:

```js
for (const file of [
  'components/AppHeader.vue',
  'components/AppFooter.vue',
  'components/ContactActions.vue',
  'components/ProjectCard.vue',
  'components/ProjectFilters.vue',
  'components/ResponsiveImage.vue',
  'components/SeoJsonLd.vue'
]) {
  if (!existsSync(file)) {
    console.error(`Missing component: ${file}`)
    process.exit(1)
  }
}
```

- [ ] **Step 2: Implement `ContactActions.vue`**

It must render appointment, phone, mobile, mail and route links with accessible labels and no form backend.

- [ ] **Step 3: Implement `ProjectFilters.vue`**

Use checkbox/button semantics with `aria-pressed`, emit selected filter state, and expose a visible result count.

- [ ] **Step 4: Run audit**

Run: `node scripts/audit-content.mjs`

Expected: PASS.

## Task 6: Build Homepage And Core Routes

**Files:**
- Create/Modify: all page files listed in File Structure.
- Modify: `assets/css/main.css`

- [ ] **Step 1: Create homepage `pages/index.vue`**

It must contain sections in this order:

1. Hero with real kitchen photo.
2. Three route cards.
3. Selected projects.
4. Why Stadshaege.
5. Bulthaup b1/b2/b3 comparison.
6. Advice process.
7. Showroom contact block.

- [ ] **Step 2: Create project overview and detail pages**

`pages/projecten/index.vue` imports `projects`, renders filters and cards. `pages/projecten/[slug].vue` finds project by slug and renders case sections.

- [ ] **Step 3: Create bulthaup, advice, showroom, contact, Amersfoort and privacy pages**

Each route must include unique H1, summary, internal links and CTA block.

- [ ] **Step 4: Run local generate**

Run: `npm run generate`

Expected: Nuxt generates `.output/public` without server runtime errors.

## Task 7: Add SEO, Robots, Sitemap And Structured Data

**Files:**
- Create: `scripts/generate-sitemap.mjs`
- Create: `public/robots.txt`
- Modify: page components to use `useSeoMeta`
- Modify: `components/SeoJsonLd.vue`
- Modify: `package.json`

- [ ] **Step 1: Create `public/robots.txt`**

```text
User-agent: *
Allow: /

Sitemap: https://www.keukendesign.nl/sitemap.xml
```

- [ ] **Step 2: Create sitemap generator**

Create `scripts/generate-sitemap.mjs` that imports site and projects, writes static URLs for core routes and project routes.

- [ ] **Step 3: Add LocalBusiness JSON-LD**

Use contact data from `content/site.mjs` and include name, address, phone, URL and map URL.

- [ ] **Step 4: Run build**

Run: `npm run build`

Expected: audit passes, sitemap is written, static generation succeeds.

## Task 8: Add GitHub Pages Deployment And Documentation

**Files:**
- Create: `.github/workflows/deploy.yml`
- Create/Modify: `README.md`
- Optional Create: `public/CNAME`

- [ ] **Step 1: Create GitHub Actions workflow**

Use install, audit, sitemap, generate and Pages deploy. The artifact path is `.output/public`.

- [ ] **Step 2: Create README**

README must document:

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run generate`
- `npm run preview:static`
- where content lives
- where media lives
- how GitHub Pages deploy works
- that production has no backend/server runtime
- that `RotiSemiSans` is required brand typography

- [ ] **Step 3: Run build**

Run: `npm run build`

Expected: same successful build as Task 7.

## Task 9: Accessibility, Mobile And Performance Verification

**Files:**
- Modify: components/pages/CSS as needed.

- [ ] **Step 1: Start dev server**

Run: `npm run dev`

Expected: server available at `http://127.0.0.1:3000/`.

- [ ] **Step 2: Browser check desktop and mobile**

Open:

- `http://127.0.0.1:3000/`
- `http://127.0.0.1:3000/projecten/`
- `http://127.0.0.1:3000/contact/`

Check:

- no horizontal scroll on mobile.
- focus states visible.
- mobile menu opens/closes with correct labels.
- project filters update count.
- accordions work by keyboard.
- `RotiSemiSans` is visibly used in headings/nav/CTA.

- [ ] **Step 3: Static preview check**

Run: `npm run generate` and `npm run preview:static`.

Open generated preview and verify deep links:

- `/bulthaup/b3/`
- `/projecten/`
- one `/projecten/[slug]/`
- `/showroom/route-en-parkeren/`

Expected: direct route loads without client-only fallback failure.

## Self-Review

Spec coverage:

- Static Nuxt/GitHub Pages architecture: Tasks 1, 7, 8.
- Content/model/projectcases: Tasks 3, 4, 6.
- UX route A: Task 6.
- RotiSemiSans requirement: Tasks 1, 3, 9.
- SEO/structured data/sitemap/robots: Task 7.
- Accessibility/mobile/performance: Tasks 5, 6, 9.
- No backend/server runtime/database/SSR: Tasks 1, 7, 8.

Known execution constraint:

- The current workspace is not a Git repository. Commit steps are intentionally omitted. If a Git repository is initialized later, commit after each completed task with focused messages.
