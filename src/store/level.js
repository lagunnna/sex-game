export default {
  state: {
    currentLevel: null,
    levels: [
      { title: 'легкий', level: 'easy' },
      { title: 'средний', level: 'norm' },
      { title: 'сложный', level: 'hard' },
    ],
  },
  getters: {
    currentLevel: (s) => s.currentLevel,
    levels: (s) => s.levels,
  },
};
