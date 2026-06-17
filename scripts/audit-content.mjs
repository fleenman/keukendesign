import { existsSync, readFileSync } from 'node:fs'
import { basename } from 'node:path'

const requiredFiles = [
  'package.json',
  'nuxt.config.ts',
  'app.vue',
  'assets/css/main.css',
  'content/site.mjs',
  'content/projects.mjs',
  'public/fonts/rotissemisansstd-webfont.woff',
  'public/robots.txt'
]

const requiredComponents = [
  'components/AppHeader.vue',
  'components/AppFooter.vue',
  'components/ContactActions.vue',
  'components/ContentSection.vue',
  'components/ProjectCard.vue',
  'components/ProjectFilters.vue',
  'components/ResponsiveImage.vue',
  'components/SeoJsonLd.vue'
]

const missing = [...requiredFiles, ...requiredComponents].filter((file) => !existsSync(file))

if (missing.length) {
  console.error(`Missing required files: ${missing.join(', ')}`)
  process.exit(1)
}

const { site } = await import('../content/site.mjs')
const { projects } = await import('../content/projects.mjs')

const requiredContact = ['name', 'streetAddress', 'postalCode', 'city', 'phone', 'mobile', 'email']
const missingContact = requiredContact.filter((key) => !site.contact?.[key])

if (missingContact.length) {
  console.error(`Missing contact fields: ${missingContact.join(', ')}`)
  process.exit(1)
}

if (projects.length < 10) {
  console.error(`Expected at least 10 projects, found ${projects.length}`)
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

  for (const image of project.gallery || []) {
    if (!existsSync(`public${image}`)) {
      console.error(`Missing gallery image for ${project.slug}: public${image}`)
      process.exit(1)
    }
  }
}

const realizedMarkdown = readFileSync('source/gerealiseerd/index.md', 'utf8')
const realizedImageMatches = [...realizedMarkdown.matchAll(/\]\(\.\.\/media\/([^)]+)\)/g)]
const sourceProjectImages = [...new Set(realizedImageMatches
  .map((match) => match[1])
  .filter((image) => !image.includes('-250x154.')))]

const usedProjectImages = new Set(projects.flatMap((project) => project.gallery || []).map((image) => basename(image)))
const missingSourceImages = sourceProjectImages.filter((image) => !usedProjectImages.has(image))

if (missingSourceImages.length) {
  console.error(`Missing ${missingSourceImages.length} source project images in galleries:`)
  console.error(missingSourceImages.join('\n'))
  process.exit(1)
}

console.log('Content audit passed')
