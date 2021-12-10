<template>
  <div class="checked-button">
    <i class="el-icon-check" v-show="isChecked"></i>
  </div>
</template>

<script>
export default {
  name: "CheckedButton",
  props: {
    isChecked: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style  scoped>
.checked-button {
  width: 20px;
  height: 20px;
  border: 1px solid red;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
}
.checked-button i {
  color: purple;
}
</style>