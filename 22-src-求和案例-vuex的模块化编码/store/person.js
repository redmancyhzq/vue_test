import axios from "axios"
import { nanoid } from "nanoid"

export default {
  namespaced: true,
  actions: {
    addPersonWang(context,value) {
      if(value.name.indexOf(0) === '王') {
        context.commit('ADD_PERSON',value)
      }else{
        alert("添加的人名必须姓王")
      }
    },
    addPersonServer(context) {
      axios.get('https://api.wrdan.com').then(
        response => {
          //context.commit('ADD_PERSON',{id: nanoid(), name: response.data})
          console.log(response.data.text);
        },
        error =>{
          alert(error.message)
        }
      )
    }
  },
  mutations: {
    ADD_PERSON(state, value) {
      //state.PersonObj.unshift(value)
      state.PersonObj.unshift(value)
    }
  },
  state: {
    PersonObj: [
      { id: '001', name: '张三' }
    ]
  },
  getters: {
    //此处的state只是关于personOptions的
    firstPersonName(state) {
      return state.PersonObj[0].name
    }
  }
}