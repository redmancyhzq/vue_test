<template>
  <div class="todo-footer" v-show='total'>
    <label>
      <input type="checkbox" :checked='isAll' @change="checkAll"/>
    </label>
    <span>
      <span>已完成{{doneTotal}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clearAll" >清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name:'Footer',
  props:['things','checkedAll','clearAllThing'],
  computed: {
    total() {
      return this.things.length
    },
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
      return this.things.reduce((pre,things) => pre + (things.done ? 1:0)
      ,0)
    },
    isAll(){
      return this.doneTotal === this.total && this.total != 0
    },
  },
  methods: {
    checkAll(e) {
      this.checkedAll(e.target.checked)
    },
    clearAll(){
      this.clearAllThing()
    }
  },
}
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