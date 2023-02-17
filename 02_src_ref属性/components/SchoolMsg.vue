<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
  name: 'school',
  data() {
    return {
      name: '江工',
      address: '新余',
    }
  },
}
</script>

<style>
  .school {
    background-color: gray;
  }
</style>