<script setup>
import { pages } from '~/content/pages.mjs'
import { projects } from '~/content/projects.mjs'
import { site } from '~/content/site.mjs'

const page = pages['moderne-keukens-amersfoort']
const projectSlugs = [
  'bulthaup-b3-donker-aluminium-kookeiland',
  'bulthaup-b3-kaolin-flint-versie-2',
  'bulthaup-b3-wit-noten-dekton',
  'bulthaup-b3-dekton-ahorn'
]
const featuredProjects = projectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter(Boolean)
const paragraphs = page.body.split(/\n{2,}/).filter(Boolean)
const heroImage = '/media/projecten/Amersfoort-2015-ref02-_ROB7414.png'
const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: page.title, to: page.route }
]
const faqItems = [
  {
    question: 'Wat kenmerkt een moderne keuken?',
    answer: 'Moderne keukens hebben doorgaans heldere lijnen, een rustige materialisering en een doordachte indeling. De exacte uitstraling stemmen we af op de architectuur en sfeer van uw woning.'
  },
  {
    question: 'Is een greeploze keuken praktisch?',
    answer: 'Ja. Met een goed gekozen openingssysteem zijn greeploze kasten prettig in dagelijks gebruik. We bepalen samen welke oplossing het beste past bij de opstelling, ergonomie en gewenste uitstraling.'
  },
  {
    question: 'Kan een moderne keuken ook warm aanvoelen?',
    answer: 'Zeker. Hout, natuurlijke tinten, zorgvuldig licht en een passende werkbladkeuze brengen warmte in een moderne keuken zonder de rustige uitstraling te verliezen.'
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
    <ResponsiveImage :src="heroImage" alt="Moderne bulthaup keuken met donker aluminium kookeiland in Amersfoort" loading="eager" />
    <div class="hero-content">
      <BreadcrumbTrail :items="breadcrumbs" />
      <p class="eyebrow">Persoonlijk ontwerp in Amersfoort</p>
      <h1>{{ page.title }}</h1>
      <p>{{ page.intro }}</p>
      <div class="actions">
        <NuxtLink class="button" to="/contact/">Plan een showroomafspraak</NuxtLink>
      </div>
    </div>
  </section>

  <ContentSection eyebrow="Eigentijds en persoonlijk" title="Modern ontwerp, afgestemd op uw woning">
    <div class="panel">
      <p v-for="paragraph in paragraphs" :key="paragraph" style="margin-top:1rem">{{ paragraph }}</p>
    </div>
  </ContentSection>

  <ContentSection eyebrow="Gerealiseerd in Amersfoort en omgeving" title="Moderne keukens in echte woonruimtes">
    <div class="grid project-grid">
      <ProjectCard v-for="project in featuredProjects" :key="project.slug" :project="project" />
    </div>
  </ContentSection>

  <ContentSection dark eyebrow="Veelgestelde vragen" title="Over moderne keukens">
    <div class="grid">
      <article v-for="item in faqItems" :key="item.question" class="panel">
        <h3>{{ item.question }}</h3>
        <p>{{ item.answer }}</p>
      </article>
    </div>
  </ContentSection>

  <ContentSection title="Bespreek uw moderne keuken in alle rust" text="Neem een plattegrond, foto's of inspiratie mee naar onze showroom aan de Grote Haag in Amersfoort.">
    <ContactActions />
  </ContentSection>
</template>
