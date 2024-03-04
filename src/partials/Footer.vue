<template>
  <footer>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Top area: Blocks -->
      <div class="flex justify-between sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-600">

        <!-- 1st block -->
        <div class="sm:col-span-12 lg:col-span-3">
          <div class="mb-2">
        <!-- Site branding -->
        <div class="shrink-0 mr-4">
          <!-- Logo -->
          <router-link to="/" class="block" aria-label="Cruip">
            <span class="text-2xl font-extrabold leading-tighter tracking-tighter ">OutsideVC</span>
          </router-link>
        </div>
          </div>

        </div>

        <!--
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-gray-800 font-medium mb-2">Products</h6>
          <ul class="text-sm">
            <li class="mb-2">
              <router-link to="#" class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Web Studio</router-link>
            </li>
            <li class="mb-2">
              <router-link to="#" class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">DynamicBox Flex</router-link>
            </li>
            <li class="mb-2">
              <router-link to="#" class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Programming Forms</router-link>
            </li>
            <li class="mb-2">
              <router-link to="#" class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Integrations</router-link>
            </li>
            <li class="mb-2">
              <router-link to="#" class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Command-line</router-link>
            </li>
          </ul>
        </div>

        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-gray-800 font-medium mb-2">Resources</h6>
          <ul class="text-sm">
            <li class="mb-2">
              <router-link to="#" class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Documentation</router-link>
            </li>
            <li class="mb-2">
              <router-link to="#" class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Tutorials & Guides</router-link>
            </li>
            <li class="mb-2">
              <router-link to="#" class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Blog</router-link>
            </li>
            <li class="mb-2">
              <router-link to="#" class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Support Center</router-link>
            </li>
            <li class="mb-2">
              <router-link to="#" class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Partners</router-link>
            </li>
          </ul>
        </div>
        -->


        <!-- 4th block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-gray-800 text-right font-medium mb-2">Company</h6>
          <ul class="text-sm text-right">
            <li class="mb-2">
              <router-link to="/" class="text-gray-900 hover:text-gray-900 transition duration-150 ease-in-out">Home</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/about" class="text-gray-900 hover:text-gray-900 transition duration-150 ease-in-out">Our Team</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/portfolio" class="text-gray-900 hover:text-gray-900 transition duration-150 ease-in-out">Our Portfolio</router-link>
            </li>
          </ul>
        </div>

        <!--
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-3">
          <h6 class="text-gray-800 font-medium mb-2">Subscribe</h6>
          <p class="text-sm text-gray-600 mb-4">Get the latest news and articles to your inbox every month.</p>
          <form>
            <div class="flex flex-wrap mb-4">
              <div class="w-full">
                <label class="block text-sm sr-only" for="newsletter">Email</label>
                <div class="relative flex items-center max-w-xs">
                  <input id="newsletter" type="email" class="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm" placeholder="Your email" required />
                  <button type="submit" class="absolute inset-0 left-auto" aria-label="Subscribe">
                    <span class="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                    <svg class="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fill-rule="nonzero" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        -->

      </div>

      <!-- Bottom area -->
      <div class="md:flex md:items-center md:justify-end py-4 md:py-8 border-t border-gray-600">

        <!-- Social links -->
        <ul class="flex mb-4 md:order-1 md:ml-4 md:mb-0">
          <li>
            <a target="_none" href="https://www.twitter.com/ethanaustin" class="flex justify-center items-center text-gray-900 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
              <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
              </svg>
            </a>
          </li>
        </ul>

        <!-- Copyrights note
        <div class="text-sm text-gray-600 mr-4">&copy; Cruip.com. All rights reserved.</div>
        -->

      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
}
</script>
