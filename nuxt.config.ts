export default defineNuxtConfig({
  vite: {
      resolve: {
          alias: {
              '#app-manifest': '/home/bertrand/Bureau/hotel_artichoke_vue/node_modules/nuxt/dist/app/composables/manifest.js'
          }
      }
  },

  compatibilityDate: '2025-01-17'
});