<script setup lang="ts">
import { ref, computed } from 'vue'

const tabs = ['Front-Liner', 'Clinical Cockpit', 'Logistics', 'Finance']
const activeTab = ref('Front-Liner')

const packages = [
  // Front-liner
  { title: 'Manajemen Antrean & Jadwal Dokter'  , desc: 'Atur alur pasien dengan rapi'                         , icon: 'lucide:contact-round'   , category: 'Front-Liner'        , free: true },
  { title: 'Kuota Reservasi'                    , desc: 'Cegah penumpukan di ruang tunggu'                     , icon: 'lucide:life-buoy'       , category: 'Front-Liner'        , free: true },
  
  // Clinical Cockpit
  { title: 'Bridging SATU SEHAT & BPJS (Ready)' , desc: 'Koneksi otomatis ke server Kemenkes'                  , icon: 'lucide:workflow'        , category: 'Clinical Cockpit'   , free: true },
  { title: 'Rekam Medis Terpadu'                , desc: 'SOAP, ICD-10, TTV, hingga Riwayat Pemeriksaan'        , icon: 'lucide:clipboard-plus'  , category: 'Clinical Cockpit'   , free: true },
  { title: 'Resep Elektronik'                   , desc: 'Kirim resep langsung ke farmasi tanpa kertas'         , icon: 'lucide:scroll-text'     , category: 'Clinical Cockpit'   , free: true },
  { title: 'Penunjang'                          , desc: 'Lab, Radiologi, dan Pemeriksaan MCU'                  , icon: 'lucide:microscope'      , category: 'Clinical Cockpit'   , free: true },
  
  // Logistics
  { title: 'Automation Stock'                   , desc: 'Stok berkurang otomatis saat transaksi/resep keluar'  , icon: 'lucide:bot'             , category: 'Logistics'          , free: true },
  { title: 'Kartu Stok & Stok Opname'           , desc: 'Audit stok obat kapan saja dengan akurat'             , icon: 'lucide:pill-bottle'     , category: 'Logistics'          , free: true },
  { title: 'Purchase Order (PO) & Penerimaan'   , desc: 'Kelola pembelian obat ke supplier dengan rapi'        , icon: 'lucide:credit-card'     , category: 'Logistics'          , free: true },
  
  //  Finance
  { title: 'Kasir/POS'                          , desc: 'Transaksi cepat dan cetak kwitansi/invoice'           , icon: 'lucide:scan-barcode'    , category: 'Finance'            , free: true },
  { title: 'Laporan Real-Time'                  , desc: 'Pantau pendapatan klinik detik ini juga'              , icon: 'lucide:clipboard-clock' , category: 'Finance'            , free: true }
]

const filtered = computed(() => packages.filter(p => p.category === activeTab.value))
</script>

<template>
   <section id="features" class="bg-white py-24 text-gray-900">
      <div class="container mx-auto px-6">
         <div class="mx-auto max-w-7xl">
            <div class="mb-16 gap-12">
               <div>
                  <p class="mb-6 text-sm font-semibold text-emerald-500">Features</p>
                  <h3 class="mb-4 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
                  The Engine
                  </h3>
                  <p class="text-gray-500 max-w-2xl">
                     <strong>Medic<span class="text-emerald-500">Verse</span></strong> menyediakan modul-modul terintegrasi yang dirancang untuk menangani seluruh alur kerja operasional klinik, mulai dari pendaftaran pasien hingga laporan keuangan akhir.
                  </p>
               </div>
            </div>

            <!-- New tabbed packages grid -->
            <div class="mt-10">
              <nav class="flex gap-6 border-b pb-4" role="tablist" aria-label="Feature categories">
                <button
                  v-for="tab in tabs"
                  :key="tab"
                  @click="activeTab = tab"
                  :aria-selected="activeTab === tab"
                  role="tab"
                  :tabindex="activeTab === tab ? 0 : -1"
                  class="py-2 px-1 text-sm font-medium focus:outline-none hover:font-bold hover:scale-105 hover:text-emerald-500 transition-transform duration-300"
                  :class="activeTab === tab ? 'text-emerald-600 border-b-2 border-emerald-500' : 'text-muted'"
                >
                  {{ tab }}
                </button>
              </nav>

              <div class="mt-8">
                  <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                     <li v-for="item in filtered" :key="item.title" class="flex gap-4 items-start hover:scale-105 transition-transform duration-300">
                     <div class="w-14 h-14 shrink-0 rounded-lg bg-linear-to-br from-emerald-400 to-emerald-600 shadow flex items-center justify-center">
                        <Icon :name="item.icon" class="text-2xl text-white" aria-hidden="true" />
                     </div>

                     <div>
                        <div class="flex items-center gap-3">
                           <h4 class="font-semibold text-gray-900">{{ item.title }}</h4>
                           <!-- <span v-if="item.free" class="text-xs bg-gray-100 border rounded px-2 py-0.5 text-muted">Free</span> -->
                        </div>
                        <p class="text-sm text-gray-500 mt-1">{{ item.desc }}</p>
                     </div>
                     </li>
                  </ul>

                  <p v-if="filtered.length === 0" class="text-center text-gray-500 mt-8">No items for this category yet.</p>
              </div>
            </div>



         </div>

      </div>
   </section>
</template>
