import Vue from 'vue';
import VueRouter from 'vue-router';
import { getAuth } from 'firebase/auth';
import routes from './routes';

Vue.use(VueRouter);

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
