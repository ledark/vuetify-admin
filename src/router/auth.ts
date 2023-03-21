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
    path: '/perfil',
    component: () => import('@/layouts/Default.vue'),
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