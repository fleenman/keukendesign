<script setup>
import { site } from '~/content/site.mjs'

const route = useRoute()
const canonicalUrl = computed(() => new URL(route.path, `${site.canonicalUrl}/`).toString())

useSeoMeta({
  ogSiteName: site.name,
  ogLocale: 'nl_NL',
  ogType: 'website',
  ogUrl: () => canonicalUrl.value,
  ogImage: `${site.canonicalUrl}/media/showroom/showroom-4-1616x1212.jpg`,
  ogImageAlt: 'Bulthaup showroomkeuken bij Stadshaege Keukendesign in Amersfoort',
  twitterCard: 'summary_large_image',
  twitterImage: `${site.canonicalUrl}/media/showroom/showroom-4-1616x1212.jpg`,
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
})

useHead(() => ({
  link: [
    { rel: 'canonical', href: canonicalUrl.value },
    { rel: 'sitemap', type: 'application/xml', href: `${site.canonicalUrl}/sitemap.xml` }
  ]
}))

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['HomeGoodsStore', 'LocalBusiness'],
      '@id': `${site.canonicalUrl}/#business`,
      name: site.contact.name,
      url: `${site.canonicalUrl}/`,
      description: site.description,
      image: `${site.canonicalUrl}/media/showroom/showroom-4-1616x1212.jpg`,
      telephone: ['+31334627130', '+31621295370'],
      email: site.contact.email,
      foundingDate: '1998',
      priceRange: '€€€',
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.contact.streetAddress,
        postalCode: site.contact.postalCode,
        addressLocality: site.contact.city,
        addressCountry: 'NL'
      },
      areaServed: {
        '@type': 'City',
        name: 'Amersfoort'
      },
      hasMap: site.contact.routeUrl,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+31334627130',
          contactType: 'customer service',
          areaServed: 'NL',
          availableLanguage: ['nl']
        },
        {
          '@type': 'ContactPoint',
          telephone: '+31621295370',
          contactType: 'customer service',
          areaServed: 'NL',
          availableLanguage: ['nl']
        }
      ],
      knowsAbout: [
        'bulthaup keukens',
        'keukenontwerp',
        'maatwerk keukens',
        'keukenapparatuur',
        'Extendo tafels en meubels'
      ],
      makesOffer: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Persoonlijk keukenadvies en keukenontwerp',
            serviceType: 'Keukenontwerp'
          },
          areaServed: {
            '@type': 'City',
            name: 'Amersfoort'
          }
        }
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '17:00'
      },
      founder: {
        '@type': 'Person',
        '@id': `${site.canonicalUrl}/#filip-leenman`,
        name: 'Filip Leenman',
        jobTitle: 'Keukenadviseur en eigenaar',
        knowsAbout: ['Keukenontwerp', 'bulthaup keukens', 'Keukenapparatuur']
      }
    },
    {
      '@type': 'WebSite',
      '@id': `${site.canonicalUrl}/#website`,
      url: `${site.canonicalUrl}/`,
      name: site.name,
      description: site.description,
      inLanguage: 'nl-NL',
      publisher: { '@id': `${site.canonicalUrl}/#business` }
    }
  ]
}
</script>

<template>
  <div class="page-shell">
    <SeoJsonLd :graph="structuredData" />
    <a class="skip-link" href="#main">Ga naar de inhoud</a>
    <AppHeader :site="site" />
    <main id="main">
      <slot />
    </main>
    <AppFooter :site="site" />
    <nav class="mobile-action-bar" aria-label="Snelle contactacties">
      <NuxtLink to="/contact/">Afspraak</NuxtLink>
      <a :href="`tel:${site.contact.mobile.replaceAll('-', '')}`">Bel</a>
      <a :href="site.contact.routeUrl" target="_blank" rel="noopener">Route</a>
    </nav>
  </div>
</template>
