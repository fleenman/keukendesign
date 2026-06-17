<script setup>
import { site } from '~/content/site.mjs'
useSeoMeta({ title: 'Route en parkeren | Stadshaege Keukendesign', description: 'Route naar Stadshaege Keukendesign aan de Grote Haag 15 in Amersfoort.' })
</script>

<template>
  <ContentSection :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Showroom', to: '/showroom/' }, { label: 'Route en parkeren' }]" title="Route naar Grote Haag 15" text="Gebruik de routeknop voor navigatie naar de showroom. De praktische route-informatie blijft als tekst beschikbaar, ook zonder kaart.">
    <div class="media-copy">
      <ResponsiveImage src="/media/showroom/stadshaege-1616x1077.jpg" alt="Stadshaege aan de Grote Haag in Amersfoort" />
      <div class="panel">
        <h3>{{ site.contact.name }}</h3>
        <p>{{ site.contact.streetAddress }}, {{ site.contact.postalCode }} {{ site.contact.city }}</p>
        <p style="margin-top:1rem">De ingang van Stadshaege ligt tegenover parkeergarage Koestraat, net voorbij Cosmo kapper.</p>
        <div class="actions"><a class="button" :href="site.contact.routeUrl" target="_blank" rel="noopener">Route openen</a><NuxtLink class="button-secondary" to="/contact/">Contact</NuxtLink></div>
      </div>
    </div>
  </ContentSection>

  <ContentSection title="Parkeren">
    <div class="grid">
      <div class="panel">
        <h3>Parkeergarage Koestraat</h3>
        <p>Deze garage ligt direct tegenover de ingang van de showroom.</p>
      </div>
      <div class="panel">
        <h3>Q-Park Mondriaan</h3>
        <p>Q-Park Mondriaan ligt aan de Stadsring, achter ABN AMRO, en is op zaterdag vaak minder vol.</p>
      </div>
      <div class="panel">
        <h3>Afspraak</h3>
        <p>Voor persoonlijk advies of een ontwerp is een afspraak aan te raden. Bel {{ site.contact.mobile }} om een moment te plannen.</p>
      </div>
    </div>
  </ContentSection>
</template>
