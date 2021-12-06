<template>
  <form class="auth-form" @submit.prevent='onSubmit'>
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
      <div class="form-switch mt-2 ps-0">
        <label
          for="isMan">
          жен
          <input
            class="form-check-input"
            type="checkbox"
            id="isMan"
            role="switch"
            v-model="isMan">
          муж
          </label>
      </div>
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
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'register',
  data: () => ({
    name: '',
    email: '',
    password: '',
    isAdult: false,
    isMan: false,
  }),
  validations: {
    name: { required },
    email: { email, required },
    password: { required, minLength: minLength(6) },
    isAdult: { checked: (c) => c },
  },
  methods: {
    async onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        name: this.name,
        email: this.email,
        password: this.password,
        isMan: this.isMan,
      };

      try {
        await this.$store.dispatch('register', formData);
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

  .form-switch .form-check-input {
      margin: 0;
    }
}

</style>
