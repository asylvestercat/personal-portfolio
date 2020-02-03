<template>
  <div class="portfolio__nav">
    <ul>
      <li><a href="/"><img src="../assets/icons/icon--home.svg"/></a></li>
      <li><a href="/about"><img src="../assets/icons/icon--about.svg"/></a></li>
      <li><a href="/skills"><img src="../assets/icons/icon--skills.svg"/></a></li>
      <li><a href="/work"><img src="../assets/icons/icon--work.svg"/></a></li>
      <li><a href="/contact"><img src="../assets/icons/icon--contact.svg"/></a></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'PortfolioNav',
    }
</script>

<style lang="scss">

  .portfolio__nav {
    height: 100%;
    position: absolute;
    z-index: 10;
    display: flex;
    align-items: center;
  }
  .portfolio__nav ul {
    box-shadow: 1px 2px 6px 0px rgba(0,0,0,0.15);
    border-radius: 8px;
    display: inline-grid;
    margin: 10px 15px;
    padding: 25px 10px 25px 10px;
  }
  .portfolio__nav li {
    text-align: center;
    display: inline;
    margin-top: 20px;
    &:first-child {
      margin-top: 0;
    }
  }

</style>
