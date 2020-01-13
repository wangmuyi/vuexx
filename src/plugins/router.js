import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/home.vue'
Vue.use(VueRouter)

const routes = [
  {path: '/home',component: Home},
 
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
