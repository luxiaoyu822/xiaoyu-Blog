<template>
  <div class="navbar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
    >
      <div class="left-container">
        <el-menu-item index="1">首页</el-menu-item>
      </div>
      <div class="right-container">
        <el-menu-item index="1">首页</el-menu-item>
        <el-sub-menu index="2">
          <template #title>前端物语</template>
          <el-menu-item index="2-1">AI导航</el-menu-item>
          <el-menu-item index="2-2">vue导航</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="3">笔记</el-menu-item>
        <el-menu-item index="4">xiaoyu's</el-menu-item>
      </div>
    </el-menu>
  </div>
</template>
<script setup>
import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus'
</script>
<style lang="scss" scoped>
.navbar {
  .el-menu {
    padding: 0 200px;
    justify-content: space-between;
    .right-container {
      display: flex;
    }
  }
}
</style>
