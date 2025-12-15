import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: "2025-07-15",
   devtools: { enabled: true },
   modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxt/image"],
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
