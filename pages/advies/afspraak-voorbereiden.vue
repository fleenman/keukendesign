<script setup>
import { pages } from '~/content/pages.mjs'
const page = pages['advies-afspraak-voorbereiden']
useSeoMeta({ title: page.seoTitle, description: page.description })
</script>

<template>
  <ContentSection :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Advies', to: '/advies/' }, { label: 'Afspraak voorbereiden' }]" :title="page.title" :text="page.intro">
    <div class="grid">
      <div class="panel"><h3>Neem mee</h3><ul class="feature-list"><li>Plattegrond of maten</li><li>Foto's van de ruimte</li><li>Wensenlijst of inspiratiebeelden</li><li>Apparatuurvoorkeuren</li></ul></div>
      <div class="panel"><h3>Denk alvast na over</h3><ul class="feature-list"><li>Boodschappen en voorraad</li><li>Ontbijt en dagelijks koken</li><li>Samen koken of juist alleen</li><li>Afval, spoelen en onderhoud</li></ul></div>
      <div class="panel"><h3>In de showroom</h3><p>U ervaart materialen, fronten, werkbladen en bulthaup-systemen voordat keuzes definitief worden.</p></div>
    </div>
  </ContentSection>
  <ContentSection dark title="Maak een afspraak"><ContactActions /></ContentSection>
</template>
