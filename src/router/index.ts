import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Tasks from '@/views/Tasks.vue'

/**
 * Вraw the main page through the component "component: Home"
 * Others on request "component: () => import('../views/About.vue')"
 */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HOME',
    redirect: { name: 'Tasks' }
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/activity',
    name: 'Activity',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/Activity.vue')
  },
  {
    path: '/kanban',
    name: 'Kanban',
    component: () => import('@/views/Kanban.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('@/views/Calendar.vue')
  },
  {
    path: '/files',
    name: 'Files',
    component: () => import('@/views/Files.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'ErrorPage',
    component: () => import('@/views/PageNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
