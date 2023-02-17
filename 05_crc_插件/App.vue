<template>
  <div>
    <school-name></school-name>
    <hr>
    <student-msg></student-msg>
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