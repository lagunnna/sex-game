import { GET_CURRENT_LEVEL, GET_SORTED_LEVELS, GET_CARDS_BY_CURRENT_LEVEL } from './constants';

export default {
  [GET_CURRENT_LEVEL]: (state) => state.currentLevel,
  [GET_SORTED_LEVELS]: (state) => [...state.levels].sort((a,b) => a.sort - b.sort),
  [GET_CARDS_BY_CURRENT_LEVEL]: (state, getters) => {
    const { cards } = state.levels.find((level) => level.id === getters[GET_CURRENT_LEVEL]);
    return Object.keys(cards).map((card) => ({ ...cards[card], id: card }));
  },
};
