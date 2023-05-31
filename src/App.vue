<template>
  <div class="container">
    <el-container>
      <el-header style="padding: 0"><navbar /></el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </div>
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
  width: 0.1875rem;
  height: 0.1875rem;
  position: absolute;
}
::-webkit-scrollbar-thumb {
  background: #92c4da;
}
::-webkit-scrollbar-track {
  background: #5998b2;
}
.container {
  background-color: var(--bg-color);
  color: var(--text-color);
}
:root:not([data-theme='dark']) {
  --bg-color: #fff;
  --text-color: #333;
}
:root[data-theme='dark'] {
  --bg-color: #333;
  --text-color: #fff;
}
</style>
