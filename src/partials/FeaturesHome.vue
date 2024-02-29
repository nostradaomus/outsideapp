<template>
  <section class="relative h-screen  flex items-center justify-center">

    <!-- Section background (needs .relative class on parent and next sibling elements) -->
    <div class="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-12 md:pt-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto pb-12 md:pb-16">
          <h1 class="h1 mb-4" data-aos="zoom-y-out">OUT&#183;SID&#183;ER</h1>
          <p class="text-2xl md:text-3xl text-gray-800 mb-8" data-aos="zoom-y-out"><span class="italic">noun</span><br/>1. A person who does not belong to a particular group.<br/>2. Being an outsider provides you with a perspective others don't have. It allows you to challenge the status quo and identify new opportunities.</p>
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
