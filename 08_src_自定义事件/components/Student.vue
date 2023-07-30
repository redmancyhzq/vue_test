<template>
	<div class="student">
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
    <button @click="sendStudentName">把学生名给app</button>
    <button @click="unbind">解绑sent事件</button>
  </div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			return {
				name:'张三',
				sex:'男'
			}
		},
    methods: {
      sendStudentName() {
        //$emit函数：触发
        //触发Student组件实例身上的sent事件
        this.$emit('sent',this.name,666,888,999)
        this.$emit('demo')
      },
      unbind() {
        //只适用于解绑一个自定义事件
        this.$off('sent')
        //适用于解绑多个事件
        //this.$off(['sent','m1'])
        //this.$off()//解绑所有的自定义事件
      }
    }
	}
</script>

<style lang="less" scoped>
	.student{
		background-color: pink;
    padding: 5px;
    margin-top: 5px;
	}
</style>
