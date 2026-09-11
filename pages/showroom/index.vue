<script setup>
import { pages } from '~/content/pages.mjs'
import { site } from '~/content/site.mjs'
const page = pages.showroom
const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Keukenshowroom Amersfoort', to: page.route }
]
const faqItems = [
  {
    question: 'Wat kan ik in de keukenshowroom bekijken?',
    answer: 'U kunt materialen, fronten, werkbladen, bulthaup-systemen en keukenapparatuur van dichtbij bekijken en vergelijken.'
  },
  {
    question: 'Moet ik een afspraak maken voor de showroom?',
    answer: 'De showroom is geopend van woensdag tot en met zaterdag van 10.00 tot 17.00 uur. Voor persoonlijk advies of een ontwerp raden we een afspraak aan.'
  },
  {
    question: 'Waar kan ik parkeren bij de showroom?',
    answer: 'De ingang ligt tegenover parkeergarage Koestraat. Q-Park Mondriaan aan de Stadsring is een alternatief, vooral op zaterdag.'
  }
]
const faqStructuredData = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${new URL(page.route, site.canonicalUrl).toString()}#faq`,
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }))
}))
usePageSeo(page)
</script>

<template>
  <SeoJsonLd :graph="faqStructuredData" />

  <ContentSection :breadcrumbs="breadcrumbs" :title="page.title" :text="page.intro">
    <div class="grid-2">
      <ResponsiveImage src="/media/showroom/showroom-4-1616x1212.jpg" alt="Showroom van Stadshaege Keukendesign in Amersfoort" />
      <div class="panel">
        <h3>{{ site.contact.streetAddress }}</h3>
        <p>{{ site.contact.postalCode }} {{ site.contact.city }}</p>
        <p style="margin-top:1rem">Geopend van woensdag tot en met zaterdag, van 10-17 uur. Voor persoonlijk advies of ontwerp graag een afspraak maken.</p>
        <p style="margin-top:1rem">Oriënteert u zich op een rustige, duurzame stijl? <NuxtLink to="/tijdloze-keukens/">Bekijk onze tijdloze keukens</NuxtLink>.</p>
        <p style="margin-top:1rem">Voor een strakke, eigentijdse stijl kunt u ook <NuxtLink to="/moderne-keukens-amersfoort/">onze moderne keukens in Amersfoort</NuxtLink> bekijken.</p>
        <div class="actions"><NuxtLink class="button" to="/contact/">Maak een afspraak</NuxtLink><NuxtLink class="button-secondary" to="/showroom/route-en-parkeren/">Route en parkeren</NuxtLink></div>
      </div>
    </div>
  </ContentSection>

  <ContentSection title="Stadshaege aan de Grote Haag">
    <div class="media-strip">
      <ResponsiveImage src="/media/showroom/stadshaege-1616x1077.jpg" alt="Gebouw Stadshaege aan de Grote Haag in Amersfoort" />
      <ResponsiveImage src="/media/showroom/DSC_4954-1616x1077.jpg" alt="Buitenzijde van Stadshaege Keukendesign in Amersfoort" />
    </div>
  </ContentSection>

  <ContentSection dark eyebrow="Veelgestelde vragen" title="Bezoek de showroom">
    <div class="grid">
      <article v-for="item in faqItems" :key="item.question" class="panel">
        <h3>{{ item.question }}</h3>
        <p>{{ item.answer }}</p>
      </article>
    </div>
  </ContentSection>
</template>
