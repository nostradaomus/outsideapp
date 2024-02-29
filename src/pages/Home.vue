<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <HeroHome />
      <FeaturesHome />
      <FeaturesBlocks />
      <InsideTrack />
      <FeaturesWorld />
      <News />
      <Cta />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import HeroHome from './../partials/HeroHome.vue'
import FeaturesHome from './../partials/FeaturesHome.vue'
import FeaturesBlocks from './../partials/FeaturesBlocks.vue'
import InsideTrack from './../partials/InsideTrack.vue'
import FeaturesWorld from './../partials/FeaturesWorld.vue'
import News from './../partials/News.vue'
import TestimonialsCarousel from './../partials/TestimonialsCarousel.vue'
import Cta from './../partials/Cta.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    HeroHome,
    FeaturesHome,
    FeaturesBlocks,
    InsideTrack,
    FeaturesWorld,
    TestimonialsCarousel,
    Cta,
    Footer,
  },
}
</script>
