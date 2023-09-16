//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
//关闭Vue的生产提示
Vue.config.productionTip = false
// event Bus 用于无关系组件间的通信。

Vue.use(VueRouter)
//创建vm
new Vue({
	el:'#app',
	render: h => h(App),//渲染
  router: router
})