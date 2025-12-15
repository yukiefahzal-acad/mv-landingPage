<script setup lang="ts"></script>

<template>
   <nav class="container mx-auto px-6 py-6">
      <div class="flex items-center justify-between">
         <div class="flex items-center gap-2">
            <Icon name="lucide:x" />
            <span class="text-xl font-semibold">MedicVerse</span>
         </div>

         <div class="hidden items-center gap-8 md:flex">
            <a
               href="#"
               class="text-gray-700 transition hover:text-gray-900"
            >
               Home
            </a>
            <a
               href="#"
               class="text-gray-700 transition hover:text-gray-900"
            >
               About Us
            </a>
            <a
               href="#"
               class="text-gray-700 transition hover:text-gray-900"
            >
               Features
            </a>
            <a
               href="#"
               class="text-gray-700 transition hover:text-gray-900"
            >
               Solutions
            </a>
            <a
               href="#"
               class="text-gray-700 transition hover:text-gray-900"
            >
               Pricing
            </a>
         </div>

         <button
            class="rounded-full bg-linear-to-r from-emerald-400 to-emerald-500 px-6 py-2.5 text-white shadow-lg transition hover:from-emerald-500 hover:to-emerald-600"
         >
            Contact Us
         </button>
      </div>
   </nav>
</template>
