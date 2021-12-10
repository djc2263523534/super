<template>
  <div class="goods-item" @click="itemClick">
    <img
      v-lazy="goodsItem.image || goodsItem.show.img"
      alt=""
      @load="imageLoad"
    />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <i class="el-icon-star-off"></i>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  methods: {
    imageLoad() {
      // if (this.$router.path.indexOf("/home")) {
      //   this.$bus.$emit("homeItemImageLoad");
      // } else if (this.$router.path.indexOf("/detail")) {
      //   this.$bus.$emit("detailItemImageLoad");
      // }
      this.$bus.$emit("itemImageLoad");
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
};
</script>

<style  scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: #fa876b;
  margin: 0 3px;
}
</style>