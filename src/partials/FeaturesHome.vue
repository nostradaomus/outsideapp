<template>
  <section class="relative bg-gray-800 h-screen">
    <img class="absolute left-[57%] top-[17%] md:left-[50%] md:top-[22%] transform scale-x-[-1] w-[125px]" src="../images/curved-chalk-arrow.png" alt="chalk arrow" />
    <!-- Section background (needs .relative class on parent and next sibling elements) -->
    <div class="h-full flex items-center justify-center max-w-6xl mx-auto px-4 sm:px-6">
      <div class="">
        <!-- Section header -->
        <div class="max-w-xl mx-auto">
          <h1 class="h1 mb-4 text-white" data-aos="zoom-y-out">OUT&#183;SID&#183;ER</h1>
          <p class="text-2xl text-white mb-8" data-aos="zoom-y-out"><span class="italic">noun</span><br/>1. A person who does not belong to a particular group.<br/>2. Being an outsider provides you with a perspective others don't have. It allows you to challenge the status quo and identify new opportunities.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesHome',
  data: function () {
    return {
      tab: '1',
    }
  },
}
</script>
