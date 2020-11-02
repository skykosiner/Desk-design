<template>
  <div class="Images">
      <div class="img">
        <img src="../assets/far.png" alt="">
        <img src="../assets/npm.png" alt="">
        <img src="../assets/react.png" alt="">
        <img src="../assets/mac.png" alt="">
      </div>
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
.img{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    position: relative;
    align-items: center;
    width: 80%;
    float: right;
    margin-right: 50px;
    margin-top: 5%;
}
.img img{
    width: 100%;
}
</style>
