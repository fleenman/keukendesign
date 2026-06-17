<script setup>
import { site } from '~/content/site.mjs'
</script>

<template>
  <div class="contact-actions" aria-label="Contactacties">
    <NuxtLink class="button" to="/contact/">Maak een afspraak</NuxtLink>
    <a class="button-secondary" :href="`tel:${site.contact.mobile.replaceAll('-', '')}`">Bel {{ site.contact.mobile }}</a>
    <a class="button-secondary" :href="`mailto:${site.contact.email}`">Mail uw vraag</a>
    <a class="button-secondary" :href="site.contact.routeUrl" target="_blank" rel="noopener">Route bekijken</a>
  </div>
</template>
