<script setup>
import { site } from '~/content/site.mjs'

const props = defineProps({
  items: { type: Array, default: () => [] }
})

const route = useRoute()
const normalizedItems = computed(() => props.items.filter((item) => item?.label))

function absoluteUrl(path) {
  if (!path) return site.canonicalUrl
  return new URL(path, site.canonicalUrl).toString()
}

useHead(() => ({
  script: normalizedItems.value.length
    ? [
        {
          key: `breadcrumb-${normalizedItems.value.map((item) => item.label).join('-')}`,
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: normalizedItems.value.map((item, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: item.label,
              item: absoluteUrl(item.to || route.path)
            }))
          })
        }
      ]
    : []
}))
</script>

<template>
  <nav v-if="normalizedItems.length" class="breadcrumb" aria-label="Breadcrumb">
    <ol>
      <li v-for="(item, index) in normalizedItems" :key="`${item.label}-${index}`">
        <NuxtLink v-if="item.to && index < normalizedItems.length - 1" :to="item.to">
          {{ item.label }}
        </NuxtLink>
        <span v-else :aria-current="index === normalizedItems.length - 1 ? 'page' : undefined">
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>
