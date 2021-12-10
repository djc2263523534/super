<template>
  <div v-if="Object.keys(goodsInfo).length != 0" class="base-info">
    <div class="info-title">{{ goodsInfo.desc }}</div>
    <div class="info-price">
      <span class="n-price">{{ goodsInfo.price }}</span>
      <span class="o-price"
        ><del>{{ goodsInfo.oldPrice }}</del></span
      >
      <span :class="{ discount: goodsInfo.discount }">{{
        goodsInfo.discount
      }}</span>
    </div>
    <div class="info-other">
      <span>{{ goodsInfo.columns[0] }}</span>
      <span>{{ goodsInfo.columns[1] }}</span>
      <span>{{ goodsInfo.columns[2] }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goodsInfo.services.length - 1"
        :key="index"
      >
        <img :src="goodsInfo.services[index - 1].icon" alt="" />
        <span>{{ goodsInfo.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.base-info {
  padding: 0 10px;
}
.info-title {
  padding: 10px 0 15px;
  font-size: 14px;
  line-height: 20px;
}
.info-price {
  padding: 0 0 15px;
}
.n-price {
  color: deeppink;
}
.o-price {
  padding: 0 5px;
  font-size: 10px;
  color: #ccc;
}
.discount {
  position: relative;
  top: -5px;
  font-size: 6px;
  background-color: red;
  color: #fff;
  padding: 0 3px;
  border-radius: 8px;
}
.info-other {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(100, 100, 100, 0.1);
  padding-bottom: 10px;
}
.info-other span {
  color: rgb(145, 137, 137);
  font-size: 12px;
}
.info-service {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  border-bottom: 3px solid rgb(100, 100, 100, 0.1);
  padding: 20px 0;
}
.info-service-item img {
  width: 15px;
  height: 15px;
  vertical-align: middle;
}
</style>