import {
  getDatabase, ref, onValue, update,
} from 'firebase/database';
import { getAuth } from 'firebase/auth';
import * as info from './constants';
import { ADD_NOTIFICATION } from '@/store/modules/notification/constants';
import { ADD_ERROR } from '@/store/constants';
import messages from '@/assets/messages';

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
  async [info.UPDATE_INFO]({ dispatch, commit, getters }, toUpdate) {
    const userId = getAuth().currentUser.uid;
    const db = getDatabase();
    const updateData = { ...getters[info.GET_INFO], ...toUpdate };
    const infoRef = ref(db, `/users/${userId}/info`);
    update(infoRef, updateData)
      .then(() => {
        commit(info.SET_INFO, updateData);
        commit(ADD_NOTIFICATION, messages['data-updated']);
      })
      .catch((e) => {
        dispatch(ADD_ERROR, e);
        throw e;
      });
  },
};
