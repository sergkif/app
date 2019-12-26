
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'registration', component: () => import('pages/Registration.vue') },
      { path: 'confirm', component: () => import('pages/Confirm.vue') },
      { path: 'pay', component: () => import('pages/Pay.vue') },
      { path: 'payed', component: () => import('pages/Payed.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
