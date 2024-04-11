import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/directives',
      name: 'directives',
      component: () => import('../views/DirectivesView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/products/:id',
      name: 'product',
      component:() =>import('../views/ProductView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component:() =>import('../views/LoginView.vue')
    }
  ]
})

export default router
