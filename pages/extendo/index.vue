<script setup>
import { pages } from '~/content/pages.mjs'

const page = pages.extendo

useSeoMeta({
  title: page.seoTitle,
  description: page.description,
  ogTitle: page.title,
  ogDescription: page.intro,
  ogImage: page.gallery?.[0]?.image
})
</script>

<template>
  <ContentSection :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Extendo' }]" eyebrow="Extendo" :title="page.title" :text="page.intro">
    <div class="grid">
      <article v-for="item in page.gallery" :key="item.image" class="card project-card">
        <ResponsiveImage :src="item.image" :alt="item.title" />
        <div class="card-body">
          <p class="meta-label">Extendo</p>
          <h3>{{ item.title }}</h3>
        </div>
      </article>
    </div>
  </ContentSection>
  <ContentSection dark title="Bekijk Extendo in combinatie met uw keukenplan" text="Bespreek in de showroom hoe tafel, stoelen en meubels aansluiten op uw keukenontwerp.">
    <ContactActions />
  </ContentSection>
</template>
