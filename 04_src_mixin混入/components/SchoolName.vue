<template>
  <div class="Student">
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
//引入一个混合
import {mixin} from '../mixin'
export default {
  name: 'school',
  data() {
    return {
      name:'北京大学',
      address:'北京',
    }
  },
  mixins:[mixin]
}
</script>

<style>
  .Student {
    background-color: gray;
  }
</style>