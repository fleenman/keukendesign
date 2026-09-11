<script setup>
import { pages } from '~/content/pages.mjs'
import { projects } from '~/content/projects.mjs'
const page = pages['keukens-amersfoort']
const localProjects = projects.filter((project) => project.region.includes('Amersfoort')).slice(0, 3)
usePageSeo(page)
</script>

<template>
  <ContentSection :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Keukenzaak Amersfoort' }]" :title="page.title" :text="page.intro">
    <div class="grid">
      <article class="panel">
        <p class="meta-label">Persoonlijk ontwerp</p>
        <h3>Van woning naar keukenplan</h3>
        <p>We kijken naar licht, looplijnen, opbergen, koken en samenleven. Daarna brengen we indeling, materiaal en apparatuur samen in een ontwerp dat bij uw woning past.</p>
      </article>
      <article class="panel">
        <p class="meta-label">Showroom in Amersfoort</p>
        <h3>Materialen die u echt kunt ervaren</h3>
        <p>Bekijk en vergelijk fronten, werkbladen en bulthaup-systemen aan de Grote Haag 15. Een afspraak geeft alle ruimte om uw wensen rustig te bespreken.</p>
        <NuxtLink to="/showroom/route-en-parkeren/">Bekijk route en parkeren</NuxtLink>
      </article>
    </div>
    <ContactActions />
  </ContentSection>
  <ContentSection eyebrow="Keukenwinkel" title="Keukenwinkel in Amersfoort voor exclusief maatwerk">
    <div class="panel">
      <p>In onze keukenwinkel aan de Grote Haag 15 bekijkt u bulthaup-opstellingen, fronten, werkbladen en apparatuur van dichtbij. Geen standaard collectie om snel uit te kiezen, maar een showroom waar materiaal, indeling en gebruik samenkomen.</p>
      <p style="margin-top:1rem">Tijdens een afspraak vertalen we uw woning, wensen en manier van koken naar een persoonlijk ontwerp. Zo wordt uw keuken niet alleen fraai, maar ook logisch en prettig in dagelijks gebruik.</p>
      <p style="margin-top:1rem">Houdt u van strakke lijnen en een eigentijdse uitstraling? <NuxtLink to="/moderne-keukens-amersfoort/">Ontdek moderne keukens in Amersfoort</NuxtLink>.</p>
    </div>
  </ContentSection>
  <ContentSection title="Gerealiseerde maatwerk keukens in en rond Amersfoort">
    <div class="grid"><ProjectCard v-for="project in localProjects" :key="project.slug" :project="project" /></div>
  </ContentSection>
  <ContentSection dark title="Showroom aan de Grote Haag" text="Bespreek uw woning, kookgedrag en materiaalkeuzes in een persoonlijk showroomgesprek.">
    <ContactActions />
  </ContentSection>
</template>
