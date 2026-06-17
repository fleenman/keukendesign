<script setup>
import { pages } from '~/content/pages.mjs'
import { projects } from '~/content/projects.mjs'
const page = pages['bulthaup-b1']
const related = projects.filter((project) => project.system === 'b1')
const heroProject = related[0]
useSeoMeta({ title: page.seoTitle, description: page.description })
</script>

<template>
  <ContentSection :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Bulthaup', to: '/bulthaup/' }, { label: 'b1' }]" :title="page.title" :text="page.intro">
    <div class="media-copy system-detail-hero">
      <ResponsiveImage v-if="heroProject" :src="heroProject.cover" :alt="heroProject.title" loading="eager" />
      <div class="grid contact-detail-grid">
        <div class="panel"><h3>Past bij</h3><p>Ruimtes waar eenvoud, dagelijks gebruik en een overzichtelijke compositie belangrijk zijn.</p></div>
        <div class="panel"><h3>Te bespreken</h3><p>Indeling, materiaaltoon, werkruimte, apparatuurintegratie en hoe b1 zich verhoudt tot b2 en b3.</p></div>
      </div>
    </div>
  </ContentSection>
  <ContentSection v-if="related.length" title="Projectvoorbeeld">
    <div class="grid"><ProjectCard v-for="project in related" :key="project.slug" :project="project" /></div>
  </ContentSection>
  <ContentSection dark title="Vergelijk b1 in de showroom"><ContactActions /></ContentSection>
</template>
