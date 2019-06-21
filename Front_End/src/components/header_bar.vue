// 顶部导航栏
<template>
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" id="header_bar">
  <el-menu-item >
    <div class="project_title">
      <!-- <a href="#"></a> -->
      <a  href="#/" style="text-decoration: none; color:#409EFF;">基于多层语义的个人身份识别系统</a>
    </div>
  </el-menu-item>
  
</el-menu>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
  #header_bar{
  }
  .project_title{
    font-size: 20px;
    
  }
</style>