<script setup>
import { pages } from '~/content/pages.mjs'
import { projects } from '~/content/projects.mjs'
const page = pages['bulthaup-b3']
const related = projects.filter((project) => project.system === 'b3').slice(0, 6)
const heroProject = related[0]
usePageSeo(page)
</script>

<template>
  <ContentSection :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Bulthaup', to: '/bulthaup/' }, { label: 'b3' }]" :title="page.title" :text="page.intro">
    <div class="media-copy system-detail-hero">
      <ResponsiveImage v-if="heroProject" :src="heroProject.cover" :alt="heroProject.title" loading="eager" />
      <div class="grid contact-detail-grid">
        <div class="panel"><h3>Wand en eiland</h3><p>Combineer werkzones, opbergen en leefruimte zonder visuele onrust.</p></div>
        <div class="panel"><h3>Materialen</h3><p>Fronten, hout, aluminium, rvs, keramiek en werkbladen worden in samenhang gekozen.</p></div>
        <div class="panel"><h3>Dagelijks gebruik</h3><p>De indeling volgt kookgedrag, voorraad, voorbereiding, afzuiging, spoelen en afval.</p></div>
      </div>
    </div>
  </ContentSection>
  <ContentSection title="b3-projecten">
    <div class="grid"><ProjectCard v-for="project in related" :key="project.slug" :project="project" /></div>
  </ContentSection>
  <ContentSection dark title="Ervaar b3 in de showroom"><ContactActions /></ContentSection>
</template>
