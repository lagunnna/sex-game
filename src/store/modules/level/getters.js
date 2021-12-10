import { GET_CURRENT_LEVEL, GET_LEVELS, GET_CARDS_BY_CURRENT_LEVEL } from './constants';

export default {
  [GET_CURRENT_LEVEL]: (state) => state.currentLevel,
  [GET_LEVELS]: (state) => state.levels,
  [GET_CARDS_BY_CURRENT_LEVEL]: (state, getters) => (
    state.levels.find((l) => l.id === getters[GET_CURRENT_LEVEL]).cards
  ),
};
