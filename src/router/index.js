import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import RouterChildPage1 from '@/components/RouterChildPage1'
import Left from  '@/components/Left'
import  Right from '@/components/Right'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components:{
        default:HelloWorld,
        leftPage:Left,
        rightPage:Right
      }
    },
    {
      path: '/hi/:newsId/:newsTitle',
      name:"hi",
      component: Hi,
      children: [
        {
          path: 'hi1',
          name:"hi1",
          component :RouterChildPage1
        }
       ]
    }
  ]
})
