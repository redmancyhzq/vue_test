<template>
  <div class="container">
    <h1>人员列表</h1>
    <h1 style="color: red">Count 组件求和为{{ sum }}</h1>
    <input type="text" placeholder="请输入人员姓名" v-model="name">
    <button @click="addPerson">添加</button>
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
      return this.$store.state.PersonObj
    },
    sum() {
      return this.$store.state.sum
    }
  },
  methods: {
    addPerson() {
      const PersonObj = {id : nanoid(), name: this.name}
      this.$store.commit('ADD_PERSON',PersonObj)
      this.name = ''
    }
  }
 
};
</script>

<style lang="css" scoped>
button{
  margin-left: 5px;
}
</style>
