<template>
  <div class="loader"></div>
</template>

<script>
export default {
  name: 'Loader',
};
</script>

<style lang="scss" scoped>
.loader{
  display: block;
  margin: 3em auto;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  border: 3px solid rgb(0, 180, 222, 0.15);
  border-top-color: #00b4de;
  animation: spin 1s ease-in-out infinite;

  @media (max-width: 50em) {
    font-size: 2rem;
    }
}

@keyframes spin{
  to{
    transform: rotate(360deg);
  }
}

</style>
