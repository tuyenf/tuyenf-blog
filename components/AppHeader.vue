<script setup lang="ts">
import {THEMES} from "~/utils/Constants";

const colorMode = useColorMode()

function toggleViewMode() {
  if (colorMode.value === THEMES.DARK) {
    colorMode.preference = THEMES.LIGHT
    localStorage['nuxt-color-mode'] = THEMES.LIGHT
  } else if (colorMode.value === THEMES.LIGHT) {
    colorMode.preference = THEMES.SEPIA
    localStorage['nuxt-color-mode'] = THEMES.SEPIA
  } else {
    colorMode.preference = THEMES.DARK
    localStorage['nuxt-color-mode'] = THEMES.DARK
  }
}
</script>

<template>
  <header class="py-4 mb-2 flex justify-between">
    <NuxtLink to="/" class="text-primary-500 font-extrabold flex items-center">
      <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
      </svg>
      <code>tuyenf<sub>.dev</sub></code></NuxtLink>
    <div @click="toggleViewMode"
         class="w-8 h-8 flex justify-center items-center cursor-pointer text-slate-600 dark:text-slate-400">
      <svg v-if="colorMode.value === THEMES.LIGHT" class="w-5 h-5 feather feather-sun"
           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
      <svg v-else-if="colorMode.value === THEMES.DARK" class="w-5 h-5 feather feather-moon" aria-hidden="true"
           xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
      <svg v-else class="w-5 h-5 feather feather-coffee" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/>
        <line x1="10" y1="1" x2="10" y2="4"/>
        <line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    </div>
  </header>
</template>

<style scoped>

</style>