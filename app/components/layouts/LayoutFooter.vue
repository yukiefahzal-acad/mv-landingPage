<script setup lang="ts">
   import gsap from 'gsap';
   import { ScrollTrigger } from 'gsap/ScrollTrigger';

   gsap.registerPlugin(ScrollTrigger);

   onMounted(() => {
   gsap.fromTo("#mFooter", 
      { yPercent:-100, autoAlpha: 0 },
      {
         yPercent: 0,
         autoAlpha: 1,
         scrollTrigger: {
         trigger: "#Footer",
         start: "bottom bottom", 
         endTrigger: "html",
         end: "bottom bottom",
         scrub: 1,
         }
      }
   );
   });
</script>

<template>
  <div class="relative w-full overflow-hidden bg-gray-900">
    
    <footer id="Footer" class="relative z-20 bg-gray-900 pt-16 pb-8 text-white">
      <div class="container mx-auto px-6">
         <div class="mx-auto max-w-7xl">

            <div class="mb-10 grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
               <div class="md:col-span-1 flex flex-col gap-6">
                  <p class="text-emerald-400 font-semibold">The Final Call</p>
                  <h3 class="text-3xl font-bold">T-Minus Menuju Efisiensi Total</h3>
                  <p class="text-gray-300">
                    Jangan biarkan klinik Anda tertinggal. Bergabunglah dengan klinik modern yang telah menggunakan <strong class="text-emerald-500">Medic<span class="text-gray-300">Verse</span></strong>.
                  </p>

                  <button class="mt-2 inline-block w-full md:w-auto rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg hover:bg-emerald-600">
                     Luncurkan Misi Sekarang
                  </button>

                  <p class="text-sm text-gray-400 mt-4">
                    <strong>MedicVerse</strong> Powered by <strong>Techindo</strong> — "Membawa standar teknologi antariksa untuk pelayanan kesehatan di Bumi melalui High Performance, Automation, dan Modern Design."
                  </p>
               </div>

               <!-- Navigation & Mission Control -->
               <div class="md:col-span-1 grid grid-cols-2 gap-6">
                  <div>
                     <h4 class="mb-2 font-semibold text-white">Navigasi Misi</h4>
                     <ul class="space-y-2 text-gray-400">
                        <li><a href="#features" class="hover:text-emerald-400">Fitur</a></li>
                        <li><a href="#pricing" class="hover:text-emerald-400">Harga</a></li>
                        <li><a href="#integrasi-satu-sehat" class="hover:text-emerald-400">Integrasi Satu Sehat</a></li>
                        <li><a href="#status-server" class="hover:text-emerald-400">Status Server</a></li>
                     </ul>
                  </div>

                  <div>
                     <h4 class="mb-2 font-semibold text-white">Mission Control</h4>
                     <ul class="space-y-2 text-gray-400">
                        <li><a href="#about" class="hover:text-emerald-400">Tentang Techindo</a></li>
                        <li><a href="#careers" class="hover:text-emerald-400">Karir</a></li>
                        <li><a href="https://bit.ly/m/techindo" class="hover:text-emerald-400">Hubungi Kami</a></li>
                     </ul>
                  </div>
               </div>

               <!-- Security & Connect -->
               <div class="md:col-span-1">
                  <h4 class="mb-2 font-semibold text-white">Protokol Keamanan</h4>
                  <ul class="space-y-2 text-gray-400 mb-4">
                     <li><a href="#privacy" class="hover:text-emerald-400">Privacy Policy</a></li>
                     <li><a href="#tos" class="hover:text-emerald-400">Terms of Service</a></li>
                  </ul>

                  <h4 class="mb-2 font-semibold text-white">Connect</h4>
                  <div class="space-y-3 text-gray-300">
                     <div class="flex items-center gap-3">
                        <Icon name="lucide:map-pin" class="text-emerald-400" />
                        <a href="https://maps.app.goo.gl/6umr9WH99zTMdRuD7" class="hover:text-emerald-400">Cluster Asyri Green 10 Mustika Jaya - Kota Bekasi</a>
                     </div>
                     <div class="flex items-center gap-3">
                        <Icon name="lucide:mail" class="text-emerald-400" />
                        <a href="mailto:techindo.hub@gmail.com" class="hover:text-emerald-400">techindo.hub@gmail.com</a>
                     </div>
                     <div class="flex items-center gap-3">
                        <Icon name="lucide:phone" class="text-emerald-400" />
                        <a href="tel:+6289503126415" class="hover:text-emerald-400">0895-0312-6415 (WhatsApp)</a>
                     </div>
                     <div class="flex items-center gap-3">
                        <Icon name="lucide:instagram" class="text-emerald-400" />
                        <a href="https://www.instagram.com/techindo.hub/" class="hover:text-emerald-400">@techindo.hub</a>
                     </div>
                     <div class="flex items-center gap-3">
                        <Icon name="lucide:linkedin" class="text-emerald-400" />
                        <a href="https://www.linkedin.com/company/technology-creative-hub-indonesia" class="hover:text-emerald-400">Techindo on LinkedIn</a>
                     </div>
                  </div>
               </div>
            </div>

            <div class="border-t border-gray-800 pt-6 mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
               <p class="text-sm text-gray-400">&copy; 2025 TechIndo</p>
               <p class="text-sm text-gray-400">MedicVerse — Powered by Techindo</p>
            </div>
         </div>
      </div>
    </footer>

    <section class="sticky bottom-0 left-0 w-full h-[30vh] z-10 items-center justify-center bg-gray-900 hidden md:flex">
      <h1 class="font-black uppercase tracking-tighter text-[18vw] leading-[0.7] select-none text-emerald-500">
        <span id="mFooter" class="inline-block">
           medic<span class="text-white">Verse</span>
        </span>
      </h1>
    </section>
  </div>
</template>