import { FETCH_LEVELS, SET_LEVELS } from './constants';
import { ADD_ERROR } from '../../constants';

export default {
  async [FETCH_LEVELS]({ dispatch, commit }) {
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
      commit(SET_LEVELS, levels);
    } catch (e) {
      dispatch(ADD_ERROR, e);
      throw e;
    }
  },
};
