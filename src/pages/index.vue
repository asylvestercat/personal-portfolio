<template>
  <div id="app">
    <NavBar />
    <PortfolioHero/>
    <!--    <PortfolioDivide/>-->
  </div>
</template>

<script>
    import NavBar from '../components/portfolio--nav-bar.vue';
    import PortfolioHero from '../components/portfolio--hero.vue'
    // import PortfolioDivide from './components/portfolio--divide.vue'

    export default {
        name: 'app',
        components: {
            NavBar,
            PortfolioHero,
            // PortfolioDivide
        }
    }
</script>

<style>
  @import "../styles/main.scss";
</style>
