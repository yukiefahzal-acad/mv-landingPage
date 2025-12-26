<script setup lang="ts"></script>

<template>
    <div ref="container" class="scroll-section text-gray-900">
        <!-- <div >
            <img 
            ref="image" 
            src="../../assets/img/scrolling-content.png" 
            class="long-image"
            />
        </div> -->
        <section class="flex items-center gap-8 px-6 py-36 h-full">
            <div v-gsap.whenVisible.to="{ x: -400, start: 'top bottom', end: 'bottom top', scrub: 1.5 }">
                <img 
                src="../../assets/img/scrolling-content.png" 
                class="long-image"
                />
            </div>
            <div v-gsap.whenVisible.to="{ x: 300, start: 'top bottom', end: 'bottom top', scrub: 1.5 }">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </div>
        </section>
    </div>
</template>






<!-- <script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const container = ref(null)
const image = ref(null)

onMounted(() => {
  const scrollWidth = image.value.offsetWidth - window.innerWidth

  gsap.to(image.value, {
    x: -scrollWidth, 
    ease: "none",
    scrollTrigger: {
      trigger: container.value,
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5, 
      pin: true,
      anticipatePin: 1,
    }
  })
})
</script>

<template>
  <div ref="container" class="scroll-section">
    <div ref="" >
        <img 
          ref="image" 
          src="../../assets/img/scrolling-content.png" 
          class="long-image"
        />
    </div>
  </div>
</template>

<style scoped>
    .scroll-section {
    width: 1rem;
    /* overflow: hidden; */
    display: flex;
    align-items: center;
    background: #000;
    }

    .long-image {
    height: screen;
    object-fit: cover;
    white-space: nowrap;
    }
</style> -->