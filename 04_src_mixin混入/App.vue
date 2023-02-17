<template>
  <div>
    <school-name></school-name>
    <student-msg></student-msg>
    <hr>
  </div>
</template>

<script>
import SchoolName from './components/SchoolName.vue'
import StudentMsg from './components/StudentMsg.vue'
export default {
  components: { StudentMsg, SchoolName },
  data() {
    return {

    }
  },
  methods: {
   
  }
  
}
</script>

<style>

</style>