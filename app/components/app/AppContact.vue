<script setup lang="ts"></script>

<template>
   <section
      id="contact"
      class="relative overflow-hidden bg-linear-to-br from-white from-30% to-sky-50 py-32"
   >
      <div
         class="absolute top-0 left-0 h-96 w-96 rounded-full bg-linear-to-br from-sky-200 to-transparent opacity-30 blur-xl"
      ></div>
      <div class="relative z-10 container mx-auto px-6">
         <div class="mx-auto max-w-4xl text-center">
            <p
               class="mb-6 text-sm font-semibold tracking-wide text-emerald-500"
            >
               Take Control
            </p>

            <h2
               class="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-5xl lg:text-6xl"
            >
               Experience the Future of Healthcare
            </h2>

            <p
               class="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-600"
            >
               Join the thousands of users who are already benefiting from
               Clever's advanced AI-driven healthcare solutions. Get early
               notification for promos and new update.
            </p>

            <div class="mx-auto max-w-xl">
               <div
                  class="flex flex-col items-center justify-center gap-4 sm:flex-row"
               >
                  <input
                     type="email"
                     placeholder="Enter your email"
                     class="w-full rounded-full border-2 border-gray-200 px-6 py-4 text-gray-700 placeholder-gray-400 transition focus:border-emerald-400 focus:outline-none sm:flex-1"
                  />
                  <button
                     class="flex items-center gap-2 rounded-full bg-linear-to-r from-emerald-400 to-emerald-500 px-8 py-4 font-semibold whitespace-nowrap text-white shadow-lg transition hover:from-emerald-500 hover:to-emerald-600 hover:shadow-xl"
                  >
                     Submit
                     <Icon
                        name="lucide:arrow-right"
                        class="-me-2 size-5!"
                     />
                  </button>
               </div>
            </div>

            <p class="mt-8 text-sm text-emerald-500">
               More info, contact
               <a
                  href="mailto:support@clever.com"
                  class="font-semibold hover:underline"
               >
                  support@clever.com
               </a>
            </p>
         </div>
      </div>
   </section>
</template>
