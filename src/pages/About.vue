<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <TestimonialsCarousel />
      <Team />
      <Cta />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import AboutIntro from './../partials/AboutIntro.vue'
import AboutStory from './../partials/AboutStory.vue'
import TestimonialsCarousel from './../partials/TestimonialsCarousel.vue'
import Stats from './../partials/Stats.vue'
import Team from './../partials/Team.vue'
import Career from './../partials/Career.vue'
import Process from './../partials/Process.vue'
import Cta from './../partials/Cta.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'About',
  components: {
    Header,
    AboutIntro,
    AboutStory,
    TestimonialsCarousel,
    Stats,
    Team,
    Career,
    Process,
    Cta,
    Footer,
  },
}
</script>
