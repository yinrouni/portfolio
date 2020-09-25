<template>
  <div class="container">
    <div class="header">
      <el-divider/>
      <p>EDUCATION</p>
      <el-divider/>
    </div>

    <div class="content">
    <el-timeline>
      <el-timeline-item type="primary" size="large" icon="el-icon-check">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/12 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item type="primary" size="large">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/3 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item type="primary" size="large">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Education'
}
</script>

<style scoped>
  @import "../assets/style.css";
  .content{
    width: 80%;
    margin: auto;
  }

</style>
