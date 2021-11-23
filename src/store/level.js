export default {
  state: {
    currentLevel: null,
    levels: [],
  },
  mutations: {
    setLevels(state, levels) {
      state.levels = levels;
    },
    setCurrentLevel(state, level) {
      state.currentLevel = level;
    },
  },
  actions: {
    async fetchLevels({ commit }) {
      try {
        const res = await fetch(`${process.env.BASE_URL}cards.json/`)
          .then((successResponse) => {
            if (successResponse.status !== 200) {
              return {};
            }
            return successResponse.json();
          },
          () => {});
        const levels = Object.keys(res).map((level) => ({ ...res[level], path: level, id: level }));
        commit('setLevels', levels);
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
  },
  getters: {
    currentLevel: (s) => s.currentLevel,
    levels: (s) => s.levels,
    cardsByCurrentLevel: (s, { currentLevel }) => s.levels.find((l) => l.id === currentLevel).cards,
  },
};
