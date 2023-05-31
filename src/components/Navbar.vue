<template>
  <div class="navbar">
    <el-menu class="el-menu-demo" mode="horizontal" :router="true">
      <div class="left-container">
        <img src="@/assets/logo.png" style="width: 24px" />
        <div class="text">xiaoyu's blog</div>
      </div>
      <div class="right-container">
        <el-menu-item index="/index">首页</el-menu-item>
        <el-sub-menu
          index=""
          :show-timeout="0"
          :hide-timeout="100"
          popper-class="popper"
        >
          <template #title><span>前端物语</span></template>
          <el-menu-item
            style="background-color: white"
            index="/frontend-navigation/ai-navigation"
          >
            AI导航
          </el-menu-item>
          <el-menu-item
            style="background-color: white"
            index="/frontend-navigation/vue-navigation"
          >
            Vue导航
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/note">笔记</el-menu-item>
        <el-menu-item index="/individual">xiaoyu's</el-menu-item>
        <div><button @click="handleToogle">toogle</button></div>
        <div>{{ store.state.theme }}</div>
      </div>
    </el-menu>
  </div>
</template>
<script setup>
import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus'
import { useStore } from 'vuex'
const store = useStore()

const handleToogle = () => {
  store.commit('toogleTheme')
}
</script>
<style lang="scss" scoped>
.navbar {
  .el-menu {
    width: 60%;
    margin: 0 auto;
    border-bottom: 0;
    justify-content: space-between;
    .el-menu-item:hover {
      background-color: white;
    }
    :deep .el-sub-menu__title:hover {
      background-color: white;
    }
    .el-menu-item.is-active {
      background-color: white;
    }
    .left-container {
      display: flex;
      align-items: center;
      align-content: center;
      .text {
        line-height: 56px;
      }
    }
    .right-container {
      display: flex;
      align-items: center;
    }
  }
}
</style>
