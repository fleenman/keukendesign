<script setup>
import { extendoProducts } from '~/content/extendo-products.mjs'

useSeoMeta({
  title: 'Extendo kastinrichting | Stadshaege Keukendesign',
  description: 'Bekijk Extendo uitschuifplateaus en Click Stop toepassingen voor praktische kastinrichting in een maatwerkkeuken.'
})
</script>

<template>
  <ContentSection
    :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Extendo' }]"
    eyebrow="Kastinrichting"
    title="Extendo producten voor bereikbare kastruimte"
    text="Extendo is een familie van uitschuifbare plateaus van PEKA. Ze maken diepe kasten, servieskasten en appliance-oplossingen beter bereikbaar zonder het rustige keukenbeeld te verstoren."
  >
    <div class="grid product-grid">
      <NuxtLink v-for="product in extendoProducts" :key="product.slug" class="card product-card" :to="`/extendo/${product.slug}/`">
        <ResponsiveImage :src="product.image" :alt="product.alt" />
        <div class="product-card-body">
          <p class="eyebrow">{{ product.eyebrow }}</p>
          <h3>{{ product.title }}</h3>
          <p>{{ product.summary }}</p>
          <span>Bekijk toepassing</span>
        </div>
      </NuxtLink>
    </div>
  </ContentSection>

  <ContentSection dark title="Bespreek kastinrichting in uw keukenontwerp" text="De juiste keuze hangt af van kasthoogte, deurtype, apparaatdiepte, belasting en dagelijks gebruik. In de showroom maken we dat concreet.">
    <ContactActions />
  </ContentSection>
</template>
