import Vue from 'vue';
import VueRouter from 'vue-router';
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
    component: () => import('../views/SelectLevel.vue'),
  },
  {
    path: '/cards/:level',
    name: 'cards',
    component: () => import('../views/Cards.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
