<script setup>
import { projects } from '~/content/projects.mjs'
const localProjects = projects.filter((project) => project.region.includes('Amersfoort')).slice(0, 3)
useSeoMeta({ title: 'Keukens Amersfoort | Stadshaege Keukendesign', description: 'Bulthaup-keukens op maat vanuit de showroom van Stadshaege in Amersfoort.' })
</script>

<template>
  <ContentSection :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Keukens Amersfoort' }]" title="Bulthaup-keukens op maat vanuit Amersfoort" text="Bekijk gerealiseerde keukens in en rond Amersfoort en plan een rustig showroomgesprek aan de Grote Haag.">
    <ContactActions />
  </ContentSection>
  <ContentSection title="Projecten in en rond Amersfoort">
    <div class="grid"><ProjectCard v-for="project in localProjects" :key="project.slug" :project="project" /></div>
  </ContentSection>
  <ContentSection dark title="Showroom aan de Grote Haag" text="Bespreek uw woning, kookgedrag en materiaalkeuzes in een persoonlijk showroomgesprek.">
    <ContactActions />
  </ContentSection>
</template>
