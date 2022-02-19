<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      v-show="tabShow"
      ref="tabControl1"
    ></tab-control>

    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="contentScroll"
      @finishPullUp="loadMore"
    >
      <!-- <continu-play :banners="banners" @imageLoad="imageLoad"></continu-play> -->
      <swipe-play
        :banners="banners"
        @imageLoad="imageLoad"
        h="200px"
      ></swipe-play>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        ref="tabControl"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        v-show="!tabShow"
      ></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>

    <back-top
      class="back-top"
      @click.native="backClick"
      v-show="isShow"
    ></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import ContinuPlay from "components/common/continuplay/ContinuPlay.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";

import { itemListenerMixin } from "common/mixins";
//网络请求
import { getHomeMultidata, getHomeGoods } from "network/home";
import SwipePlay from "../../components/common/continuplay/SwipePlay.vue";
export default {
  name: "Home",
  components: {
    NavBar, //导航
    ContinuPlay, //轮播图
    RecommendView, //推荐
    FeatureView, //特色
    TabControl, //控制栏
    GoodsList, //商品列表
    Scroll, //滚动区域
    BackTop,
    SwipePlay, //返回顶部
  },
  mixins: [itemListenerMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      menu: ["pop", "new", "sell"],
      isShow: false,
      taboffsetTop: 0,
      tabShow: false,
      saveY: 0,
    };
  },
  created() {
    //1.请求轮播图数据
    this.getHomeMultidata();

    //2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },

  methods: {
    //1.事件监听
    tabClick(index) {
      this.currentType = this.menu[index];
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControl1.currentIndex = index;
    },
    contentScroll(position) {
      this.isShow = -position.y > 1000;
      this.tabShow = -position.y > this.taboffsetTop - 40;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    //监听轮播图图片
    imageLoad() {
      //获取tabcontrol 的offsetTop 的值
      this.taboffsetTop = this.$refs.tabControl.$el.offsetTop;
    },

    //2.网络请求
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
        console.log(this.banners);
      });
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        let arr = res.data.data.list;
        this.goods[type].list.push(...arr);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    },
    backClick() {
      //获取组件内的方法
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
  },
  mounted() {
    //3.监听item 中的图片加载完成
  },
  activated() {
    // 活跃时自动跳至上一记录的位置
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    //当组件不活跃的时候记录纵坐标
    this.saveY = this.$refs.scroll.getScroll();
    //取消全局事件监听
    this.$bus.$off("itemImageLoad", this.itemListener);
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
}
.home-nav {
  background-color: #fa876b;
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 5;
}
.content {
  height: calc(100% - 93px);
  margin-top: 44px;
}
.back-top {
  position: fixed;
  bottom: 60px;
  right: 20px;
  z-index: 10;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  width: 30px;
  height: 30px;
  line-height: 32px;
  font-size: 20px;
  color: deeppink;
}
</style>