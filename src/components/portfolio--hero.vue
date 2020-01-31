<template>
  <b-container>
    <b-row class="text-center">
      <b-col cols="12">
        <div class="portfolio__hero">
          <h1 class="text-lead__heading-hero color__dark-pink mx-auto">
            ANNA LEE
          </h1>
          <img src="../assets/anna-donut.png" class="portfolio__hero--image mx-auto"/>
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
        name: 'HelloWorld',
        props: {
            msg: String
        }
    }
</script>

<style lang="scss">
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .portfolio__hero {
    margin: auto;
    width: 90%;
    padding: 10px;
    display: flex;
    align-items: center;
    text-align: center;

    &--image {
      max-width: 200px;
    }
  }
</style>
