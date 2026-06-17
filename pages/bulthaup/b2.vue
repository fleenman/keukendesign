<script setup>
import { projects } from '~/content/projects.mjs'
const related = projects.filter((project) => project.system === 'b2')
const heroProject = related[0]
useSeoMeta({ title: 'Bulthaup b2 | Stadshaege Keukendesign', description: 'Bulthaup b2 als functionele keukenbenadering met werkbank- en kastprincipes.' })
</script>

<template>
  <ContentSection :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Bulthaup', to: '/bulthaup/' }, { label: 'b2' }]" title="Functioneel, losser en zichtbaar bruikbaar" text="b2 maakt keukenfuncties expliciet: werken, opbergen, voorbereiden en koken krijgen een duidelijke plek.">
    <div class="media-copy system-detail-hero">
      <ResponsiveImage v-if="heroProject" :src="heroProject.cover" :alt="heroProject.title" loading="eager" />
      <div class="grid contact-detail-grid">
        <div class="panel"><h3>Past bij</h3><p>Mensen die functionaliteit, flexibiliteit en een herkenbaar werkproces belangrijk vinden.</p></div>
        <div class="panel"><h3>Te bespreken</h3><p>Welke functies open, mobiel of juist opgeborgen moeten zijn in uw dagelijkse keukenritme.</p></div>
      </div>
    </div>
  </ContentSection>
  <ContentSection v-if="related.length" title="Projectvoorbeeld">
    <div class="grid"><ProjectCard v-for="project in related" :key="project.slug" :project="project" /></div>
  </ContentSection>
  <ContentSection dark title="Bespreek b2 met Stadshaege"><ContactActions /></ContentSection>
</template>
