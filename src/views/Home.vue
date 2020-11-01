<template>
  <div class="home">
    <h1 class="title">Desk design</h1>
    <Images />
  </div>
</template>

<script>
// @ is an alias to /src
import Images from '../components/Image';
import '../App.css'

export default {
  name: 'Home',
  components: {
    Images
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