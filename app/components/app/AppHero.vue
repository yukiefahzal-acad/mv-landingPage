<script setup lang="ts">
   
</script>



<template>
   <div class="bg-white overflow-hidden">
      <div id="home" class="relative h-screen w-screen flex items-center justify-center -translate-y-[10%]">
         
         <div class="absolute inset-0 z-0 pointer-events-none flex items-center justify-center px-10 md:px-40 py-20 md:py-60">
            <img src="../../assets/img/logo/earth.svg" alt="Hero blob" class="bg-bumi h-full w-full object-contain opacity-40 z-30"/>
         </div>
      
         <div class="relative z-10 flex items-center justify-center w-full h-full">
            <div class="text-center antialiased px-6 max-w-5xl"> 
               <h1 class="mb-6 leading-tight font-black tracking-tight text-gray-900 text-4xl md:text-6xl lg:text-7xl">
                  The Command Center for Your Entire Medical Universe.
               </h1>
               
               <div class="flex items-center justify-center pb-10">
                  <div class="max-w-2xl text-center">
                     <p class="leading-relaxed text-gray-600 text-base md:text-lg">
                        Ubah Kesibukan Menjadi Keteraturan. 
                        <span class="bg-gray-900 text-emerald-500 rounded px-2 py-0.5 inline-block my-1">
                           <strong>Medic<span class="text-white">Verse</span></strong> 
                        </span>
                        menyelaraskan pasien, dokter, dan operasional klinik Anda dalam satu orbit yang sempurna. 
                        Generasi baru Sistem Manajemen Klinik telah hadir.
                     </p>
                  </div>
               </div>
      
               <button class="transform rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-10 py-4 text-lg font-bold text-white shadow-xl transition hover:scale-105 hover:from-emerald-500 hover:to-emerald-600 hover:shadow-2xl active:scale-95">
                  <div class="flex items-center justify-center h-8">
                     <Icon name="lucide:rocket" size="24" />
                     <span class="ml-3">Uji Coba Penerbangan</span> 
                  </div>
               </button>
            </div>
         </div>

      </div>
   </div>
</template>

