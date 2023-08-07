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
import pubsub from "pubsub-js"

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
    deleteTodo(_,id) {
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
    },
    //更新编辑后的title
    updateTodo(id,title) {
      this.todoList.forEach((todoObj) => {
        if(todoObj.id === id) {
          todoObj.title = title
        }
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
    //this.$bus.$on('deleteTodo',this.deleteTodo)

    //接收数据，订阅消息
    this.pid = pubsub.subscribe('deleteTodo',this.deleteTodo)
    //触发事件，更新编辑后的title
    this.$bus.$on('updateTodo',this.updateTodo)

  },
  beforeDestroy() {
    //解绑事件
    this.$bus.$off('changeDone')
    //this.$bus.$off('deleteTodo')
    pubsub.unsubscribe(this.pid)

    this.$bus.$off('updateTodo')

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
  margin-right: 10px;
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

.btn-edit{
  color: #fff;
  background-color: #8bd5ee;
  border: 1px solid #438dbc;
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