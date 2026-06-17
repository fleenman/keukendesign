<script setup>
defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  loading: { type: String, default: 'lazy' }
})
</script>

<template>
  <img :src="src" :alt="alt" :loading="loading" decoding="async">
</template>
