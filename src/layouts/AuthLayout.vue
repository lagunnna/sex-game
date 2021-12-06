<template>
  <div class="small-logo">
    <Logo />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue';

export default {
  name: 'auth-layout',
  components: {
    Logo,
  },
};
</script>
