<template>
  <div>
    <div>
      <ul v-for="m in messageList" :key="m.id">
        <!-- params 参数  -->
        <!-- <li><router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp;</li> -->

        
        <li>
          <router-link :to="{
          name: 'xiaoxi',
          params: {
            id: m.id,
            title: m.title
          }
        } ">{{m.title}}</router-link>&nbsp;&nbsp;
        </li>
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
