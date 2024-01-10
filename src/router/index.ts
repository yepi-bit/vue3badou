import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dynamicLoad',
      name: 'dynamicLoad',
      component: () => import('../views/dynamicLoad.vue')
    },
    {
      path: '/vue3Table',
      name: 'vue3Table',
      component: () => import('../views/vue3Table.vue')
    }
  ]
})

export default router