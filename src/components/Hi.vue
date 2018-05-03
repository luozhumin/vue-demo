<template>
<div id="hi">
  <p>{{msg}}</p>
  <p>新闻ID：{{ $route.params.newsId}}</p>
  <p>新闻内容:{{$route.params.newsTitle}}</p>
  <router-view class="child_page"></router-view>
</div>
</template>

<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: 'hi page'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
