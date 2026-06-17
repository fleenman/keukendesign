<script setup>
const props = defineProps({
  site: { type: Object, required: true }
})

const mainFooterGroups = computed(() => props.site.footerGroups.filter((group) => group.title !== 'Juridisch'))
const legalLinks = computed(() => props.site.footerGroups.find((group) => group.title === 'Juridisch')?.links || [])
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner footer-grid">
      <div>
        <NuxtLink class="brand" to="/">
          <strong>Stadshaege</strong>
          <span>keukendesign</span>
        </NuxtLink>
        <p style="margin-top:1rem">
          {{ site.contact.streetAddress }}<br>
          {{ site.contact.postalCode }} {{ site.contact.city }}<br>
          <a :href="`tel:${site.contact.phone.replaceAll('-', '')}`">{{ site.contact.phone }}</a><br>
          <a :href="`mailto:${site.contact.email}`">{{ site.contact.email }}</a>
        </p>
      </div>

      <div v-for="group in mainFooterGroups" :key="group.title">
        <h3 style="font-size:1rem">{{ group.title }}</h3>
        <ul class="footer-links">
          <li v-for="link in group.links" :key="link.to">
            <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="legalLinks.length" class="footer-inner footer-legal" aria-label="Juridische links">
      <NuxtLink v-for="link in legalLinks" :key="link.to" :to="link.to">{{ link.label }}</NuxtLink>
    </div>
  </footer>
</template>
