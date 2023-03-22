import cliente from '../collections/cliente'
export default [
  {
    path: '/admin',
    component: () => import('@/layouts/Admin.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/DashboardView.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "dashboard",
        component: () => import('../views/DashboardView.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "go-to-abertura-de-chamados",
        component: () => import('../views/DashboardView.vue'),
        meta: {
          requiresAuth: true,
          action: () => { 
            window.open(cliente.linkChamadosCreate); return false; 
          },
        }
      },
    ]
  },




]