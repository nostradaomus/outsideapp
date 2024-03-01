import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Tutorials from './pages/Tutorials.vue'
import Pricing from './pages/Pricing.vue'
import Blog from './pages/Blog.vue'
import BlogPost from './pages/BlogPost.vue'
import About from './pages/About.vue'
import Documentation from './pages/Documentation.vue'
import Support from './pages/Support.vue'
import SignIn from './pages/SignIn.vue'
import SignUp from './pages/SignUp.vue'
import ResetPassword from './pages/ResetPassword.vue'
import PageNotFound from './pages/PageNotFound.vue'
import Portfolio from './pages/Portfolio.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 })
    } else {
      document.querySelector('html').style.scrollBehavior = 'auto'
      window.scroll({ top: 0 })
      document.querySelector('html').style.scrollBehavior = ''
    }
  },
  history: routerHistory,
  routes: [
    {
      path: '/outsideapp/',
      component: Home
    },
    {
      path: '/outsideapp/tutorials',
      component: Tutorials
    },
    {
      path: '/outsideapp/pricing',
      component: Pricing
    },
    {
      path: '/outsideapp/blog',
      component: Blog
    },
    {
      path: '/outsideapp/portfolio',
      component: Portfolio
    },
    {
      path: '/outsideapp/blog-post',
      component: BlogPost
    },
    {
      path: '/outsideapp/about',
      component: About
    },
    {
      path: '/outsideapp/documentation',
      component: Documentation
    },
    {
      path: '/outsideapp/support',
      component: Support
    },
    {
      path: '/outsideapp/signin',
      component: SignIn
    },
    {
      path: '/outsideapp/signup',
      component: SignUp
    },
    {
      path: '/outsideapp/reset-password',
      component: ResetPassword
    },
    {
      path: '/:pathMatch(.*)*',
      component: PageNotFound
    }
  ]
})

export default router
