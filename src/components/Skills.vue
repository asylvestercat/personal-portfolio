<template>
  <b-container class="portfolio__skills">
    <b-row align-v="center" class="text-center">
      <h2 class="text__heading-lead color__medium-gray mx-auto mb-5">
        Skills
      </h2>
    </b-row>
    <b-row>
      <div class="portfolio__skills--container mx-auto">
        <img class="portfolio__skills--container--image" src="../assets/img/skills.svg"/>
        <img class="portfolio__skills--container--image--horizontal" src="../assets/img/skills-horizontal.svg"/>
      </div>
    </b-row>
  </b-container>
</template>

<script>
    export default {
        name: 'Skills',
    }
</script>

<style lang="scss">

  .portfolio__skills {
    margin-top: 4rem;
    margin-bottom: 8rem;

    &--container {
      width: 540px;
      @media screen and (max-width: 680px) {
        width: 340px;
      }
      @media screen and (max-width: 480px) {
        width: 200px;
      }

      &--image {
        width: 100%;
        @media screen and (max-width: 480px) {
          display: none;
        }
        &--horizontal {
          width: 100%;
          @media screen and (min-width: 481px) {
            display: none;
          }
        }
      }
    }
  }

</style>
