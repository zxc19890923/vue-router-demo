<template>
  <div>
    <v-menu style="width:240px" mode="inline" :data="inlineMenuData" @item-click="itemClick"></v-menu>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      inlineMenuData: [
        {
          name: '订单列表',
          value: 'order-list',
          selected: true,
          icon: 'mail',
          path: ''
        },
        {
          name: '用户列表',
          icon: 'appstore',
          path: 'user-list',
          value: 'user-list'
        },
        {
          name: '工程师列表',
          icon: 'setting',
          path: 'engineer-list',
          value: 'engineer-list'
        }
      ]
    }
  },
  methods: {
    itemClick ($event) {
      console.log($event)
      this.$router.push({name: $event[0].value})
    }
  }
}
</script>
