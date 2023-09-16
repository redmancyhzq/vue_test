<template>
  <div class="container">
    <h1>当前求和为:{{ sum }}</h1>
    <h1>当前求和放大10倍为:{{ bigSum}}</h1>
    <h2> {{ school}} 学生学 {{ subject}} </h2>

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
import {mapState,mapGetters} from 'vuex'
export default {
  name: "Count",
  data() {
    return {
      num: 0
    }
  },
  methods: {
    increment(){
      this.$store.dispatch('jia',this.num)
    },
    decrement(){
      this.$store.dispatch('jian',this.num)
    },
    incrementOdd(){
      if(this.$store.state.sum % 2 !== 0) {
        this.$store.dispatch('oddjia',this.num)
      }
    },
    incrementWait(){
      this.$store.dispatch('jiaWait',this.num)
      setTimeout(() => {
      },500)
    }
  },
  computed: {
    // sum() {
    //   return this.$store.state.sum
    // },
    // school() {
    //   return this.$store.state.school
    // },
    // subject() {
    //   return this.$store.state.subject
    // },

    /**使用map映射
     * 对象写法
     */
    //...mapState({sum: 'sum', school: 'school', subject: 'subject'}),

    /**
     * 简写方式
     */
    ...mapState(['sum','school','subject']),
    
    // bigSum() {
    //   return this.$store.getters.bigSum
    // },
    ...mapGetters(['bigSum']),
  },
  mounted() {
    console.log('count',this);
  }
};
</script>

<style lang="css" scoped>
button{
  margin-left: 5px;
}
</style>
