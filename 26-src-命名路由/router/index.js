import VueRouter from 'vue-router'

//引入组件
import Home from '../pages/Home'
import About from '../pages/About'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'
export default new VueRouter({
  routes:[
    {
      path:'/home',
      component: Home,
      children:[
        {
          name: 'xiaoxi',
          path:'message',
          component: Message,
          children:[
            {
              path:'detail',
              component: Detail
            }
          ]
        },
        {
          path:'news',
          component: News
        },
      ]
    },
    {
      path:'/about',
      component: About,

    },
  ]
})