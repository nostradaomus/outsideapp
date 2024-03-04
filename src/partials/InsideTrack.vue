<template>
  <section class="relative flex items-center justify-center bg-gray-800 min-h-[90vh]">
    <img class="absolute left-[2%] top-[1%] md:left-[3%] md:top-[5%] w-[75px] md:w-[150px]" src="../images/ninety-angle-arrow.png" alt="chalk arrow" />
    <img class="absolute right-[2%] bottom-[1%] md:right-[3%] md:bottom-[5%] transform scale-x-[-1] scale-y-[-1] w-[75px] md:w-[150px]" src="../images/ninety-angle-arrow.png" alt="chalk arrow" />


    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 mb-4 text-white">Moving outsiders to the inside track</h2>
        </div>

        <div class="sm:flex sm:flex-row-reverse">
          <figure class="flex shrink-0 max-w-none sm:max-w-xs lg:max-w-none mb-8 sm:mb-0">
            <img class="grow self-start rounded" src="../images/boardroom.jpg" width="435" height="326" alt="About us 02" />
          </figure>
          <div class="sm:mr-8 lg:mr-16">
            <h4 class="h4 mb-2 text-white">More than just a check</h4>
            <p class="text-lg text-white mb-8">
              As a founder, it often feels like the world is conspiring against you.  But sometimes there’s this magic moment where everything flips and slowly but surely it starts to feel as if the world is conspiring for you.  Our goal is to be part of that moment for you.
            </p>
            <div class="flex  mb-8">
              <img class="rounded-full self-start shrink-0 shadow-lg mr-4" src="../images/adele-archer.jpeg" width="40" height="40" alt="Logo" />
              <div>
                <blockquote class="text-white italic">
                  “ I've not experienced an investor as committed and proactively looking for ways to help as Ethan. He's truly one in a million, and you're incredibly lucky if he wants to invest - He's going to be your favorite person on the cap table. “
                </blockquote>
                <div class="text-sm font-medium text-white mt-2">
                  <cite class="text-white not-italic">Adele Archer</cite> · <a class="text-[#4BBCF1]" href="https://www.eterneva.com/">CEO, Eterneva</a>
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
  name: 'InsideTrack',
}
</script>
