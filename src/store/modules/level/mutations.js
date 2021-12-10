import { SET_LEVELS, SET_CURRENT_LEVEL } from './constants';

export default {
  [SET_LEVELS](state, levels) {
    state.levels = levels;
  },
  [SET_CURRENT_LEVEL](state, level) {
    state.currentLevel = level;
  },
};
