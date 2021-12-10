<template>
  <div class="menubar">
    <ul>
      <li>
        <a href="#"><i class="el-icon-chat-dot-square"></i> 我的消息</a>
      </li>
      <li>
        <a href="#"><i class="el-icon-coin"></i> 积分商城</a>
      </li>
      <li>
        <a href="#"><i class="el-icon-trophy"></i> 会员卡</a>
      </li>
      <li>
        <a href="#"><i class="el-icon-shopping-cart-2"></i> 我的购物车</a>
      </li>
      <li>
        <a href="#"><i class="el-icon-sold-out"></i> 下载购物APP</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuBar",
};
</script>

<style  scoped>
.menubar ul li {
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
}
.menubar ul li:nth-child(3) {
  border-bottom: 20px solid #f1eded;
}
.menubar ul li:last-child {
  border: none;
}
.menubar ul li a {
  font-size: 14px;
  color: #333;
}
</style>