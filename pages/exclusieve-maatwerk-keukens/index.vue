<script setup>
import { pages } from '~/content/pages.mjs'
import { projects } from '~/content/projects.mjs'
import { site } from '~/content/site.mjs'

const page = pages['exclusieve-maatwerk-keukens']
const projectSlugs = [
  'bulthaup-b3-wit-marmer',
  'bulthaup-b3-kiezel-noten-coral-clay',
  'bulthaup-b3-noten-kiezel-tv-meubel',
  'bulthaup-b3-dekton-ahorn'
]
const featuredProjects = projectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter(Boolean)
const paragraphs = page.body.split(/\n{2,}/).filter(Boolean)
const heroImage = '/media/projecten/MG__1374-HDR-scaled.jpg'
const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: page.title, to: page.route }
]
const faqItems = [
  {
    question: 'Wat maakt een keuken exclusief maatwerk?',
    answer: 'De indeling, materialen en details worden op uw ruimte en gebruik afgestemd. Zo ontstaan logische werkplekken, passende bergruimte en een samenhangend geheel.'
  },
  {
    question: 'Wat kost een exclusieve maatwerk keuken?',
    answer: 'Dat hangt af van de ruimte, opstelling, materialen en apparatuur. In een eerste gesprek maken we de wensen concreet en bespreken we welke keuzes daarbij passen.'
  },
  {
    question: 'Hoe verloopt het ontwerptraject?',
    answer: 'We starten met uw woning, wensen en manier van koken. Daarna werken we indeling, materialen en apparatuur uit, gevolgd door inmeten, levering, montage en nazorg.'
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
    <ResponsiveImage :src="heroImage" alt="Exclusieve maatwerk keuken met kastenwand en kookeiland" loading="eager" />
    <div class="hero-content">
      <BreadcrumbTrail :items="breadcrumbs" />
      <p class="eyebrow">Exclusief maatwerk</p>
      <h1>{{ page.title }}</h1>
      <p>{{ page.intro }}</p>
      <div class="actions">
        <NuxtLink class="button" to="/contact/">Plan een showroomafspraak</NuxtLink>
      </div>
    </div>
  </section>

  <ContentSection eyebrow="Persoonlijk ontwerp" title="Ontworpen rond uw woning">
    <div class="panel">
      <p v-for="paragraph in paragraphs" :key="paragraph" style="margin-top:1rem">{{ paragraph }}</p>
      <p style="margin-top:1rem">Wilt u vooral een rustige basis die lang mooi blijft? <NuxtLink to="/tijdloze-keukens/">Bekijk onze tijdloze keukens</NuxtLink>.</p>
    </div>
  </ContentSection>

  <ContentSection eyebrow="Gerealiseerd" title="Vier keukens, elk ontworpen vanuit de woning">
    <div class="grid project-grid">
      <ProjectCard v-for="project in featuredProjects" :key="project.slug" :project="project" />
    </div>
  </ContentSection>

  <ContentSection dark eyebrow="Veelgestelde vragen" title="Over exclusief maatwerk">
    <div class="grid">
      <article v-for="item in faqItems" :key="item.question" class="panel">
        <h3>{{ item.question }}</h3>
        <p>{{ item.answer }}</p>
      </article>
    </div>
  </ContentSection>

  <ContentSection title="Bespreek uw keukenplan in alle rust" text="Neem een plattegrond, foto's of inspiratie mee naar de showroom in Amersfoort.">
    <ContactActions />
  </ContentSection>
</template>
