<template>
  <div class="container">
    <h1>当前求和为:{{ sum }}</h1>
    <h1>当前求和放大10倍为:{{ bigSum}}</h1>
    <h2> {{ school}} 学生学 {{ subject}} </h2>
    <h1 style="color: red">Person组件总人数为:{{ PersonObj.length }}</h1>
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
   
    /**
     * 借助mapMutations生成方法,方法中会调用commit去联系mutations
     */
    ...mapMutations('countAbout',{increment: 'JIA',decrement: 'JIAN'}),

  

    /**
     * 借助mapMutations生成方法,方法中会调用dispatch去联系mutations
     */
    ...mapActions('countAbout',{incrementOdd: 'oddjia',incrementWait: 'jiaWait'}),

  },
  computed: {
    
    /**
     * 简写方式
     */
    ...mapState('countAbout',['sum','school','subject']),
    ...mapState('personAbout',['PersonObj']),
    
    // bigSum() {
    //   return this.$store.getters.bigSum
    // },
    ...mapGetters('countAbout',['bigSum']),
  },
  mounted() {
    console.log('count',this.$store);
  }
};
</script>

<style lang="css" scoped>
button{
  margin-left: 5px;
}
</style>
