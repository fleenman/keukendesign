<script setup>
import { pages } from '~/content/pages.mjs'
import { projects } from '~/content/projects.mjs'

const page = pages.bulthaup

useSeoMeta({
  title: page.seoTitle,
  description: page.description
})

const sampleProjects = projects.filter((project) => project.system === 'b3').slice(0, 3)
</script>

<template>
  <ContentSection :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Bulthaup' }]" :title="page.title" :text="page.intro">
    <div class="grid">
      <NuxtLink class="panel" to="/bulthaup/b1/"><h3>b1</h3><p>Helder, eenvoudig en functioneel.</p></NuxtLink>
      <NuxtLink class="panel" to="/bulthaup/b2/"><h3>b2</h3><p>Losser, functioneel en gericht op werken in de keuken.</p></NuxtLink>
      <NuxtLink class="panel" to="/bulthaup/b3/"><h3>b3</h3><p>Flexibel systeem voor wand, eiland, nis en materiaalcombinaties.</p></NuxtLink>
    </div>
  </ContentSection>
  <ContentSection title="Voorbeelden met bulthaup b3">
    <div class="grid">
      <ProjectCard v-for="project in sampleProjects" :key="project.slug" :project="project" />
    </div>
  </ContentSection>
  <ContentSection dark title="Ervaar bulthaup in de showroom" text="Systemen, fronten en werkbladen moeten zichtbaar en voelbaar worden. Plan daarom een rustig showroomgesprek.">
    <ContactActions />
  </ContentSection>
</template>
