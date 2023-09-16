<template>
  <div class="container">
    <h1>人员列表</h1>
    <h1 style="color: red">Count 组件求和为{{ sum }}</h1>
    <h1>人员列表中第一个人的名字是:{{ firstPersonName }}</h1>
    <input type="text" placeholder="请输入人员姓名" v-model="name">
    <button @click="addPerson">添加</button>
    <button @click="addPersonWang">添加一个姓王的人</button>
    <button @click="addPersonServer">随机添加一句话</button>
    <ul v-for="p in PersonList" :key="p.id">
      <li>{{p.name}}</li>
    </ul>
  </div>
</template>


<script>
import { nanoid } from 'nanoid';
export default {
  name: "Person",
  data() {
    return {
      name:''
    }
  },
  computed: {
    PersonList() {
      return this.$store.state.personAbout.PersonObj
    },
    sum() {
      return this.$store.state.countAbout.sum
    },
    firstPersonName() {
      return this.$store.getters['personAbout/firstPersonName']
    }
  },
  methods: {
    addPerson() {
      const PersonObj = {id : nanoid(), name: this.name}
      this.$store.commit('personAbout/ADD_PERSON',PersonObj)
      this.name = ''
    },
    addPersonWang() {
      const PersonObj = {id : nanoid(), name: this.name}
      //dispatch 与 actions 对话
      this.$store.dispatch('personAbout/addPersonWang',PersonObj)
      this.name = ''
    },
    addPersonServer() {
      this.$store.dispatch('personAbout/addPersonServer')
    }
  }
 
};
</script>

<style lang="css" scoped>
button{
  margin-left: 5px;
}
</style>
