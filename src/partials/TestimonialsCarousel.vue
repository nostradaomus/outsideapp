<template>
  <section class="mb-14">
    <div class="mt-10 max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:pt-20">
        <div class="h1 text-center mt-8">Our Team</div>

        <!-- Section header -->
        <div class="mt-8 mb-20 flex flex-col md:flex-row mx-auto w-full justify-evenly items-center">
          <div class="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out">
            <div class="flex flex-col items-center w-[350px]">
              <div class="h-[400px] w-[400px] mb-4 bg-gray-800 rounded-full overflow-hidden border-2 border-gray-200">
                <img class="h-full w-full object-cover" src="../images/ethanaustin.png" alt="Team member 01" />
              </div>
              <h4 class="text-xl font-bold mb-1">Ethan Austin</h4>
              <div class="text-[#4BBCF1] font-medium mb-2">Founder & GP</div>
              <div class="text-sm text-gray-600 font-medium">
                <a class="text-gray-900 hover:underline" href="#0">Twitter</a> · <a class="text-gray-900 hover:underline" href="#0">LinkedIn</a>
              </div>
            </div>
          </div>

          <div class="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out">
            <div class="flex flex-col items-center">
              <div class="h-[400px] w-[400px] mb-4 bg-gray-800 rounded-lg overflow-hidden border-2 border-gray-200">
                <img class="h-full w-full object-cover" src="../images/laurenprice.png" alt="Team member 01" />
              </div>
              <h4 class="text-xl font-bold mb-1">Lauren Price</h4>
              <div class="text-[#4BBCF1] font-medium mb-2">Senior Associate</div>
              <div class="text-sm text-gray-600 font-medium">
                <a class="text-gray-900 hover:underline" href="#0">Twitter</a> · <a class="text-gray-900 hover:underline" href="#0">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Carousel area -->
        <div class="max-w-3xl mx-auto">

          <!-- Carousel -->
          <div class="relative" data-aos="zoom-y-out">

            <!-- Testimonials -->
            <transition-group tag="div" class="relative flex flex-col items-start shadow-md border-2 border-gray-200 rounded bg-white z-10" enter-active-class="transition ease-in-out duration-700 transform order-first" enter-from-class="opacity-0 -translate-y-8" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in-out duration-300 transform absolute" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-8">
              <template v-for="(item, index) in items" :key="index">
                <div
                  v-show="active === index"
                  class="text-center px-12 py-8 pt-20 mx-4 md:mx-0"
                >
                  <div class="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                    <svg class="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                      <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                    </svg>
                    <img class="relative rounded-full" :src="item.img" width="96" height="96" :alt="item.alt" />
                  </div>
                  <blockquote class="text-xl font-medium mb-4">{{item.quote}}</blockquote>
                  <cite class="block font-bold text-lg not-italic mb-1">{{item.name}}</cite>
                  <div class="text-gray-600">
                    <span>{{item.role}}</span> <a class="text-[#4BBCF1] hover:underline" target="_blank" :href="item.link">{{item.team}}</a>
                  </div>
                </div>
              </template>
            </transition-group>

            <!-- Arrows -->
            <div class="absolute inset-0 flex items-center justify-between">
              <button class="relative z-20 w-10 h-10 md:w-16 md:h-16 p-1 flex items-center justify-center bg-white rounded-full border border-gray-200 shadow-md hover:shadow-lg transform -translate-x-2 md:-translate-x-1/2" @click="active = active === 0 ? items.length - 1 : active - 1; stopAutorotate();">
                <span class="sr-only">Previous</span>
                <svg class="w-4 h-4 fill-current text-gray-500" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
                </svg>
              </button>
              <button class="relative z-20 w-10 h-10 md:w-16 md:h-16 p-1 flex items-center justify-center bg-white rounded-full border border-gray-200 shadow-md hover:shadow-lg transform translate-x-2 md:translate-x-1/2" @click="active = active === items.length - 1 ? 0 : active + 1; stopAutorotate();">
                <span class="sr-only">Next</span>
                <svg class="w-4 h-4 fill-current text-gray-500" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                </svg>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DavidCohen from '../images/david-cohen.jpeg'
import AnnaBarber from '../images/anna-barber.jpeg'
import AaronHolland from '../images/aaron-holland.jpeg'

export default {
  name: 'TestimonialsCarousel',
  data: function () {
    return {
      active: 0,
      autorotate: true,
      autorotateTiming: 7000,
      items: [
        {
          img: DavidCohen,
          alt: 'David Cohen Testimonial',
          quote:
            '“ Ethan is the kind of founder and leader that I love working with. He has incredible energy, and is mission-driven. He knows how to motivate people and set clear goals. He knows the importance of surrounding himself with amazing people. He\'s someone I\'d be honored to work with in any setting. If you get the change to work with Ethan, do yourself a favor and jump at the chance. “',
          name: 'David Cohen',
          role: 'Founder',
          team: '@Techstars',
          link: 'https://www.techstars.com'
        },
        {
          img: AnnaBarber,
          alt: 'Anna Barber Testimonial',
          quote:
            '“ Ethan is the most hardworking for the founders he backs, and the most humble about his own role. He\'s just a fantastic investor. “',
          name: 'Anna Barber',
          role: 'Partner',
          team: '@M13',
          link: 'https://www.M13.co'
        },
        {
          img: AaronHolland,
          alt: 'Aaron Holland Testimonial',
          quote:
            '“ Ethan was the smallest check on our cap table but has provided the most value out of any of our investors. In the startup world Ethan stands alone and I cannot reccomend anyone more valuable to have on your team. “',
          name: 'Aaron Holland',
          role: 'CEO',
          team: '@SeasonShare',
          link: 'https://www.seasonshare.com'
        }
      ]
    }
  },
  methods: {
    stopAutorotate() {
      clearInterval(this.autorotateInterval)
    }
  },
  mounted() {
    if (this.autorotate) {
        this.autorotateInterval = setInterval(() => {
            this.active = this.active + 1 === this.items.length ? 0 : this.active + 1
        }, this.autorotateTiming)
    }
  },
  beforeUnmount() {
    this.stopAutorotate()
  }
}
</script>
