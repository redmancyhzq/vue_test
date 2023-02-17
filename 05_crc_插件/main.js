import Vue from 'vue'
import App from './App.vue'

//引入插件要在创建vm之前
import plugins from './plugins'

Vue.config.productionTip = false

//使用插件
Vue.use(plugins,3,4,5)

new Vue ({
  render: h => h(App)
}).$mount('#app')