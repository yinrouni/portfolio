<template>
  <div>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="INTRO" name="first"><Intro/></el-tab-pane>
    <el-tab-pane label="ABOUT" name="second"></el-tab-pane>
    <el-tab-pane label="EDUCATION" name="third"></el-tab-pane>
    <el-tab-pane label="PROJECTS" name="fourth"></el-tab-pane>
    <el-tab-pane label="CONTACT" name="fifth"></el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
import Intro from './Intro'
export default {
  components: {Intro},
  data () {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  .el-tabs__nav{
    float: right;

  }
</style>
