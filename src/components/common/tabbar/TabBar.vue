<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style lang="css" scoped>
#tab-bar {
  display: flex;
  background-color: #e9e9e9;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 2px rgba(100, 100, 100, 0.3);
}
</style>