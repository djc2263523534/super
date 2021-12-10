<template>
  <div class="shop-info">
    <div class="shop-logo">
      <img :src="shopInfo.shopLogo" alt="" />
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="info">
      <div class="info-item">
        <div class="item">
          <span>{{ countFilter }}</span>
          <span>总销量</span>
        </div>
        <div class="item">
          <span>{{ shopInfo.cGoods }}</span>
          <span>全部宝贝</span>
        </div>
      </div>

      <div class="info-item">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.score }}</td>
            <td>
              <span
                :style="{ background: item.isBetter ? 'deeppink' : '#49F4A7' }"
                >{{ item.isBetter ? "高" : "低" }}</span
              >
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="stroll"><span>进店逛逛</span></div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    countFilter() {
      if (this.shopInfo.cSells >= 10000) {
        return (this.shopInfo.cSells / 10000).toFixed(1) + "万";
      }
    },
  },
};
</script>

<style  scoped>
.shop-info {
  padding: 30px 10px;
  background-color: #fff;
}
.shop-logo img {
  width: 50px;
  height: 50px;
  border-radius: 20px;
  vertical-align: middle;
}
.shop-logo span {
  padding-left: 10px;
}
.info {
  display: flex;
  text-align: center;
}
.info-item {
  flex: 1;
  padding: 20px 0;
}
.item {
  display: inline-block;
  padding-top: 15px;
}
.item span {
  padding-top: 20px;
  display: block;
  padding: 0 10px;
  padding-top: 3px;
}
table td {
  padding-left: 5px;
  padding-top: 5px;
}
table span {
  color: #fff;
  padding: 0 2px;
}
.stroll {
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 3px solid rgb(100, 100, 100, 0.1);
}
.stroll span {
  padding: 3px 30px;
  background-color: rgb(241, 240, 240);
  border-radius: 10px;
}
</style>