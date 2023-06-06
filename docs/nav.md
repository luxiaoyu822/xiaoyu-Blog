---
layoutClass: nav-layout
lastUpdated: false
---

<script setup>
    import NavData from './nav/data.ts'
    import NavLink from './.vitepress/components/NavLink.vue'
</script>
<style src="./nav/index.scss"></style>

# 前端导航

<NavLink v-for="{title,item} in NavData" :title='title' :item='item'/>
