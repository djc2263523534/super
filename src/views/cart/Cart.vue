<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{ length }})</div>
    </nav-bar>
    <scroll class="content" :probeType="2" ref="scroll">
      <cart-shop></cart-shop>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import CartShop from "./childComps/CartShop.vue";

import { mapGetters } from "vuex";
import Scroll from "../../components/common/scroll/Scroll.vue";
import CartBottomBar from "./childComps/CartBottomBar.vue";
export default {
  name: "Cart",
  components: {
    NavBar,
    CartShop,
    Scroll,
    CartBottomBar,
  },
  computed: {
    //获取购物车数量
    // cartLength() {
    //   // return this.$store.getters.cartLength;
    // },
    // ...mapGetters(["cartLength", "cartList"]),
    ...mapGetters({
      length: "cartLength",
      list: "cartList",
    }),
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  mounted() {},
};
</script>

<style  scoped>
.cart {
  height: 100vh;
}

.cart-nav {
  background-color: #fa876b;
  color: #fff;
  position: relative;
  top: 0;
  left: 0;
  z-index: 2;
}

.content {
  height: calc(100% - 93px - 40px);
  overflow: hidden;
}
</style>