<template>
  <div v-if="Object.keys(detailInfo).length != 0" class="show-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :src="item"
        alt=""
        @load="imageLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShowInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad() {
      this.$emit("detailImgLoad");
    },
  },
};
</script>

<style  scoped>
.show-info {
  padding: 0 10px;
  border-bottom: 3px solid rgb(100, 100, 100, 0.1);
}
.info-desc {
  position: relative;
}
.desc {
  padding: 10px 0;
  font-size: 14px;
}
.start,
.end {
  width: 80px;
  height: 2px;
  background-color: #ccc;
}
.end {
  position: absolute;
  bottom: 0;
  right: 0;
}
.start::after {
  position: absolute;
  top: -2px;
  content: "";
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: black;
}
.end::after {
  position: absolute;
  top: -2px;
  right: 0;
  content: "";
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: black;
}
.info-list {
  margin-top: 20px;
}
.info-list img {
  width: 100%;
}
</style>