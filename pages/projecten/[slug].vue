<script setup>
import { projects } from '~/content/projects.mjs'
import { site } from '~/content/site.mjs'

const route = useRoute()
const project = computed(() => projects.find((item) => item.slug === route.params.slug))
const selectedImageIndex = ref(null)

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project niet gevonden' })
}

useSeoMeta({
  title: () => `${project.value.title} | Stadshaege Keukendesign`,
  description: () => project.value.summary,
  ogTitle: () => project.value.title,
  ogDescription: () => project.value.summary,
  ogType: 'article',
  ogImage: () => new URL(project.value.cover, site.canonicalUrl).toString(),
  ogImageAlt: () => project.value.title,
  twitterImage: () => new URL(project.value.cover, site.canonicalUrl).toString()
})

const projectUrl = computed(() => new URL(`/projecten/${project.value.slug}/`, site.canonicalUrl).toString())
const projectImages = computed(() => project.value.gallery.map((image, index) => ({
  '@type': 'ImageObject',
  '@id': `${projectUrl.value}#image-${index + 1}`,
  url: new URL(image, site.canonicalUrl).toString(),
  contentUrl: new URL(image, site.canonicalUrl).toString(),
  caption: `${project.value.title}, foto ${index + 1}`,
  representativeOfPage: index === 0
})))
const projectStructuredData = computed(() => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Article', 'CreativeWork'],
      '@id': `${projectUrl.value}#project`,
      mainEntityOfPage: projectUrl.value,
      url: projectUrl.value,
      headline: project.value.title,
      name: project.value.title,
      description: project.value.summary,
      articleSection: 'Gerealiseerde bulthaup-keukens',
      inLanguage: 'nl-NL',
      image: projectImages.value,
      thumbnailUrl: new URL(project.value.cover, site.canonicalUrl).toString(),
      author: {
        '@type': 'Person',
        '@id': `${site.canonicalUrl}/#filip-leenman`,
        name: 'Filip Leenman'
      },
      publisher: { '@id': `${site.canonicalUrl}/#business` },
      provider: { '@id': `${site.canonicalUrl}/#business` },
      about: [
        { '@type': 'Thing', name: `bulthaup ${project.value.system}` },
        { '@type': 'Thing', name: project.value.layout },
        ...project.value.materials.map((material) => ({ '@type': 'Thing', name: material })),
        ...project.value.appliances.map((appliance) => ({ '@type': 'Brand', name: appliance }))
      ],
      spatialCoverage: project.value.region,
      keywords: [
        'bulthaup keuken',
        `bulthaup ${project.value.system}`,
        project.value.layout,
        project.value.region,
        ...project.value.materials,
        ...project.value.appliances
      ].filter(Boolean).join(', ')
    },
    {
      '@type': 'ImageGallery',
      '@id': `${projectUrl.value}#gallery`,
      url: projectUrl.value,
      name: `Fotogalerij ${project.value.title}`,
      image: projectImages.value,
      about: { '@id': `${projectUrl.value}#project` },
      publisher: { '@id': `${site.canonicalUrl}/#business` }
    }
  ]
}))

const related = computed(() => projects.filter((item) => item.slug !== project.value.slug && item.system === project.value.system).slice(0, 3))
const isGalleryOpen = computed(() => selectedImageIndex.value !== null)
const activeImage = computed(() => {
  if (selectedImageIndex.value === null) return null
  return project.value.gallery[selectedImageIndex.value]
})

function openGallery(index) {
  selectedImageIndex.value = index
}

function closeGallery() {
  selectedImageIndex.value = null
}

function showPreviousImage() {
  const total = project.value.gallery.length
  selectedImageIndex.value = (selectedImageIndex.value - 1 + total) % total
}

function showNextImage() {
  const total = project.value.gallery.length
  selectedImageIndex.value = (selectedImageIndex.value + 1) % total
}

function handleGalleryKeydown(event) {
  if (!isGalleryOpen.value) return

  if (event.key === 'Escape') closeGallery()
  if (event.key === 'ArrowLeft') showPreviousImage()
  if (event.key === 'ArrowRight') showNextImage()
}

onMounted(() => {
  window.addEventListener('keydown', handleGalleryKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleGalleryKeydown)
  document.body.classList.remove('is-lightbox-open')
})

watch(isGalleryOpen, (open) => {
  document.body.classList.toggle('is-lightbox-open', open)
})
</script>

<template>
  <SeoJsonLd :graph="projectStructuredData" />

  <section class="hero">
    <ResponsiveImage
      :src="project.cover"
      :alt="project.title"
      loading="eager"
      :style="{ viewTransitionName: `project-${project.slug}` }"
    />
    <div class="hero-content">
      <BreadcrumbTrail :items="[{ label: 'Home', to: '/' }, { label: 'Projecten', to: '/projecten/' }, { label: project.title, to: `/projecten/${project.slug}/` }]" />
      <p class="eyebrow">{{ project.system }} · {{ project.layout }} · {{ project.region }}</p>
      <h1>{{ project.title }}</h1>
      <p>{{ project.summary }}</p>
      <div class="actions">
        <NuxtLink class="button" to="/contact/">Bespreek vergelijkbaar ontwerp</NuxtLink>
        <NuxtLink class="button-secondary" to="/projecten/">Terug naar projecten</NuxtLink>
      </div>
    </div>
  </section>

  <ContentSection title="Projectsamenvatting">
    <div class="grid">
      <div class="panel"><p class="meta-label">Systeem</p><h3>{{ project.system }}</h3></div>
      <div class="panel"><p class="meta-label">Opstelling</p><h3>{{ project.layout }}</h3></div>
      <div class="panel"><p class="meta-label">Materialen</p><h3>{{ project.materials.join(', ') }}</h3></div>
    </div>
  </ContentSection>

  <ContentSection title="Vraag, uitdaging en oplossing">
    <div class="grid">
      <div class="panel"><h3>De vraag</h3><p>{{ project.question }}</p></div>
      <div class="panel"><h3>De uitdaging</h3><p>{{ project.challenge }}</p></div>
      <div class="panel"><h3>De oplossing</h3><p>{{ project.solution }}</p></div>
    </div>
  </ContentSection>

  <ContentSection title="Fotogalerij">
    <div class="gallery-grid">
      <button
        v-for="(image, index) in project.gallery"
        :key="image"
        class="gallery-button"
        type="button"
        :aria-label="`Bekijk ${project.title}, foto ${index + 1} fullscreen`"
        @click="openGallery(index)"
      >
        <ResponsiveImage
          :src="image"
          :alt="`${project.title}, foto ${index + 1}`"
        />
      </button>
    </div>
  </ContentSection>

  <Teleport to="body">
    <div
      v-if="isGalleryOpen"
      class="lightbox"
      role="dialog"
      aria-modal="true"
      :aria-label="`Fotogalerij van ${project.title}`"
      @click.self="closeGallery"
    >
      <button class="lightbox-close" type="button" aria-label="Sluit fotogalerij" @click="closeGallery">×</button>
      <button
        v-if="project.gallery.length > 1"
        class="lightbox-nav lightbox-prev"
        type="button"
        aria-label="Vorige foto"
        @click="showPreviousImage"
      >
        ‹
      </button>
      <figure class="lightbox-figure">
        <ResponsiveImage
          v-if="activeImage"
          :src="activeImage"
          :alt="`${project.title}, foto ${selectedImageIndex + 1} van ${project.gallery.length}`"
          loading="eager"
        />
        <figcaption>{{ selectedImageIndex + 1 }} / {{ project.gallery.length }}</figcaption>
      </figure>
      <button
        v-if="project.gallery.length > 1"
        class="lightbox-nav lightbox-next"
        type="button"
        aria-label="Volgende foto"
        @click="showNextImage"
      >
        ›
      </button>
    </div>
  </Teleport>

  <ContentSection v-if="related.length" title="Gerelateerde projecten">
    <div class="grid">
      <ProjectCard v-for="item in related" :key="item.slug" :project="item" />
    </div>
  </ContentSection>
</template>
