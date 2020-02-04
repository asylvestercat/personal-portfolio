<template>
  <b-container class="portfolio__work">
    <b-row align-v="center" class="text-left">
      <b-col cols="12" md="9" lg="7" offset-md="3" offset-lg="5" class="portfolio__work--heading">
        <h2 class="text__heading-lead color__dark-blue text-right">Work</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="3">
        <div class="portfolio__work--item">

        </div>
      </b-col>
      <b-col cols="12" md="3">
        <div class="portfolio__work--item">

        </div>
      </b-col>
      <b-col cols="12" md="3">
        <div class="portfolio__work--item">

        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    export default {
        name: 'Work',
    }
</script>

<style lang="scss">

  .portfolio__work {
    margin-top: 10rem;
    margin-bottom: 5rem;

    &--heading {
      padding-right: 7rem !important;
      @media screen and (min-width: 451px) and (max-width: 575px) {
        padding-right: 8rem !important;
      }
      @media screen and (max-width: 450px) {
        padding: 5rem !important;
      }
    }

    &--item {
      width: 100%;
      background-color: blue;
      height: 100px;
    }
  }


</style>
