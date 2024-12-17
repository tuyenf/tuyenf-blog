// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'nuxt-svgo', '@vueuse/nuxt'],
  css: ['assets/styles/main.scss'],
  colorMode: {
    classSuffix: '',
  },
  build: {
    transpile: ['sequelize', 'sequelize-cli'],
  },
  runtimeConfig: {
    public: {
      mtApiUrl: process.env.MT_API_URL || 'http://localhost:3000',
    },
  },
  plugins: [
    {
      src: '~/server/plugins/db-init.js', // Đảm bảo đường dẫn đúng
      mode: 'server', // Chạy plugin chỉ trên server (bỏ `client`)
    },
  ],
  nitro: {
    preset: 'node',
  },
  svgo: {
    autoImportPath: '~/assets/media/icons/',
    componentPrefix: 'icon',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
      ],
    },
  },
})
