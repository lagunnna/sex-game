import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import level from './modules/level';
import auth from './modules/auth';
import info from './modules/info';
import notification from './modules/notification';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    level, auth, info, notification,
  },
});
