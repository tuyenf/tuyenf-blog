<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { AVAILABLE_LOCALES, DEFAULT_BROWSER_LANGUAGE } from '~/utils/Constants'

const i18n = useI18n()
const browserLanguage = window.navigator.language
const language = ref<string>(DEFAULT_BROWSER_LANGUAGE)

function changeLocale() {
  if (language.value === 'en') language.value = 'vi'
  else language.value = 'en'
}
onBeforeMount(() => {
  const cacheLocale: string = localStorage['nuxt-locale']
  if (!cacheLocale) {
    language.value = AVAILABLE_LOCALES.find((lang: string) => browserLanguage.includes(lang)) ?? DEFAULT_BROWSER_LANGUAGE
  } else {
    language.value = AVAILABLE_LOCALES.find((lang: string) => lang === cacheLocale) ?? DEFAULT_BROWSER_LANGUAGE
  }
})

watch(language, (lang: string) => {
  i18n.locale.value = lang
  document.documentElement.setAttribute('lang', lang)
  localStorage['nuxt-locale'] = language.value
})
</script>

<template>
  <div
    id="states-button"
    data-interaction="false"
    data-dropdown-toggle="dropdown-states"
    class="cursor-pointer w-8 uppercase flex-shrink-0 z-10 inline-flex items-center justify-center text-sm border border-gray-900 dark:border-white rounded-md"
    @click="changeLocale"
  >
    {{ language }}
  </div>
</template>

<style scoped></style>
