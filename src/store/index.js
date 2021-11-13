import Vue from 'vue';
import Vuex from 'vuex';
import level from './level';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    level,
  },
});
