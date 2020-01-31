<template>
  <b-container class="portfolio__hero">
    <b-row class="text-center">
      <b-col cols="12">
        <div class="portfolio__hero--container">
          <h1 class="text-lead__heading-hero color__dark-pink mx-auto">
            ANNA LEE
          </h1>
          <img src="../assets/img/anna-donut.png" class="portfolio__hero--image mx-auto"/>
          <h1 class="text-lead__heading-hero color__dark-blue mx-auto">
            SYLVESTER
          </h1>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    export default {
        name: 'PortfolioHero',
        props: {
            msg: String
        }
    }
</script>

<style lang="scss">

  .portfolio__hero {
    margin-top: 8rem;
    margin-bottom: 10rem;

    &--container{
      margin: auto;
      width: 90%;
      padding: 10px;
      display: flex;
      align-items: center;
      text-align: center;
    }

    &--image {
      max-width: 200px;
    }
  }

</style>
