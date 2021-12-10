<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left" @click="backClick">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in title"
          class="title-item"
          :class="{ currentClor: currentIndex == index }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "DetailNavItem",
  components: {
    NavBar,
  },
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    backClick() {
      this.$router.go(-1);
    },
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("currentClick", index);
    },
  },
};
</script>

<style  scoped>
.nav-bar {
  position: relative;
  z-index: 5;
  background-color: #fff;
}
.title {
  display: flex;
}
.title-item {
  flex: 1;
  text-align: center;
}
.currentClor {
  color: red;
}
</style>