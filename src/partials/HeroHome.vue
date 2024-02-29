<template>
  <section class="relative">
    <div class="h-[100vh] flex flex-col justify-center items-center max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Hero content -->
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">

        <!-- Section header -->
        <div class="text-center pb-12 md:pb-16">
          <figure class="absolute right-[70%] md:right-[35%] top-[75%] md:top-[20%] -z-10 flex shrink-0 max-w-none sm:max-w-xs lg:max-w-none mb-8 sm:mb-0">
            <img class="grow self-start rounded max-w-[15vw] md:max-w-[8vw]" src="../images/stars.png" alt="About us 02" />
          </figure>
          <figure class="absolute -right-[10%] md:-right-[5%] -bottom-[10%] md:-bottom-[5%] -z-10 flex shrink-0 max-w-none sm:max-w-xs lg:max-w-none mb-8 sm:mb-0">
            <img class="grow self-start rounded max-w-[80vw] md:max-w-[35vw]" src="../images/banana.png" alt="About us 02" />
          </figure>
          <figure class="absolute right-[5%] md:-left-[5%]  bottom-[55%] md:bottom-[0%] -z-10 flex shrink-0 max-w-none sm:max-w-xs lg:max-w-none mb-8 sm:mb-0">
            <img class="grow self-start rounded max-w-[70vw] md:max-w-[35vw]" src="../images/sticky-note.png" alt="About us 02" />
          </figure>
          <h1 class="flex flex-col md:flex-row text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-8" data-aos="zoom-y-out">
            Outsiders
            <div class="flex flex-col items-center">
              <span class="ml-4 bg-clip-text text-transparent bg-gradient-to-r from-[#4BBCF1] to-[#4BBCF1]">
                Welcome.
              </span>
              <svg class="-mt-1 md:-mt-2 max-w-[60%] md:max-w-full" viewBox="0 0 220 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M134.66 13.107c-10.334-.37-20.721-.5-31.12-.291l-2.6.06c-4.116.04-8.193.602-12.3.749-14.502.43-29.029 1.196-43.514 2.465-6.414.63-12.808 1.629-19.04 2.866-7.93 1.579-16.113 3.71-23.367 5.003-2.211.374-3.397-1.832-2.31-4.906.5-1.467 1.838-3.456 3.418-4.813a16.047 16.047 0 0 1 6.107-3.365c16.88-4.266 33.763-6.67 51.009-7.389C71.25 3.187 81.81 1.6 92.309.966c11.53-.65 23.097-.938 34.66-.96 7.117-.054 14.25.254 21.36.318l16.194.803 4.62.39c3.85.32 7.693.618 11.53.813 8.346.883 16.673.802 25.144 2.159 1.864.276 3.714.338 5.566.873l.717.225c6.162 1.977 7.92 3.64 7.9 7.197l-.003.203c-.017.875.05 1.772-.112 2.593-.581 2.762-4.066 4.12-8.637 3.63-13.696-1.06-27.935-3.332-42.97-4.168-11.055-.83-22.314-1.459-33.596-1.603l-.022-.332Z" fill="#FFEE58" fill-rule="evenodd" />
              </svg>
            </div>
          </h1>
          <span class="text-xl text-gray-900" data-aos="zoom-y-out">We write first checks to extraordinary founders with world changing fintech ideas.</span>

          <!--
          <div class="max-w-3xl mx-auto">
            <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
              <div>
                <a class="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a>
              </div>
              <div>
                <a class="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
              </div>
            </div>
          </div>
          -->
        </div>
      </div>
      <!--
      <div class="text-left max-w-3xl mx-auto">
        <p class="text-xl text-gray-600 mb-8" data-aos="zoom-y-out">OUT&middot;SID&middot;ER<br/><span class="italic">noun</span><br/>1. A person who does not belong to a particular group.<br/>2. Being an outsider provides you with a perspective others don't have. It allows you to challenge the status quo and identify new opportunities.</p>
      </div>
      -->
    </div>
  </section>
</template>

<script>
import { ref, watch } from 'vue'
import Modal from './../utils/Modal.vue'

export default {
  name: 'HeroHome',
  components: {
    Modal,
  },
  setup() {
    const videoModalOpen = ref(false)
    const video = ref(null)

    watch(videoModalOpen, () => {
      videoModalOpen.value ? video.value.play() : video.value.pause()
    })

    return {
      videoModalOpen,
      video,
    }
  }
}
</script>
