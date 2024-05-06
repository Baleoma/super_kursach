import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/main/',
      name: 'main',
      component: () => import('../views/MainView.vue')
    },

    {
      path: '/slimes/',
      name: 'slimes',
      component: () => import('../views/SlimesView.vue')
    },

    {
      path: '/test/',
      name: 'test',
      component: () => import('../views/TestView.vue')
    },

    {
      path: '/',
      redirect: '/main/'
    }
  ]
})

export default router
