<template>
  <div class="home">
    <Dropdown />
    <Logo />
    <div class="hello-text-block">
      <span class="hello-text">
        Здравствуйте, мы рады привествовать Вас в нашей игре.
      </span>
      <span class="hello-text">
        Если хотите разнообразить интимную жизнь - эта игра специально для вас!
      </span>
      <span class="hello-text">
        Нам очень важна Ваша обратная связь, пожалуйста, оставьте Ваш
        <span class="hello-text-red">анонимный</span> отзыв и\или пожелания.
      </span>
      <span class="hello-text">
        Приятной игры!
      </span>
    </div>
    <router-link
      to="/selectLevel"
      tag="button"
      class="active-btn start-btn"
    >
      Начать
    </router-link>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue';
import Dropdown from '../components/Dropdown.vue';

export default {
  name: 'Home',
  components: {
    Logo, Dropdown,
  },
};
</script>

<style lang="scss" scoped>
.hello-text-block {
  margin-top: 6em;

  @media (min-width: 50em) {
    margin-top: 3em;
  }
}

  .hello-text {
    font-size: 1rem;
    display: block;
    margin-bottom: 1em;

    @media (min-width: 50em) {
    font-size: 0.7rem;
    margin-bottom: 0;
  }
  }

  .hello-text-red{
    color: red;
  }

  .start-btn {
    margin-top: 3em;
    font-size: 1.7rem;

    @media (min-width: 50em) {
    font-size: 1rem;
  }
  }
</style>
