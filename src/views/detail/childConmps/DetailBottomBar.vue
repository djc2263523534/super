<template>
  <div class="botton-bar">
    <div class="bar-item">
      <div>
        <div><i class="el-icon-potato-strips size"></i></div>
        <span>客服</span>
      </div>
      <div>
        <div><i class="el-icon-s-shop size"></i></div>
        <span>店铺</span>
      </div>
      <div>
        <div><i class="el-icon-star-off size"></i></div>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-item center">
      <div class="cart" @click="addClick">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addClick() {
      this.$emit("addShop");
    },
  },
};
</script>

<style  scoped>
.botton-bar {
  box-shadow: 0 -1px 2px rgba(100, 100, 100, 0.3);
  height: 49px;
  background-color: #fff;
  position: relative;
  bottom: 0;
  text-align: center;
  display: flex;
}
.bar-item {
  flex: 1;
  display: flex;
}
.bar-item div {
  flex: 1;
}
.size {
  font-size: 25px;
}
.bar-item div span {
  font-size: 14px;
}
.center {
  line-height: 49px;
}
.cart {
  background-color: yellow;
}
.buy {
  background-color: deeppink;
  color: #fff;
}
</style>