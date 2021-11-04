import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Activity from '@/views/Activity.vue'

/**
 * Вraw the main page through the component "component: Home"
 * Others on request "component: () => import('../views/About.vue')"
 */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Activity',
    component: Activity
  },
  {
    path: '/tasks',
    name: 'Tasks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/Tasks.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
