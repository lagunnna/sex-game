import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { LOGIN, LOGOUT, REGISTER } from './constants';
import { ADD_ERROR } from '../../constants';
import { ADD_NOTIFICATION } from '../notification/constants';
import messages from '../../../assets/messages';

export default {
  async [LOGIN]({ dispatch, commit }, { email, password }) {
    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      commit(ADD_NOTIFICATION, messages.login);
      return !!userCredential.user;
    } catch (e) {
      dispatch(ADD_ERROR, e);
      throw e;
    }
  },
  async [REGISTER]({ dispatch, commit }, {
    name, email, password, isMan,
  }) {
    const auth = getAuth();
    const db = getDatabase();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const { uid } = userCredential.user;
      set(ref(db, `users/${uid}/info`), {
        name,
        email,
        isMan,
      });

      commit(ADD_NOTIFICATION, messages.login);
      return true;
    } catch (e) {
      dispatch(ADD_ERROR, e);
      throw e;
    }
  },
  async [LOGOUT]({ dispatch, commit }) {
    const auth = getAuth();
    try {
      await signOut(auth);
      commit(ADD_NOTIFICATION, messages.logout);
      return true;
    } catch (e) {
      dispatch(ADD_ERROR, e);
      throw e;
    }
  },
};
