<template>
  <div class="logo">
    <span class="title-neon-blue">S♥x</span>
    <span class="title-neon-red">Game</span>
  </div>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  flex-flow: column;
  padding: 1em;
}

.small {
  .title-neon-blue {
    font-size: 1.5rem;

    @media (min-width: 50em) {
    font-size: 1rem;
    }
  }

  .title-neon-red {
    font-size: 4rem;

    @media (min-width: 50em) {
    font-size: 2.8rem;
  }
  }
}
.title-neon-blue {
  display: inline-block;
  font-family: 'Varela Round';
  font-size: 2.5rem;
  line-height: 1;
  text-transform: uppercase;
  text-shadow: 0 0 1em #00b4de, 0 0 1em #00b4de;
}
.title-neon-red {
  display: inline-block;
  font-family: "Draft Beer";
  transform: rotate(-15deg) skew(-15deg);
  color: rgb(255, 51, 0, 0.7);
  font-size: 7rem;
  line-height: 0.7;
  animation: neon .4s ease-in-out infinite alternate;
  text-shadow: 0 0 0.8em rgb(255, 51, 0), 0 0 0.8em rgb(255, 51, 0);
}

@keyframes neon {
from {
  text-shadow: 0 0 0.25em rgba(255, 51, 0, 0.92),
  0 0 1.25em rgba(255, 51, 0, 0.34),
  0 0 0.5em rgba(255, 51, 0, 0.52),
  0 0 0.75em rgba(255, 30, 22, 0.92),
  0 0 1.5em rgba(255, 30, 22, 0.78),
  0 0 0.2em rgba(255, 30, 22, 0.92);
}
to {
  text-shadow: 0 0 0.25em rgba(255, 51, 0, 0.98),
  0 0 1.25em rgba(255, 51, 0, 0.42),
  0 0 0.5em rgba(255, 51, 0, 0.58),
  0 0 0.75em rgba(255, 30, 22, 0.84),
  0 0 1.5em rgba(255, 30, 22, 0.88),
  0 0 0.2em rgb(255, 51, 0);
}
}
</style>
