<template>
  <header class="fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out" :class="{ 'bg-white backdrop-blur-sm shadow-lg': !top }">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Site branding -->
        <div class="shrink-0 mr-4">
          <!-- Logo -->
          <router-link to="/" class="block" aria-label="Cruip">
            <span class="text-2xl font-extrabold leading-tighter tracking-tighter ">OutsideVC</span>
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="hidden md:flex md:grow">

          <!-- Desktop menu links -->
          <ul class="flex grow justify-end flex-wrap items-center">
            <li>
              <router-link to="/about" class="text-gray-900 hover:text-[#FC6C85] px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Our Team</router-link>
            </li>
            <li>
              <router-link to="/portfolio" class="text-gray-900 hover:text-[#FC6C85] px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Our Portfolio</router-link>
            </li>
            <!--
            <li>
              <router-link to="/pricing" class="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Pricing</router-link>
            </li>
            <li>
              <router-link to="/blog" class="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Blog</router-link>
            </li>
            <Dropdown title="Resources">
              <li>
                <router-link to="/documentation" class="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Documentation</router-link>
              </li>
              <li>
                <router-link to="/support" class="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Support center</router-link>
              </li>
              <li>
                <router-link to="/404" class="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">404</router-link>
              </li>
            </Dropdown>
            -->
          </ul>

          <!-- Desktop sign in links -->
          <ul class="flex grow justify-end flex-wrap items-center">
            <!--
            <li>
              <router-link to="/signin" class="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</router-link>
            </li>
            -->
            <li>
              <a href="https://airtable.com/shr0QVhYjDNRSswIW" target="_none" class="shadow-sm btn-sm text-white bg-[#4BBCF1] hover:bg-[#FC6C85] ml-3">
                <span>Let's Get Weird</span>
              </a>
            </li>
          </ul>

        </nav>

        <!-- Mobile menu -->
        <div class="flex md:hidden">

          <!-- Hamburger button -->
          <button class="hamburger" ref="hamburger" :class="{ active: mobileNavOpen }" aria-controls="mobile-nav" :aria-expanded="mobileNavOpen" @click="mobileNavOpen = !mobileNavOpen">
            <span class="sr-only">Menu</span>
            <svg class="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect y="4" width="24" height="2" />
              <rect y="11" width="24" height="2" />
              <rect y="18" width="24" height="2" />
            </svg>
          </button>

          <!-- Mobile navigation -->
          <transition
            enter-active-class="transition ease-out duration-200 transform"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-out duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <nav
              id="mobile-nav"
              ref="mobileNav"
              v-show="mobileNavOpen"
              class="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
            >
              <ul class="flex flex-col h-[25vh] justify-center items-center px-5 py-2">
                <li>
                  <router-link to="/about" class="flex text-gray-800 hover:text-gray-900 py-2">Our Team</router-link>
                </li>
                <li>
                  <router-link to="/portfolio" class="flex text-gray-800 hover:text-gray-900 py-2">Portfolio</router-link>
                </li>
                <li>
                  <a href="https://airtable.com/shr0QVhYjDNRSswIW" class="shadow-sm btn-sm text-white bg-[#4BBCF1] hover:bg-[#FC6C85]">
                    <span>Let's Get Weird</span>
                  </a>
                </li>
              </ul>
            </nav>
          </transition>

        </div>

      </div>
    </div>
  </header>
</template>

<script>
import Dropdown from './../utils/Dropdown.vue'

export default {
  name: 'Header',
  components: {
    Dropdown
  },
  data: function () {
    return {
      mobileNavOpen: false,
      top: true
    }
  },
  methods: {
    clickOutside(e) {
      if (!this.mobileNavOpen || this.$refs.mobileNav.contains(e.target) || this.$refs.hamburger.contains(e.target)) return
      this.mobileNavOpen = false
    },
    keyPress() {
      if (!this.mobileNavOpen || event.keyCode !== 27) return
      this.mobileNavOpen = false
    },
    handleScroll() {
      this.top = window.pageYOffset > 10 ? false : true
    }
  },
  mounted() {
    document.addEventListener('click', this.clickOutside)
    document.addEventListener('keydown', this.keyPress)
    document.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.clickOutside)
    document.removeEventListener('keydown', this.keyPress)
    document.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
