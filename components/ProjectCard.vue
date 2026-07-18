<script setup>
const props = defineProps({
  project: { type: Object, required: true }
})

const customerStoryUrls = {
  'bulthaup-b3-noten-kiezel-tv-meubel': 'https://www.stadshaege.nl/projecten/moderne-keuken-amersfoort/',
  'bulthaup-b3-platina-grijs-noten-bar-achterwand': 'https://www.stadshaege.nl/projecten/industriele-keuken-bulthaup/',
  'bulthaup-b3-kaolin-flint': 'https://www.stadshaege.nl/projecten/witte-sfeerkeuken/',
  'bulthaup-b3-kaolin-flint-versie-2': 'https://www.stadshaege.nl/projecten/ruime-strakke-keuken-amersfoort/',
  'bulthaup-b3-wit-noten-dekton': 'https://www.stadshaege.nl/projecten/ruimtelijke-lichte-keuken/',
  'bulthaup-b3-wit-marmer': 'https://www.stadshaege.nl/projecten/innovatieve-moderne-leefkeuken/',
  'bulthaup-b3-eiken-natuur': 'https://www.stadshaege.nl/projecten/houten-keuken/',
  'bulthaup-b3-dekton-ahorn': 'https://www.stadshaege.nl/projecten/witte-designkeuken/',
  'bulthaup-b3-eiken-natuur-antraciet': 'https://www.stadshaege.nl/projecten/houten-designkeuken/',
  'bulthaup-b3-wit-eiken': 'https://www.stadshaege.nl/projecten/eikenhouten-keuken/',
  'bulthaup-bm-alux-champagne-noten-blanc-elysee': 'https://www.stadshaege.nl/projecten/keuken-met-schiereiland-veenendaal/',
  'bulthaup-b3-kiezel-dekton-pietra-extendo-tafel': 'https://www.stadshaege.nl/projecten/bulthaup-keuken-amersfoort/',
  'bulthaup-b3-kiezel-noten-coral-clay': 'https://www.stadshaege.nl/projecten/moderne-keuken-amersfoort-2/',
  'bulthaup-b3-zwart-grijs-eiken-silestone-nolita': 'https://www.stadshaege.nl/projecten/houten-keuken-zwartebroek/',
  'bulthaup-b3-kiezel-flint-dekton-pietra': 'https://www.stadshaege.nl/projecten/bulthaup-keuken-hilversum/',
  'bulthaup-b3-kaolin-u-opstelling-eiken-barblad': 'https://www.stadshaege.nl/projecten/bulthaup-keuken-de-meern/',
  'bulthaup-b3-greeploos-eiken-zwart-bruin-miami-vena': 'https://www.stadshaege.nl/projecten/marit-en-mathieu/',
  'bulthaup-b3-flint-kiezel': 'https://www.stadshaege.nl/projecten/strakke-lichte-keuken/',
  'bulthaup-b3-zwart-eiken-kaolin-rvs': 'https://www.stadshaege.nl/projecten/keuken-van-bulthaup/',
  'bulthaup-kiezel-flint-rvs': 'https://www.stadshaege.nl/projecten/moderne-keuken-op-maat/',
  'bulthaup-b3-alpine-wit-dekton-eter-eiland': 'https://www.stadshaege.nl/projecten/keuken-in-almere/',
  'bulthaup-b3-kiezel-grijs-blad': 'https://www.stadshaege.nl/projecten/stijlvolle-bulthaup-keuken/'
}

const customerStoryUrl = computed(() => customerStoryUrls[props.project.slug] || null)

function openCustomerStory() {
  if (!customerStoryUrl.value) return
  window.open(customerStoryUrl.value, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <NuxtLink class="card project-card" :to="`/projecten/${project.slug}/`">
    <ResponsiveImage
      :src="project.cover"
      :alt="project.title"
      :style="{ viewTransitionName: `project-${project.slug}` }"
    />
    <div class="card-body">
      <p class="meta-label">{{ project.system }} · {{ project.layout }} · {{ project.region }}</p>
      <h3>{{ project.title }}</h3>
      <p>{{ project.summary }}</p>
      <p class="image-count">{{ project.gallery.length }} foto's</p>
      <ul class="tag-list" aria-label="Projectkenmerken">
        <li v-for="material in project.materials" :key="material" class="tag">{{ material }}</li>
        <li
          v-if="customerStoryUrl"
          class="tag project-story-link"
          role="link"
          tabindex="0"
          aria-label="Verhaal klant openen in een nieuw tabblad"
          @click.prevent.stop="openCustomerStory"
          @keydown.enter.prevent.stop="openCustomerStory"
          @keydown.space.prevent.stop="openCustomerStory"
        >
          verhaal klant
        </li>
      </ul>
    </div>
  </NuxtLink>
</template>
