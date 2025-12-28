<script setup lang="ts">
   import LayoutMFooter from './components/layouts/LayoutMFooter.vue';
   import gsap from 'gsap';

   onMounted(() => {
      gsap.fromTo(
         "#home", 
         {  autoAlpha: 0, },
         {  autoAlpha: 1, 
            duration: 2,
         }
      );

   })

</script>

<template>
   <!-- <UApp> -->
      <div>
         <NuxtRouteAnnouncer />
         <div class="min-h-screen bg-white">
            <LayoutNavbar />
   
            <main class="relative container mx-auto px-6 py-36">
               <AppHero />
            </main>
            <!-- <AppTesting /> -->
            <AppAbout />
            <!-- <AppScroll /> -->
            <!-- <AppInsight /> -->
            <AppFeatures />
            <AppSolutions />
            <AppPricing />
            <!-- <AppContact /> -->
            <LayoutFooter />
            <LayoutMFooter />
         </div>
      </div>
   <!-- </UApp> -->
</template>
