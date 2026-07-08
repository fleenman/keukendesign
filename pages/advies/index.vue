<script setup>
import { pages } from '~/content/pages.mjs'
const page = pages.advies
useSeoMeta({ title: page.seoTitle, description: page.description })
</script>

<template>
  <ContentSection :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Advies' }]" :title="page.title" :text="page.intro">
    <div class="grid">
      <div class="panel"><h3>Uw routines</h3><p>Boodschappen, voorraad, ontbijt, samen koken, afval, apparatuur en onderhoud worden concreet gemaakt.</p></div>
      <div class="panel"><h3>Uw woning</h3><p>Lichtval, architectuur, looplijnen en materiaalrust bepalen de compositie.</p></div>
      <div class="panel"><h3>Uw volgende stap</h3><p>Een showroomafspraak maakt systemen, materialen en mogelijkheden tastbaar.</p></div>
    </div>
  </ContentSection>

  <ContentSection title="Persoonlijk advies van Filip Leenman" text="Sinds 1985 werkt Filip Leenman als keukenadviseur; sinds 1998 doet hij dat vanuit zijn eigen keukenzaak in Amersfoort.">
    <div class="media-copy">
      <ResponsiveImage src="/media/eigenaar/MG_7692-scaled.jpg" alt="Filip Leenman met een keukenbrochure in de showroom van Stadshaege Keukendesign" />
      <div class="panel">
        <h3>Ontwerp vanuit gebruik, ruimte en koken</h3>
        <p>In het adviesgesprek komen praktische routines concreet op tafel: boodschappen, voorraad, koelkast, ontbijt, koffie, afwas, afval en koken alleen of samen. Ook licht, kleur, materiaal en ruimtelijke indeling bepalen de uiteindelijke keuken.</p>
        <p style="margin-top:1rem">Filip kookt zelf graag en gebruikt die ervaring om wensen en gewoontes te vertalen naar een praktische, ergonomische en ruimtelijke oplossing.</p>
      </div>
    </div>
  </ContentSection>

  <ContentSection title="Adviesroutes">
    <div class="grid">
      <NuxtLink class="panel route-card" to="/advies/werkwijze/"><h3>Werkwijze</h3><p>Van oriëntatie tot ontwerp, calculatie, montage en nazorg.</p></NuxtLink>
      <NuxtLink class="panel route-card" to="/advies/afspraak-voorbereiden/"><h3>Afspraak voorbereiden</h3><p>Wat neemt u mee en welke vragen zijn nuttig?</p></NuxtLink>
      <NuxtLink class="panel route-card" to="/projecten/"><h3>Bekijk projecten</h3><p>Gebruik gerealiseerde keukens als referentie voor uw eigen plan.</p></NuxtLink>
    </div>
  </ContentSection>
  <ContentSection dark title="Plan een adviesgesprek"><ContactActions /></ContentSection>
</template>
