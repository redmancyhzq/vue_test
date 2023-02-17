<template>
  <div class="Student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <input type="text" v-bind:value="name">
  </div>
</template>

<script>
export default {
  name: 'student',
  data() {
    return {
      name:'张三',
      sex:'男',
    }
  },

}
</script>

<style>
  .Student {
    background-color: gray;
  }
</style>