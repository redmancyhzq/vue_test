<template>
  <div class="todo-footer" v-show="handleAll">
    <label>
      <input type="checkbox"  v-model="handleCheckAll"/>
    </label>
    <!-- <span> <span>已完成{{this.todoList.filter(item => item.done === true).length}}</span> / 全部{{this.todoList.length}} </span> -->
    <span> <span>已完成{{doneTotal}}</span> / 全部{{handleAll}} </span>
    <button class="btn btn-danger" @click="handleDone()">清除已完成任务</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  //props:['todoList','handleCheck','handleDelete'],
  props:['todoList'],
  computed: {
    doneTotal() {
      //   let i = 0
      //   this.things.forEach((things) => {
      //     if(things.done) {
      //       i++
      //     }
      //   })
      //   return i
      // }

      // const x =  this.things.reduce((pre,current) => {
      //    console.log("@",pre);
      //    console.log("@",current);
      //   return pre + (current.done ? 1:0)
      // },0)
      // console.log(x);
      
      return this.todoList.reduce((pre,current)=>{
        return pre + (current.done ? 1 : 0)
      },0)
    },
    handleAll() {
      return this.todoList.length
    },
    handleCheckAll:{
      get() {
        return this.handleAll === this.doneTotal && this.handleAll > 0
      },
      set(checked) {
        this.$emit('handleCheck',checked)
      }
      
    }
  },
  methods: {
    //此方法不行，藏在数组里面修改props的数据
    // handleCheckAll() {
    //   if(this.todoList !== null) {
    //     this.todoList.forEach(element => {
    //       element.done = true
    //     });
    //   }
    // },
    // handleCheckAll(e) {
    //   this.deleteDone(e.target.checked)
    // },
    handleDone() {
      this.$emit('handleDelete')
    }
    
  }
};
</script>
<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>