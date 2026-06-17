<script setup>
import { site } from '~/content/site.mjs'
</script>

<template>
  <div class="page-shell">
    <a class="skip-link" href="#main">Ga naar de inhoud</a>
    <AppHeader :site="site" />
    <main id="main">
      <slot />
    </main>
    <AppFooter :site="site" />
    <nav class="mobile-action-bar" aria-label="Snelle contactacties">
      <NuxtLink to="/contact/">Afspraak</NuxtLink>
      <a :href="`tel:${site.contact.mobile.replaceAll('-', '')}`">Bel</a>
      <a :href="site.contact.routeUrl" target="_blank" rel="noopener">Route</a>
    </nav>
  </div>
</template>
