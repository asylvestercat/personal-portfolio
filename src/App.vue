<template id="app">
  <div>
    <NavBar id="nav"/>
    <Home id="home" />
    <About id="about" />
    <Skills id="skills" />
    <Work id="work" />
  </div>
</template>

<script>
    import NavBar from './components/NavBar.vue';
    import Home from './components/Home.vue';
    import About from './components/About.vue';
    import Skills from './components/Skills.vue';
    import Work from './components/Work.vue'


    export default {
        name: 'App',
        components: {
            NavBar,
            Home,
            About,
            Skills,
            Work
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
