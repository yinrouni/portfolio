<template>
  <div class="container">
    <img src="./../assets/background.jpg" style="width: 100%; height: 100%"/>

    <div class="name">
      <h1 style="font-size: 3em">Rouni Yin </h1>
      <h2>Computer Science Graduate Student at Northeastern University</h2>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Intro'
}
</script>

<style scoped>
  @import "../assets/style.css";
  .name{
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
