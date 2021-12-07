import Vue from 'vue';
import VueRouter from 'vue-router';
import { getAuth } from 'firebase/auth';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const { currentUser } = getAuth();
  const requireAuth = to.matched.some((view) => view.meta.auth);

  if (requireAuth && !currentUser) {
    next('/login');
  } else {
    next();
  }
});

export default router;
