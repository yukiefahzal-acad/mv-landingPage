<script setup lang="ts"></script>

<template>
   <section id="about" class="bg-white py-24">
      <div class="container mx-auto px-6">
         <div class="mx-auto max-w-7xl">
            <div class="text-gray-900 mb-16 grid grid-cols-1 gap-12 lg:grid-cols-1">
               <div class="text-center">
                  <p class="mb-6 text-sm font-semibold text-emerald-500">
                     About Us
                  </p>
                  <h3
                     class="mb-8 text-5xl leading-tight font-semibold md:text-6xl lg:text-7xl">
                     The Mothership
                  </h3>
               </div>
               <div class="gap-12 mx-3 mb-15">
                  <div class="justify-center row-span-3 gap-3 mb-6 sm:flex">
                     <div class="flex flex-col items-center mx-auto">
                        <img
                           src="../../assets/img/logo/Techindo_logo.png"
                           alt="Techindo Logo"
                           class="h-40 w-auto mb-2"
                        />
                        <span class="text-2xl text-center font-bold">
                           Techindo<br>
                           <span class="text-sm font-semibold text-gray-700">
                              <span class="font-light">Powered by </span>Technology Creative Hub Indonesia
                           </span>
                        </span>
                     </div>
                  </div>
                  <div class="items-center gap-3">
                     <p class="max-w-3xl mx-auto mb-8 text-lg leading-relaxed text-gray-500 text-center">
                        <strong class="text-emerald-500">Medic<span class="text-gray-600">Verse</span></strong> 
                        lahir dari laboratorium inovasi <strong class="text-gray-600">Techindo</strong>. 
                        Kami bukan sekadar vendor software, kami adalah arsitek 
                        digital yang memegang teguh tiga pilar utama dalam setiap 
                        kode yang kami tulis:
                     </p>
                     <div class="col-span-2 row-span-2">
                        <div class="grid grid-cols-1 gap-8 sm:flex-row md:grid-cols-3">
                           <div
                              class="flex flex-col items-center rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300"
                           >
                              <span class="mb-3 text-md font-bold text-emerald-500">
                                 <Icon name="lucide:rocket" class="px-6 py-6" />
                                 <br>
                                 High Performance
                              </span>
                              <p class="text-gray-600">
                                 Memastikan sistem klinik berjalan stabil tanpa hambatan, secepat kecepatan cahaya.
                              </p>
                           </div>
                           <div
                              class="flex flex-col items-center rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300"
                           >
                              <span class="mb-3 text-md font-bold text-emerald-500">
                                 <Icon name="lucide:bot" class="px-6 py-6" />
                                 <br>
                                 Automation
                              </span>
                              <p class="text-gray-600">
                                 Menggantikan pekerjaan manual repetitif dengan kecerdasan sistem otonom.                           
                              </p>
                           </div>
                           <div
                              class="flex flex-col items-center rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300"
                           >
                              <span class="mb-3 text-md font-bold text-emerald-500">
                                 <Icon name="lucide:sparkles" class="px-6 py-6" />
                                 <br>
                                 Modern
                              </span>
                              <p class="text-gray-600">
                                 Menghadirkan standar teknologi terkini yang relevan hingga bertahun-tahun ke depan.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
