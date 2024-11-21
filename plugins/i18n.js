import { createI18n } from 'vue-i18n'
import en from '~/locales/en.json'
import vi from '~/locales/vi.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const messages = {
    en,
    vi,
  }
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages,
    silentTranslationWarn: true,
  })
  vueApp.use(i18n)
})
