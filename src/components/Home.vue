<template>
  <b-container class="portfolio__home">
    <b-row align-v="center" class="text-left">
      <b-col cols="12">
        <div class=" text-center d-md-none">
          <img class="portfolio__home--bubbles--image--mobile" src="../assets/img/anna-bubbles.svg" />
        </div>
      </b-col>
      <b-col cols="12" md="7">
        <div class="portfolio__home--heading text-center text-md-left">
          <h1 class="text__heading-hero color__light-gray">
            Hello,
            <br />
            I'm <span class="color__dark-blue">Anna Sylvester</span>.
          </h1>
          <p class="text__sub-heading color__light-gray text-center text-md-right">
            front end developer | designer
          </p>
          <div class="text-center text-md-right mt-4">
            <a href="mailto:annaleesylvester@gmail.com"><div class="asset__btn">CONTACT</div></a>
          </div>
        </div>
      </b-col>
      <b-col cols="5" class="d-none d-md-block">
        <div class="portfolio__home--bubbles text-center">
          <img class="portfolio__home--bubbles--image" src="../assets/img/anna-bubbles.svg" />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    export default {
        name: 'Home',
    }
</script>

<style lang="scss">

  .portfolio__home {
    padding-top: 6rem;
    @media screen and (max-width: 991px) {
      padding-top: 3rem;
    }

    &--heading {
      width: 412px;
      margin: 9rem 0 0 5rem;
      @media screen and (max-width: 991px) {
        margin-left: 3rem;
        width: 308px;
      }
      @media screen and (max-width: 767px) {
        margin: 3rem auto;
      }
    }

    &--container{
      margin: auto;
      width: 90%;
      padding: 10px;
      display: flex;
      align-items: center;
      text-align: center;
    }

    &--bubbles {
      margin-top: 4rem;

      &--image {
        width: 80%;
        &--mobile {
          width: 50%;
        }
      }
    }
  }

</style>
