import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/front/FrontView.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/front/AboutView.vue')
      },
      {
        path: 'check',
        name: 'check',
        component: () => import('../views/front/CheckView.vue')
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/front/ProductsView.vue')
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('../views/front/ProductView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/front/CartView.vue')
      },
      {
        path: 'order/:id',
        component: () => import('../views/front/OrderView.vue')
      },
      {
        path: 'favorite',
        component: () => import('../views/front/FavoriteView.vue')
      },
      {
        path: 'protect',
        component: () => import('../views/front/ProtectView.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/front/LoginView.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/dashboard/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/dashboard/AdminProducts.vue')
      },
      {
        path: 'coupon',
        component: () => import('../views/dashboard/AdminCoupon.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/dashboard/AdminOrder.vue')
      },
      {
        path: 'blog',
        component: () => import('../views/dashboard/AdminBlog.vue')
      }
    ]
  },
  // 404 頁面
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/front/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router
