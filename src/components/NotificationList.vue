<template>
  <div class="notification-list">
    <Notification
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import { GET_NOTIFICATIONS } from '../store/modules/notification/constants';
import Notification from './Notification.vue';

export default {
  name: 'notificationList',
  components: {
    Notification,
  },
  computed: {
    notifications() {
      return this.$store.getters[GET_NOTIFICATIONS];
    },
  },
};
</script>

<style lang="scss" scoped>
*{
  background-color: transparent;
}

  .notification-list {
    position: fixed;
    top: 0.5em;
    right: 0.5em;
  }
</style>
