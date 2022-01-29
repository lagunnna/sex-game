import { GET_CURRENT_LEVEL, GET_LEVELS, GET_CARDS_BY_CURRENT_LEVEL } from './constants';

export default {
  [GET_CURRENT_LEVEL]: (state) => state.currentLevel,
  [GET_LEVELS]: (state) => state.levels,
  [GET_CARDS_BY_CURRENT_LEVEL]: (state, getters) => {
    const { cards } = state.levels.find((level) => level.id === getters[GET_CURRENT_LEVEL]);
    return Object.keys(cards).map((card) => ({ ...cards[card], id: card }));
  },
};
