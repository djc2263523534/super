<template>
  <div class="bottom-bar">
    <div class="allcheck">
      <checked-button
        class="top"
        :is-checked="isSelectAll"
        @click.native="checkClick"
      ></checked-button>

      <span>全选</span>
    </div>
    <div class="totalPrice">合计：{{ totalPrice }}</div>
    <div class="buy" @click="calcClick">结算({{ checkedLength }})</div>
  </div>
</template>

<script>
import CheckedButton from "./CheckedButton.vue";

import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  components: {
    CheckedButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, value) => {
            return preValue + value.oldPrice.slice(1) * parseInt(value.count);
          }, 0)
          .toFixed(2)
      );
    },
    checkedLength() {
      return this.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      // return !this.cartList.filter((item) => !item.checked).length;
      // return !this.cartList.find((item) => !item.checked);
      if (this.cartList.length === 0) {
        return false;
      } else {
        //如果有未选中则返 false
        return !this.cartList.find((item) => !item.checked);
      }
    },
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach((value) => (value.checked = false));
      } else {
        this.cartList.forEach((value) => (value.checked = true));
      }
    },
    calcClick() {
      if (
        this.cartList.length === 0 ||
        this.cartList.find((value) => value.checked).length === 0
      ) {
        this.$toast.show("请选择你的商品", 1000);
      } else {
        this.$toast.show("购买成功", 1000);
      }
    },
  },
};
</script>

<style  scoped>
.bottom-bar {
  height: 40px;
  line-height: 40px;
  background-color: #ebcaca;
  position: relative;
  z-index: 9;
  display: flex;
}
.allcheck {
  width: 60px;
  display: flex;
  padding: 0 4px;
}
.top {
  margin-top: 11px;
  margin-right: 3px;
}
.totalPrice {
  flex: 1;
  padding-left: 50px;
}
.buy {
  width: 80px;
  background-color: red;
  text-align: center;
  color: #fff;
}
</style>