<template>
  <div
    v-if="currentCard"
    class="content"
  >
    <router-link
      :to="'/selectLevel'"
      tag="button"
      class="active-btn active-btn-cards"
    >
      Выбрать уровень
    </router-link>
    <img
      :src="imgSrc"
      alt="card"
      class="card-img"
    >
    <button
      class="active-btn active-btn-cards"
      @click.prevent="clickOnNextCard"
    >
      Следующая карточка
    </button>
  </div>
  <div
    v-else
    class="no-content"
  >
    <h5>Карточки кончились :(</h5>
    <h5>Самое время сменить уровень</h5>
    <router-link
      :to="'/selectLevel'"
      tag="button"
      class="active-btn active-btn-cards"
    >
      Выбрать уровень
    </router-link>
  </div>
</template>

<script>
import { GET_CARDS_BY_CURRENT_LEVEL } from '../store/modules/level/constants';

export default {
  name: 'Cards',
  data: () => ({
    cards: [],
    publicPath: process.env.BASE_URL,
  }),
  computed: {
    imgSrc() {
      return this.publicPath + this.currentCard?.imgSrc;
    },
    currentCard() {
      return this.cards[Math.floor(Math.random() * this.cards.length)];
    },
  },
  mounted() {
    this.cards = this.$store.getters[GET_CARDS_BY_CURRENT_LEVEL];
  },
  methods: {
    clickOnNextCard() {
      this.cards = this.cards.filter((card) => card.id !== this.currentCard.id);
    },
  },
};
</script>

<style lang="scss" scoped>
  .card-img{
    width: 14em;
    border-radius: 30px;
    box-shadow: 0 0 3em rgba(117, 230, 255, 0.15);

    @media (max-width: 50em) {
    width: 23em;
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
    margin-top: 1em;

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
