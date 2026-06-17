<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  breadcrumbs: { type: Array, default: () => [] },
  title: { type: String, required: true },
  text: { type: String, default: '' },
  headingWide: { type: Boolean, default: false },
  dark: { type: Boolean, default: false }
})
</script>

<template>
  <section class="section reveal" :class="{ 'split-band': dark }" data-reveal>
    <div class="section-inner">
      <div class="section-heading" :class="{ 'is-wide': headingWide }">
        <BreadcrumbTrail v-if="breadcrumbs.length" :items="breadcrumbs" />
        <p v-else-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
        <h2>{{ title }}</h2>
        <p v-if="text">{{ text }}</p>
      </div>
      <slot />
    </div>
  </section>
</template>
