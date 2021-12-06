<template>
  <div class="small-logo">
    <Dropdown />
    <Logo />
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
  components: {
    Logo,
    Dropdown,
  },
};
</script>
