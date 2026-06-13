import { createRouter, createWebHashHistory } from 'vue-router'
import GuidePage from './components/GuidePage.vue'
import { guidePages } from './data/guide'

const routes = guidePages.map((page) => ({
  path: page.path,
  name: page.name,
  component: GuidePage,
  props: { page },
}))

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 24,
        behavior: 'smooth',
      }
    }

    return { top: 0 }
  },
})
