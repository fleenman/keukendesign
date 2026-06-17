<script setup>
const props = defineProps({
  site: { type: Object, required: true }
})

const open = ref(false)

function closeMenu() {
  open.value = false
}
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <NuxtLink class="brand" to="/" aria-label="Stadshaege Keukendesign home" @click="closeMenu">
        <strong>Stadshaege</strong>
        <span>keukendesign</span>
      </NuxtLink>

      <button class="nav-toggle" type="button" :aria-expanded="open" aria-controls="site-nav" @click="open = !open">
        Menu
      </button>

      <nav id="site-nav" class="nav" :class="{ 'is-open': open }" aria-label="Hoofdnavigatie">
        <NuxtLink v-for="item in props.site.navigation" :key="item.to" :to="item.to" @click="closeMenu">
          {{ item.label }}
        </NuxtLink>
        <NuxtLink class="button" to="/contact/" @click="closeMenu">Maak een afspraak</NuxtLink>
      </nav>
    </div>
  </header>
</template>
