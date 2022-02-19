<template>
  <div class="detail">
    <detail-nav-item @currentClick="currentClick" ref="nav"></detail-nav-item>
    <scroll class="content" ref="scroll" @scroll="scroll" :probe-type="3">
      <!-- <continu-play :banners="topImages" class="detail-play"></continu-play> -->
      <swipe-play :banners="topImages" h="400px"></swipe-play>

      <detail-base-info :goodsInfo="goodsInfo"></detail-base-info>
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <detail-show-info
        :detailInfo="detailInfo"
        @detailImgLoad="detailImgLoad"
      ></detail-show-info>
      <detail-params-info
        :itemParams="itemParams"
        ref="params"
      ></detail-params-info>
      <detail-rate-info :rateInfo="rateInfo" ref="comment"></detail-rate-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addShop="addShop"></detail-bottom-bar>
    <toast></toast>
  </div>
</template>

<script>
import DetailNavItem from "./childConmps/DetailNavItem.vue";
import ContinuPlay from "components/common/continuplay/ContinuPlay.vue";
import DetailBaseInfo from "./childConmps/DetailBaseInfo.vue";
import DetailShopInfo from "./childConmps/DetailShopInfo.vue";
import DetailShowInfo from "./childConmps/DetailShowInfo.vue";
import DetailParamsInfo from "./childConmps/DetailParamsInfo.vue";
import DetailRateInfo from "./childConmps/DetailRateInfo.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import DetailBottomBar from "./childConmps/DetailBottomBar.vue";

import { getHomeDetail, getRecommend } from "network/home";
import { getDetail, Shop } from "network/detail";
import { itemListenerMixin } from "common/mixins";
import { debounce } from "common/utils";
import Scroll from "components/common/scroll/Scroll.vue";

import { mapActions } from "vuex";
import Toast from "../../components/common/toast/Toast.vue";
import SwipePlay from "../../components/common/continuplay/SwipePlay.vue";

export default {
  name: "Detail",
  components: {
    Scroll,
    DetailNavItem,
    ContinuPlay,
    DetailBaseInfo,
    DetailShopInfo,
    DetailShowInfo,
    DetailParamsInfo,
    DetailRateInfo,
    GoodsList,
    DetailBottomBar,
    Toast,
    SwipePlay,
  },
  mixins: [itemListenerMixin],
  data() {
    return {
      id: null,
      array: [],
      topImages: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      itemParams: {},
      rateInfo: {},
      recommends: [],
      paramsInfo: [0],
      getThemeTopY: null,
      currentIndex: 0,
      message: "",
      show: false,
    };
  },
  created() {
    this.id = this.$route.params.iid;
    getHomeDetail(this.id).then((res) => {
      //1.获取图片信息
      this.array = res.data.result.itemInfo.topImages;
      for (let i = 0; i < this.array.length; i++) {
        this.topImages.push({ image: this.array[i] });
      }
      //2.创建商品对象
      this.goodsInfo = new getDetail(
        res.data.result.itemInfo,
        res.data.result.columns,
        res.data.result.shopInfo
      );
      //3.店铺信息
      this.shopInfo = new Shop(res.data.result.shopInfo);
      //4.穿着效果
      this.detailInfo = res.data.result.detailInfo;
      //5.参数信息
      this.itemParams = res.data.result.itemParams;
      //6.商品评论
      if (res.data.result.rate.cRate != 0) {
        this.rateInfo = res.data.result.rate.list[0];
      }
      // console.log(res.data.result.itemInfo);
    });

    //7.请求推荐数据
    getRecommend().then((res) => {
      this.recommends = res.data.data.list;
    });

    //2.nextTick里面的代码会在DOM更新后执行
    // this.$nextTick(() => {
    //   this.paramsInfo = [0];
    //   this.paramsInfo.push(this.$refs.params.$el.offsetTop);
    //   this.paramsInfo.push(this.$refs.comment.$el.offsetTop);
    //   this.paramsInfo.push(this.$refs.recommend.$el.offsetTop);
    //   console.log(this.paramsInfo);
    // });
    this.getThemeTopY = debounce(() => {
      this.paramsInfo = [0];
      this.paramsInfo.push(this.$refs.params.$el.offsetTop);
      this.paramsInfo.push(this.$refs.comment.$el.offsetTop);
      this.paramsInfo.push(this.$refs.recommend.$el.offsetTop);
      this.paramsInfo.push(Number.MAX_VALUE);
    }, 200);
  },
  mounted() {},
  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
  methods: {
    ...mapActions(["addCart"]),
    //1.监听详情页展示图片
    detailImgLoad() {
      this.newRefresh();

      //调用详情页导肮闭包函数
      this.getThemeTopY();

      // this.$refs.scroll.refresh();
    },
    currentClick(index) {
      //获取导航栏索引 通过better-scroll 封装的函数跳转至位置
      this.$refs.scroll.scrollTo(0, -this.paramsInfo[index]);
    },
    scroll(position) {
      for (let i = 0; i < this.paramsInfo.length; i++) {
        if (
          this.currentIndex !== i &&
          -position.y >= this.paramsInfo[i] &&
          -position.y < this.paramsInfo[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },

    //2.添加购物车
    addShop() {
      const product = {};
      product.title = this.goodsInfo.title;
      product.image = this.topImages[0];
      product.desc = this.goodsInfo.desc;
      product.price = this.goodsInfo.price;
      product.id = this.id;
      product.oldPrice = this.goodsInfo.oldPrice;

      //将商品添加到购物车里

      this.addCart(product).then((res) => {
        // this.message = res;
        // this.show = true;
        // setTimeout(() => {
        //   this.show = false;
        //   this.message = "";
        // }, 1000);

        this.$toast.show(res, 1000);
      });
      // this.$store.commit("addCart", product);
      // this.$store.dispatch("addCart", product).then((res) => {
      //   console.log(res);
      // });
    },
  },
  updated() {
    // this.paramsInfo = [0];
    // this.paramsInfo.push(this.$refs.params.$el.offsetTop);
    // this.paramsInfo.push(this.$refs.comment.$el.offsetTop);
    // this.paramsInfo.push(this.$refs.recommend.$el.offsetTop);
  },
};
</script>

<style  scoped>
.detail {
  height: 100vh;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  z-index: 999;
}

.detail-play {
  height: 300px;
}
.content {
  height: calc(100% - 93px);
}
</style>