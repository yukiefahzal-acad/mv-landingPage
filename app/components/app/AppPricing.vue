<script setup lang="ts">
const plans = [
   {
      title: "Basic Plan",
      price: 12,
      highlight: false,
      benefits: [
         "Access AI-Driven symptom checker",
         "Health tips and general wellness advice",
         "Basic health tracking",
      ],
   },
   {
      title: "Essential Plan",
      price: 20,
      highlight: true,
      benefits: [
         "All features of the Basic Plan",
         "Virtual consultations with healthcare professionals",
         "Personalized health insights and recommendations",
         "Appointment scheduling",
         "Medication reminders",
      ],
   },
   {
      title: "Ultimate Plan",
      price: 49,
      highlight: false,
      benefits: [
         "All features of the Essential Plan",
         "Comprehensive AI diagnostics",
         "Advanced health monitoring and tracking",
         "Emergency assistance and support",
         "Customized wellness programs",
      ],
   },
]
</script>

<template>
   <section class="bg-white py-24">
      <div class="container mx-auto px-6">
         <div class="mx-auto max-w-7xl">
            <div class="mb-16 text-center">
               <p class="mb-6 text-sm font-semibold text-emerald-500">
                  Pricing Plans
               </p>
               <h3
                  class="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl"
               >
                  Choose the Plan That Perfectly
                  <span class="text-gray-400">Match Yours.</span>
               </h3>
               <p class="mx-auto mb-12 max-w-3xl text-lg text-gray-500">
                  Explore our range of pricing plans designed to cater to
                  different healthcare requirements and budgets.
               </p>

               <!-- <div
                  class="mb-16 inline-flex items-center rounded-full bg-gray-100 p-1.5"
               >
                  <button
                     class="rounded-full bg-white px-8 py-3 font-semibold text-gray-900 shadow-sm transition"
                  >
                     Monthly Billing
                  </button>
                  <button
                     class="rounded-full px-8 py-3 font-semibold text-gray-600 transition hover:text-gray-900"
                  >
                     Annual Billing
                  </button>
               </div> -->
            </div>

            <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
               <template v-for="plan in plans">
                  <div
                     v-if="plan.highlight"
                     class="relative scale-105 transform rounded-3xl border-2 border-emerald-300 bg-linear-to-br from-emerald-50 to-teal-50 p-8 shadow-xl flex flex-col gap-8"
                  >
                     <div class="text-center">
                        <div
                           class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-400 to-emerald-600"
                        >
                           <span class="text-3xl">☂️</span>
                        </div>
                        <h4 class="mb-4 text-xl font-semibold text-gray-900">
                           {{ plan.title }}
                        </h4>
                        <div class="mb-2 flex items-end justify-center gap-1">
                           <span class="text-5xl font-bold text-gray-900">
                              ${{ plan.price }}
                           </span>
                           <span class="mb-2 text-gray-600">/month</span>
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
                           Get Started
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
                           <span class="text-3xl">🎨</span>
                        </div>
                        <h4 class="mb-4 text-xl font-semibold text-gray-900">
                           {{ plan.title }}
                        </h4>
                        <div class="mb-2 flex items-end justify-center gap-1">
                           <span class="text-5xl font-bold text-gray-900">
                              ${{ plan.price }}
                           </span>
                           <span class="mb-2 text-gray-500">/month</span>
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
                           class="w-full rounded-full border-2 border-gray-900 py-3.5 font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white"
                        >
                           Choose Plan
                        </button>
                     </div>
                  </div>
               </template>
            </div>
         </div>
      </div>
   </section>
</template>
