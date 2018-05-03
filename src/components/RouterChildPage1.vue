<template>
<div id="app">
  <div>{{msg}}-{{$route.params.username}} - {{$route.params.id}}</div>
</div>
</template>

<script>
export default {
  name: 'RouterChildPage',
  data () {
    return {
      'msg': '路由子页面'
    }
  }

}
</script>

<style scoped>

</style>
