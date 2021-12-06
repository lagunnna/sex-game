<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';

export default {
  computed: {
    layout() {
      return `${this.$route.meta.layout || 'empty'}-layout`;
    },
  },
  components: {
    EmptyLayout, MainLayout, AuthLayout,
  },
};
</script>

<style lang="scss">
@import url('./assets/styles/index.scss');

*{
  background-color: #000;
}

#app {
  font-family: "Ethna";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #00b4de;
  background-color: rgb(0, 0, 0);
  width: 100%;
  height: 100vh;
  padding: 0.5em;
}
</style>
