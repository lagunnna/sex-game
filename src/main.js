import Vue from 'vue';
import Vuelidate from 'vuelidate';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import { initializeApp } from 'firebase/app';
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

initializeApp({
  apiKey: 'AIzaSyDOSIFVnr4OXhYax396UHHMsKGaHczG3mc',
  authDomain: 'duo-sex-game.firebaseapp.com',
  projectId: 'duo-sex-game',
  storageBucket: 'duo-sex-game.appspot.com',
  messagingSenderId: '166262890225',
  appId: '1:166262890225:web:a461aaf722b297cf469350',
  measurementId: 'G-TDNE70S15W',
});

const auth = getAuth();
let app;

onAuthStateChanged(auth, () => {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
