<script setup>
import { projects } from '~/content/projects.mjs'

const route = useRoute()
const project = computed(() => projects.find((item) => item.slug === route.params.slug))

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project niet gevonden' })
}

useSeoMeta({
  title: () => `${project.value.title} | Stadshaege Keukendesign`,
  description: () => project.value.summary,
  ogTitle: () => project.value.title,
  ogDescription: () => project.value.summary,
  ogImage: () => project.value.cover
})

const related = computed(() => projects.filter((item) => item.slug !== project.value.slug && item.system === project.value.system).slice(0, 3))
</script>

<template>
  <section class="hero">
    <ResponsiveImage
      :src="project.cover"
      :alt="project.title"
      loading="eager"
      :style="{ viewTransitionName: `project-${project.slug}` }"
    />
    <div class="hero-content">
      <BreadcrumbTrail :items="[{ label: 'Home', to: '/' }, { label: 'Projecten', to: '/projecten/' }, { label: project.title, to: `/projecten/${project.slug}/` }]" />
      <p class="eyebrow">{{ project.system }} · {{ project.layout }} · {{ project.region }}</p>
      <h1>{{ project.title }}</h1>
      <p>{{ project.summary }}</p>
      <div class="actions">
        <NuxtLink class="button" to="/contact/">Bespreek vergelijkbaar ontwerp</NuxtLink>
        <NuxtLink class="button-secondary" to="/projecten/">Terug naar projecten</NuxtLink>
      </div>
    </div>
  </section>

  <ContentSection title="Projectsamenvatting">
    <div class="grid">
      <div class="panel"><p class="meta-label">Systeem</p><h3>{{ project.system }}</h3></div>
      <div class="panel"><p class="meta-label">Opstelling</p><h3>{{ project.layout }}</h3></div>
      <div class="panel"><p class="meta-label">Materialen</p><h3>{{ project.materials.join(', ') }}</h3></div>
    </div>
  </ContentSection>

  <ContentSection title="Vraag, uitdaging en oplossing">
    <div class="grid">
      <div class="panel"><h3>De vraag</h3><p>{{ project.question }}</p></div>
      <div class="panel"><h3>De uitdaging</h3><p>{{ project.challenge }}</p></div>
      <div class="panel"><h3>De oplossing</h3><p>{{ project.solution }}</p></div>
    </div>
  </ContentSection>

  <ContentSection title="Fotogalerij">
    <div class="gallery-grid">
      <ResponsiveImage
        v-for="(image, index) in project.gallery"
        :key="image"
        :src="image"
        :alt="`${project.title}, foto ${index + 1}`"
      />
    </div>
  </ContentSection>

  <ContentSection v-if="related.length" title="Gerelateerde projecten">
    <div class="grid">
      <ProjectCard v-for="item in related" :key="item.slug" :project="item" />
    </div>
  </ContentSection>
</template>
