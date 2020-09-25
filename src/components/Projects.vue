<template>
  <div class="container">
    <div class="header">
      <el-divider/>
      PROJECTS
      <el-divider/>
    </div>
    <div class="content">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="Sleep Forest" name="first">
            <SleepForest/>
          </el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
  </div>

</template>

<script>
import SleepForest from './SleepForest'
export default {
  name: 'Projects',
  components: {SleepForest},
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>
  @import "../assets/style.css";

</style>
