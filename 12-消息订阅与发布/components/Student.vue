<template>
	<div class="demo">
		<h2 class="title">学生姓名：{{name}}</h2>
		<h2 class="atguigu">学生性别：{{sex}}</h2>
	</div>
</template>

<script>
import pubsub from 'pubsub-js'
	export default {
		name:'Student',
		data() {
			return {
				name:'张三',
				sex:'男'
			}
		},
    mounted() {
      //传送数据,使用$emit,第一个参数为事件名,第二个参数为回调函数的传参
      //this.$bus.$emit('sentStudentName',this.name)

      //提供数据,发布消息
      pubsub.publish('receiveName',this.name)
    },
	}
</script>

<style lang="less" scoped>
	.demo{
		background-color: yellow;
		.atguigu{
			font-size: 40px;
      padding-bottom: 20px;
		}
	}
</style>
