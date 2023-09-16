import VueRouter from 'vue-router'

//引入组件
import Home from '../components/Home'
import About from '../components/About'
export default new VueRouter({
  routes:[
    {
      path:'/Home',
      component: Home
    },
    {
      path:'/About',
      component: About
    },
  ]
})