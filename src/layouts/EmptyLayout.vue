<template>
  <div>
    <Dropdown />
    <router-view />
  </div>
</template>

<script>
import Dropdown from '../components/Dropdown.vue';

export default {
  name: 'empty-layout',
  components: {
    Dropdown,
  },
};
</script>
