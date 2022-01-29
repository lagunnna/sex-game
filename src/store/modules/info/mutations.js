import * as info from './constants';

export default {
  [info.SET_INFO](state, newInfo) {
    state.info = newInfo;
  },
  [info.SET_NAME](state, name) {
    state.info.name = name;
  },
  [info.SET_IS_MAN](state, isMan) {
    state.info.isMan = isMan;
  },
};
