export default defineNuxtConfig({
    // Configuration pour Vite
    vite: {
        resolve: {
            alias: {
                '#app-manifest': '/home/bertrand/Bureau/hotel_artichoke_vue/node_modules/nuxt/dist/app/composables/manifest.js'
            }
        }
    },

    // Ajouter le module Tailwind CSS
    modules: ['@nuxtjs/tailwindcss'],

    // Configuration de compatibilité (facultatif)
    compatibilityDate: '2025-01-17',
})
