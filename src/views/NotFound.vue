<template>
  <div class="not-found">
    <div class="not-found-text-block">
      <p class="not-found-text">Такой страницы не существует.</p>
      <p class="not-found-text">Перейти <router-link to="/">на главную</router-link>.</p>
    </div>
    <span class="not-found-img">404</span>
  </div>
</template>

<script>
export default {
  name: 'notFound',
  // data: () => ({
  //   timeout: null,
  // }),
  // created() {
  //   this.timeout = setTimeout(() => {
  //     this.$router.push('/');
  //   }, 4000);
  // },
  // beforeDestroy() {
  //   clearTimeout(this.timeout);
  // },
};
</script>

<style lang="scss" scoped>
  .not-found-text-block {
    margin: 4em auto 1em;
    line-height: 0.7;

    @media (max-width: 50em) {
      font-size: 1.5rem;
      margin: 8em auto 2em;
    }
  }
  .not-found-img {
    margin-left: 2.5em;
    font-family: 'Plexi', arial;
    font-size: 8.5rem;
    color: rgb(0, 180, 222, 0.4);
    animation: neon .4s ease-in-out infinite alternate;
    text-shadow: 0 0 2em #00b4de, 0 0 1em #00b4de;
    background-color: transparent;

    @media (max-width: 50em) {
        margin-left: 0.7em;
      }
  }
</style>
