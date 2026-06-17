<script setup>
import { pages } from '~/content/pages.mjs'
import { projects } from '~/content/projects.mjs'

const page = pages.projecten
const visibleProjects = ref(projects)

useSeoMeta({
  title: page.seoTitle,
  description: page.description,
  ogTitle: page.title,
  ogDescription: page.intro
})
</script>

<template>
  <ContentSection :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Projecten' }]" :title="page.title" :text="page.intro">
    <ProjectFilters :projects="projects" @update="visibleProjects = $event" />
    <div class="grid project-grid" style="margin-top:2rem">
      <ProjectCard v-for="project in visibleProjects" :key="project.slug" :project="project" />
    </div>
  </ContentSection>
  <ContentSection dark title="Bespreek uw eigen ruimte" text="Neem plattegrond, foto's of ideeën mee. In de showroom worden materialen, systemen en indelingen concreet.">
    <ContactActions />
  </ContentSection>
</template>
