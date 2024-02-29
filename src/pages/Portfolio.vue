<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow mb-10">

      <!-- Hero section -->
      <section class="bg-gradient-to-b from-gray-100 to-gray-200">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">

            <!-- Section header -->
            <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 class="h1 mb-4" data-aos="zoom-y-out">Our Portfolio Companies</h1>
              <!-- <p class="text-xl text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">Select a category to email the support team or contact us directly by using the form below.</p>-->
            </div>

            <!-- Items -->
            <div class="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

              <!-- 1st item -->
              <div class="relative flex flex-col p-6 bg-white rounded shadow-xl" data-aos="zoom-y-out" data-aos-anchor="[data-aos-id-blocks]">
                <img class="rounded-lg mb-4" src="https://assets-global.website-files.com/6018d456d7cce4a03a4b3cd1/61b11e1c5b94981e630b1f22_logo%20(2).svg" alt="Team member 01" />
                <p class="text-gray-600">Helping borrowers transition to wealth builders</p>
              </div>

              <!-- 2nd item -->
              <div class="relative flex flex-col p-6 bg-white rounded shadow-xl" data-aos="zoom-y-out" data-aos-delay="150" data-aos-anchor="[data-aos-id-blocks]">
                <img class="rounded-lg mb-4" src="data:image/png;base64,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" alt="Team member 01" />
                <p class="text-gray-599">Electric vehicle data infrastructure</p>
              </div>

              <!-- 3rd item -->
              <div class="relative flex flex-col p-6 bg-white rounded shadow-xl" data-aos="zoom-y-out" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
                <img class="rounded-lg mb-4 w-[125px]" src="https://frontendgroupdiag.blob.core.windows.net/websiteresource/tapsite/logo.png" alt="Team member 01" />
                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <!-- 4th item -->
              <div class="relative flex flex-col p-6 bg-white rounded shadow-xl" data-aos="zoom-y-out" data-aos-delay="450" data-aos-anchor="[data-aos-id-blocks]">
                <img class="rounded-lg mb-4 w-[125px]" src="https://static.wixstatic.com/media/050de1_b4bad55b8b9547ae81892de1069dd879~mv2.png/v1/fill/w_270,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logoZumma-12.png" alt="Team member 01" />
                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <!-- 5th item -->
              <div class="relative flex flex-col p-6 bg-white rounded shadow-xl" data-aos="zoom-y-out" data-aos-delay="600" data-aos-anchor="[data-aos-id-blocks]">
                <img class="rounded-lg mb-4 w-[125px]" src="https://assets-global.website-files.com/60a44738ce47f12ae1f93fb8/60a4547beac26457ab1ebff3_JoinHomes%20Logo.svg" alt="Team member 01" />
                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <!-- 6th item -->
              <div class="relative flex flex-col p-6 bg-gray-800 rounded shadow-xl" data-aos="zoom-y-out" data-aos-delay="750" data-aos-anchor="[data-aos-id-blocks]">
                <img class="rounded-lg mb-4 w-[125px]" src="https://orda.africa/wp-content/uploads/2021/12/orda_africa.svg" alt="Team member 01" />
                <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'

import Footer from './../partials/Footer.vue'

export default {
  name: 'Support',
  components: {
    Header,
    Footer,
  },
}
</script>
