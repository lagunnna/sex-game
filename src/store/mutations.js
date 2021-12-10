import { SET_ERROR, CLEAR_ERROR } from './constants';

export default {
  [SET_ERROR](state, error) {
    state.error = error;
  },
  [CLEAR_ERROR](state) {
    state.error = null;
  },
};
