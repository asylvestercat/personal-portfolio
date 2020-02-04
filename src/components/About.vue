<template>
  <b-container class="portfolio__about">
    <b-row align-v="center" class="text-left">
      <b-col cols="12" md="9" lg="7" class="portfolio__about--heading">
        <h2 class="text__heading-lead color__dark-blue">About</h2>
        <p class="color__medium-gray">
          After graduating from Furman University with a B.A. in Graphic Design, I decided to go to GA Tech’s Coding Bootcamp where I got my groove on with front end.
        <br /><br />
          Upon graduation, I started working as a front end developer at BitPay, a fintech company in Atlanta.
        </p>
      </b-col>
    </b-row>
    <b-row class="portfolio__about--timeline d-none d-sm-block">
      <b-col class="text-center">
        <img class="portfolio__about--timeline--image" src="../assets/img/portfolio-timeline.svg"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    export default {
        name: 'About',
    }
</script>

<style lang="scss">

  .portfolio__about {
    padding-top: 13rem;
    padding-bottom: 4rem;
    @media screen and (max-width: 991px) {
      padding-top: 7rem;
    }
    @media screen and (max-width: 450px) {
      padding-top: 4rem;
    }

    &--heading {
      padding-left: 4rem !important;
      @media screen and (min-width: 451px) and (max-width: 575px) {
        padding-left: 5rem !important;
      }
      @media screen and (max-width: 450px) {
        padding: 2rem !important;
      }
    }

    &--timeline {
      margin-top: 5rem;
      margin-bottom: 5rem;

      &--periods {
        max-width: 720px;
        display: flex;
        text-align: left;
        justify-content: space-between;
        &--cell {
          width: 100px;
        }
      }
      &--image {
        width: 100%;
        max-width: 950px;
      }
    }


    &--image {
      /*max-width: 200px;*/
    }
  }

</style>
