<template>
  <form @submit.prevent='onSubmit' class="auth-form">
    <h5 class="login-title">Войти</h5>
    <div class="login-content mb-4">
      <b-form-group
        label="e-mail"
        label-for="email"
        >
        <b-form-input
          type="email"
          id="email"
          v-model.trim="$v.email.$model"
          :state="!$v.email.$error"
          placeholder="введите e-mail">
        </b-form-input>
      </b-form-group>
      <b-form-invalid-feedback
        :state="!$v.email.$error"
        >
        введите корректный email
      </b-form-invalid-feedback>
      <b-form-group
        label="пароль"
        label-for="password"
        >
        <b-form-input
          type="password"
          id="password"
          v-model.trim="$v.password.$model"
          :state="!$v.password.$error"
          placeholder="введите пароль">
        </b-form-input>
      </b-form-group>
      <b-form-invalid-feedback
        :state="!$v.password.$error"
        >
        пароль должен быть не менее {{$v.password.$params.minLength.min}} символов
      </b-form-invalid-feedback>
    </div>
    <div class="login-actions">
      <button type="submit"  class="active-btn">
        Войти
        <b-icon icon="box-arrow-in-right" font-scale="1">
          send
        </b-icon>
      </button>
      <p class="mt-1">
        Нет аккаунта?
        <router-link to="/register">
          Регистрация
        </router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators';
import { LOGIN } from '../store/modules/auth/constants';

export default {
  name: 'login',
  data: () => ({
    email: '',
    password: '',
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
  },
  methods: {
    async onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch(LOGIN, formData);
        this.$router.push('/');
      } catch (error) {
        this.password = '';
      }
    },
  },

};
</script>

<style lang="scss" scoped>
  .auth-form {
    width: 25em;
    margin: 1em auto 0;

    .login-title{
      margin-bottom: 0;
    }

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
