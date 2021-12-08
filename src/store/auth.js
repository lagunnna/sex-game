import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

export default {
  actions: {
    async login({ commit }, { email, password }) {
      const auth = getAuth();

      signInWithEmailAndPassword(auth, email, password)
        .catch((e) => {
          commit('setError', e);
          throw e;
        });
    },
    async register({ commit }, {
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
          commit('setError', e);
          throw e;
        });
    },
    async logout({ commit }) {
      const auth = getAuth();
      await signOut(auth)
        .catch((e) => {
          commit('setError', e);
          throw e;
        });
    },
  },
};
