<script setup>
import { pages } from '~/content/pages.mjs'

const route = useRoute()
const normalizedPath = computed(() => {
  const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug
  return `/${slug || ''}/`.replace(/\/+/g, '/')
})

const page = computed(() => Object.values(pages).find((item) => item.route === normalizedPath.value))

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Pagina niet gevonden' })
}

const paragraphs = computed(() => page.value.body.split(/\n{2,}/).filter(Boolean))

usePageSeo(page)
</script>

<template>
  <ContentSection :breadcrumbs="[{ label: 'Home', to: '/' }, { label: page.title }]" :title="page.title" :text="page.intro">
    <div v-if="paragraphs.length" class="panel">
      <p v-for="paragraph in paragraphs" :key="paragraph" style="margin-top:1rem;white-space:pre-wrap">{{ paragraph }}</p>
    </div>
  </ContentSection>
</template>
