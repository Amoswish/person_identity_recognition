<template>
  <div id="app">
    <!-- 其他页 -->
    <el-container >
      <el-header >
        <!-- 导航栏 -->
          <header-nav></header-nav>
      </el-header>
    <el-container class="left_bar_container">
      <el-aside width="250px">
        <!-- 侧边栏 -->
          <left></left>
      </el-aside>
      <el-main>
        <!-- Body -->
         <router-view></router-view>
      </el-main>
    </el-container>
    </el-container>
 
    <!-- 登录页 -->
    <!-- <router-view ></router-view> -->
  </div>
</template>

<script>
import header from './components/header_bar.vue';
import left from './components/left_navigtion_bar.vue';

export default {
  name: 'App',
  components: {
        headerNav: header,
        left: left
      }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.left_bar_container{
  margin-top: 5px;
}
</style>
