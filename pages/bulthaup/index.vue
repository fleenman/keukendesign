<script setup>
import { pages } from '~/content/pages.mjs'
import { projects } from '~/content/projects.mjs'

const page = pages.bulthaup

useSeoMeta({
  title: page.seoTitle,
  description: page.description
})

const systemCards = [
  {
    system: 'b3',
    title: 'b3',
    text: 'Het meest flexibele systeem voor wand, eiland, nissen en rijke materiaalkeuzes.',
    to: '/bulthaup/b3/',
    link: 'Lees over b3',
    image: projects.find((project) => project.system === 'b3')?.cover,
    alt: 'Bulthaup b3 keuken met maatwerk kastenwand en eiland'
  },
  {
    system: 'b2',
    title: 'b2',
    text: 'Een meer losse, functionele benadering met werkbank- en kastprincipes.',
    to: '/bulthaup/b2/',
    link: 'Lees over b2',
    image: projects.find((project) => project.system === 'b2')?.cover,
    alt: 'Bulthaup b2 keuken met werkbank en kastprincipe'
  },
  {
    system: 'bm',
    title: 'bm',
    text: 'Nieuwe informatie over bm volgt zodra foto’s en aanvullende content beschikbaar zijn.',
    to: '/bulthaup/bm/',
    link: 'Lees over bm',
    image: undefined,
    alt: 'Bulthaup bm'
  }
]
</script>

<template>
  <ContentSection :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Bulthaup' }]" eyebrow="Bulthaup" :title="page.title" :text="page.intro">
    <div class="grid system-grid">
      <article v-for="card in systemCards" :key="card.system" class="panel system-card">
        <ResponsiveImage v-if="card.image" :src="card.image" :alt="card.alt" />
        <div class="system-card-body">
          <h3>{{ card.title }}</h3>
          <p>{{ card.text }}</p>
          <NuxtLink :to="card.to">{{ card.link }}</NuxtLink>
        </div>
      </article>
    </div>
  </ContentSection>
  <ContentSection dark title="Ervaar bulthaup in de showroom" text="Systemen, fronten en werkbladen moeten zichtbaar en voelbaar worden. Plan daarom een rustig showroomgesprek.">
    <ContactActions />
  </ContentSection>
</template>
