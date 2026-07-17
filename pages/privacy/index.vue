<script setup>
import { pages } from '~/content/pages.mjs'
const page = pages.privacy
usePageSeo(page)
</script>

<template>
  <ContentSection :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Privacy' }]" :title="page.title">
    <div class="panel">
      <p>Deze statische website verwerkt zelf geen formulierinzendingen en gebruikt geen eigen backend of database. Contact verloopt via telefoon, e-mail en route-links. Bij contact per e-mail of telefoon worden de gegevens gebruikt om uw vraag of afspraak te behandelen.</p>
      <p style="margin-top:1rem">Wanneer later analytics of een externe formulierdienst wordt gekozen, moet deze privacytekst daarop worden aangepast voordat die functie live gaat.</p>
    </div>
  </ContentSection>
</template>
