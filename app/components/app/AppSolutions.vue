<script setup lang="ts"></script>

<template>
   <section id="solutions" class="bg-white py-24 text-gray-900">
      <div class="container mx-auto px-6">
         <div class="mx-auto max-w-7xl">
             <div class="text-center mb-16">
                <p class="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-500">
                    Solutions
                </p>
                <h3 class="text-4xl leading-tight font-black md:text-5xl lg:text-6xl tracking-tighter">
                   The Missions
                </h3>
            </div>

            <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
               
               <div
                  id="integrasi-satu-sehat"
                  class="group flex flex-col items-center rounded-[2.5rem] bg-gradient-to-br from-emerald-400 to-emerald-600 p-10 text-center transition-all duration-300 hover:-translate-y-2 shadow-xl shadow-emerald-100"
               >
                    <div class="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl text-emerald-500 bg-white shadow-lg text-4xl">
                        <Icon name="lucide:link"/>
                    </div>
                    <h4 class="mb-4 text-2xl font-bold text-white leading-snug">
                        Konektivitas Antar-Galaksi (Satu Sehat & BPJS)
                    </h4>
                    <p class="text-emerald-50/90 leading-relaxed">
                        Terintegrasi penuh dengan ekosistem kesehatan nasional. Pengiriman data ke Satu Sehat terjadi otomatis di latar belakang tanpa gangguan.
                    </p>
               </div>

               <div
                  class="group flex flex-col items-center rounded-[2.5rem] bg-gradient-to-br from-emerald-500 to-emerald-700 p-10 text-center transition-all duration-300 hover:-translate-y-2 shadow-xl shadow-emerald-100"
               >
                  <div class="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl text-emerald-600 bg-white shadow-lg text-4xl">
                    <Icon name="lucide:shield-check"/>
                  </div>
                  <h4 class="mb-4 text-2xl font-bold text-white leading-snug">
                     Anti Kebocoran Finansial
                  </h4>
                  <p class="text-emerald-50/90 leading-relaxed">
                     Sistem kasir dan inventori yang terkunci presisi. Mencegah selisih stok obat dan manipulasi transaksi yang sering menjadi black hole profit klinik.
                  </p>
               </div>

               <div
                  class="group flex flex-col items-center rounded-[2.5rem] bg-gradient-to-br from-emerald-600 to-emerald-800 p-10 text-center transition-all duration-300 hover:-translate-y-2 shadow-xl shadow-emerald-100"
               >
                  <div class="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl text-emerald-700 bg-white shadow-lg text-4xl">
                    <Icon name="lucide:radio"/>
                  </div>
                  <h4 class="mb-4 text-2xl font-bold text-white leading-snug">
                     Telemetri Pasien Terpadu
                  </h4>
                  <p class="text-emerald-50/90 leading-relaxed">
                     Pantau perjalanan pasien dari pendaftaran (booking online), pemeriksaan dokter, hingga pengambilan obat dalam satu alur kerja yang mulus.
                  </p>
               </div>
            </div>

            <div id="status-server" class="sr-only">Status Server anchor</div>
         </div>
      </div>
   </section>
</template>