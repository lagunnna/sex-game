import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'empty',
    },
    component: Home,
  },
  {
    path: '/selectLevel',
    name: 'selectLevel',
    meta: {
      layout: 'main',
    },
    component: () => import('../views/SelectLevel.vue'),
  },
  {
    path: '/cards/:level',
    name: 'cards',
    meta: {
      layout: 'main',
    },
    component: () => import('../views/Cards.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: 'auth',
    },
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      layout: 'auth',
    },
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      layout: 'main',
    },
    component: () => import('../views/Profile.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
