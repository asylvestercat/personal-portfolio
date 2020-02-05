<template>
  <b-container class="portfolio__contact text-center">
    <b-row align-v="center" class="text-center">
      <b-col cols="12" md="9" lg="7" class="portfolio__contact--heading">
        <h2 class="text__heading-lead color__dark-blue">Contact</h2>
      </b-col>
    </b-row>
    <b-row>
      <div class="portfolio__contact--container d-flex">
        <div>
          <a href="mailto:annaleesylvester@gmail.com"><img class="portfolio__contact--icon" src="../assets/icons/contact--mail.svg"/></a>
        </div>
        <div>
          <a href="https://github.com/asylvestercat" target="_blank"><img class="portfolio__contact--icon" src="../assets/icons/contact--github.svg"/></a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/annasylvester/" target="_blank"><img class="portfolio__contact--icon" src="../assets/icons/contact--linkedin.svg"/></a>
        </div>
        <div>
          <a href="https://dribbble.com/sylvesteracat" target="_blank"><img class="portfolio__contact--icon" src="../assets/icons/contact--dribbble.svg"/></a>
        </div>
      </div>
    </b-row>
  </b-container>
</template>

<script>
    export default {
        name: 'Contact',
    }
</script>

<style lang="scss">

  .portfolio__contact {
    margin-bottom: 8rem;
    &--heading {
      margin: 3rem auto;
    }
    &--container {
      justify-content: space-between;
      width: 400px;
      margin: 0 auto;
    }
    &--icon {
      max-width: 75px;
    }

  }


</style>
