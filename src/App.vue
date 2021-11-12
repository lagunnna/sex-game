<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('./assets/styles/index.scss');

#app {
  font-family: "Varela Round";
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
