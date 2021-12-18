<template>
  <div id="app">
    <keep-alive  v-if="layout">
      <component :is="layout">
        <router-view/>
      </component>
    </keep-alive>
    <router-view v-else />
    <NotificationList />
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue';
import NotificationList from '@/components/NotificationList.vue';

export default {
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
  components: {
    MainLayout, NotificationList,
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
