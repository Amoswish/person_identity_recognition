//左侧导航栏
<template> 
   <div>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-submenu index="1">
        <template slot="title">
            <i class="el-icon-s-open"></i>
            <span slot="title">1.数据处理</span>
        </template>
        <el-menu-item-group>
        <!-- <span slot="title"></span> -->
        <el-menu-item index="1-1"><a href="#/delete_drift_point">漂移点去除</a></el-menu-item>
        <el-menu-item index="1-2"><a href="#">空白点内插</a></el-menu-item>
        <el-menu-item index="1-3"><a href="#">逗留点提取</a></el-menu-item>
        <el-menu-item index="1-4" disabled><a href="#">逗留点语义分配</a></el-menu-item>
        </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
        <template slot="title">  
            <i class="el-icon-menu"></i>
            <span slot="title">2.行为模式提取</span>
        </template>
        <el-menu-item-group>
        <!-- <span slot="title"></span> -->
        <el-menu-item index="2-1"><a href="#">TopN特征模式提取</a></el-menu-item>
        <el-menu-item index="2-2"><a href="#">活动范围模式提取</a></el-menu-item>
        <el-menu-item index="2-3" disabled><a href="#">居住地特征模式提取</a></el-menu-item>
        <el-menu-item index="2-4" disabled><a href="#">基于工作地提取</a></el-menu-item>
        <el-menu-item index="2-5"><a href="#">基于天的精准提取</a></el-menu-item>
        </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3" >
        <template slot="title">  
            <i class="el-icon-document"></i>
            <span slot="title">3.个人身份识别</span>
        </template>
        <el-menu-item-group>
        <!-- <span slot="title"></span> -->
        <el-menu-item index="3-1"><a href="#">TopN方法粗识别</a></el-menu-item>
        <el-menu-item index="3-2"><a href="#">基于居住地识别</a></el-menu-item>
        <el-menu-item index="3-3" disabled><a href="#">基于工作地识别</a></el-menu-item>
        <el-menu-item index="3-4"><a href="#">基于天地精准识别</a></el-menu-item>
        </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4" >
        <template slot="title">  
            <i class="el-icon-s-data"></i>
            <span slot="title">4.异常行为识别</span>
        </template>
        <el-menu-item-group>
        <!-- <span slot="title"></span> -->
        <el-menu-item index="4-1"><a href="#">敏感地区的异常行为识别</a></el-menu-item>
        <el-menu-item index="4-2" disabled><a href="#">个人异常行为识别</a></el-menu-item>
        </el-menu-item-group>
    </el-submenu>
    <el-submenu index="5" >
        <template slot="title" >
            <i class="el-icon-s-marketing"></i>
            <span slot="title">5.图谱表示</span>
        </template>
        <el-menu-item-group>
        <!-- <span slot="title"></span> -->
        <el-menu-item index="5-1"><a href="#">二维图谱</a></el-menu-item>
        <el-menu-item index="5-2" disabled><a href="#">三维图谱</a></el-menu-item>
        </el-menu-item-group>
    </el-submenu>
    <el-submenu index="6" disabled>

        <template slot="title">
          <i class="el-icon-data-analysis"></i>
          <span slot="title">6.识别精度评定</span>
        </template>
    </el-submenu>
    <!-- 控制侧边栏开关 -->
    <el-tooltip :content="'打开/隐藏侧边栏'" placement="top">
      <el-switch v-model="isCollapse" active-color="#ff4949" inactive-color="#13ce66"></el-switch>
    </el-tooltip>
    </el-menu>
    
   </div>
</template>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  a:visited {color:gray;} /* 已被访问的链接 */
  a:hover {text-transform:uppercase;}   /* 鼠标指针移动到链接上 */
  a:link{text-decoration:none;} /*下划线样式*/
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>