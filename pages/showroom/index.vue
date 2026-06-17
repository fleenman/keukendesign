<script setup>
import { site } from '~/content/site.mjs'
useSeoMeta({ title: 'Showroom Amersfoort | Stadshaege Keukendesign', description: 'Bezoek de bulthaup-showroom van Stadshaege aan de Grote Haag 15 in Amersfoort.' })
</script>

<template>
  <ContentSection :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Showroom' }]" title="Ervaar bulthaup in Amersfoort" text="Materialen, systemen en afwerking worden pas echt duidelijk wanneer u ze ziet en aanraakt. De showroom is gevestigd aan de Grote Haag in het gebouw Stadshaege.">
    <div class="grid-2">
      <ResponsiveImage src="/media/showroom/showroom-4-1616x1212.jpg" alt="Showroom van Stadshaege Keukendesign in Amersfoort" />
      <div class="panel">
        <h3>{{ site.contact.streetAddress }}</h3>
        <p>{{ site.contact.postalCode }} {{ site.contact.city }}</p>
        <p style="margin-top:1rem">Geopend van woensdag tot en met zaterdag. Voor persoonlijk advies of ontwerp graag een afspraak maken.</p>
        <div class="actions"><NuxtLink class="button" to="/contact/">Maak een afspraak</NuxtLink><NuxtLink class="button-secondary" to="/showroom/route-en-parkeren/">Route en parkeren</NuxtLink></div>
      </div>
    </div>
  </ContentSection>

  <ContentSection title="Stadshaege aan de Grote Haag">
    <div class="media-strip">
      <ResponsiveImage src="/media/showroom/stadshaege-1616x1077.jpg" alt="Gebouw Stadshaege aan de Grote Haag in Amersfoort" />
      <ResponsiveImage src="/media/showroom/DSC_4954-1616x1077.jpg" alt="Buitenzijde van Stadshaege Keukendesign in Amersfoort" />
    </div>
  </ContentSection>
</template>
