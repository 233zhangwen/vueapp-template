<template>
<article class="menu">
    <router-view />
    <van-tabbar
     v-model="active"
     active-color="#DDA944"
     inactive-color="#999999"
     @change="handelChange"
    >
      <van-tabbar-item name="home" :icon="active=='home'?'fire':'fire-o'" to="/home">首页</van-tabbar-item>
      <van-tabbar-item name="shopping-cart" :icon="active=='cart'?'shopping-cart':'shopping-cart-o'"  to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item name="friends" :icon="active=='friends'?'friends':'friends-o'">联系人</van-tabbar-item>
      <van-tabbar-item name="setting" :icon="active=='setting'?'setting':'setting-o'">设置</van-tabbar-item>
    </van-tabbar>
  </article>
</template>

<script>
export default {
  data() {
    return {
      active: 'home'
    }
  },
  methods: {
    handelChange(name) {
      console.log(name)
    }
  }
}
</script>
<style lang="less" scoped>
.menu{
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  position: relative;
  .van-tabbar{
    height: 50px;
  }
}
</style>
