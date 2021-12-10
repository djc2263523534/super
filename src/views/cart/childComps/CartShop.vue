<template>
  <div class="cart-list">
    <cart-shop-item
      v-for="(item, index) in cartList"
      :product="item"
      :key="index"
    ></cart-shop-item>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartShopItem from "./CartShopItem.vue";
export default {
  name: "CartShop",
  components: { CartShopItem },
  computed: {
    ...mapGetters(["cartList"]),
  },
};
</script>

<style scoped>
.cart-list {
  height: 100%;
}
</style>