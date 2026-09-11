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
  '/bulthaup/b3/',
  '/bulthaup/b2/',
  '/bulthaup/bm/',
  '/contact/',
  '/exclusieve-maatwerk-keukens/',
  '/extendo/',
  ...extendoProducts.map((product) => `/extendo/${product.slug}/`),
  '/keukens-amersfoort/',
  '/moderne-keukens-amersfoort/',
  '/privacy/',
  '/projecten/',
  '/showroom/',
  '/showroom/route-en-parkeren/',
  '/tijdloze-keukens/',
  ...projects.map((project) => `/projecten/${project.slug}/`)
]

const imagesByRoute = new Map([
  ['/', ['/media/showroom/showroom-4-1616x1212.jpg']],
  ['/exclusieve-maatwerk-keukens/', ['/media/projecten/MG__1374-HDR-scaled.jpg']],
  ['/showroom/', ['/media/showroom/showroom-4-1616x1212.jpg']],
  ['/moderne-keukens-amersfoort/', ['/media/projecten/Amersfoort-2015-ref02-_ROB7414.png']],
  ['/tijdloze-keukens/', ['/media/projecten/bulthaup-b3-dekton-blad-ahorn-kast-2-1616x1077.jpg']],
  ...extendoProducts.map((product) => [
    `/extendo/${product.slug}/`,
    product.gallery.map((item) => item.image)
  ]),
  ...projects.map((project) => [`/projecten/${project.slug}/`, project.gallery])
])

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${routes.map((route) => `  <url>
    <loc>${escapeXml(`${site.canonicalUrl}${route}`)}</loc>${(imagesByRoute.get(route) || []).map((image) => `
    <image:image><image:loc>${escapeXml(`${site.canonicalUrl}${image}`)}</image:loc></image:image>`).join('')}
  </url>`).join('\n')}
</urlset>
`

writeFileSync('public/sitemap.xml', xml)
console.log(`Wrote ${routes.length} sitemap URLs`)
