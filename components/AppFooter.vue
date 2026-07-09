<script setup>
const props = defineProps({
  site: { type: Object, required: true }
})

const assetPath = useAssetPath()
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
          <a :href="`tel:${site.contact.mobile.replaceAll('-', '')}`">{{ site.contact.mobile }}</a><br>
          <a :href="`mailto:${site.contact.email}`">{{ site.contact.email }}</a>
        </p>
        <a
          class="footer-review-link"
          href="https://www.google.com/maps/place/bulthaup+Amersfoort/@52.1527006,5.3879926,672m/data=!3m1!1e3!4m14!1m7!3m6!1s0x47c644201273c4e5:0x16b85dfea2512ff2!2sbulthaup+Amersfoort!8m2!3d52.1527006!4d5.3879926!16s%2Fg%2F1tfllm_b!3m5!1s0x47c644201273c4e5:0x16b85dfea2512ff2!8m2!3d52.1527006!4d5.3879926!16s%2Fg%2F1tfllm_b?entry=ttu&amp;g_ep=EgoyMDI2MDcwNi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Reviews van tevreden klanten op Google Maps bekijken"
        >
          <span aria-hidden="true">★★★★★</span>
          Reviews van tevreden klanten
        </a>
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
      <template v-for="link in legalLinks" :key="link.to || link.href">
        <a v-if="link.href" :href="assetPath(link.href)">{{ link.label }}</a>
        <NuxtLink v-else :to="link.to">{{ link.label }}</NuxtLink>
      </template>
    </div>
  </footer>
</template>
