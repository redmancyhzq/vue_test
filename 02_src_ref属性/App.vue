<template>
  <div>
    <h1 v-text="msg" ref='title'></h1>
    <button ref='btn' @click="ShowDom">点我输出上方的DOM元素</button>
    <school-msg ref='sch'></school-msg>
    <school-msg id="sch"></school-msg>
  </div>
</template>

<script>
import SchoolMsg from './components/SchoolMsg.vue'
export default {
  components: { SchoolMsg },
  data() {
    return {
      msg:'欢迎学习Vue'
    }
  },
  methods: {
    ShowDom() {
      //console.log(this.$refs)
      //console.log(document.getElementById('sch'));
      console.log(this.$refs.sch)//真实DOM元素
      console.log(this.$refs.title)//真实DOM元素
      console.log(this.$refs.btn)//真实DOM元素

    }
  }
  
}
</script>

<style>

</style>