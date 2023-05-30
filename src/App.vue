<template>
  <el-container>
    <el-header height="55px"><navbar /></el-header>
    <el-main><router-view /></el-main>
  </el-container>
</template>
<script setup>
import Navbar from './components/Navbar'
import { ElContainer, ElHeader, ElMain } from 'element-plus'
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: Quotes, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}
::-webkit-scrollbar {
  width: 3px;
  height: 3px;
  position: absolute;
}
::-webkit-scrollbar-thumb {
  background: #92c4da;
}
::-webkit-scrollbar-track {
  background: #42839f;
}
</style>
