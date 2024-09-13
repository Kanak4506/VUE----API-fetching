import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/',
      name: 'default',
      component: () => import('@/layout/AppLayout.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/Home.vue'),
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('@/views/About.vue'),
        },
        {
          path: 'contact-us',
          name: 'contactUs',
          component: () => import('@/views/ContactUs.vue'),
        }
      ]

    }
  ]
})

export default router