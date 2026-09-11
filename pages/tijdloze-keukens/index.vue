<script setup>
import { pages } from '~/content/pages.mjs'
import { projects } from '~/content/projects.mjs'
import { site } from '~/content/site.mjs'

const page = pages['tijdloze-keukens']
const projectSlugs = [
  'bulthaup-b3-dekton-ahorn',
  'bulthaup-b3-wit-eiken',
  'bulthaup-b3-wit-marmer',
  'bulthaup-b3-kiezel-noten-coral-clay'
]
const featuredProjects = projectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter(Boolean)
const paragraphs = page.body.split(/\n{2,}/).filter(Boolean)
const heroImage = '/media/projecten/bulthaup-b3-dekton-blad-ahorn-kast-2-1616x1077.jpg'
const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: page.title, to: page.route }
]
const faqItems = [
  {
    question: 'Welke kleuren en materialen maken een keuken tijdloos?',
    answer: 'Rustige, natuurlijke tinten en materialen met een voelbare kwaliteit vormen een goede basis. We stemmen hout, steen, fronten en werkblad af op het licht en de architectuur van uw woning.'
  },
  {
    question: 'Is een greeploze keuken tijdloos?',
    answer: 'Een greeploze keuken kan heel tijdloos zijn wanneer de verhoudingen, materialen en detaillering zorgvuldig zijn gekozen. De rust ontstaat door het complete ontwerp, niet alleen door het ontbreken van grepen.'
  },
  {
    question: 'Hoe voorkomt u dat een keuken snel gedateerd raakt?',
    answer: 'We beginnen niet met een trend, maar met uw woning en dagelijks gebruik. Een rustige basis, goede indeling en materialen die mooi verouderen geven ruimte om accenten later eenvoudig te veranderen.'
  }
]
const faqStructuredData = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${new URL(page.route, site.canonicalUrl).toString()}#faq`,
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }))
}))

usePageSeo(page)
</script>

<template>
  <SeoJsonLd :graph="faqStructuredData" />

  <section class="hero landing-page-hero">
    <ResponsiveImage :src="heroImage" alt="Tijdloze maatwerk keuken met lichte houtaccenten en Dekton werkblad" loading="eager" />
    <div class="hero-content">
      <BreadcrumbTrail :items="breadcrumbs" />
      <p class="eyebrow">Rustig en persoonlijk ontwerp</p>
      <h1>{{ page.title }}</h1>
      <p>{{ page.intro }}</p>
      <div class="actions">
        <NuxtLink class="button" to="/contact/">Plan een showroomafspraak</NuxtLink>
      </div>
    </div>
  </section>

  <ContentSection eyebrow="Ontwerp met blijvende waarde" title="Rust die past bij uw woning">
    <div class="panel">
      <p v-for="paragraph in paragraphs" :key="paragraph" style="margin-top:1rem">{{ paragraph }}</p>
    </div>
  </ContentSection>

  <ContentSection eyebrow="Gerealiseerd" title="Tijdloze keukens in echte woonruimtes">
    <div class="grid project-grid">
      <ProjectCard v-for="project in featuredProjects" :key="project.slug" :project="project" />
    </div>
  </ContentSection>

  <ContentSection dark eyebrow="Veelgestelde vragen" title="Over tijdloze keukens">
    <div class="grid">
      <article v-for="item in faqItems" :key="item.question" class="panel">
        <h3>{{ item.question }}</h3>
        <p>{{ item.answer }}</p>
      </article>
    </div>
  </ContentSection>

  <ContentSection title="Ontdek wat tijdloos voor uw woning betekent" text="Neem een plattegrond, foto's of inspiratie mee naar de showroom in Amersfoort.">
    <ContactActions />
  </ContentSection>
</template>
