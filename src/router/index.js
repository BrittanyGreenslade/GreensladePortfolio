import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'About',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path: '/contact',
    name: 'Contact',
    component:Contact
  },
  {
    path: '/works',
    name: 'Works',
    component:Works
  }
]

const router = new VueRouter({
  routes
})

export default router
