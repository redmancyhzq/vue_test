<template>
	<div>
    <button @click="isShow = !isShow">显示or隐藏</button>
    <transition appear>
      <h1 v-show="isShow" class="title">你好啊</h1>
    </transition>
  </div>
</template>

<script>
	export default {
		name:'Test',
		data() {
			return {
        isShow: true
			}
		},
    
	}
</script>

<style lang="css" scoped>
  .title{
    background-color: orange;
  }
  .v-enter-active {
    animation: showAnimation 0.7s linear
  }
  .v-leave-active {
    animation: showAnimation 0.7s linear reverse
  }
  @keyframes showAnimation {
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0);
    }
  }
</style>
