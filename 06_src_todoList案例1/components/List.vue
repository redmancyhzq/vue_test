<template>
  <ul class="todo-main">
    <Item v-for="todo in todoList" :key="todo.id" :todoObj="todo" :changeDone="changeDone" :deleteTodo="deleteTodo" />
  </ul>
</template>
<script>
import Item from "./Item";
export default {
  data() {
    return {
      
    };
  },
  //App传List,父传子
  props:['todoList',"changeDone","deleteTodo"],
  components: {
    Item,
  },
};
</script>
<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>