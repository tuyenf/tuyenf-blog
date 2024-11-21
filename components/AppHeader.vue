<script setup lang="ts">
import { initFlowbite } from 'flowbite'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { AVAILABLE_LOCALES, DEFAULT_BROWSER_LANGUAGE, THEMES } from '~/utils/Constants'

const i18n = useI18n()
const colorMode = useColorMode()
const browserLanguage = window.navigator.language
const language = shallowRef<CommonModule.Language>(DEFAULT_BROWSER_LANGUAGE)
function toggleViewMode() {
  if (colorMode.value === THEMES.DARK) {
    colorMode.preference = THEMES.LIGHT
    localStorage['nuxt-color-mode'] = THEMES.LIGHT
  }
  else if (colorMode.value === THEMES.LIGHT) {
    colorMode.preference = THEMES.SEPIA
    localStorage['nuxt-color-mode'] = THEMES.SEPIA
  }
  else {
    colorMode.preference = THEMES.DARK
    localStorage['nuxt-color-mode'] = THEMES.DARK
  }
}

onMounted(() => {
  initFlowbite()
})
onBeforeMount(() => {
  const cacheLocale: string = localStorage['nuxt-locale']
  if (!cacheLocale) {
    language.value = AVAILABLE_LOCALES.find((lang: CommonModule.Language) => browserLanguage.includes(lang.code)) ?? DEFAULT_BROWSER_LANGUAGE
  }
  else {
    language.value = AVAILABLE_LOCALES.find((lang: CommonModule.Language) => lang.code === cacheLocale) ?? DEFAULT_BROWSER_LANGUAGE
  }
})

watch(language, (lang: CommonModule.Language) => {
  i18n.locale.value = lang.code
  document.body.setAttribute('data-language', lang.code)
  localStorage['nuxt-locale'] = language.value.code
})
</script>

<template>
  <header class="py-4 mb-2 flex justify-between">
    <NuxtLink
      to="/"
      class="text-primary-500 font-extrabold flex items-center"
    >
      <IconCode
        class="w-6 h-6"
        :filled="true"
      />
      <code>
        tuyenf
        <sub>.dev</sub>
      </code>
    </NuxtLink>
    <div class="flex justify-end">
      <div
        class="w-8 h-8 flex justify-center items-center cursor-pointer text-slate-600 dark:text-slate-400"
        @click="toggleViewMode"
      >
        <IconSun
          v-if="colorMode.value === THEMES.LIGHT"
          class="w-5 h-5 feather feather-sun"
        />
        <IconMoon
          v-else-if="colorMode.value === THEMES.DARK"
          class="w-5 h-5 feather feather-moon"
        />
        <IconCoffee
          v-else
          class="w-5 h-5 feather feather-coffee"
          :filled="true"
        />
      </div>

      <div class="ms-3">
        <div
          v-if="language"
          id="states-button"
          data-dropdown-toggle="dropdown-states"
          class="cursor-pointer flex-shrink-0 z-10 inline-flex items-center py-1 px-2 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
        >
          <language.flag
            :filled="true"
            class="my-0.5 mr-1 text-lg"
          />
          <span class="block text-ellipsis overflow-hidden max-w-[46px]">{{ language.name }}</span>
        </div>
        <div
          id="dropdown-states"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg overflow-hidden shadow w-44 dark:bg-gray-700"
        >
          <ul
            class="text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="states-button"
          >
            <li
              v-for="lang in AVAILABLE_LOCALES"
              :key="lang.code"
              :class="{
                'bg-gray-100 dark:bg-gray-600 dark:text-white': lang.code === language.code,
              }"
              class="cursor-pointer inline-flex w-full px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              @click="language = lang"
            >
              <div class="inline-flex items-center">
                <component
                  :is="lang.flag"
                  :filled="true"
                  class="my-0.5 mr-1 text-lg"
                />
                {{ lang.name }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
