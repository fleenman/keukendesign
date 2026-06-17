<script setup>
import { site } from '~/content/site.mjs'
import { projects } from '~/content/projects.mjs'

const featuredProjects = projects.slice(0, 3)
const systemCards = [
  {
    system: 'b1',
    title: 'b1',
    text: 'Eenvoudig, helder en functioneel. Geschikt wanneer rust en toegankelijkheid centraal staan.',
    to: '/bulthaup/b1/',
    link: 'Lees over b1',
    image: projects.find((project) => project.system === 'b1')?.cover,
    alt: 'Bulthaup b1 keuken met eiken natuur en eilandopstelling'
  },
  {
    system: 'b2',
    title: 'b2',
    text: 'Een meer losse, functionele benadering met werkbank- en kastprincipes.',
    to: '/bulthaup/b2/',
    link: 'Lees over b2',
    image: projects.find((project) => project.system === 'b2')?.cover,
    alt: 'Bulthaup b2 keuken met werkbank en kastprincipe'
  },
  {
    system: 'b3',
    title: 'b3',
    text: 'Het meest flexibele systeem voor wand, eiland, nissen en rijke materiaalkeuzes.',
    to: '/bulthaup/b3/',
    link: 'Lees over b3',
    image: projects.find((project) => project.system === 'b3')?.cover,
    alt: 'Bulthaup b3 keuken met maatwerk kastenwand en eiland'
  }
]

useSeoMeta({
  title: 'Stadshaege Keukendesign | Bulthaup keukens in Amersfoort',
  description: site.description,
  ogTitle: 'Stadshaege Keukendesign',
  ogDescription: site.description,
  ogImage: '/media/showroom/showroom-4-1616x1212.jpg'
})
</script>

<template>
  <SeoJsonLd :graph="{
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: site.contact.name,
    url: site.canonicalUrl,
    telephone: site.contact.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.contact.streetAddress,
      postalCode: site.contact.postalCode,
      addressLocality: site.contact.city,
      addressCountry: 'NL'
    }
  }" />

  <section class="hero home-hero">
    <ResponsiveImage src="/media/showroom/showroom-4-1616x1212.jpg" alt="Bulthaup showroomkeuken van Stadshaege Keukendesign" loading="eager" />
    <div class="hero-content">
      <p class="eyebrow">Sinds 1998 in Amersfoort</p>
      <h1>Persoonlijk ontworpen bulthaup-keukens in Amersfoort</h1>
      <p>Stadshaege ontwerpt bulthaup-keukens op maat vanuit woning, kookgedrag en dagelijks gebruik. Rustig, precies en persoonlijk begeleid door Filip Leenman.</p>
      <div class="actions">
        <NuxtLink class="button" to="/contact/">Maak een afspraak</NuxtLink>
        <NuxtLink class="button-secondary" to="/projecten/">Bekijk projecten</NuxtLink>
      </div>
    </div>
  </section>

  <ContentSection title="Waar wilt u beginnen?" text="Kies de route die past bij uw oriëntatie: inspiratie bekijken, bulthaup beter begrijpen of direct een persoonlijk adviesgesprek voorbereiden.">
    <div class="grid">
      <NuxtLink class="card project-card" to="/projecten/">
        <div class="card-body">
          <p class="meta-label">Inspiratie</p>
          <h3>Bekijk gerealiseerde projecten</h3>
          <p>Vind keukens die aansluiten bij uw ruimte, materiaalvoorkeur en manier van wonen.</p>
        </div>
      </NuxtLink>
      <NuxtLink class="card project-card" to="/bulthaup/">
        <div class="card-body">
          <p class="meta-label">Bulthaup</p>
          <h3>Begrijp b1, b2 en b3</h3>
          <p>Zie hoe de systemen verschillen in toepassing, flexibiliteit en uitstraling.</p>
        </div>
      </NuxtLink>
      <NuxtLink class="card project-card" to="/advies/">
        <div class="card-body">
          <p class="meta-label">Advies</p>
          <h3>Bereid uw afspraak voor</h3>
          <p>Lees hoe het gesprek, ontwerptraject en de realisatie verlopen.</p>
        </div>
      </NuxtLink>
    </div>
  </ContentSection>

  <ContentSection eyebrow="Projecten" title="Geselecteerde bulthaup-keukens" text="Bekijk hoe verschillende materialen, opstellingen en bulthaup-systemen in echte woonruimtes uitpakken." heading-wide>
    <div class="grid">
      <ProjectCard v-for="project in featuredProjects" :key="project.slug" :project="project" />
    </div>
    <div class="actions">
      <NuxtLink class="button-secondary" to="/projecten/">Alle projecten bekijken</NuxtLink>
    </div>
  </ContentSection>

  <ContentSection eyebrow="Waarom Stadshaege" title="Ontwerp vanuit woning en dagelijks gebruik">
    <div class="media-copy">
      <ResponsiveImage src="/media/eigenaar/MG_7692-1-scaled.jpg" alt="Filip Leenman in de showroom van Stadshaege Keukendesign" />
      <div class="panel">
        <h3>Persoonlijke ontwerpkwaliteit</h3>
        <p>Filip Leenman werkt sinds 1985 als keukenadviseur en heeft sinds 1998 zijn eigen keukenzaak. Een keuken wordt ontworpen rond koken, boodschappen, voorraad, ontbijt, afval, lichtval, architectuur en samen gebruik.</p>
        <p style="margin-top:1rem">In de showroom ervaart u materialen, fronten, werkbladen en bulthaup-systemen van dichtbij. Dat maakt keuzes over indeling, kleur en afwerking concreet.</p>
      </div>
    </div>
  </ContentSection>

  <ContentSection eyebrow="Bulthaup" title="b1, b2 en b3 in één oogopslag">
    <div class="grid system-grid">
      <article v-for="card in systemCards" :key="card.system" class="panel system-card">
        <ResponsiveImage v-if="card.image" :src="card.image" :alt="card.alt" />
        <div class="system-card-body">
          <h3>{{ card.title }}</h3>
          <p>{{ card.text }}</p>
          <NuxtLink :to="card.to">{{ card.link }}</NuxtLink>
        </div>
      </article>
    </div>
  </ContentSection>

  <ContentSection dark eyebrow="Adviesproces" title="Van oriëntatie tot nazorg" text="Een grote aankoop wordt overzichtelijker wanneer elke stap duidelijk is.">
    <div class="grid">
      <div class="panel"><h3>1. Gesprek</h3><p>Wensen, ruimte, kookgedrag en planning worden concreet gemaakt.</p></div>
      <div class="panel"><h3>2. Ontwerp</h3><p>Indeling, materialen, apparatuur en budget worden uitgewerkt.</p></div>
      <div class="panel"><h3>3. Realisatie</h3><p>Inmeten, bestellen, montage en nazorg krijgen heldere opvolging.</p></div>
    </div>
  </ContentSection>

  <ContentSection eyebrow="Showroom" title="Ervaar bulthaup aan de Grote Haag" text="Bezoek de showroom in Amersfoort op afspraak en bespreek uw keukenplan rustig.">
    <ContactActions />
  </ContentSection>
</template>
