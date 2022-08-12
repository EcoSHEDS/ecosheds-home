import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import WestbrookTroutPredictions from '@/views/WestbrookTrout/Predictions'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/westbrook-trout/predictions',
    name: 'WestbrookTroutPredictions',
    component: WestbrookTroutPredictions
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
