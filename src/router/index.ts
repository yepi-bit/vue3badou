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
    },
    {
      path: '/barEchart',
      name: 'barEchart',
      component: () => import('../views/barEchart.vue')
    },
    {
      path: '/animationSroll',
      name: 'animationSroll',
      component: () => import('../views/animationSroll.vue')
    },
    {
      path: '/courseView',
      name: 'courseView',
      component: () => import('../views/courseView.vue')
    },
    {
      path: '/gradeCourse',
      name: 'gradeCourse',
      component: () => import('../views/gradeCourse.vue')
    },
    {
      path: '/allGrade',
      name: 'allGrade',
      component: () => import('../views/allGrade.vue')
    },
    {
      path: '/timePicker',
      name: 'timePicker',
      component: () => import('../views/timePicker.vue')
    },
    {
      path: '/selfCourse',
      name: 'selfCourse',
      component: () => import('../views/selfCourse.vue')
    },
    {
      path: '/rectArea',
      name: 'rectArea',
      component: () => import('../views/rectArea.vue')
    }
  ]
})

export default router
