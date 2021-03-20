import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    meta: { title: '关于' },
    children: [
      {
        path: '/about/child',
        name: 'AboutChild',
        component: Home,
        meta: { title: '关于子页' }
      }
    ]
  }
];

export default routes;