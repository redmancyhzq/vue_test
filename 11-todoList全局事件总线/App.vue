<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Header @receive="receive"/>
        <List :todoList="todoList"/>
        <Footer :todoList="todoList" @handleCheck="handleCheck" @handleDelete="handleDelete" />
      </div>
    </div>
  </div>
</template>
<script>
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  data() {
    return {
      //读取最新的todoObj,进行展示
      todoList: JSON.parse(sessionStorage.getItem('todoObj')) || []
    }
  },
  components: {
    Header,
    List,
    Footer,
  },
  methods: {
    //herder传app,子传父
    //在父亲里定义函数，儿子把参数传，父亲就能接收
    receive(todoObj) {
      //console.log('我是App,我收到了数据',todoObj);
      this.todoList.unshift(todoObj)
    },
    //修改勾选or取消勾选的done值
    changeDone(id) {
      this.todoList.forEach((todoObj) => {
        if(todoObj.id === id) {
          todoObj.done = !todoObj.done
        }
      })
    },
    //删除todo项
    deleteTodo(id) {
     this.todoList =  this.todoList.filter((todoObj) => {
        return todoObj.id !== id
      })
    },
    //全选or全不选
    handleCheck(checkAll) {
      this.todoList.forEach((todoObj)=>{
        todoObj.done = checkAll //Footer传进来的为真就为真，为假即为假
    })
    },
    handleDelete() {
      this.todoList = this.todoList.filter((todoObj) => {
        return !todoObj.done
      })
    }
  },
  watch: {
    //给todoList进行会话存储
    todoList: {
      //开启深度监视
      deep: true,
      handler(todoObj) {
        //保存数据,setItem,形式为键值对
        sessionStorage.setItem('todoObj',JSON.stringify(todoObj))
      }
    }
  },
  mounted() {
    this.$bus.$on('changeDone',this.changeDone)
    this.$bus.$on('deleteTodo',this.deleteTodo)
  },
  beforeDestroy() {
    this.$bus.$off('changeDone')
    this.$bus.$off('deleteTodo')
  }
};
</script>
<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>