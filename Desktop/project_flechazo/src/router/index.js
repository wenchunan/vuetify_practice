import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/front/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/front/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/front/ProductsView.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/front/ProductView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
