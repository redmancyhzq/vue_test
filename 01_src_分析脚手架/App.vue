<template>
  <div>
     <SchoolName></SchoolName>
     <StudentName></StudentName>
  </div>
</template>

<script>
//引入组件
import SchoolName from './components/SchoolName.vue'
import StudentName from './components/StudentName.vue'
export default {
  
  components: {
    SchoolName,
    StudentName
  },
}
</script>

<style>

</style>