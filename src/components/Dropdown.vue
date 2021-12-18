<template>
  <div class="pos-absolute">
    <button @click.prevent="toggleMenu" class="btn-toggle btn">
      <b-icon icon="person">Профиль</b-icon>
    </button>
    <menu v-show="isOpen" class="menu">
      <button @click.prevent="logout" class="btn btn-logout">
        <b-icon icon="box-arrow-right">Выйти</b-icon>
      </button>
      <router-link
        to="/profile"
        tag="button"
        class="btn btn-profile"
        >
        <b-icon icon="person">Профиль</b-icon>
      </router-link>
      <button @click.prevent="toggleMenu" class="btn btn-cancel">
        <span>&#10005;</span>
      </button>
    </menu>
  </div>
</template>

<script>
import { LOGOUT } from '../store/modules/auth/constants';

export default {
  name: 'dropdown',
  data: () => ({
    isOpen: false,
  }),
  methods: {
    async logout() {
      const isUserLoggedOut = await this.$store.dispatch(LOGOUT);
      if (isUserLoggedOut) {
        this.$router.push('/');
      }
    },
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  background-color: transparent;
}
  .pos-absolute {
    position: absolute;
    left: 1em;
    top: 1em;
  }
  .btn-toggle{
    position: fixed;
    border: none;
    z-index: 1;
  }
  .menu {
    position: fixed;
    padding: 0;
    z-index: 0;
  }
  .btn {
    border: none;
    color: #32a1ce;
    padding: 0;
    font-size: 1.3rem;

    &:focus {
      box-shadow: none;
    }

    @media (max-width: 50em) {
      font-size: 2.3rem;
    }
  }

  .btn-profile {
    position: relative;
    top: 0.2em;
  }

  .btn-cancel {
    position: relative;
    top: -1em;
    right: 0.3em;
  }

  .btn-logout {
    position: relative;
    top: 1.2em;
  }
</style>
