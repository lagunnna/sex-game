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
export default {
  name: 'dropdown',
  data: () => ({
    isOpen: false,
  }),
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
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
    position: relative;
    border: none;
  }
  .menu {
    position: fixed;
    padding: 0;
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
    top: -0.9em;
    left: 0.25em;
  }

  .btn-cancel {
    position: relative;
    top: -2.3em;
    right: 0.1em;
  }
</style>
