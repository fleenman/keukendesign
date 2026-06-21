import { writeFileSync } from 'node:fs'
import { extendoProducts } from '../content/extendo-products.mjs'
import { site } from '../content/site.mjs'
import { projects } from '../content/projects.mjs'

const routes = [
  '/',
  '/advies/',
  '/advies/afspraak-voorbereiden/',
  '/advies/werkwijze/',
  '/bulthaup/',
  '/bulthaup/b1/',
  '/bulthaup/b2/',
  '/bulthaup/b3/',
  '/contact/',
  '/extendo/',
  ...extendoProducts.map((product) => `/extendo/${product.slug}/`),
  '/keukens-amersfoort/',
  '/privacy/',
  '/projecten/',
  '/showroom/',
  '/showroom/route-en-parkeren/',
  ...projects.map((project) => `/projecten/${project.slug}/`)
]

const today = new Date().toISOString().slice(0, 10)
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url>
    <loc>${site.canonicalUrl}${route}</loc>
    <lastmod>${today}</lastmod>
  </url>`).join('\n')}
</urlset>
`

writeFileSync('public/sitemap.xml', xml)
console.log(`Wrote ${routes.length} sitemap URLs`)
