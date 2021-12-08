import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Tasks from '@/views/Tasks.vue'
import { routerNames } from '@/constant/RouteNames'

/**
 * Вraw the main page through the component "component: Home"
 * Others on request "component: () => import('../views/About.vue')"
 */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: routerNames.HOME,
    redirect: { name: 'Tasks' }
  },
  {
    path: '/tasks',
    name: routerNames.TASKS,
    component: Tasks
  },
  {
    path: '/activity',
    name: routerNames.ACTIVITY,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/Activity.vue')
  },
  {
    path: '/kanban',
    name: routerNames.KANBAN,
    component: () => import('@/views/ComingSoon.vue')
  },
  {
    path: '/calendar',
    name: routerNames.CALENDAR,
    component: () => import('@/views/ComingSoon.vue')
  },
  {
    path: '/files',
    name: routerNames.FILES,
    component: () => import('@/views/ComingSoon.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: routerNames.ERRORPAGE,
    component: () => import('@/views/PageNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
