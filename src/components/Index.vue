<template>
  <div>
  <div id="nav-container">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">INTRO</el-menu-item>
      <el-menu-item index="2">ABOUT</el-menu-item>
      <el-menu-item index="3" >EDUCATION</el-menu-item>
      <el-menu-item index="4">PROJECTS</el-menu-item>
      <el-menu-item index="5">CONTACT</el-menu-item>

    </el-menu>
  </div>
  <div>
    <div class="line"></div>
    <Intro id="page1"/>
    <About id="page2"/>
    <Education id="page3"/>

  </div>
  </div>
</template>

<script>
import Intro from './Intro'
import About from './About'
import Education from './Education'
export default {
  components: {Education, About, Intro},
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.activeIndex = key
      let pageId = document.querySelector('#page' + key)
      let nav = document.getElementById('nav-container')
      window.scrollTo({
        'top': pageId.offsetTop - nav.offsetHeight,
        'behavior': 'smooth'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-menu{
  float: right;
  }
  #nav-container{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
  }
</style>
