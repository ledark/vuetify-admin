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
]