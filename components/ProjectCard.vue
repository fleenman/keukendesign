<script setup>
defineProps({
  project: { type: Object, required: true }
})
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
      </ul>
    </div>
  </NuxtLink>
</template>
