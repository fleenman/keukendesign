<script setup>
const props = defineProps({
  graph: { type: [Object, Array], required: true }
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(props.graph)
    }
  ]
})
</script>

<template>
  <span hidden />
</template>
