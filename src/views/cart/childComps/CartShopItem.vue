<template>
  <div class="shop-item">
    <div class="item-selector">
      <checked-button
        :isChecked="product.checked"
        @click.native="checkClick"
      ></checked-button>
    </div>

    <div class="item-img">
      <img :src="product.image.image" alt="商品图片" />
    </div>

    <div class="item-info">
      <div class="item-title">{{ product.title }}</div>
      <!-- <div class="item-desc">{{ product.desc }}</div> -->
      <div class="info-bottom">
        <div class="item-price">{{ product.oldPrice }}</div>
        <div class="item-count">{{ "×" + product.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckedButton from "./CheckedButton.vue";
export default {
  name: "CartShopItem",
  components: { CheckedButton },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked;
    },
  },
};
</script>

<style  scoped>
.shop-item {
  display: flex;
  font-size: 12px;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-img img {
  width: 50px;
  height: 70px;
  margin-right: 5px;
  vertical-align: middle;
}
.item-info {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.item-title {
  font-size: 16px;
}
.item-desc {
  font-size: 12px;
}
.item-info div {
  margin-bottom: 3px;
}
.info-bottom {
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  padding: 0 20px;
}
.item-price {
  color: #fa876b;
  font-size: 14px;
}
.item-count {
  font-size: 14px;
}
.item-selector {
  margin: 25px 5px 0 0;
}
</style>