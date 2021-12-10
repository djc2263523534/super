<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!flat">
      <slot name="item-icon"></slot>
    </div>

    <slot v-else name="item-icon-active"></slot>

    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBerItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "pink",
    },
  },
  data() {
    return {
      //   flat: true,
    };
  },
  computed: {
    flat() {
      //   return !this.$route.path.indexOf(this.path) !== -1;
      return this.$route.path == this.path; //处于活跃路由
    },
    //flat 如果返回true 路由为活动状态 添加颜色样式
    activeStyle() {
      return this.flat ? { color: this.activeColor } : null;
    },
  },
  methods: {
    itemclick() {
      this.$router.replace(this.path);
      // console.log(this.activeColor);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  margin-top: 3px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>