<template>
  <div class="small">
    <Logo />
    <div class="content">
      <router-link :to="'/selectLevel'" tag="button" class="active-btn active-btn-cards">
        Выбрать уровень</router-link>
      <img
        :src="imgSrc"
        alt="card"
        class="card-img">
      <button
        class="active-btn active-btn-cards"
        @click.prevent="getNextCard"
        >Следующая карточка</button>
    </div>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue';

export default {
  name: 'cards',
  data: () => ({
    currentСard: null,
    currentLevel: null,
    cards: null,
    publicPath: process.env.BASE_URL,
  }),
  computed: {
    imgSrc() {
      return this.publicPath + this.currentСard?.imgSrc;
    },
  },
  async mounted() {
    this.currentLevel = this.$route.params.level;
    this.cards = await this.$store.dispatch('fetchCards', this.currentLevel);
    this.currentСard = this.getRandomCard(1, this.cards.length);
  },
  methods: {
    getNextCard() {
      this.removeCardFromArray();
      this.currentСard = this.getRandomCard(1, this.cards.length);
    },
    getRandomCard(min, max) {
      const card = this.cards[Math.round(Math.random() * (max - min) + min)];
      return card;
    },
    removeCardFromArray() {
      this.cards.filter((c) => c.id !== this.currentСard.id);
    },
  },
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
  .card-img{
    width: 16em;
    border-radius: 30px;

    @media (max-width: 50em) {
    width: 25em;
  }
  }

  .active-btn-cards{
    font-size: 0.8rem;
    margin: 1em auto;

    @media (max-width: 50em) {
      font-size: 1.3rem;
      width: 100%;
    }
  }

  .content {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin-top: 2em;

    @media (min-width: 50em) {
    flex-direction: row;
    }
  }
</style>
