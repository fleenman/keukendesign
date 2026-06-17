<script setup>
const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  loading: { type: String, default: 'lazy' }
})

const assetPath = useAssetPath()
const resolvedSrc = computed(() => assetPath(props.src))
</script>

<template>
  <img :src="resolvedSrc" :alt="alt" :loading="loading" decoding="async">
</template>
