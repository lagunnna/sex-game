<template>
  <Loader v-if="!levels.length"/>
  <main v-else>
    <h1 class="title-levels">Уровень сложности</h1>
    <div class="btns-levels">
      <button
        v-for="level of levels"
        :key="level.id"
        @click="setCurrentLevel(level)"
        class="active-btn active-btn-levels"
        >
        {{level.title}}
      </button>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdX8WJ8jmMZNloNDKaDJazrZ12qzvAbL58dvOgeHo6oPVyPow/viewform"
        target="_blank"
        rel="noopener noreferrer"
        class="active-btn-levels active-btn"
        >
        Оставить отзыв
      </a>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import { FETCH_LEVELS, GET_LEVELS, SET_CURRENT_LEVEL } from '../store/modules/level/constants';

export default {
  name: 'selectLevel',
  computed: {
    ...mapGetters({ levels: GET_LEVELS }),
  },
  mounted() {
    this.$store.dispatch(FETCH_LEVELS);
  },
  methods: {
    setCurrentLevel(level) {
      this.$store.commit(SET_CURRENT_LEVEL, level.id);
      this.$router.push(`/cards/${level.path}`);
    },
  },
};
</script>

<style lang="scss" scoped>

  .active-btn-levels,
  .title-levels{
    text-transform: uppercase;
    letter-spacing: 0.3em;
    margin: 2em auto 0;
    width: 20em;
    font-size: 0.75rem;

    @media (max-width: 50em) {
    font-size: 1.2rem;
    margin: 1em auto;
    width: 100%;
    }
  }

  .title-levels{
    font-weight: bold;
    margin-top: 2em;
  }

  .btns-levels {
    display: flex;
    flex-direction: column;
  }
</style>
