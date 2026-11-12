import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import WestbrookTroutPredictions from '@/views/WestbrookTrout/Predictions.vue'

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

// Hash history lets the site run from any subdirectory without server rewrites
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
