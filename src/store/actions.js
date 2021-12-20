import { ADD_ERROR, SET_ERROR } from './constants';
import { ADD_NOTIFICATION } from './modules/notification/constants';
import messages from '@/assets/messages';

export default {
  [ADD_ERROR]({ commit }, e) {
    const message = messages[e.code] || 'Что-то пошло не так';

    commit(ADD_NOTIFICATION, message);
    commit(SET_ERROR, e);
  },
};
