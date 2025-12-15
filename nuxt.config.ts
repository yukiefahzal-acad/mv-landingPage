import tailwindcss from "@tailwindcss/vite"
import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: "2025-07-15",
   devtools: { enabled: true },
   modules: [
      "@nuxt/fonts", 
      "@nuxt/icon", 
      "@nuxt/image",
      "@nuxtjs/seo"
   ],
   runtimeConfig: {
      public: {
         siteUrl: import.meta.env.APP_URL,
         siteName: 'MedicVerse',
         siteDescription: 'Your engaging landing page description',
      }
   },
   app: {
      head: {
         title: 'MedicVerse',
         meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: 'Your engaging landing page description' },
            // Open Graph
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: 'MedicVerse' },
            { property: 'og:description', content: 'Your engaging landing page description' },
            { property: 'og:url', content: import.meta.env.APP_URL },
            { property: 'og:site_name', content: 'MedicVerse' },
            // Twitter Card
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@yourtwitterhandle' },
            { name: 'twitter:title', content: 'Your Brand Name' },
            { name: 'twitter:description', content: 'Your engaging landing page description' },
         ],
         link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'canonical', href: import.meta.env.APP_URL }
         ]
      }
   },
   // SEO Module Configuration
   sitemap: {
      sources: ["/api/__sitemap__/urls"],
   },
   robots: {
      allow: '/',
      sitemap: `${import.meta.env.APP_URL}/sitemap.xml`
   },
   vite: {
      plugins: [tailwindcss()],
   },
   css: ["@/assets/css/main.css"],
   components: {
      dirs: [
         {
            path: "@/components",
            pathPrefix: false
         }
      ]
   }
})
