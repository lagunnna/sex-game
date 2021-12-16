<template>
  <div>
    <Dropdown v-if='isDropdown' />
    <router-link
      to="/"
      tag="div"
      class="small-logo">
      <Logo />
    </router-link>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Dropdown from '../components/Dropdown.vue';
import Logo from '../components/Logo.vue';

export default {
  name: 'main-layout',
  data: () => ({
    isDropdown: true,
  }),
  components: {
    Logo,
    Dropdown,
  },
  mounted() {
    this.isDropdown = !this.$route.meta.noDropdown;
  },
};
</script>
