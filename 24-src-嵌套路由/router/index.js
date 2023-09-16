import VueRouter from 'vue-router'

//引入组件
import Home from '../pages/Home'
import About from '../pages/About'
import Message from '../pages/Message'
import News from '../pages/News'
export default new VueRouter({
  routes:[
    {
      path:'/home',
      component: Home,
      children:[
        {
          path:'message',
          component: Message
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