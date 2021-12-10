import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import auth from './modules/auth';
import info from './modules/info';
import level from './modules/level';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  modules: {
    level, auth, info,
  },
});
