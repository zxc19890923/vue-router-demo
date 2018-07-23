<template>
  <div id="app">
    <!-- 共用组件 -->
    <menu-list></menu-list>
    <!-- 路由基座 -->
    <router-view></router-view>
  </div>
</template>

<script>
import MenuList from './components/MenuList'
export default {
  name: 'App',
  components: {
    MenuList
  }
}
</script>

<style scoped>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50
  }
</style>
