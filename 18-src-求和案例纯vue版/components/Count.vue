<template>
  <div class="container">
    <h1>当前求和为{{ sum }}</h1>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      sum: 0,
      num: 0
    }
  },
  methods: {
    increment(){
      this.sum += this.num
    },
    decrement(){
      this.sum -= this.num
    },
    incrementOdd(){
      if(this.sum % 2){
        this.sum += this.num
      }
    },
    incrementWait(){
      setTimeout(() => {
        this.sum += this.num
      },500)
    }
  }
};
</script>

<style lang="css" scoped>
button{
  margin-left: 5px;
}
</style>
