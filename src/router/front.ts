export default [
    {
      path: '/',
      component: () => import('@/layouts/Default.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Home.vue')
        },
        {
          path: '/home',
          component: () => import('../views/Home.vue')
        },
        {
          path: "/about",
          component: () => import('../views/AboutView.vue'),
        },
        {
          path: "/contact",
          component: () => import('../views/ContactView.vue'),
        },
      ]
    }
  ]