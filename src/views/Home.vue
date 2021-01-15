<template>
  <div class="home">
    <div class="swiper-container">
      <van-swipe :autoplay="false">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
   
  },
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
    };
  },
  methods: {
    handleClick() {
      this.$router.push({
          name: 'About',
          params: {
              'routerType': 'push'
          }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.home{
  width: 100%;
  height: 100%;
  .swiper-container{
    width: 100%;
    height: 210px;
    .van-swipe{
      width: 100%;
      height: 100%;
      img{
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
