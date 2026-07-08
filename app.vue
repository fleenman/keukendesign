<script setup>
const assetPath = useAssetPath()

useHead({
  link: [
    { rel: 'icon', href: assetPath('/favicon.svg'), type: 'image/svg+xml' },
    {
      rel: 'preload',
      href: assetPath('/fonts/rotissemisansstd-webfont.woff'),
      as: 'font',
      type: 'font/woff',
      crossorigin: ''
    }
  ],
  style: [
    {
      children: `@font-face{font-family:"RotiSemiSans";src:url("${assetPath('/fonts/rotissemisansstd-webfont.woff')}") format("woff");font-style:normal;font-weight:400;font-display:swap;}`
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
