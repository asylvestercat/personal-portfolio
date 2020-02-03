<template id="app">
  <div>
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
    import NavBar from './components/NavBar.vue';
    // import PortfolioDivide from './components/portfolio--divide.vue'

    export default {
        name: 'App',
        components: {
          NavBar
            // PortfolioDivide
        }
    }
</script>


<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
