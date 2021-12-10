<template>
  <div class="balance">
    <div class="balance-item">
      <a href="#">
        <span>0.00元</span>
        <span>我的余额</span>
      </a>
    </div>
    <div class="balance-item">
      <a href="#">
        <span>0个</span>
        <span>我的优惠</span>
      </a>
    </div>
    <div class="balance-item">
      <a href="#">
        <span>0分</span>
        <span>我的积分</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Balance",
};
</script>

<style scoped>
.balance {
  display: flex;
  height: 80px;
  text-align: center;
  border-bottom: 20px solid rgb(241, 237, 237);
  font-size: 14px;
}
.balance-item {
  flex: 1;
}
.balance-item a {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.balance-item a span {
  margin-bottom: 2px;
}
</style>