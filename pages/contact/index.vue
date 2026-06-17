<script setup>
import { pages } from '~/content/pages.mjs'
import { site } from '~/content/site.mjs'
const page = pages.contact
useSeoMeta({ title: page.seoTitle, description: page.description })
</script>

<template>
  <ContentSection :breadcrumbs="[{ label: 'Home', to: '/' }, { label: 'Contact' }]" :title="page.title" :text="page.intro">
    <div class="grid-2">
      <div class="panel">
        <h3>{{ site.contact.name }}</h3>
        <p>{{ site.contact.streetAddress }}<br>{{ site.contact.postalCode }} {{ site.contact.city }}</p>
        <p style="margin-top:1rem"><a :href="`tel:${site.contact.phone.replaceAll('-', '')}`">{{ site.contact.phone }}</a><br><a :href="`tel:${site.contact.mobile.replaceAll('-', '')}`">{{ site.contact.mobile }}</a><br><a :href="`mailto:${site.contact.email}`">{{ site.contact.email }}</a></p>
      </div>
      <div class="panel">
        <h3>Wat gebeurt er na contact?</h3>
        <p>Een afspraak helpt om uw ruimte, kookgedrag, materialen en bulthaup-systemen rustig te bespreken. Neem gerust plattegrond, foto’s of inspiratie mee.</p>
        <div class="actions"><a class="button" :href="`tel:${site.contact.mobile.replaceAll('-', '')}`">Bel direct</a><a class="button-secondary" :href="`mailto:${site.contact.email}`">Mail uw vraag</a></div>
      </div>
    </div>
  </ContentSection>

  <ContentSection title="Afspraak, opening en parkeren">
    <div class="media-copy">
      <ResponsiveImage src="/media/eigenaar/MG_7692-scaled.jpg" alt="Filip Leenman in gesprek in de showroom van Stadshaege Keukendesign" />
      <div class="grid contact-detail-grid">
        <div class="panel">
          <h3>Openingstijden</h3>
          <p>Maandag en dinsdag op afspraak. Woensdag tot en met zaterdag geopend van 10.00 tot 17.00 uur.</p>
        </div>
        <div class="panel">
          <h3>Afspraak maken</h3>
          <p>Voor persoonlijk advies of een ontwerp kunt u het beste vooraf bellen met {{ site.contact.mobile }}.</p>
        </div>
        <div class="panel">
          <h3>Parkeren</h3>
          <p>De ingang ligt tegenover parkeergarage Koestraat. Q-Park Mondriaan aan de Stadsring is een alternatief en is op zaterdag vaak minder vol.</p>
        </div>
      </div>
    </div>
  </ContentSection>
</template>
