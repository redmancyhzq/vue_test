<template>
  <div>
    <li>
      <label>
        <input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)"/>
        <!-- 如下代码能实现功能，但是不太推荐，违背了原则 -->
          <!-- <input type="checkbox" v-model='todo.done'> -->
          <!-- 
            方法二：
            如果input框是checkbox类型的，并且v-model绑定的是一个布尔值
            可以直接v-model = todo.done （v-model可以实现双向绑定（初始化列表勾选或不勾选 + 绑定数据 不勾选时变成false
            不用写方法和爷爷传给儿子（app传给list在传给item）
            但是这样违背规则，props是只读不改，vue监测props有没有修改数据是浅层次的监视，
            vue发现不了你修改了对象里面的一个属性值
            总结就是v-model里面不要写props传过来的数据
           -->
        <span>{{todoObj.title}}</span>
        <!-- @blur 失去焦点执行事件 -->
        <input 
        type="text" 
        v-show="todoObj.isEdit" 
        :value="todoObj.title"
        @blur="handleBlur(todoObj,$event)"
        ref="inputTitle"
        >
      </label>
      <button class="btn btn-danger" @click="handleDelete(todoObj.id)">删除</button>
      <button class="btn btn-edit" @click="handleEdit(todoObj)">编辑</button>
    </li>
  </div>
</template>
<script>
import pubsub from 'pubsub-js'
export default {
  data() {
    return {};
  },
  props:['todoObj',],
  methods: {
    handleCheck(id) {
      //通知App把对应的done值取反
      //this.changeDone(id)
      this.$bus.$emit('changeDone',id)
    },
    //删除功能
    handleDelete(id) {
      if(confirm('确定删除吗？')){
        //this.deleteTodo(id)
        //this.$bus.$emit('deleteTodo',id)

        //发布消息,传送数据
        pubsub.publish('deleteTodo',id)
      }
    },
    //编辑功能
    handleEdit(todoObj) {
      if(todoObj.hasOwnProperty('isEdit')){
        todoObj.isEdit = true
      }else{
        this.$set(todoObj,'isEdit',true)
      }
      //让输入框自动变成聚焦
      //nextTick() 在下次 DOM 更新循环结束之后执行延迟回调。
      this.$nextTick(function() {
        this.$refs.inputTitle.focus()
      })
    },
    //当输入框失去焦点时，真正修改数据
    handleBlur(todoObj,e) {
      todoObj.isEdit = false
      if(!e.target.value.trim()) return alert("输入不能为空")
      this.$bus.$emit('updateTodo',todoObj.id,e.target.value)
    }
  }
};
</script>
<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button{
  display: block;
}
</style>