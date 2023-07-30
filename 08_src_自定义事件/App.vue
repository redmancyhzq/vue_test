<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <!-- 子给父传递数据的两种方式 -->
    <!-- 通过父组件给子组件传递函数类型的props实现子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />

    <!-- Student实例上绑定了一个sent自定义事件，事件被触发demo函数就会被调用，第一种写法使用v-on或@ -->
    <!-- <Student v-on:sent="getStudentName"/> -->
    <Student @sent="getStudentName" @demo="m1" />

    <!-- 第二种写法使用ref -->
    <!-- <Student ref="student"/> -->
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";

export default {
  name: "App",
  components: { School, Student },
  data() {
    return {
      msg: "你好啊",
    };
  },
    methods: {
    getSchoolName(name) {
      console.log("222");
      console.log("app收到了学校名", name);
    },
    getStudentName(name, ...params) {
      console.log("getStudentName收到了学生名", name, params);
    },
    m1() {
      console.log("demo事件被触发了");
    },
  },
  mounted() {
    //拿到组件实例对象，这种用法较灵活，实习延迟需求
    //this.$refs.Student.$on('sent',this.getStudentName)
    //只能触发一次
    //this.$refs.Student.$once('sent',this.getStudentName)
  },
};
</script>

<style scoped>
.title {
  color: red;
}
.app {
  background-color: gray;
  padding: 5px;
}
</style>
