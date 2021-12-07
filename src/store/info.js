import {
  getDatabase, ref, onValue, update,
} from 'firebase/database';
import { getAuth } from 'firebase/auth';

export default {
  state: {
    info: {
      name: '',
      isMan: false,
    },
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    setName(state, name) {
      state.info.name = name;
    },
    setIsMan(state, isMan) {
      state.info.isMan = isMan;
    },
  },
  actions: {
    async getInfo({ commit }) {
      const userId = getAuth().currentUser.uid;
      const db = getDatabase();
      const infoRef = ref(db, `/users/${userId}/info`);
      onValue(infoRef, (snapshot) => {
        const data = snapshot.val();
        commit('setInfo', data);
      });
    },
    async updateInfo({ commit, getters }, toUpdate) {
      const userId = getAuth().currentUser.uid;
      const db = getDatabase();
      const updateData = { ...getters.info, ...toUpdate };
      const infoRef = ref(db, `/users/${userId}/info`);
      update(infoRef, updateData)
        .then(() => {
          commit('setInfo', updateData);
        })
        .catch((e) => {
          commit('setError', e);
          throw e;
        });
    },
  },
  getters: {
    info: (state) => state.info,
  },

};
