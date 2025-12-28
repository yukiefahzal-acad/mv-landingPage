<script setup lang="ts"></script>

<template>
   <section id="solutions" class="bg-white py-24 text-gray-900">
      <div class="container mx-auto px-6">
         <div class="mx-auto max-w-7xl">
             <div class="text-center mb-16 gap-12 lg:grid-cols-2">
                <p class="mb-6 text-sm font-semibold text-emerald-500">
                    Solutions
                </p>
                <h3
                    class="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl"
                >
                The Missions
                <!-- <span class="text-sky-500"></span>  -->
                </h3>
            </div>

            <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
               <div
                  id="integrasi-satu-sehat"
                  class="flex flex-col items-center rounded-3xl bg-linear-to-br from-emerald-400 to-emerald-600 p-8 text-center hover:scale-105 transition-transform duration-300"
               >
                    <div
                        class="mb-8 flex h-20 w-20 items-center justify-center rounded-full text-emerald-500 bg-emerald-50 text-5xl"
                    >
                        <Icon name="lucide:link"/>
                    </div>
                    <h4 class="mb-3 text-2xl font-bold text-emerald-50">
                        Konektivitas Antar-Galaksi (Bridging Satu Sehat & BPJS)
                    </h4>
                    <p class="text-emerald-100">
                        Terintegrasi penuh dengan ekosistem kesehatan nasional. Pengiriman data ke Satu Sehat terjadi otomatis di latar belakang tanpa gangguan.
                    </p>
               </div>

               <div
                  class="flex flex-col items-center rounded-3xl bg-linear-to-br from-emerald-400 to-emerald-600 p-8 text-center hover:scale-105 transition-transform duration-300"
               >
                  <div
                     class="mb-8 flex h-20 w-20 items-center justify-center rounded-full text-emerald-500 bg-emerald-50 text-5xl"
                  >
                    <Icon name="lucide:shield-check"/>
                  </div>
                  <h4 class="mb-3 text-2xl font-bold text-emerald-50">
                     Anti Kebocoran Finansial
                  </h4>
                  <p class="text-emerald-100">
                     Sistem kasir dan inventori yang terkunci presisi. Mencegah selisih stok obat dan manipulasi transaksi yang sering menjadi black hole profit klinik.
                  </p>
               </div>

               <div
                  class="flex flex-col items-center rounded-3xl bg-linear-to-br from-emerald-400 to-emerald-600 p-8 text-center hover:scale-105 transition-transform duration-300"
               >
                  <div
                     class="mb-8 flex h-20 w-20 items-center justify-center rounded-full text-emerald-500 bg-emerald-50 text-5xl"
                  >
                    <Icon name="lucide:radio"/>
                  </div>
                  <h4 class="mb-3 text-2xl font-bold text-emerald-50">
                     Telemetri Pasien Terpadu
                  </h4>
                  <p class="text-emerald-100">
                     Pantau perjalanan pasien dari pendaftaran (booking online), pemeriksaan dokter, hingga pengambilan obat dalam satu alur kerja yang mulus dan transparan.
                  </p>
               </div>
            </div>

            <!-- Hidden anchor for Status Server -->
            <div id="status-server" class="sr-only">Status Server anchor</div>
         </div>
      </div>
   </section>
</template>