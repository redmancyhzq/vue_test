<template>
  <div>
   <Student studentName="韩梅梅" studentSex= "女" :studentAge="18"/>
  </div>
</template>
<script>
//引入组件
import Student from './components/Student.vue'
export default {
  name:'App',
  //注册组件
  components:{
    Student
  }
}
</script>
