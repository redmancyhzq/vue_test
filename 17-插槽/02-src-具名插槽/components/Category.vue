<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽，（挖个坑，等着组件的使用者进行填充） -->
    <slot name="center">我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
    <slot name="footer">我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props:['title'],
  data() {
    return {
      
    };
  },
};
</script>

<style lang="css" scoped>
.category {
  width:200px;
  height: 300px;
  background-color: skyblue;
}
h3{
  text-align: center;
  background-color: orange;
}
img{
  width: 100%;
}
video{
  width: 100%;
}
</style>
