<script setup>
import { extendoProducts } from '~/content/extendo-products.mjs'
import { pages } from '~/content/pages.mjs'
import { site } from '~/content/site.mjs'

const page = pages.extendo
const atelierProduct = extendoProducts.find((product) => product.slug === 'atelier')

useSeoMeta({
  title: page.seoTitle,
  description: page.description,
  ogTitle: page.title,
  ogDescription: page.intro,
  ogImage: new URL(extendoProducts[0]?.image, site.canonicalUrl).toString(),
  ogImageAlt: extendoProducts[0]?.alt,
  twitterTitle: page.title,
  twitterDescription: page.description,
  twitterImage: new URL(extendoProducts[0]?.image, site.canonicalUrl).toString()
})
</script>

<template>
  <ContentSection :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Extendo' }]" eyebrow="Extendo" :title="page.title" :text="page.intro">
    <p class="project-more-link">
      Zie ook deze website voor al hun meubels:
      <a href="https://extendoweb.com/en/" target="_blank" rel="noopener noreferrer">extendoweb.com/en/</a>
    </p>
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
      <a
        v-if="atelierProduct"
        class="card product-card"
        href="https://www.strackk.com/nl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ResponsiveImage src="/media/projecten/strackk wandplank.jpg" alt="Strackk wandplank op maat" />
        <div class="product-card-body">
          <p class="eyebrow">{{ atelierProduct.eyebrow }}</p>
          <h3>Strackk wandplank</h3>
          <p>Wij leveren ook Strackk wandplanken op maat, ook met ledverlichting en op kleur.</p>
          <span>Bekijk Strackk</span>
        </div>
      </a>
      <a
        v-if="atelierProduct"
        class="card product-card"
        href="https://www.bokmerk.nl/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ResponsiveImage src="/media/projecten/bokmerk-met-wandplank.jpg" alt="Bokmerk achterwand met wandplank" />
        <div class="product-card-body">
          <p class="eyebrow">{{ atelierProduct.eyebrow }}</p>
          <h3>Bokmerk achterwand</h3>
          <p>Bokmerk achterwanden geven de keuken een strakke en praktische afwerking, wij leveren en monteren deze op maat gemaakt.</p>
          <span>Bekijk Bokmerk</span>
        </div>
      </a>
    </div>
  </ContentSection>

  <ContentSection dark title="Bekijk Extendo in combinatie met uw keukenplan" text="Bespreek in de showroom hoe tafel, stoelen en meubels aansluiten op uw keukenontwerp.">
    <ContactActions />
  </ContentSection>
</template>
