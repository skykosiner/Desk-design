<template>
  <div class="Images">
      <img src="../assets/far.png" alt="">
      <img src="../assets/npm.png" alt="">
      <img src="../assets/react.png" alt="">
      <img src="../assets/mac.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'Images',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.Images{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: -10%;
    position: relative;
    align-items: center;
    width: auto;
    float: right;
    margin-top: 5%;
}
.img img{
    width: 100%;
} 
</style>
