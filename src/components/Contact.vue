<template>
  <div class="container">
    <div class="header">
      <el-divider/>
      Contact Me
      <el-divider/>
    </div>
    <div class="content">
      <p>Feel free to drop a message</p>
      <el-button type="primary" plain>
        Send Email
      </el-button>

      <br/>
      <br/>

      <p> Connect with me</p>
      <img class="icon" src="../../static/icon/github.png"/>
      <img class="icon" src="../../static/icon/linkedin.png"/>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
  @import "../assets/style.css";
  .icon{
    width: 50px;
  }

</style>
