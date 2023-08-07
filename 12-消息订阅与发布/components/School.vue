<template>
	<div class="demo">
		<h2 class="title">学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
import PubSub from 'pubsub-js';
	export default {
		name:'School',
		data() {
			return {
				name:'尚硅谷atguigu',
				address:'北京',
			}
		},
    methods: {
      receive(_,data) {
        console.log('我是School,我收到了数据',data);
      }
    },
    mounted() {
      //给数据接收者绑定自定义事件，第一个参数为事件名，第二个参数为回调函数,回调函数留着接收者自身
      //this.$bus.$on('sentStudentName',this.receive)
      //学校组件想接收学生名，在学校组件订阅消息
      var pid = PubSub.subscribe('receiveName',this.receive)
    },
    beforeDestroy() {
      //取消订阅
      PubSub.unsubscribe(pid)
    }
	}
</script>

<style scoped>
	.demo{
		background-color: skyblue;
	}
</style>