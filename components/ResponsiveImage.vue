<script setup>
import { imageDimensions } from '~/content/generated/image-dimensions.mjs'

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  loading: { type: String, default: 'lazy' }
})

const assetPath = useAssetPath()
const resolvedSrc = computed(() => assetPath(props.src))
const dimensions = computed(() => imageDimensions[props.src])
</script>

<template>
  <img
    :src="resolvedSrc"
    :alt="alt"
    :loading="loading"
    :fetchpriority="loading === 'eager' ? 'high' : 'auto'"
    :width="dimensions?.width"
    :height="dimensions?.height"
    decoding="async"
  >
</template>
