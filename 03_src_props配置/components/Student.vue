<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名: {{studentName}}</h2>
    <h2>学生性别: {{studentSex}}</h2>
    <h2>学生年龄: {{Age+1}}</h2>
    <button @click="changeAge">点我加一</button>

  </div>
</template>
<script>
export default {
  name:'Student',
  data() {
    console.log(this);
    return {
      msg:'我是一个尚硅谷的学生',
      Age: this.studentAge
    }
  },
  // props:[
  //   'studentName',
  //   'studentSex',
  //   'studentAge' 
  // ],
  props:{
			studentName:{
				type:String, //name的类型是字符串
				required:true, //name是必要的
			},
			studentAge:{
				type:Number,
				default:99 //默认值
			},
			studentSex:{
				type:String,
				required:true
			}
		},
  methods: {
    changeAge() {
      this.Age ++
    }
  }
}
</script>
<style>

</style>