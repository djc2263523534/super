<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
    <main>哈哈哈</main>
    <nav>我需要拉去最新的</nav>
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
