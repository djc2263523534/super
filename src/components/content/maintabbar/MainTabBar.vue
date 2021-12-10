<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
        <img
          slot="item-icon"
          src="~assets/image/tabbar/home-black.png"
          alt=""
        />
        <img
          slot="item-icon-active"
          src="~assets/image/tabbar/home-red.png"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/Category" activeColor="red">
        <img
          slot="item-icon"
          src="~assets/image/tabbar/classify-black.png"
          alt=""
        />
        <img
          slot="item-icon-active"
          src="~assets/image/tabbar/classify-red.png"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/Cart" activeColor="red">
        <img
          slot="item-icon"
          src="~assets/image/tabbar/shop-black.png"
          alt=""
        />
        <img
          slot="item-icon-active"
          src="~assets/image/tabbar/shop-red.png"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/Profile" activeColor="red">
        <img
          slot="item-icon"
          src="../../../assets/image/tabbar/mine-black.png"
          alt=""
        />
        <img
          slot="item-icon-active"
          src="../../../assets/image/tabbar/mine-red.png"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar.vue";
import TabBarItem from "../../common/tabbar/TabBarItem.vue";

export default {
  name: "MainTabBar",
  components: {
    TabBarItem,
    TabBar,
  },
};
</script>

<style scoped>
</style>