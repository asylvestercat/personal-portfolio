<template>
  <div id="app">
    <PortfolioHero/>
  </div>
</template>

<script>
    import PortfolioHero from './components/portfolio--hero.vue'

    export default {
        name: 'app',
        components: {
            PortfolioHero
        }
    }
</script>

<style>
  @import "styles/main.scss";
</style>
