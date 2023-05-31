import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index'
import Note from '@/views/Note'
import Individual from '@/views/Individual'
import AINavigation from '@/views/frontendNavigation/AINavigation'
import VueNavigation from '@/views/frontendNavigation/VueNavigation'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes = [
  {
    path: '/index',
    name: 'index',
    component: Index,
  },
  {
    path: '/frontend-navigation/',
    name: 'frontendNavgation',
    children: [
      {
        path: 'ai-navigation',
        name: 'aiNavgation',
        component: AINavigation,
      },
      {
        path: 'vue-navigation',
        name: 'vueNavgation',
        component: VueNavigation,
      },
    ],
  },
  {
    path: '/note',
    name: 'note',
    component: Note,
  },
  {
    path: '/individual',
    name: 'individual',
    component: Individual,
  },
  {
    path: '/',
    redirect: '/index',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  nProgress.start()
  next()
})

router.afterEach((to, from, next) => {
  nProgress.done()
})

export default router
