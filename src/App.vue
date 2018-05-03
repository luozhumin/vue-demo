<template>
  <div id="app">
    <p>{{ $route.name}}  </p>
    <img src="./assets/logo.png">
    <p>导航
      <router-link to="/">首页</router-link>
      <router-link to="/hi/198/jspang websit is very good">hi页面</router-link>
      <router-link :to="{name:'hi1',params:{username:'jspang',id:888}}">hi子页面</router-link>
    </p>

    <router-view></router-view>
    <router-view name="leftPage" style="float:left;width: 50%;height: 300px;background:pink;"></router-view>
    <router-view name="rightPage" style="float:right;width: 50%;height: 300px;background:deepskyblue"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
