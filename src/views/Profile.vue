<template>
  <b-form class="profile-form" @submit.prevent="onSubmit">
    <h5 class="profile-title">Профиль</h5>
    <div class="profile-content mb-4">
      <b-form-group
        label="имя"
        label-for="name">
        <b-form-input
          id="name"
          type="text"
          class="input-no-border"
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
          class="input-no-border"
          v-model.trim="email"
          disabled>
        </b-form-input>
      </b-form-group>
      <div class="form-switch mt-3 ps-0">
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
    </div>
    <div class="profile-actions">
      <button class="active-btn" type="submit">
      Сохранить
        <b-icon icon="cloud-check" font-scale="1">save</b-icon>
      </button>
    </div>
  </b-form>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import { mapGetters } from 'vuex';

export default {
  name: 'profile',
  data: () => ({
    name: '',
    email: '',
    isMan: false,
  }),
  validations: {
    name: { required },
  },
  computed: {
    ...mapGetters(['info']),
  },
  async mounted() {
    await this.$store.dispatch('getInfo');
    this.name = this.info.name;
    this.email = this.info.email;
    this.isMan = this.info.isMan;
  },
  methods: {
    async onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      await this.$store.dispatch('updateInfo', {
        name: this.name,
        isMan: this.isMan,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .profile-form {
    width: 25em;
    margin: 1em auto 0;

    .profile-title{
      margin-bottom: 0;
    }

    @media (max-width: 50em) {
      width: 20em;
      font-size: 1.2rem;
      margin-top: 4em;
    }
  }

  .profile-content{
    text-align: left;

    input{
      font-size: 1rem;
      padding: 0.2em 0.8em;

      &.input-no-border {
        background: transparent;
        color: rgb(201, 201, 201);
        outline: none;
        border: none;
        border-bottom: 2px solid #32a1ce;
      }

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
