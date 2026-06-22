<script setup>
import { extendoProducts } from '~/content/extendo-products.mjs'
import { pages } from '~/content/pages.mjs'

const page = pages.extendo

useSeoMeta({
  title: page.seoTitle,
  description: page.description,
  ogTitle: page.title,
  ogDescription: page.intro,
  ogImage: extendoProducts[0]?.image
})
</script>

<template>
  <ContentSection :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Extendo' }]" eyebrow="Extendo" :title="page.title" :text="page.intro">
    <div class="grid product-grid">
      <NuxtLink v-for="product in extendoProducts" :key="product.slug" class="card product-card" :to="`/extendo/${product.slug}/`">
        <ResponsiveImage :src="product.image" :alt="product.alt" />
        <div class="product-card-body">
          <p class="eyebrow">{{ product.eyebrow }}</p>
          <h3>{{ product.title }}</h3>
          <p>{{ product.summary }}</p>
          <span>Bekijk product</span>
        </div>
      </NuxtLink>
    </div>
  </ContentSection>

  <ContentSection dark title="Bekijk Extendo in combinatie met uw keukenplan" text="Bespreek in de showroom hoe tafel, stoelen en meubels aansluiten op uw keukenontwerp.">
    <ContactActions />
  </ContentSection>
</template>
