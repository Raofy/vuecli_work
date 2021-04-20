<template>
<el-container>
  <el-header>后台管理</el-header>
  <el-container>
    <el-aside width="200px">
    <!--添加router属性-->
    <el-menu :default-openeds="['1']" background-color="#d3dce6" router >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>导航菜单
        </template>
        <el-menu-item-group>
          <el-menu-item index="/course"><i class="el-icon-menu"></i>菜单管理</el-menu-item>
          <el-menu-item index="/tree"><i class="el-icon-menu"></i>树形控件</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    </el-aside>
    <el-main>
        <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>
 .el-container {
     height: 720px;
 }
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>