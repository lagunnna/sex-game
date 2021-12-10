<template>
  <b-form @submit.prevent="onSubmit" class="profile-form">
    <h5 class="profile-title">Профиль</h5>
    <div class="profile-content mb-4">
      <b-form-group
        label="имя"
        label-for="name"
        >
        <b-form-input
          type="text"
          id="name"
          v-model.trim="name"
          :state="!$v.name.$error"
          class="input-no-border">
        </b-form-input>
        <b-form-invalid-feedback
          :state="!$v.name.$error"
          >
          введите имя
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group
        label="e-mail"
        label-for="email"
        >
        <b-form-input
          type="email"
          id="email"
          disabled
          v-model.trim="email"
          class="input-no-border">
        </b-form-input>
      </b-form-group>
      <div class="form-switch mt-3 ps-0">
        <label
          for="isMan">
          жен
          <input
            type="checkbox"
            id="isMan"
            role="switch"
            v-model="isMan"
            class="form-check-input">
          муж
          </label>
      </div>
    </div>
    <div class="profile-actions">
      <button type="submit" class="active-btn">
        Сохранить
          <b-icon icon="cloud-check" font-scale="1">
            save
          </b-icon>
      </button>
    </div>
  </b-form>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import * as info from '../store/modules/info/constants';

export default {
  name: 'profile',
  validations: {
    name: { required },
  },
  computed: {
    ...mapGetters([info.GET_INFO]),
    email() {
      return this[info.GET_INFO].email;
    },
    name: {
      get() {
        return this[info.GET_INFO].name;
      },
      set(newName) {
        this[info.SET_NAME](newName);
      },
    },
    isMan: {
      get() {
        return this[info.GET_INFO].isMan;
      },
      set(isMan) {
        this[info.SET_IS_MAN](isMan);
      },
    },
  },
  async mounted() {
    await this[info.LOAD_INFO]();
  },
  methods: {
    ...mapActions([info.UPDATE_INFO, info.LOAD_INFO]),
    ...mapMutations([info.SET_NAME, info.SET_IS_MAN]),
    async onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      await this[info.UPDATE_INFO]({
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
