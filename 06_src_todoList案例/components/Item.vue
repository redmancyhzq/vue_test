<template>
  <div>
    <li>
      <label>
        <input 
          type="checkbox" 
          :checked="todo.done" 
          @click="handleCheck(todo.id)"
          />
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
        <span>{{todo.title}}</span>
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
  </div>
</template>
<script>
export default {
  name:'Item',
  //声明接受todo对象
  props:['todo','checkThing','deleteThing'],
  // mounted() {
  //   console.log(this.todo);
  // }
  methods: {
    //勾选or取消勾选
    handleCheck(id) {
      //通知App组件将对应的things对象的done值取反
      this.checkThing(id)
    },
    //删除
    handleDelete(id) {
      if(confirm('确定删除吗?')) {
        //通知App删除一个对应的thing
        this.deleteThing(id)
      }
    }
  }
}
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
  li:hover button {
    display: block;
  }
</style>