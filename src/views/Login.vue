<template>
  <div class="small">
    <Logo/>
    <form class="auth-content" @submit.prevent='onSubmit'>
      <h5 class="login-title">Войти</h5>
      <div class="login-content mb-4">
        <b-form-group
          label="e-mail"
          label-for="email"
          class="mt-3">
          <b-form-input
            id="email"
            type="email"
            placeholder="введите e-mail"
            v-model.trim="$v.email.$model"
            :state="!$v.email.$error">
          </b-form-input>
        </b-form-group>
        <b-form-invalid-feedback :state="!$v.email.$error">
          введите корректный email</b-form-invalid-feedback>
        <b-form-group
          label="пароль"
          label-for="password"
          class="mt-3">
          <b-form-input
            id="password"
            type="password"
            placeholder="введите пароль"
            v-model.trim="$v.password.$model"
            :state="!$v.password.$error">
          </b-form-input>
        </b-form-group>
        <b-form-invalid-feedback :state="!$v.password.$error">
          пароль должен быть не менее {{$v.password.$params.minLength.min}} символов
        </b-form-invalid-feedback>
      </div>
      <div class="login-actions">
        <button class="active-btn" type="submit">
          Войти
          <b-icon icon="box-arrow-right" font-scale="1">send</b-icon>
        </button>
        <p class="mt-1">
          Нет аккаунта?
          <router-link to="/register">Регистрация</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators';
import Logo from '../components/Logo.vue';

export default {
  name: 'login',
  components: {
    Logo,
  },
  data: () => ({
    email: '',
    password: '',
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
  },
  methods: {
    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      this.$router.push('/');
    },
  },

};
</script>

<style lang="scss" scoped>
  .auth-content {
    width: 25em;
    margin: 1em auto 0;

    @media (max-width: 50em) {
      width: 20em;
      font-size: 1.2rem;
      margin-top: 5em;
    }
  }

  .login-content{
  text-align: left;

  input{
    padding: 0.2em 0.8em;

    @media (max-width: 50em) {
      font-size: 1.2rem;
      padding: 0.4em 0.8em;
    }
  }
}

.login-actions{
  @media (max-width: 50em) {
    margin-top: 2em;
  }
}
</style>
