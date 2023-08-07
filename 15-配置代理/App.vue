<template>
  <div class="app">
    <button @click="getStudentsMsg">获取学生信息</button>
    <button @click="getCarsMsg">获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: {
    getStudentsMsg() {
      //get('请求学生信息的地址')
      //发到代理服务器，由代理服务器转发到后端服务器请求数据
      axios.get("http://localhost:8080/api/students").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.massage);
        }
      );
      //以上方式请求出现跨域问题，违背了同源策略（主机名协议名端口号一致），主机端口号为8080，服务器端口号为5000
      //解决方式：1. cors(后端人员配置) 2.jsonp (借助script 标签里的src属性，在引入外部资源的时候不受同源策略限制，但只能解决get请求)
      //          3. 常用：前端人员配配置一个代理服务器，用它来发送请求（中介）代理服务器和主机端口号保持一致，服务器和服务器之间通信用http请求，同源策略不管
      //开启一个代理服务器有两种方式：1.Nginx 2.vue-cli（dev.server.proxy）
    },
    getCarsMsg() {
      axios.get("http://localhost:8080/demo/cars").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.massage);
        }
      );
    },
  },
};
</script>

<style scoped>
</style>
