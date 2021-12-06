import Vue from 'vue';
import Vuex from 'vuex';
import level from './level';
import auth from './auth';
import info from './info';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
  },
  modules: {
    level, auth, info,
  },
});
