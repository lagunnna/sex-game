<template>
  <div class="small">
    <Logo />
    <div class="content" v-if="currentСard">
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
    <div class="no-content" v-else>
      <h5 >Карточки кончились :(</h5>
      <h5> Самое время сменить уровень</h5>
      <router-link :to="'/selectLevel'" tag="button" class="active-btn active-btn-cards">
        Выбрать уровень</router-link>
    </div>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue';

export default {
  name: 'cards',
  data: () => ({
    currentСard: null,
    cards: null,
    publicPath: process.env.BASE_URL,
  }),
  computed: {
    imgSrc() {
      return this.publicPath + this.currentСard?.imgSrc;
    },
  },
  async mounted() {
    const { level } = this.$route.params;
    this.cards = await this.$store.dispatch('fetchCards', level);
    this.currentСard = this.getRandomCard(1, this.cards.length);
  },
  methods: {
    getNextCard() {
      this.removeCardFromArray();
      this.currentСard = this.getRandomCard(1, this.cards.length);
    },
    getRandomCard(min, max) {
      return this.cards[Math.round(Math.random() * (max - min) + min)];
    },
    removeCardFromArray() {
      this.cards = this.cards.filter((c) => c.id !== this.currentСard.id);
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
    box-shadow: 0 0 3em rgba(117, 230, 255, 0.15);

    @media (max-width: 50em) {
    width: 25em;
    box-shadow: 0 0 4em rgba(117, 230, 255, 0.15);

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

  .no-content {
    margin-top: 6em;

    @media (max-width: 50em) {
      margin-top: 12em;

      .active-btn{
        margin-top: 17em;
      }
    }
  }
</style>
