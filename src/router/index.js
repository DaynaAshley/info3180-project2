import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      redirect: "/explore",
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/logout',       
      name: 'logout',       
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/register',       
      name: 'register',       
      component: () => import('../views/RegisterView.vue')
      
    },
    ,
    {
      path: '/explore',       
      name: 'explore',       
      component: () => import('../views/ExploreView.vue')
      
    },
  ]
})

export default router
