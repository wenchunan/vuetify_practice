import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/front/FrontView.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/front/HomeView.vue'),
        meta: {
          title: 'flechazo'
        }
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/front/AboutView.vue'),
        meta: {
          title: '關於 flechazo'
        }
      },
      {
        path: 'check',
        name: 'check',
        component: () => import('../views/front/CheckView.vue'),
        meta: {
          title: '建立訂單 - 結帳頁面'
        }
      },
      {
        path: 'PayFinished',
        name: 'PayFinished',
        component: () => import('../views/front/PayFinished.vue'),
        meta: {
          title: '完成付款 - 結帳頁面'
        }
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/front/ProductsView.vue'),
        meta: {
          title: '商店 - flechazo'
        }
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('../views/front/ProductView.vue'),
        meta: {
          title: '商品內頁 - flechazo'
        }
      },
      {
        path: 'cart',
        component: () => import('../views/front/CartView.vue'),
        meta: {
          title: '購物車 - flechazo'
        }
      },
      {
        path: 'order/:id',
        component: () => import('../views/front/OrderView.vue'),
        meta: {
          title: '訂單確認 - 結帳頁面'
        }
      },
      {
        path: 'favorite',
        component: () => import('../views/front/FavoriteView.vue'),
        meta: {
          title: '我的收藏 - flechazo'
        }
      },
      {
        path: 'protect',
        name: 'protect',
        component: () => import('../views/front/ProtectView.vue'),
        meta: {
          title: '飾品保養 - flechazo'
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/front/LoginView.vue'),
    meta: {
      title: '請先登入 - flechazo'
    }
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
  linkActiveClass: 'active',
  // 對於所有路由導航，讓頁面滾動到頂部
  scrollBehavior (to, from, savedPosition) {
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})
// router 命名
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})
export default router
