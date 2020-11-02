<template>
  <div class="home">
    <h1 class="title">Desk design</h1>
    <Images />
    <Footer />
  </div>
</template>

<script>
// Components
import Images from '../components/Image';
import Footer from '../components/Footer'
// Global css
import '../App.css'

export default {
  name: 'Home',
  components: {
    Images,
    Footer
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