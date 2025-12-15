<script setup lang="ts"></script>

<template>
   <section class="bg-white py-24">
      <div class="container mx-auto px-6">
         <div class="mx-auto max-w-7xl">
            <div class="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
               <div>
                  <p class="mb-6 text-sm font-semibold text-emerald-500">
                     Features
                  </p>
                  <h3
                     class="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl"
                  >
                     Comprehensive and Highly
                     <span class="text-gray-400"
                        >Advanced Tools and Capabilities.</span
                     >
                  </h3>
               </div>

               <div class="flex items-start justify-end">
                  <button
                     class="rounded-full border-2 border-gray-900 px-8 py-3 font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white"
                  >
                     Get Started
                  </button>
               </div>
            </div>

            <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
               <div class="space-y-8">
                  <div class="flex gap-4">
                     <div class="shrink-0">
                        <div
                           class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600"
                        >
                           👤
                        </div>
                     </div>
                     <div>
                        <h4 class="mb-2 text-xl font-bold text-gray-900">
                           Health Tracking
                        </h4>
                        <p class="leading-relaxed text-gray-600">
                           Monitor your progress with comprehensive health
                           tracking features that keep you informed about your
                           vital signs and overall health goals.
                        </p>
                     </div>
                  </div>

                  <div class="flex gap-4">
                     <div class="shrink-0">
                        <div
                           class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600"
                        >
                           ⚙️
                        </div>
                     </div>
                     <div>
                        <h4 class="mb-2 text-xl font-bold text-gray-900">
                           Symptom Checker
                        </h4>
                        <p class="leading-relaxed text-gray-600">
                           Get instant insights on potential health concerns
                           with our advanced symptom checking algorithm.
                        </p>
                     </div>
                  </div>

                  <div class="flex gap-4">
                     <div class="shrink-0">
                        <div
                           class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600"
                        >
                           📅
                        </div>
                     </div>
                     <div>
                        <h4 class="mb-2 text-xl font-bold text-gray-900">
                           Appointment Schedule
                        </h4>
                        <p class="leading-relaxed text-gray-600">
                           Easily manage and schedule your medical appointments
                           with our intuitive booking system.
                        </p>
                     </div>
                  </div>

                  <div class="flex gap-4">
                     <div class="shrink-0">
                        <div
                           class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600"
                        >
                           🤝
                        </div>
                     </div>
                     <div>
                        <h4 class="mb-2 text-xl font-bold text-gray-900">
                           Fulltime Assistance
                        </h4>
                        <p class="leading-relaxed text-gray-600">
                           Get 24/7 support from our dedicated healthcare
                           professionals and AI assistants.
                        </p>
                     </div>
                  </div>
               </div>

               <div class="relative">
                  <div
                     class="h-96 overflow-hidden rounded-3xl bg-linear-to-br from-emerald-300 via-teal-300 to-green-200 p-8"
                  >
                     <div class="absolute inset-0 opacity-20">
                        <svg
                           class="h-full w-full"
                           viewBox="0 0 400 300"
                           fill="none"
                        >
                           <path
                              d="M0 150 Q 100 50 200 150 T 400 150"
                              stroke="white"
                              strokeWidth="2"
                              opacity="0.1"
                           />
                        </svg>
                     </div>

                     <div
                        class="relative z-10 flex h-full items-center justify-center"
                     >
                        <div class="grid w-full md:grid-cols-2 gap-6">
                           <div
                              class="transform rounded-2xl bg-white p-6 shadow-xl transition hover:scale-105"
                           >
                              <div class="mb-4 flex items-center gap-2">
                                 <span class="text-emerald-500">⚡</span>
                                 <h5 class="font-semibold text-gray-900">
                                    Daily Steps
                                 </h5>
                              </div>
                              <div class="mb-4">
                                 <svg
                                    class="h-12 w-full"
                                    viewBox="0 0 100 40"
                                    preserveAspectRatio="none"
                                 >
                                    <path
                                       d="M0 30 L 10 15 L 20 25 L 30 10 L 40 20 L 50 5 L 60 18 L 70 12 L 80 22 L 90 8 L 100 15"
                                       stroke="#10b981"
                                       strokeWidth="2"
                                       fill="none"
                                    />
                                 </svg>
                              </div>
                              <div class="text-center">
                                 <p class="text-2xl font-bold text-gray-900">
                                    5,120
                                 </p>
                                 <p class="text-sm text-gray-500">
                                    Steps today
                                 </p>
                              </div>
                              <div class="mt-4 flex justify-center">
                                 <div
                                    class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-xs text-white"
                                 >
                                    ↗
                                 </div>
                              </div>
                           </div>

                           <div
                              class="transform rounded-2xl bg-white p-6 shadow-xl transition hover:scale-105"
                           >
                              <div class="mb-4 flex items-center gap-2">
                                 <span class="text-emerald-500">❤️</span>
                                 <h5 class="font-semibold text-gray-900">
                                    Heart Rate
                                 </h5>
                              </div>
                              <div class="mb-4">
                                 <svg
                                    class="h-12 w-full"
                                    viewBox="0 0 100 40"
                                    preserveAspectRatio="none"
                                 >
                                    <path
                                       d="M0 20 L 20 20 L 25 5 L 30 25 L 35 15 L 40 20 L 60 20 L 65 10 L 70 25 L 75 18 L 80 20 L 100 20"
                                       stroke="#10b981"
                                       strokeWidth="2"
                                       fill="none"
                                    />
                                 </svg>
                              </div>
                              <div class="text-center">
                                 <p class="text-2xl font-bold text-gray-900">
                                    73 <span class="text-sm">bpm</span>
                                 </p>
                                 <p class="text-sm text-gray-500">Normal</p>
                              </div>
                              <div class="mt-4 flex justify-center">
                                 <div
                                    class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-xs text-white"
                                 >
                                    ↗
                                 </div>
                              </div>
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
