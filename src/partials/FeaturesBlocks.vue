<template>
  <section class="flex mb-6 items-center justify-center md:min-h-[90vh] py-12">
    <div class="h-full max-w-6xl mx-auto px-4 sm:px-6">
      <div class="h-full flex flex-col items-center justify-center">
        <img class="m-6 w-[75px]" src="../images/scale.png" alt="chalk arrow" />

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 mb-4">We're building a financial system this world deserves.</h2>
          <p class="text-xl text-gray-800">The big opportunity within fintech is not serving the top 10% that every fintech already caters to. It’s in creating economic opportunity for everyone else.</p>
        </div>

        <div class="sm:flex">
          <figure class="flex shrink-0 max-w-none sm:max-w-xs lg:max-w-none mb-8 sm:mb-0">
            <img class="grow self-start rounded" src="../images/esteban.jpg" width="435" height="326" alt="About us 02" />
          </figure>
          <div class="sm:ml-8 lg:ml-16">
            <h4 class="h4 mb-2">The Ninety Percent</h4>
            <p class="text-lg text-gray-800 mb-8">
              Outside VC is betting on outsiders building fintech infrastructure and products that will lift up 100M people to the middle class over the next decade.
            </p>
            <div class="flex  mb-8">
              <img class="rounded-full self-start shrink-0 shadow-lg mr-4" src="../images/sheel-mohnot-headshot.jpeg" width="40" height="40" alt="Logo" />
              <div>
                <blockquote class="text-gray-800 italic">
                  “ If I were a founder again, Ethan is exactly what I would look for in a seed investor. Empathetic, energetic, hardworking, and driven. I'm excited to co-invest with him and think any founder would be lucky to have him on the cap table. “
                </blockquote>
                <div class="text-sm font-medium text-gray-800 mt-2">
                  <cite class="text-gray-900 not-italic">Sheel Mohnot</cite> · <a class="text-[#4BBCF1]" href="https://www.btv.vc/">Founding Partner, Better Tomorrow Ventures</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesBlocks',
}
</script>
