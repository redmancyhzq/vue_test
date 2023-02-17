<template>
  <div class="Student">
    <h2>学校名称：{{name | mySlice}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="hello">点我测试一下hello方法</button>
  </div>
</template>

<script>
export default {
  name: 'school',
  data() {
    return {
      name:'北京大学atBeijing',
      address:'北京',
    }
  },
}
</script>

<style>
  .Student {
    background-color: gray;
  }
</style>