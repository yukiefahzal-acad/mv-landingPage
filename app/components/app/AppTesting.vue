<script setup lang="ts">
    // const { $gsap } = useNuxtApp();

    // onMounted(() => {
    //     $gsap.to('.green', { 
    //         rotation: 3,
    //         x: 100,
    //         duration: 1, 
    //         scrollTrigger: {
    //             trigger: ".green",
    //             // markers: true,
    //             scrub: true
    //         }
    //     })

    //     $gsap.to('.gambar', {
    //         autoAlpha: 0,
    //         scale: 0.5,        // Menyusut jadi 50% dari ukuran asli
    //         opacity: 0.8,      // Opsional: sedikit transparan saat menyusut
    //         borderRadius: "40px", // Opsional: ujungnya jadi melengkung saat menyusut
    //         scrollTrigger: {
    //             trigger: ".gambar", // Area yang memicu scroll
    //             start: "top top", // Dimulai saat bagian atas #test menyentuh atas layar
    //             end: "bottom top", // Berakhir saat bagian bawah #test menyentuh atas layar
    //             scrub: true,      // Animasi mengikuti kecepatan scroll (penting!)
    //             pin: true,
    //         }
    //     })
    // })

    import gsap from 'gsap';

    onMounted(() => {
        gsap.to('.bg-bumi', {
            autoAlpha: 1,
            duration: 1,
        })

    });

</script>

<template>
    <div id="test" class="relative mx-auto max-w-7xl h-screen">
        <div class="green w-14 h-14 shrink-0 rounded-lg bg-linear-to-br from-emerald-400 to-emerald-600 shadow flex items-center justify-center"></div>
        <div class="bg-bumi">
            <img src="../../assets/img/logo/herosection.svg" alt="Hero blob" class=""/>

            <!-- <video class="w-screen h-screen" autoplay>
                <source src="../../assets/vid/move (1).mp4" type="video/mp4" class="video">
            </video> -->
        </div>
    </div>
</template>