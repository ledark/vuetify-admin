export default [
    {
        path: '/admin',
        component: () => import('@/layouts/Admin.vue'),
        children: [
            {
                path: 'search',
                component: () => import('../views/SearchView.vue'),
            },
        ]
      },
]