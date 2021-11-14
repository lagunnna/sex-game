export default {
  state: {
    currentLevel: null,
    levels: [
      { title: 'легкий', level: 'easy' },
      { title: 'средний', level: 'norm' },
      { title: 'сложный', level: 'hard' },
    ],
  },
  actions: {
    async fetchCards({ commit }, level) {
      try {
        const res = await fetch(`${process.env.BASE_URL}cards.json/`)
          .then((r) => r.json());
        const cards = res[level];
        return cards;
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
  },
  getters: {
    currentLevel: (s) => s.currentLevel,
    levels: (s) => s.levels,
  },
};
