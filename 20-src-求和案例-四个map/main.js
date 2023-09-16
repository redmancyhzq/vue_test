//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入store
import store from './store'
//关闭Vue的生产提示
Vue.config.productionTip = false
// event Bus 用于无关系组件间的通信。

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),//渲染
  // render: (createElement) => {
  //   return createElement(App)
  // }
  beforeCreate() {
    //
    Vue.prototype.$bus = this//安装全局事件总线，$bus就是当前的vm
  },
  store
})