<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
    <main>哈哈哈</main>
    <nav>我需要拉去最新的</nav>
    <main>哈哈哈non867</main>
    <h5>ssssssssssssssssssss</h5>
    <p>66666</p>
  </div>
</template>
<script>
import MainTabBar from "./components/content/maintabbar/MainTabBar.vue";
export default {
  data() {
    return {};
  },
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "assets/css/normalize.css";
</style>
