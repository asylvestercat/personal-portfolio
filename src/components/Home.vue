<template>
  <b-container class="portfolio__hero">
    <b-row align-v="center" class="text-left">
      <b-col cols="7">
        <div class="portfolio__hero--heading">
          <h1 class="text__heading-hero color__light-gray">
            Hello,
            <br />
            I'm <span class="color__dark-blue">Anna Sylvester</span>.
          </h1>
          <p class="text__sub-heading color__light-gray text-right">
            front end developer | designer
          </p>
          <div class="text-right mt-4">
            <div class="asset__btn">CONTACT</div>
          </div>
        </div>
      </b-col>
      <b-col cols="5">
        <div class="portfolio__hero--image text-center">
          <img src="../assets/img/anna-bubbles.svg" />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    export default {
        name: 'PortfolioHero',
    }
</script>

<style lang="scss">

  .portfolio__hero {

    &--heading {
      width: 412px;
      margin: 9rem 0 0 5rem;
    }

    &--container{
      margin: auto;
      width: 90%;
      padding: 10px;
      display: flex;
      align-items: center;
      text-align: center;
    }

    &--image {
      /*max-width: 200px;*/
    }
  }

</style>
