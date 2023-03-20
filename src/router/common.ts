export default [
  {
    path: '/',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: '/home',
        component: () => import('../views/Home.vue')
      },
      {
        path: "/dashboard",
        component: () => import('../views/DashboardView.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/go-to-abertura-de-chamados",
        component: () => import('../views/DashboardView.vue'),
        meta: {
          requiresAuth: true,
          action: () => { alert("teste") },
        }
      },
    ]
  },




]