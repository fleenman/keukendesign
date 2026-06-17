<script setup>
import { projects } from '~/content/projects.mjs'

const visibleProjects = ref(projects)

useSeoMeta({
  title: 'Projecten | Gerealiseerde bulthaup-keukens',
  description: 'Bekijk geselecteerde bulthaup-projecten van Stadshaege Keukendesign met filters op systeem, opstelling en materiaal.',
  ogTitle: 'Gerealiseerde bulthaup-keukens',
  ogDescription: 'Projecten als inspiratie en bewijs voor persoonlijk ontworpen keukens.'
})
</script>

<template>
  <ContentSection :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Projecten' }]" title="Gerealiseerde bulthaup-keukens" text="Ontdek welke opstellingen, materialen en bulthaup-systemen passen bij uw eigen woonruimte.">
    <ProjectFilters :projects="projects" @update="visibleProjects = $event" />
    <div class="grid project-grid" style="margin-top:2rem">
      <ProjectCard v-for="project in visibleProjects" :key="project.slug" :project="project" />
    </div>
  </ContentSection>
  <ContentSection dark title="Bespreek uw eigen ruimte" text="Neem plattegrond, foto's of ideeën mee. In de showroom worden materialen, systemen en indelingen concreet.">
    <ContactActions />
  </ContentSection>
</template>
