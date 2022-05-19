import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import TroutGrowthModel from '@/views/TroutGrowthModel'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/trout-growth-model',
    name: 'troutGrowthModel',
    component: TroutGrowthModel
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
