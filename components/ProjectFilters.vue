<script setup>
const props = defineProps({
  projects: { type: Array, required: true }
})

const emit = defineEmits(['update'])
const selected = ref('')

const filters = computed(() => {
  const values = new Set()
  for (const project of props.projects) {
    values.add(project.system)
    values.add(project.layout)
    for (const material of project.materials || []) values.add(material)
  }
  return Array.from(values).sort()
})

const filteredProjects = computed(() => {
  if (!selected.value) return props.projects
  return props.projects.filter((project) => {
    return project.system === selected.value ||
      project.layout === selected.value ||
      (project.materials || []).includes(selected.value)
  })
})

watch(filteredProjects, (value) => emit('update', value), { immediate: true })

</script>

<template>
  <div class="project-filters" aria-label="Projectfilters">
    <label class="filter-select">
      <span>Bekijk projecten op</span>
      <select v-model="selected">
        <option value="">Alle systemen, opstellingen en materialen</option>
        <option v-for="filter in filters" :key="filter" :value="filter">
          {{ filter }}
        </option>
      </select>
    </label>
    <div class="filter-status">
      <p aria-live="polite">
        {{ filteredProjects.length }} projecten gevonden
      </p>
      <button
        v-if="selected"
        type="button"
        class="filter-reset"
        @click="selected = ''"
      >
        Toon alles
      </button>
    </div>
  </div>
</template>
