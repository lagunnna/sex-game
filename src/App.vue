<template>
  <div id="app">
    <component v-if="layout" :is="layout">
      <router-view/>
    </component>
    <router-view v-else />
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue';

export default {
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
  components: {
    MainLayout,
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
