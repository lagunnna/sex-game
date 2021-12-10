import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { LOGIN, LOGOUT, REGISTER } from './constants';
import { SET_ERROR } from '../../constants';

export default {
  async [LOGIN]({ commit }, { email, password }) {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .catch((e) => {
        commit(SET_ERROR, e);
        throw e;
      });
  },
  async [REGISTER]({ commit }, {
    name, email, password, isMan,
  }) {
    const auth = getAuth();
    const db = getDatabase();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { uid } = userCredential.user;
        set(ref(db, `users/${uid}/info`), {
          name,
          email,
          isMan,
        });
      })
      .catch((e) => {
        commit(SET_ERROR, e);
        throw e;
      });
  },
  async [LOGOUT]({ commit }) {
    const auth = getAuth();
    await signOut(auth)
      .catch((e) => {
        commit(SET_ERROR, e);
        throw e;
      });
  },
};
