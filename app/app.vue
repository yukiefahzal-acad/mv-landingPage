<template>
   <div>
      <NuxtRouteAnnouncer />
      <div class="min-h-screen bg-white">
         <LayoutNavbar />

         <main class="relative container mx-auto px-6 py-16">
            <AppHero />
         </main>
         <AppAbout />
         <AppInsight />
         <AppFeatures />
         <AppPricing />
         <AppContact />
         <LayoutFooter />
      </div>
   </div>
</template>
