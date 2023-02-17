/* 
  该文件是整个项目文件的入口文件
*/
import Vue from 'vue'
//引入App组件，踏实所有组件的父组件
import App from './App.vue'

//关闭vue的生产提示
Vue.config.productionTip = false

/* 
	关于不同版本的Vue：
	
		1.vue.js与vue.runtime.xxx.js的区别：
				(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
				(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

		2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
			render函数接收到的createElement函数去指定具体内容。
*/

//创建vue实例对象—————vm
new Vue({
  //el:'#app',
  //下面这行代码，完成了：将App组件放入容器中
  render: h => h(App),
  /*  
    render (createElement) {
      return createElement('h1','你好啊')
    } 
  */
  //render:createElement => createElement('h1','你好啊')
}).$mount('#app')//意思就是将ID为app的节点挂载到Vue上