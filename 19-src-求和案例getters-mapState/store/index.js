/* *
 *该文件用于创建vuex中最为核心的store
 *
*/

import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
//使用vuex
Vue.use(Vuex)

//准备actions 用于响应组件的动作
const actions = {
  jia(context,value) { 
    console.log('actions中的jia被调用了',context);
    context.commit('JIA',value)
  },
  jian(context,value) {
    console.log('actions中的jian被调用了');
    context.commit('JIAN',value)
  },
  oddjia(context,value) {
    if(state.sum % 2 !== 0) {
      context.commit('ODDjIA',value)
    }
  },
  jiaWait(context,value) {
    setTimeout(() => {
      context.commit('JIAWAIT',value)
  },500)
  }
}

//准别mutations 用于操作数据 （state）
const mutations ={
  JIA(state,value) {
    console.log('mutations中的JIA被调用了',state);
    state.sum += value
  },
  JIAN(state,value) {
    state.sum -= value
  },
  ODDjIA(state,value){
      state.sum += value
  },
  JIAWAIT(state,value) {
    state.sum += value
  }
}

//准备state用于存储数据
const state = {
  sum : 0,
  school : '尚硅谷',
  subject: '前端'
}

//准备getters-- 用于对state中的数据进行加工
const getters = {
  bigSum(state) {
    return state.sum * 10
  }
}
//创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})