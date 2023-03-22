export default [
  {
    path: '/login',
    component: () => import('@/layouts/LoginScreen.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('../views/LoginView.vue'),
      },
    ]
  },

  {
    path: '/logout',
    name: 'logout',
    component: () => import('../views/LoginView.vue'),
  },
  
  {
    path: '/admin/perfil',
    component: () => import('@/layouts/Admin.vue'),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: 'senha',
        name: 'perfil-senha',
        component: () => import('../views/PerfilSenha.vue'),        
      },
    ]
  },
]