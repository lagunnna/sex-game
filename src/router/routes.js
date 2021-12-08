import Home from '../views/Home.vue';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/selectLevel',
    name: 'selectLevel',
    meta: {
      layout: 'main-layout',
    },
    component: () => import('../views/SelectLevel.vue'),
  },
  {
    path: '/cards/:level',
    name: 'cards',
    meta: {
      layout: 'main-layout',
    },
    component: () => import('../views/Cards.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: 'main-layout', noDropdown: true,
    },
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      layout: 'main-layout', noDropdown: true,
    },
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      layout: 'main-layout', auth: true,
    },
    component: () => import('../views/Profile.vue'),
  },
];
