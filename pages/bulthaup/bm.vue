<script setup>
import { pages } from '~/content/pages.mjs'
import { projects } from '~/content/projects.mjs'

const page = pages['bulthaup-bm']
const related = projects.filter((project) => project.system === 'bm')
const heroProject = related[0]

useSeoMeta({ title: page.seoTitle, description: page.description })
</script>

<template>
  <ContentSection :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Bulthaup', to: '/bulthaup/' }, { label: 'bm' }]" :title="page.title" :text="page.intro">
    <div class="media-copy system-detail-hero">
      <ResponsiveImage v-if="heroProject" :src="heroProject.cover" :alt="heroProject.title" loading="eager" />
      <div class="grid contact-detail-grid">
        <div class="panel"><h3>Nieuwe lijn</h3><p>bm is geschikt voor rustige keukencomposities met verfijnde fronten, werkbladen en houtaccenten.</p></div>
        <div class="panel"><h3>Materialen</h3><p>Bekijk combinaties zoals alux champagne met noten en sandbeige met Silestone Blanc Elysee.</p></div>
      </div>
    </div>
  </ContentSection>
  <ContentSection v-if="related.length" title="bm-projecten">
    <div class="grid"><ProjectCard v-for="project in related" :key="project.slug" :project="project" /></div>
  </ContentSection>
  <ContentSection dark title="Bespreek bm met Stadshaege"><ContactActions /></ContentSection>
</template>
