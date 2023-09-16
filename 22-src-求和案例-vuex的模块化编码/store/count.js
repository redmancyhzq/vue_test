export default{
  namespaced: true,
  actions: {
    oddjia(context, value) {
      if (state.sum % 2 !== 0) {
        context.commit('ODDjIA', value)
      }
    },
    jiaWait(context, value) {
      setTimeout(() => {
        context.commit('JIAWAIT', value)
      }, 500)
    }
  },
  mutations: {
    JIA(state, value) {
      console.log('mutations中的JIA被调用了', state);
      state.sum += value
    },
    JIAN(state, value) {
      state.sum -= value
    },
    ODDjIA(state, value) {
      state.sum += value
    },
    JIAWAIT(state, value) {
      state.sum += value
    },
  },
  state: {
    sum: 0,
    school: '尚硅谷',
    subject: '前端',
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
    } 
  }
}