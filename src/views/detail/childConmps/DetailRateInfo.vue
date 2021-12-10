<template>
  <div class="rate-info" v-if="Object.keys(rateInfo).length != 0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>

    <div class="info-user">
      <img :src="rateInfo.user.avatar" alt="" />
      <span>{{ rateInfo.user.uname }}</span>
    </div>
    <div class="info-detail">
      <p>{{ rateInfo.content }}</p>
      <div class="info-other">
        <span class="data">{{ rateInfo.created | showDate }}</span>
        <span>{{ rateInfo.style }}</span>
      </div>
      <div class="info-img" v-if="rateInfo.images">
        <img :src="item" alt="" v-for="item in rateInfo.images" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeatilRateInfo",
  props: {
    rateInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDate(value) {
      const date = new Date(value);
      let y = date.getFullYear(),
        m = date.getMonth() + 1,
        d = date.getDate(),
        h = date.getHours(),
        ms = date.getMinutes(),
        s = date.getSeconds();
      return y + "/" + m + "/" + d + "  " + h + "." + ms + "." + s;
    },
  },
};
</script>

<style  scoped>
.rate-info {
  padding: 0 10px 10px;
  border-bottom: 3px solid rgb(100, 100, 100, 0.1);
  margin-bottom: 10px;
}
.info-header {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 3px solid rgb(100, 100, 100, 0.1);
}
.info-user {
  padding: 10px 0;
  font-size: 14px;
}
.info-user img {
  width: 50px;
  height: 50px;
  vertical-align: middle;
  margin-right: 10px;
}
.info-detail p {
  padding: 0 0 5px;
}
.info-other span {
  padding: 0 5px 0 0;
  color: #333;
  font-size: 14px;
}
.info-img {
  padding: 10px 0;
}
.info-img img {
  width: 100px;
  height: 100px;
  margin-right: 5px;
}
</style>