<template>
  <div class="swipe-play">
    <swipe class="my-swipe" :style="{ height: h }">
      <swipe-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad" />
        </a>
      </swipe-item>
    </swipe>
  </div>
</template>

<script>
export default {
  name: "SwipePlay",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
    h: {
      type: String,
      default: "200px",
    },
  },
  data() {
    return {
      isLoad: false,
    };
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("imageLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style scoped>
/* .swipe-play {
} */
.my-swipe {
  /* height: 200px; */

  color: #fff;
  font-size: 30px;
  text-align: center;
}
.my-swipe img {
  width: 100%;
  height: 100%;
}
</style>