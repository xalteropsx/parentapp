export default [

  {
    path: '/talib',
    component: () => import('./layouts/MainLayout.vue'),
    children: [{
      name: 'Talib Portal',
      path: '',
      component: () => import('./pages/talib.vue'),
      meta: {requireLogin: true}
    }]
  },

    {
    path: '/examsets',
    component: () => import('./layouts/MainLayout.vue'),
    children: [{
      name: 'Exam Sets',
      path: '',
      component: () => import('./pages/Examsets/Examsets.vue'),}]
  },

]
