<template>
  <div>
    <v-menu theme="dark" mode="horizontal" :data="menuData1" :style="{lineHeight: '64px'}" @item-click="gotoRouter"></v-menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menuData1: [
        {
          name: '首页',
          value: 'Home',
          selected: true,
          path: '/'
        },
        {
          name: '关于我们',
          value: 'About',
          selected: false,
          path: '/about'
        },
        {
          name: '产品',
          value: 'Product',
          selected: false,
          path: '/product'
        }
      ]
    }
  },
  methods: {
    gotoRouter ($event) {
      console.log($event)
      this.$router.push({ name: $event[0].value })
    }
  }
}
</script>
