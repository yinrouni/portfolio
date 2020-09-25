<template>
<div class="container">
  <div class="header">
    <el-divider/>
    ABOUT
    <el-divider/>
  </div>
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="14">
          <el-button plain type="primary">
            Resume
          </el-button>
        </el-col>

        <el-col :span="10">
          <div style="text-align: left">

          <p class="sub-header">
            Programming Languages
          </p>
          <p>
            Java, JavaScript, Python, C, HTML5, CSS3, Elixir
          </p>
            <br/>
            <p class="sub-header">
              Databases
            </p>
            <p>
              MySQL, PostgresSQL
            </p>

            <br/>
            <p class="sub-header">
              Libraries & Frameworks
            </p>
            <p>
              Vue.js, React.js, Node.js, Bootstrap, SemanticUI React, ElementUI
            </p>

            <br/>
            <p class="sub-header">
              Tools
            </p>
            <p>
              Git, Agile, MATLAB
            </p>
          </div>
        </el-col>

      </el-row>

    </div>
</div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
  @import "../assets/style.css";

</style>
