<template>
  <div>
    <ul class="todo-main">
      <Item 
        v-for="thingObj in things" 
        :key="thingObj.id" 
        :todo='thingObj' 
        :checkThing='checkThing'
        :deleteThing='deleteThing'
      ></Item>
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
  name:'List',
  props:['things','checkThing','deleteThing'],
  components :{Item}
}
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