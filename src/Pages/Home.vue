<template>
  <div class="home">
    <h1 class="title">Desk design</h1>
    <Images />
    <About />
  </div>  
</template>

<script>
// Components
import Images from '../components/Image';
import About from '../components/About'
// Global css
import '../App.css'

export default {
  name: 'Home',
  components: {
    Images,
    About,
  }
}
</script>
<style scoped>
  .title{
    position: absolute;
    top: 20%;
    font-size: 54px;
    font-family: 'Roboto', sans-serif;
  }
</style>