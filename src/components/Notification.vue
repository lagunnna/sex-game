<template>
  <div
    class="toast text-white show"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="d-flex">
      <div class="toast-body">
        {{ notification.message }}
      </div>
      <button
        aria-label="Close"
        data-bs-dismiss="toast"
        class="btn-close btn-close-white me-2 m-auto"
        @click.prevent="removeNotification"
      />
    </div>
  </div>
</template>

<script>
import { REMOVE_NOTIFICATION } from '../store/modules/notification/constants';

export default {
  name: 'Notification',
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    timeout: null,
  }),
  created() {
    this.timeout = setTimeout(() => {
      this.removeNotification();
    }, 4000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  methods: {
    removeNotification() {
      this.$store.commit(REMOVE_NOTIFICATION, this.notification);
    },
  },
};
</script>

<style lang="scss" scoped>
*{
  background-color: rgb(34, 34, 34);
}
  .toast {
    margin-bottom: 0.5em;

    @media (max-width: 50em) {
      font-size: 1.4rem;
    }

    .toast-body {
      padding: 0.5em 0.75em;
    }
  }
</style>
