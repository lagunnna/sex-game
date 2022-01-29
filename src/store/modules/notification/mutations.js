import * as types from './constants';

export default {
  [types.ADD_NOTIFICATION](state, notification) {
    const id = (Math.random().toString(36) + Date.now().toString(36)).substring(2);
    state.notifications = [...state.notifications, { message: notification, id }];
  },
  [types.REMOVE_NOTIFICATION](state, notification) {
    state.notifications = state.notifications.filter((item) => item.id !== notification.id);
  },
};
