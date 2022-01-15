import { getDatabase, onValue, ref } from 'firebase/database';
import { FETCH_LEVELS, SET_LEVELS } from './constants';
import { ADD_ERROR } from '../../constants';

export default {
  async [FETCH_LEVELS]({ dispatch, commit }) {
    try {
      const db = getDatabase();
      const infoRef = ref(db, '/levels');
      onValue(infoRef, (snapshot) => {
        const data = snapshot.val();
        const levels = Object.keys(data).map((level) => ({ ...data[level], path: level, id: level }))
        commit(SET_LEVELS, levels);
      });
    } catch (e) {
      dispatch(ADD_ERROR, e);
      throw e;
    }
  },
};
