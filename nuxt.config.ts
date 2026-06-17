import { pages as contentPages } from './content/generated/pages.mjs'
import { projects } from './content/generated/projects.mjs'

const baseURL = process.env.NUXT_APP_BASE_URL || '/'

const pageRoutes = Object.values(contentPages)
  .map((page: any) => page.route)
  .filter((route: unknown): route is string => typeof route === 'string' && route.startsWith('/'))

const projectRoutes = projects.map((project: any) => `/projecten/${project.slug}/`)

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    baseURL,
    head: {
      htmlAttrs: { lang: 'nl' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#f6f3ec' }
      ]
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      ignore: ['/admin', '/admin/', '/keukendesign/admin', '/keukendesign/admin/'],
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
        '/showroom/route-en-parkeren/',
        ...pageRoutes,
        ...projectRoutes
      ]
    }
  },
  routeRules: {
    '/**': { prerender: true }
  },
  compatibilityDate: '2026-06-14'
})
