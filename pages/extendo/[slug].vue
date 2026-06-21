<script setup>
import { extendoProducts, findExtendoProduct } from '~/content/extendo-products.mjs'

const route = useRoute()
const product = computed(() => findExtendoProduct(route.params.slug))

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product niet gevonden' })
}

useSeoMeta({
  title: () => `${product.value.title} | Extendo kastinrichting`,
  description: () => product.value.summary,
  ogTitle: () => product.value.title,
  ogDescription: () => product.value.summary
})
</script>

<template>
  <ContentSection
    :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Extendo', to: '/extendo/' }, { label: product.title }]"
    :eyebrow="product.eyebrow"
    :title="product.title"
    :text="product.intro"
  >
    <div class="media-copy system-detail-hero">
      <ResponsiveImage :src="product.image" :alt="product.alt" loading="eager" />
      <div class="grid contact-detail-grid">
        <div class="panel">
          <h3>Past bij</h3>
          <ul class="feature-list">
            <li v-for="use in product.uses" :key="use">{{ use }}</li>
          </ul>
        </div>
        <div class="panel">
          <h3>Ontwerpnotities</h3>
          <ul class="feature-list">
            <li v-for="detail in product.details" :key="detail">{{ detail }}</li>
          </ul>
        </div>
      </div>
    </div>
  </ContentSection>

  <ContentSection title="Andere Extendo producten">
    <div class="grid product-grid">
      <NuxtLink v-for="item in extendoProducts.filter((item) => item.slug !== product.slug)" :key="item.slug" class="card product-card" :to="`/extendo/${item.slug}/`">
        <ResponsiveImage :src="item.image" :alt="item.alt" />
        <div class="product-card-body">
          <p class="eyebrow">{{ item.eyebrow }}</p>
          <h3>{{ item.title }}</h3>
          <p>{{ item.summary }}</p>
        </div>
      </NuxtLink>
    </div>
  </ContentSection>

  <ContentSection dark title="Neem Extendo mee in het keukenplan" text="We beoordelen per kast of een uitschuifplateau, houtdetail of Click Stop-vergrendeling praktisch en rustig genoeg is voor uw keuken.">
    <ContactActions />
  </ContentSection>
</template>
