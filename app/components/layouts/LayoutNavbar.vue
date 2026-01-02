<script setup lang="ts">
   import { ref } from 'vue';

   const isMenuOpen = ref(false);

   const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
   }

</script>

<template>
   <nav class="w-full bg-white/50 backdrop-blur-sm sticky top-0 z-50">
      <div class="container mx-auto px-6 py-2 md:py-0.5">
         <div class="flex items-center justify-between">
         
         <div class="flex items-center gap-2">
            <img src="../../assets/img/logo/Logo-MedicVerse-Full-Updated.png" alt="MedicVerse Logo" class="h-auto w-40" />
            <!-- <img src="../../assets/img/logo/Logo-MedicVerse-Logo.svg" alt="MedicVerse Logo" class="h-auto w-12" />
            <span class="text-xl text-gray-900 font-bold whitespace-nowrap">Medic<span class="text-emerald-500">Verse</span></span> -->
         </div>

         <div class="hidden items-center gap-6 lg:flex">
            <a href="#home" class="text-sm font-medium text-gray-600 hover:text-emerald-500 transition-colors">Beranda</a>
            <a href="#about" class="text-sm font-medium text-gray-600 hover:text-emerald-500 transition-colors">Tentang Kami</a>
            <a href="#features" class="text-sm font-medium text-gray-600 hover:text-emerald-500 transition-colors">Fitur</a>
            <a href="#solutions" class="text-sm font-medium text-gray-600 hover:text-emerald-500 transition-colors">Solusi</a>
            <a href="#pricing" class="text-sm font-medium text-gray-600 hover:text-emerald-500 transition-colors">Harga</a>
            <a 
               href="#contact" 
               class="ml-4 rounded-full border-2 border-gray-900 px-5 py-2 text-sm font-bold text-gray-900 transition hover:bg-gray-900 hover:text-white"
            >
               Lihat Demo
            </a>
         </div>

         <button @click="toggleMenu" class="block lg:hidden text-gray-900 focus:outline-none p-2">
            <Icon v-if="!isMenuOpen" name="lucide:menu" size="30" />
            <Icon v-else name="lucide:x" size="30" />
         </button>
         </div>
      </div>

      <Transition
         enter-active-class="transition duration-300 ease-out"
         enter-from-class="opacity-0 -translate-y-4"
         enter-to-class="opacity-100 translate-y-0"
         leave-active-class="transition duration-200 ease-in"
         leave-from-class="opacity-100 translate-y-0"
         leave-to-class="opacity-0 -translate-y-4"
      >
         <div v-if="isMenuOpen" class="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl lg:hidden max-h-screen overflow-y-auto">
         <div class="flex flex-col p-8 gap-6">
            <a @click="isMenuOpen = false" href="#home" class="text-xl font-semibold text-gray-800">Beranda</a>
            <a @click="isMenuOpen = false" href="#about" class="text-xl font-semibold text-gray-800">Tentang Kami</a>
            <a @click="isMenuOpen = false" href="#features" class="text-xl font-semibold text-gray-800">Fitur</a>
            <a @click="isMenuOpen = false" href="#solutions" class="text-xl font-semibold text-gray-800">Solusi</a>
            <a @click="isMenuOpen = false" href="#pricing" class="text-xl font-semibold text-gray-800">Harga</a>
            
            <a 
               @click="isMenuOpen = false"
               href="#contact" 
               class="w-full rounded-2xl bg-gray-900 py-5 text-center text-lg font-bold text-white shadow-lg shadow-gray-500 active:scale-95 transition-all"
            >
               Lihat Demo Sekarang
            </a>
         </div>
         </div>
      </Transition>
   </nav>
</template>