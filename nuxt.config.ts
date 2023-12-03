// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      charset: 'utf8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Pizza App',
    },
  },
  css: ['@/assets/css/main.scss'],
  modules: ['@nuxtjs/tailwindcss'],
})
