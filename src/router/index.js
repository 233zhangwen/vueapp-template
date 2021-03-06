import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import ('@/components/AppMenu'),
    exact: true,
    redirect: {
      name: 'Home'
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/Cart.vue')
      }
    ]
  },

  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
