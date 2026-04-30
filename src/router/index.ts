import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: () => import('@/views/ScheduleView.vue')
  },
  {
    path: '/workouts',
    name: 'workouts',
    component: () => import('@/views/WorkoutsView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/ProfileView.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})