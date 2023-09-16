<template>
  <div class="container">
    <Category title="游戏">
      <template v-slot:default="slotProps">
        <ul>
          <li v-for="(item, index) in slotProps.games" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template v-slot:default="{games}">
        <ol>
          <li v-for="(item, index) in games" :key="index">{{ item }}</li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template v-slot:default="slotProps">
        <ul>
          <h4 v-for="(item, index) in slotProps.games" :key="index">{{ item }}</h4>
        </ul>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";

export default {
  name: "App",
  components: { Category },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container,
.card {
  display: flex;
  justify-content: space-around;
}
</style>
