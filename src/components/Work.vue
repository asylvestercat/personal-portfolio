<template>
  <b-container class="portfolio__work">
    <b-row align-v="center" class="portfolio__work--heading text-left">
      <b-col cols="12" md="9" lg="7" offset-md="3" offset-lg="5" class="portfolio__work--heading--container">
        <h2 class="text__heading-lead color__dark-blue text-right">Work</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="4">
        <div v-b-modal.modal-1 class="portfolio__work--item mx-auto">
          <b-modal id="modal-1" title="BitPay Careers Page">
            <img src="../assets/img/careers-page.png" class="portfolio__work--item--image" />
            <template v-slot:modal-footer>
              <div class="w-100">
                <b-button
                    variant="light"
                    size="sm"
                    class="float-right"
                    @click="show=false">
                  Close
                </b-button>
              </div>
            </template>
          </b-modal>
        </div>
      </b-col>
      <b-col cols="12" md="4">
        <div class="portfolio__work--item mx-auto">
        <img src="../assets/img/astronaut.svg" />
          <p>BitPay Careers Page</p>
          <p>Research, Illustrations and Development</p>
          <a><p>View on BitPay</p></a>
        </div>
      </b-col>
      <b-col cols="12" md="4">
        <div class="portfolio__work--item mx-auto">

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
    margin-bottom: 10rem;
    cursor: pointer;

    &--heading {
      margin-bottom: 3rem;

      &--container {
        padding-right: 7rem !important;
        @media screen and (min-width: 451px) and (max-width: 575px) {
          padding-right: 8rem !important;
        }
        @media screen and (max-width: 450px) {
          padding: 5rem !important;
        }
      }
    }

    &--item {
      background-color: blue;
      height: 100px;
      width: 200px;
      border-radius: 10px;

      &--image {
        width: 100%;
      }
    }
  }


</style>
