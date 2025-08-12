import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
   
      component: HomeView,
    },

    // ease loadin
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/our-works',
      name: 'our-works',
      component: () => import('../views/OurWorksView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
    
    {

      path: '/donate',
      name: 'donate',
      component: () => import('../views/DonateView.vue'),
    },
    
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/control-panel/DashboardView.vue'),
    },
    {
      path: '/pageEdit/:id',
      name: 'pageEdit',
      props: true,
      component: () => import('../views/control-panel/PageEditView.vue'),
    },

   
  ],

})

export default router
