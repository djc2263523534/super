<template>
  <div>
    <login></login>
    <balance></balance>
    <menu-bar></menu-bar>
  </div>
</template>

<script>
import Balance from "./childComps/Balance.vue";
import Login from "./childComps/Login.vue";
import MenuBar from "./childComps/MenuBar.vue";
export default {
  name: "Profile",
  components: { Login, Balance, MenuBar },
};
</script>

<style scoped>
</style>