<script setup>
import { pages } from '~/content/pages.mjs'
import { projects } from '~/content/projects.mjs'
const page = pages['keukens-amersfoort']
const localProjects = projects.filter((project) => project.region.includes('Amersfoort')).slice(0, 3)
usePageSeo(page)
</script>

<template>
  <ContentSection :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Keukens Amersfoort' }]" :title="page.title" :text="page.intro">
    <ContactActions />
  </ContentSection>
  <ContentSection title="Projecten in en rond Amersfoort">
    <div class="grid"><ProjectCard v-for="project in localProjects" :key="project.slug" :project="project" /></div>
  </ContentSection>
  <ContentSection dark title="Showroom aan de Grote Haag" text="Bespreek uw woning, kookgedrag en materiaalkeuzes in een persoonlijk showroomgesprek.">
    <ContactActions />
  </ContentSection>
</template>
