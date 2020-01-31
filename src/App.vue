<template>
  <div id="app">
    <PortfolioHero/>
    <PortfolioDivide/>
  </div>
</template>

<script>
    import PortfolioHero from './components/portfolio--hero.vue'
    import PortfolioDivide from './components/portfolio--divide.vue'

    export default {
        name: 'app',
        components: {
            PortfolioHero,
            PortfolioDivide
        }
    }
</script>

<style>
  @import "styles/main.scss";
</style>
