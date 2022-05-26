import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/admin',
    component: () => import( '../views/DashboardView.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: 'contact',
        component: () => import('../views/ContactView.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
