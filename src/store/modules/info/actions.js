import {
  getDatabase, ref, onValue, update,
} from 'firebase/database';
import { getAuth } from 'firebase/auth';
import * as info from './constants';

export default {
  async [info.LOAD_INFO]({ commit }) {
    const userId = getAuth().currentUser.uid;
    const db = getDatabase();
    const infoRef = ref(db, `/users/${userId}/info`);
    onValue(infoRef, (snapshot) => {
      const data = snapshot.val();
      commit(info.SET_INFO, data);
    });
  },
  async [info.UPDATE_INFO]({ commit, getters }, toUpdate) {
    const userId = getAuth().currentUser.uid;
    const db = getDatabase();
    const updateData = { ...getters.getInfo, ...toUpdate };
    const infoRef = ref(db, `/users/${userId}/info`);
    update(infoRef, updateData)
      .then(() => {
        commit(info.SET_INFO, updateData);
      })
      .catch((e) => {
        commit('setError', e);
        throw e;
      });
  },
};
