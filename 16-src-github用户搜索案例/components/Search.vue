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
          this.$bus.$emit('updateUser',
            { isFirstShow: false,
              isLoading: true,
              users: [],
              errMsg: "",
            })
      axios.get(`https://api.github.com/search/users?q=${this.keyWords}`).then(
        response => {
          console.log('请求成功了');
          this.$bus.$emit('updateUser',
            { isLoading: false,
              users: response.data.items ,
              errMsg: "",
            })
        },
        error => {
          this.$bus.$emit('updateUser',
            { isLoading: false,
              users: [],
              errMsg: error.message,
            })
        }
      )
    }
  }
};
</script>

<style lang="css" scoped>

</style>
