<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          v-model="keyWords"
        />&nbsp;
        <button @click="handleSearch">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Search",
  data() {
    return {
      keyWords: "",
    };
  },
  methods: {
    handleSearch() {
      axios.get(`https://api.github.com/search/users?q=${this.keyWords}`).then(
        response => {
          console.log('请求成功了');
          this.$bus.$emit('getUser',response.data.items)
        },
        error => {
          console.log('请求失败了',error.message);
        }
      )
    }
  }
};
</script>

<style lang="css" scoped>

</style>
