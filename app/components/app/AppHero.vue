<script setup lang="ts">
   import { onMounted } from 'vue';
   import gsap from 'gsap';
   import { ScrollTrigger } from 'gsap/ScrollTrigger';
   
   gsap.registerPlugin(ScrollTrigger);

   onMounted(() => {
      // Collapse `#home` when the next section (`#about`) scrolls into view (scrubbed)
      gsap.set('#home', { transformOrigin: 'top center', scaleY: 1 });
      gsap.to('#home', {
         scaleY: 0,
         ease: 'none',
         scrollTrigger: {
            trigger: '#about',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            // markers: true, // enable while tuning
         }
      });

      // Scale down the hero blob while scrolling into the next section
      gsap.set('.gambar', { scale: 1 });
      gsap.to('.gambar', {
         scale: 0,
         ease: 'none',
         scrollTrigger: {
            trigger: '#about',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            // markers: true,
         }
      });




   })

</script>



<template>
   <div id="home" class="relative mx-auto max-w-7xl h-screen">
      <!-- SECTION: Blob -->
      <div class="absolute inset-0 z-0 pointer-events-none flex items-center justify-center -translate-y-[25%] gambar">
         <img src="../../assets/img/logo/herosection.svg" alt="Hero blob" class="bg-bumi h-screen w-screen md:w-screen opacity-40 blur-sm"/>
          <!-- <video class="w-screen h-screen" autoplay>
            <source src="../../assets/vid/move (1).mp4" type="video/mp4" class="video">
          </video> -->
      </div>

      

      <!-- <div class="box gradient-green green"></div>
      <div class="box gradient-purple purple"></div>
      <div class="box gradient-blue blue"></div> -->


      <!-- !SECTION: Blob -->

      <div class="absolute inset-0">
         <div class="relative z-10 text-center -translate-y-[-25%] antialiased">
            <h1
               class="mb-6 leading-tight font-black tracking-wide text-gray-900 md:text-3xl lg:text-7xl sm:text-lg tagline"
            >
                The Command Center for Your Entire Medical Universe.
            </h1>
            <div class="flex items-center justify-center pb-10">
               <div class="max-w-xl text-center">
                  <p class="leading-relaxed text-gray-600">
                     Ubah Kesibukan Menjadi Keteraturan. 
                     <strong>Medic<span class="text-emerald-500">Verse</span></strong> 
                     menyelaraskan pasien, dokter, dan operasional klinik Anda dalam satu orbit yang sempurna. 
                     Generasi baru Sistem Manajemen Klinik telah hadir.
                  </p>
               </div>
            </div>
   
            <button
               class="transform rounded-full bg-linear-to-r from-emerald-400 to-emerald-500 px-8 py-4 text-lg font-medium text-white shadow-xl transition hover:scale-105 hover:from-emerald-500 hover:to-emerald-600 hover:shadow-2xl"
            >
               <div
                  class="flex font-bold h-8 items-center"
               >
                  <Icon name="lucide:rocket" />
                  <p class="ml-2">
                     Uji Coba Penerbangan 
                  </p> 
               </div>
            </button>
         </div>
      </div>
   </div>
</template>

