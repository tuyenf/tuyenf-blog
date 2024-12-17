<script setup lang="ts">
import { THEMES } from '~/utils/Constants'

const colorMode = useColorMode()

function toggleViewMode() {
  if (colorMode.value === THEMES.DARK) {
    colorMode.preference = THEMES.LIGHT
    localStorage['nuxt-color-mode'] = THEMES.LIGHT
  } else {
    colorMode.preference = THEMES.DARK
    localStorage['nuxt-color-mode'] = THEMES.DARK
  }
}
</script>

<template>
  <div
    data-interaction="false"
    class="text-gray-950 dark:text-white ms-3"
    @click="toggleViewMode"
  >
    <IconSun
      v-if="colorMode.value === THEMES.LIGHT"
      :font-controlled="false"
      :filled="true"
      class="w-5 h-5 feather feather-sun cursor-pointer sun"
    />
    <IconMoon
      v-else
      :font-controlled="false"
      :filled="true"
      class="w-5 h-5 feather feather-moon cursor-pointer"
    />
  </div>
</template>

<style scoped>
.sun:hover {
  animation: spin 2s infinite linear;
}
</style>
