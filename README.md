# vue-demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
在Vue中关闭Eslint 的方法
build文件夹--->webpack.base.conf.js---->module


router-link制作导航
<router-link to="/">[显示字段]</router-link>

vue-router配置子路由
<router-link to="/hi/hi1">hi子页面</router-link>
子路由写法
 {
      path: '/hi',
      component: Hi,
      children: [
        {
          path: 'hi1',
          component :RouterChildPage1
        }
       ]
 }

vue-router传参

1,用name传递参数
<p>{{ $route.name}}</p>

2,通过<router-link>标签中的to传参
<router-link :to="{name:'hi1',params:{key:value}}"></router-link>
{{$route.params.key}}

3,url传参
<router-link to="/hi/198/jspang websit is very good">hi页面</router-link>
path: '/hi/:newsId/:newsTitle'
{{$route.params.newsId}}

单页面多路由区域操作
<router-view></router-view>
<router-view name="leftPage" style="float:left;width: 50%;height: 300px;background:pink;"></router-view>
<router-view name="rightPage" style="float:right;width: 50%;height: 300px;background:deepskyblue"></router-view>

{
    path: '/',
    name: 'HelloWorld',
    components:{
      default:HelloWorld,
      leftPage:Left,
      rightPage:Right
    }
}








