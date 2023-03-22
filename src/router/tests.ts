export default [
  {
    path: '/test',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: '/test/storage',
        component: () => import('../views/tests/TestStorage.vue')
      },
    ]
  },


]