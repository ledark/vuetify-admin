export default [
    {
        path: '/',
        component: () => import('@/layouts/Default.vue'),
        children: [
            {
                path: '/search',
                component: () => import('../views/SearchView.vue'),
            },
        ]
      },


    

]