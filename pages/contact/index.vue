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
        <div class="social-links" aria-label="Stadshaege op sociale media">
          <a href="https://www.facebook.com/stadshaege" target="_blank" rel="noopener noreferrer" aria-label="Stadshaege op Facebook">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M14.2 8.4V6.9c0-.7.2-1.1 1.2-1.1h1.5V3.1c-.7-.1-1.5-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v1.6H8.5v3H11V21h3.2v-9.6h2.4l.4-3h-2.8Z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/stadshaege.keukendesign/" target="_blank" rel="noopener noreferrer" aria-label="Stadshaege Keukendesign op Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M7.3 2.8h9.4c2.5 0 4.5 2 4.5 4.5v9.4c0 2.5-2 4.5-4.5 4.5H7.3c-2.5 0-4.5-2-4.5-4.5V7.3c0-2.5 2-4.5 4.5-4.5Zm0 2.9c-.9 0-1.6.7-1.6 1.6v9.4c0 .9.7 1.6 1.6 1.6h9.4c.9 0 1.6-.7 1.6-1.6V7.3c0-.9-.7-1.6-1.6-1.6H7.3Zm4.7 2.6a3.7 3.7 0 1 1 0 7.4 3.7 3.7 0 0 1 0-7.4Zm0 2.6a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Zm4.2-3.3a1 1 0 1 1 0 2.1 1 1 0 0 1 0-2.1Z" />
            </svg>
          </a>
        </div>
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
