<template>
  <b-row align-h="end" class="portfolio__divide">
    <b-col cols="6" class="background__light-blue text-right">
      <h2 class="portfolio__divide--text-left">
        FRONT END DEVELOPER
      </h2>
    </b-col>
    <b-col cols="6" class="background__light-pink text-left">
      <h2 class="portfolio__divide--text-right">
        GRAPHIC DESIGNER
      </h2>
    </b-col>
  </b-row>
</template>

<script>
    export default {
        name: 'PortfolioDivide',
    }
</script>

<style lang="scss">

  .portfolio__divide {
    height: 340px;

    &--text-left {
      position: absolute;
      bottom: 0;
      right: 0;
    }
    &--text-right {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
</style>
