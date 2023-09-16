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
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
    <button @click="incrementOdd">当前和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>


<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: "Count",
  data() {
    return {
      num: 0
    }
  },
  methods: {
    // increment(){
    //   this.$store.commit('JIA',this.num)
    // },
    // decrement(){
    //   this.$store.commit('JIAN',this.num)
    // },

    /**
     * 借助mapMutations生成方法,方法中会调用commit去联系mutations
     */
    ...mapMutations({increment: 'JIA',decrement: 'JIAN'}),

    // incrementOdd(){
    //   if(this.$store.state.sum % 2 !== 0) {
    //     this.$store.dispatch('oddjia',this.num)
    //   }
    // },
    // incrementWait(){
    //   this.$store.dispatch('jiaWait',this.num)
    // }

    /**
     * 借助mapMutations生成方法,方法中会调用dispatch去联系mutations
     */
    ...mapActions({incrementOdd: 'oddjia',incrementWait: 'jiaWait'}),

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
