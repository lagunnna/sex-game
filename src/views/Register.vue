<template>
  <div class="small">
    <Logo/>
    <form class="auth-content" @submit.prevent='onSubmit'>
      <h5 class="register-title">Зарегистрироваться</h5>
      <div class="register-content mb-4">
        <b-form-group
          label="имя"
          label-for="name">
          <b-form-input
            id="name"
            type="text"
            placeholder="введите имя"
            v-model.trim="$v.name.$model"
            :state="!$v.name.$error">
          </b-form-input>
          <b-form-invalid-feedback :state="!$v.name.$error">
            введите имя</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
          label="e-mail"
          label-for="email">
          <b-form-input
            id="email"
            type="email"
            placeholder="введите e-mail"
            v-model.trim="$v.email.$model"
            :state="!$v.email.$error">
          </b-form-input>
          <b-form-invalid-feedback :state="!$v.email.$error">
            введите корректный email</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
          label="пароль"
          label-for="password">
          <b-form-input
            id="password"
            type="password"
            placeholder="придумайте пароль"
            v-model.trim="$v.password.$model"
            :state="!$v.password.$error">
          </b-form-input>
          <b-form-invalid-feedback :state="!$v.password.$error">
            пароль должен быть не менее {{$v.password.$params.minLength.min}} символов
          </b-form-invalid-feedback>
        </b-form-group>
        <div class="checkbox mt-3">
          <input
            class="form-check-input"
            type="checkbox"
            id="isAdult"
            v-model="isAdult">
          <label
            for="isAdult"
            class="mx-2">
            мне есть 18 лет</label>
        </div>
      </div>
      <div class="register-actions">
        <button class="active-btn" type="submit">
          Зарегистрироваться
          <b-icon icon="box-arrow-right" font-scale="1">send</b-icon>
        </button>
        <p class="mt-1">
          Уже есть аккаунт?
          <router-link to="/login">Войти</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators';
import Logo from '../components/Logo.vue';

export default {
  name: 'register',
  components: {
    Logo,
  },
  data: () => ({
    name: '',
    email: '',
    password: '',
    isAdult: false,
  }),
  validations: {
    name: { required },
    email: { email, required },
    password: { required, minLength: minLength(6) },
    isAdult: { checked: (c) => c },
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
    margin: 0.5em auto 0;

    .register-title{
      margin-bottom: 0;
    }

    @media (max-width: 50em) {
      width: 20em;
      font-size: 1.2rem;
      margin-top: 4em;
    }
  }

.register-content{
  text-align: left;

  input{
    font-size: 1rem;
    padding: 0.2em 0.8em;

    @media (max-width: 50em) {
      font-size: 1.2rem;
      padding: 0.4em 0.8em;
    }
  }
}

</style>
