<template>
  <div>
    <div>
      <ul v-for="m in messageList" :key="m.id">
        <li><router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp;</li>
      </ul>
      <br/>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "message",
  data() {
    return {
      messageList:[
        {id: '001', title: '消息001'},
        {id: '002', title: '消息001'},
        {id: '003', title: '消息003'},
      ]
    };
  },
};
</script>
