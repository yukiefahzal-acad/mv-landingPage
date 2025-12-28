<script setup lang="ts"></script>

<template>
   <nav class="w-full bg-white/50 backdrop-blur-sm sticky top-0 z-40">
      <div class="container mx-auto px-6 py-3 sm:px-3">
         <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
               <img
                  src="../../assets/img//logo/Logo-MedicVerse-Logo.svg"
                  alt="MedicVerse Logo"
                  class="h-auto w-16"
                  />
               <span class="text-xl text-gray-900 font-semibold">Medic<span class="text-emerald-500">Verse</span></span>
            </div>
            
            <div class="hidden items-center gap-8 md:flex">
               <a
                  href="#home"
                  class="text-gray-700 transition hover:text-gray-900 hover:font-bold"
               >
                  Beranda
               </a>
               <a
                  href="#about"
                  class="text-gray-700 transition hover:text-gray-900 hover:font-bold"
               >
                  Tentang Kami
               </a>
               <a
                  href="#features"
                  class="text-gray-700 transition hover:text-gray-900 hover:font-bold"
               >
                  Fitur
               </a>
               <a
                  href="#solutions"
                  class="text-gray-700 transition hover:text-gray-900 hover:font-bold"
               >
                  Solutions
               </a>
               <a
                  href="#pricing"
                  class="text-gray-700 transition hover:text-gray-900 hover:font-bold"
               >
                  Pricing
               </a>
            </div>

            <a
               href="#contact"
               class="rounded-full border-2 border-gray-900 px-6 py-2.5 font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white"
            >
               Lihat Demo
            </a>
         </div>
      </div>
   </nav>
</template>
