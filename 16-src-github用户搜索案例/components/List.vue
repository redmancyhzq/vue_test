<template>
  <div>
    <!-- 展示用户列表 -->
    <div v-show="info.users.length" class="row">
      <div class="card" v-for="item in info.users" :key="item.login">
        <a :href="item.html_url" target="_blank">
          <img :src="item.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{ item.login }}</p>
      </div>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirstShow">Welcome to use!</h1>
    <!--展示加载中 -->
    <h1 v-show="info.isLoading">Loading...</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info: {
        isFirstShow: true,
        isLoading: false,
        users: [],
        errMsg: "",
      },
    };
  },
  mounted() {
    this.$bus.$on("updateUser", (userObj) => {
      /* 
       * 解构赋值 ...(拓展运算符)
       * 先对比this.info 和 userObj, 对this.info进行替换补充
      */
      this.info = {...this.info,...userObj}
    });
  },
};
</script>

<style lang="css" scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
