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

<template>
   <section id="pricing" class="bg-white py-24">
      <div class="container mx-auto px-6 text-gray-900">
         <div class="mx-auto max-w-7xl">
            <div class="mb-16 text-center">
               <p class="mb-6 text-sm font-semibold text-emerald-500">
                  Pricing
               </p>
               <h3
                  class="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl"
               >
                  Fuel for The <span class="text-emerald-500">Missions</span>
               </h3>
               <p class="mx-auto mb-12 max-w-3xl text-lg text-gray-500">
                  Pilih Armada untuk Misi Anda.
               </p>

            </div>

            <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
               <template v-for="plan in plans">
                  <div
                     v-if="plan.highlight"
                     class="relative scale-105 transform rounded-3xl border-2 border-emerald-300 bg-linear-to-br from-emerald-50 to-teal-50 p-8 shadow-xl flex flex-col gap-8"
                  >
                     <div class="text-center">
                        <div class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-400 to-emerald-600">
                           <Icon :name="plan.icon" class="text-2xl text-white" aria-hidden="true" />
                        </div>
                        <h4 class="mb-4 text-xl font-semibold text-gray-900">
                           {{ plan.title }}
                        </h4>
                        
                        <div class="mb-2 flex items-end justify-center gap-1">
                           <template v-if="plan.price">
                             <span class="text-4xl font-bold text-gray-900 sm:text-xl">Rp.{{ formatPrice(plan.price) }}</span>
                             <span class="mb-2 text-gray-600">/bulan</span>
                           </template>
                        </div>
                     </div>

                     <div class="space-y-4">
                        <div
                           v-for="benefit in plan.benefits"
                           class="flex items-start gap-3"
                        >
                           <div
                              class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-200"
                           >
                              <svg
                                 class="h-3 w-3 text-emerald-600"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    :strokeWidth="3"
                                    d="M5 13l4 4L19 7"
                                 />
                              </svg>
                           </div>
                           <p class="text-gray-700">
                              {{ benefit }}
                           </p>
                        </div>
                     </div>

                     <div class="flex-1 flex flex-col justify-end">
                        <button
                           class="w-full rounded-full bg-linear-to-r from-emerald-400 to-emerald-600 py-3.5 font-semibold text-white shadow-lg transition hover:from-emerald-500 hover:to-emerald-700"
                        >
                           {{ plan.cta?.text ?? 'Pilih Paket' }}
                        </button>
                     </div>
                  </div>
                  <div
                     v-else
                     class="flex flex-col gap-8 rounded-3xl border-2 border-gray-100 bg-white p-8 transition hover:border-emerald-200"
                  >
                     <div class="text-center">
                        <div
                           class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100"
                        >
                           <Icon :name="plan.icon" class="text-2xl text-emerald-600" aria-hidden="true" />
                        </div>
                        <h4 class="mb-4 text-xl font-semibold text-gray-900">
                           {{ plan.title }}
                        </h4>
                        <div class="mb-2 flex items-end justify-center gap-1">
                           <template v-if="plan.price">
                             <span class="text-3xl font-bold text-gray-900 sm:text-xl">Rp.{{ formatPrice(plan.price) }}</span>
                             <span class="mb-2 text-gray-500">/bulan</span>
                           </template>
                        </div>
                     </div>

                     <div class="space-y-4">
                        <div
                           v-for="benefit in plan.benefits"
                           class="flex items-start gap-3"
                        >
                           <div
                              class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100"
                           >
                              <svg
                                 class="h-3 w-3 text-emerald-500"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    :strokeWidth="3"
                                    d="M5 13l4 4L19 7"
                                 />
                              </svg>
                           </div>
                           <p class="text-gray-700">
                              {{ benefit }}
                           </p>
                        </div>
                     </div>
                     <div class="flex flex-1 flex-col justify-end">
                        <button
                           v-if="plan.cta?.variant === 'outline'"
                           class="w-full rounded-full border-2 border-gray-900 py-3.5 font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white"
                        >
                           {{ plan.cta?.text }}
                        </button>

                        <button
                           v-else-if="plan.cta?.variant === 'contact'"
                           class="w-full rounded-full border-2  border-gray-900 py-3.5 font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white"
                        >
                           {{ plan.cta?.text }}
                        </button>

                        <button v-else class="w-full rounded-full border-2 border-gray-900 py-3.5 font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white">
                           {{ plan.cta?.text ?? 'Konsultasi dengan Kami' }}
                        </button>
                     </div>
                  </div>
               </template>
            </div>
         </div>
      </div>
   </section>
</template>
