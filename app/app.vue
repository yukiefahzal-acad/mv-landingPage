<script setup lang="ts">
   import gsap from 'gsap';
   import { Observer, ScrollTrigger } from 'gsap/all';
   
   gsap.registerPlugin(Observer, ScrollTrigger);

   onMounted(() => {

      // animate si bg-bumi
      gsap.to(".bg-bumi", {
         rotation: 15,
         duration: 3,
         ease: 'power1.inOut',
         repeat: -1,
         yoyo: true,
      })

      // Observer + ScrollTrigger Option
      const home = document.querySelector("#home");
      const footer = document.querySelector("#mFooter");

      const myObserver = Observer.create({
         target: window,
         type: "wheel,touch,scroll",
         tolerance: 50,
         onUp: () => {
            gsap.to(home, { 
               height: "100vh", 
               autoAlpha: 1, 
               duration: 1, 
               ease: "power1.out" 
            });
            gsap.to(".bg-bumi", { 
               scale: 1,
               duration: 1, 
               ease: "power1.out" 
            });
         },
         onDown: () => {
            gsap.to(home, { 
               height: 0, 
               autoAlpha: 0, 
               duration: 1, 
               ease: "power1.inOut" 
            });
            gsap.to(".bg-bumi", { 
               scale: 0, 
               duration: 1, 
               ease: "power1.inOut" 
            });
         },
      });

      myObserver.disable();

      ScrollTrigger.create({
         trigger: "body",
         start: "top top",
         end: "100vh top",
         onEnter: () => myObserver.enable(),  
         onLeave: () => myObserver.disable(),
         onEnterBack: () => myObserver.enable(), 
      });

   })
</script>

<template>
   <div>
      <NuxtRouteAnnouncer />
      <div class="bg-white">
         <LayoutNavbar />

         <div class="relative z-20">
            <main class="relative items-center justify-center">
               <AppHero />
            </main>
            <AppAbout />
            <AppFeatures />
            <AppSolutions />
            <AppPricing />
         </div>
         <div class="relative z-10">
            <div class="">
               <LayoutFooter />
            </div>
         </div>
      </div>
   </div>
</template>
