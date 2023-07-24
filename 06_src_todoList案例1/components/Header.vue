<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="value"
      @keyup.enter="addTodoObj"
    />
  </div>
</template>
<script>
import { nanoid } from "nanoid";
export default {
  data() {
    return {
      value: "",
    };
  },
  props: ["receive"],
  methods: {
    addTodoObj() {
      //校验数据
      if (this.value == "") return alert("输入不能为空"); //或者if(!this.value)
      //console.log(e.target.value);
      // console.log(this.value);
      //将header组件用户的输入封装成一个todoObj对象
      const todoObj = { id: nanoid(), title: this.value, done: false };
      //让App接收用户输入的数据
      this.receive(todoObj);
      this.value = "";
    },
  },
};
</script>
<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>>
