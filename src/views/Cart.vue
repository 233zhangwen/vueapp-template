<template>
  <article class="about">
    <van-sticky>
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </van-sticky>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item" :title="item" @click="handleClick" />
      </van-list>
    </van-pull-refresh>
  </article>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      value: '',
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 20; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 80) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    handleClick() {
      
    }
  },
}
</script>

<style lang="less" scoped>
.about{
  width: 100%;
  height: 100%;
}
</style>