<template>
  <b-container class="portfolio__work">
    <b-row align-v="center" class="portfolio__work--heading text-left">
      <b-col cols="12" md="9" lg="7" offset-md="3" offset-lg="5" class="portfolio__work--heading--container">
        <h2 class="text__heading-lead color__dark-pink text-right">Work</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="4">
        <div class="portfolio__work--item mx-auto text-center">
          <div v-b-modal.modal-1 class="portfolio__work--item--button--careers mx-auto"></div>
          <p class="text__sub-heading color__medium-gray mt-4">BitPay Careers Page</p>
          <p class="color__light-gray">Research, Illustrations and Development</p>
          <a href="https://bitpay.com/careers" target="_blank"><p class="portfolio__work--item--link color__light-gray">View on BitPay</p></a>
            <b-modal id="modal-1" title="BitPay Careers Page">
              <img src="../assets/img/careers-page.png" class="portfolio__work--item--image" />
              <template v-slot:modal-footer>
                <div class="w-100">
                  <p class="color__medium-gray">Assignment:</p>
                  <p>Research and develop a professional, yet fun careers page to attract new hires to BitPay.</p>
                  <p class="color__medium-gray">Technology Used:</p>
                  <p>Vue.js, Bootstrap Vue, Axios, JazzHR API, Adobe Illustrator, Sketch</p>
                </div>
              </template>
            </b-modal>
          </div>
      </b-col>
      <b-col cols="12" md="4">
        <div class="portfolio__work--item mx-auto text-center">
          <div v-b-modal.modal-2 class="portfolio__work--item--button--pricing mx-auto"></div>
          <p class="text__sub-heading color__medium-gray mt-4">BitPay Pricing Page</p>
          <p class="color__light-gray">Research, Design and Development</p>
          <a href="https://bitpay.com/pricing" target="_blank"><p class="portfolio__work--item--link color__light-gray">View on BitPay</p></a>
          <b-modal id="modal-2" title="BitPay Pricing Page">
            <img src="../assets/img/pricing-page.png" class="portfolio__work--item--image" />
            <template v-slot:modal-footer>
              <div class="w-100">
                <p class="color__medium-gray">Assignment:</p>
                <p>Research, design and develop a pricing page that clearly demonstrates BitPay's pricing model.</p>
                <p class="color__medium-gray">Technology Used:</p>
                <p>Vue.js, Bootstrap Vue, Adobe Illustrator, Sketch</p>
              </div>
            </template>
          </b-modal>
        </div>
      </b-col>
      <b-col cols="12" md="4">
        <div class="portfolio__work--item mx-auto text-center">
          <div v-b-modal.modal-3 class="portfolio__work--item--button--error mx-auto"></div>
          <p class="text__sub-heading color__medium-gray mt-4">BitPay 404 Page</p>
          <p class="color__light-gray">Research, Illustrations and Development</p>
          <a href="https://bitpay.com/abcdefg" target="_blank"><p class="portfolio__work--item--link color__light-gray">View on BitPay</p></a>
          <b-modal id="modal-3" title="BitPay 404 Page">
            <img src="../assets/img/404-page.png" class="portfolio__work--item--image" />
            <template v-slot:modal-footer>
              <div class="w-100">
                <p class="color__medium-gray">Assignment:</p>
                <p>Research, illustrate and develop a 404 page that is fun and redirects users back home.</p>
                <p class="color__medium-gray">Technology Used:</p>
                <p>Vue.js, Bootstrap Vue, Adobe Illustrator, Sketch</p>
              </div>
            </template>
          </b-modal>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="4">
        <div class="portfolio__work--item mx-auto text-center">
          <div v-b-modal.modal-4 class="portfolio__work--item--button--gdpr mx-auto"></div>
          <p class="text__sub-heading color__medium-gray mt-4">BitPay Cookies Manager</p>
          <p class="color__light-gray">Research, Design and Development</p>
          <b-modal id="modal-4" title="BitPay Cookies Manager">
            <img src="../assets/img/gdpr-1.png" class="portfolio__work--item--image" />
            <br /><br/>
            <img src="../assets/img/gdpr-2.png" class="portfolio__work--item--image" />
            <template v-slot:modal-footer>
              <div class="w-100">
                <p class="color__medium-gray">Assignment:</p>
                <p>Research, design and develop a pop up banner and cookies manager to use across all BitPay applications.</p>
                <p class="color__medium-gray">Technology Used:</p>
                <p>Vanilla Javascript, CSS</p>
              </div>
            </template>
          </b-modal>
        </div>
      </b-col>
      <b-col cols="12" md="4">
        <div class="portfolio__work--item mx-auto text-center">
          <div v-b-modal.modal-5 class="portfolio__work--item--button--card mx-auto"></div>
          <p class="text__sub-heading color__medium-gray mt-4">BitPay Card Page</p>
          <p class="color__light-gray">Development</p>
          <b-modal id="modal-5" title="BitPay Card Page">
            <img src="../assets/img/card-page.png" class="portfolio__work--item--image" />
            <template v-slot:modal-footer>
              <div class="w-100">
                <p class="color__medium-gray">Assignment:</p>
                <p>Develop the new BitPay card page with ip geolocation functionality and Marketo forms.</p>
                <p class="color__medium-gray">Technology Used:</p>
                <p>Vue.js, Bootstrap Vue, Sketch, Marketo, Axios</p>
              </div>
            </template>
          </b-modal>
        </div>
      </b-col>
      <b-col cols="12" md="4">
        <div class="portfolio__work--item mx-auto text-center">
          <div v-b-modal.modal-6 class="portfolio__work--item--button--emails mx-auto"></div>
          <p class="text__sub-heading color__medium-gray mt-4">BitPay Emails</p>
          <p class="color__light-gray">Research, Design and Development</p>
          <b-modal id="modal-6" title="BitPay Emails">
            <img src="../assets/img/emails-1.png" class="portfolio__work--item--image" />
            <br /><br />
            <img src="../assets/img/emails-2.png" class="portfolio__work--item--image" />
            <template v-slot:modal-footer>
              <div class="w-100">
                <p class="color__medium-gray">Assignment:</p>
                <p>Design and re-skin 115 platform emails for brand consistency.</p>
                <p class="color__medium-gray">Technology Used:</p>
                <p>Handlebars</p>
              </div>
            </template>
          </b-modal>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    export default {
        name: 'Work',
        data() {
            return {
                show: false,
            }
        }
    }
</script>

<style lang="scss">

  .portfolio__work {
    margin-top: 14rem;
    margin-bottom: 4rem;

    &--heading {
      margin-bottom: 3rem;

      &--container {
        padding-right: 4rem !important;
        @media screen and (min-width: 451px) and (max-width: 575px) {
          padding-right: 8rem !important;
        }
        @media screen and (max-width: 450px) {
          padding: 5rem !important;
        }
      }
    }

    &--item {
      margin-bottom: 5rem;

      &--image {
        width: 100%;
      }

      &--button--careers {
        cursor: pointer;
        box-shadow: 1px 2px 6px 0px rgba(0,0,0,0.15);
        width: 290px;
        height: 250px;
        padding: 25px;
        background: url("../assets/icons/careers-page--icon.png") no-repeat;
        background-size: 100% 100%;
        border-radius: 10px;
        @media screen and (max-width: 991px) and (min-width: 768px) {
          width: 182px;
          height: 175px;
        }
        &:focus {
          outline-color: white;
        }
      }

      &--button--pricing {
        cursor: pointer;
        box-shadow: 1px 2px 6px 0px rgba(0,0,0,0.15);
        width: 290px;
        height: 250px;
        padding: 25px;
        background: url("../assets/icons/pricing-page--icon.png") no-repeat;
        background-size: 90% 100%;
        border-radius: 10px;
        @media screen and (max-width: 991px) and (min-width: 768px) {
          width: 182px;
          height: 175px;
        }
        &:focus {
          outline-color: white;
        }
      }

      &--button--error {
        cursor: pointer;
        box-shadow: 1px 2px 6px 0px rgba(0,0,0,0.15);
        width: 290px;
        height: 250px;
        padding: 25px;
        background: url("../assets/icons/404-page--icon.png") no-repeat;
        background-size: 95% 107%;
        border-radius: 10px;
        @media screen and (max-width: 991px) and (min-width: 768px) {
          width: 182px;
          height: 175px;
        }
        &:focus {
          outline-color: white;
        }
      }

      &--button--gdpr {
        cursor: pointer;
        box-shadow: 1px 2px 6px 0px rgba(0,0,0,0.15);
        width: 290px;
        height: 250px;
        padding: 25px;
        background: url("../assets/icons/gdpr--icon.png") no-repeat;
        background-size: 100% 100%;
        border-radius: 10px;
        @media screen and (max-width: 991px) and (min-width: 768px) {
          width: 182px;
          height: 175px;
        }
        &:focus {
          outline-color: white;
        }
      }

      &--button--card {
        cursor: pointer;
        box-shadow: 1px 2px 6px 0px rgba(0,0,0,0.15);
        width: 290px;
        height: 250px;
        padding: 25px;
        background: url("../assets/icons/card--icon.png") no-repeat;
        background-size: 95% 107%;
        border-radius: 10px;
        @media screen and (max-width: 991px) and (min-width: 768px) {
          width: 182px;
          height: 175px;
        }
        &:focus {
          outline-color: white;
        }
      }

      &--button--emails {
        cursor: pointer;
        box-shadow: 1px 2px 6px 0px rgba(0,0,0,0.15);
        width: 290px;
        height: 250px;
        padding: 25px;
        background: url("../assets/icons/emails--icon.png") no-repeat;
        background-size: 100% 109%;
        border-radius: 10px;
        @media screen and (max-width: 991px) and (min-width: 768px) {
          width: 182px;
          height: 175px;
        }
        &:focus {
          outline-color: white;
        }
      }

      &--link:hover {
        color: #EF7E94;
        cursor: pointer;
      }
    }
  }


</style>
