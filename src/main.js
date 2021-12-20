import Vue from 'vue';
import Vuelidate from 'vuelidate';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import { initializeApp } from 'firebase/app';
import 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import App from './App.vue';
import Loader from './components/Loader.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.component('Loader', Loader);

const firebaseApp = initializeApp({
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID,
});

const firebaseAuth = getAuth(firebaseApp);
let app;

onAuthStateChanged(firebaseAuth, () => {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
