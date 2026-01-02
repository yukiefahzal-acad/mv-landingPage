<script setup lang="ts">
const plans = [
   {
      title: "Scout Class",
      price: 250000,
      highlight: false,
      icon: 'lucide:rocket',
      cta: { text: 'Pilih Paket', variant: 'outline' },
      benefits: [
         "Pendaftaran & Antrean Pasien",
         "RME Dasar (SOAP, Diagnosa ICD-10, TTV)",
         "Resep Elektronik & Cetak Etiket",
         "Kasir & Kwitansi Sederhana"
      ],
   },
   {
      title: "Explorer Class",
      price: 300000,
      highlight: true,
      icon: 'lucide:compass',
      cta: { text: 'Pilih Paket', variant: 'primary' },
      benefits: [
         "Modul Scout",
         "Bridging SATU SEHAT & BPJS",
         "Gudang Farmasi",
         "Penunjang",
         "Medical Check Up (MCU)",
         "Fitur Klinis Lanjutan",
         "Laporan Profit & Bisnis Real-Time",
         "Prioritas Support Teknis"
      ],
   },
   {
      title: "Commander Class",
      price: null,
      highlight: false,
      icon: 'lucide:shield-check',
      cta: { text: 'Konsultasi dengan Kami', variant: 'contact' },
      benefits: [
         "Custom Module",
         "White Label Option",
         "Integrasi Pihak Ketiga"
      ],
   },
]

const formatPrice = (n: number | null) => {
  if (!n) return null
  return new Intl.NumberFormat('id-ID').format(n)
}
</script>

<template v-for="plan in plans">
   <section id="pricing" class="bg-white py-24">
      <div class="container mx-auto px-6 text-gray-900">
         <div class="mx-auto max-w-7xl">
            <div class="mb-16 text-center">
               <p class="mb-6 text-sm font-semibold text-emerald-500 uppercase tracking-widest">Pricing</p>
               <h3 class="mb-6 text-4xl leading-tight font-black md:text-5xl lg:text-6xl tracking-tighter">
                  Fuel for The <span class="text-emerald-500">Missions</span>
               </h3>
               <p class="mx-auto mb-12 max-w-3xl text-lg text-gray-500">Pilih Armada untuk Misi Anda.</p>
            </div>

            <div class="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8 items-stretch">
               <template v-for="plan in plans">
                  
                  <div
                     v-if="plan.highlight"
                     class="order-1 lg:order-2 relative z-10 transform rounded-[2.5rem] border-2 border-emerald-300 bg-linear-to-br from-emerald-50 to-teal-50 p-8 shadow-2xl flex flex-col gap-8 lg:scale-105"
                  >
                     <div class="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-4 py-1 text-xs font-bold text-white uppercase tracking-wider">
                        Di rekomendasikan
                     </div>

                     <div class="text-center">
                        <div class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-200">
                           <Icon :name="plan.icon" class="text-3xl text-white" />
                        </div>
                        <h4 class="mb-2 text-2xl font-bold text-gray-900">{{ plan.title }}</h4>
                        
                        <div class="mb-2 flex items-baseline justify-center gap-1">
                           <template v-if="plan.price">
                             <span class="text-4xl font-black text-gray-900">Rp{{ formatPrice(plan.price) }}</span>
                             <span class="text-gray-600 font-medium">/bulan</span>
                           </template>
                           <template v-else>
                             <span class="text-3xl font-black text-gray-900">Custom</span>
                           </template>
                        </div>
                     </div>

                     <div class="space-y-4">
                        <div v-for="benefit in plan.benefits" class="flex items-start gap-3">
                           <Icon name="lucide:check-circle-2" class="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
                           <p class="text-gray-700 leading-snug">{{ benefit }}</p>
                        </div>
                     </div>

                     <div class="mt-auto pt-4">
                        <button class="w-full rounded-2xl bg-linear-to-r from-emerald-500 to-emerald-700 py-4 font-bold text-white shadow-xl shadow-emerald-200 transition-all hover:scale-[1.02] active:scale-95">
                           {{ plan.cta?.text }}
                        </button>
                     </div>
                  </div>

                  <div
                     v-else :class="plan.title === 'Scout Class' ? 'order-2 lg:order-1' : 'order-3 lg:order-3'"
                     class="flex flex-col gap-8 rounded-[2.5rem] border-2 border-gray-100 bg-white p-8 transition-all hover:border-emerald-200 hover:shadow-xl group"
                  >
                     <div class="text-center">
                        <div class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 group-hover:bg-emerald-50 transition-colors">
                           <Icon :name="plan.icon" class="text-3xl text-gray-400 group-hover:text-emerald-500 transition-colors" />
                        </div>
                        <h4 class="mb-2 text-2xl font-bold text-gray-900">{{ plan.title }}</h4>
                        <div class="mb-2 flex items-baseline justify-center gap-1">
                           <template v-if="plan.price">
                             <span class="text-4xl font-black text-gray-900">Rp{{ formatPrice(plan.price) }}</span>
                             <span class="text-gray-500 font-medium">/bulan</span>
                           </template>
                           <template v-else>
                             <span class="text-3xl font-black text-gray-900 font-black">Hubungi Kami</span>
                           </template>
                        </div>
                     </div>

                     <div class="space-y-4">
                        <div v-for="benefit in plan.benefits" class="flex items-start gap-3">
                           <Icon name="lucide:check-circle-2" class="mt-1 h-5 w-5 shrink-0 text-gray-300 group-hover:text-emerald-400" />
                           <p class="text-gray-600 leading-snug">{{ benefit }}</p>
                        </div>
                     </div>

                     <div class="mt-auto pt-4">
                        <button class="w-full rounded-2xl border-2 border-gray-900 py-4 font-bold text-gray-900 transition-all hover:bg-gray-900 hover:text-white active:scale-95">
                           {{ plan.cta?.text }}
                        </button>
                     </div>
                  </div>

               </template>
            </div>
         </div>
      </div>
   </section>
</template>

