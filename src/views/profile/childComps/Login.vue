<template>
  <div class="login">
    <nav-bar class="nav">
      <div slot="center">我的档案</div>
    </nav-bar>
    <div class="box">
      <div class="box-item">
        <i class="el-icon-user portrait"></i>
      </div>
      <div class="box-item">
        <div><a href="#">登录</a><a href="#">注册</a></div>
        <div>暂无绑定手机号</div>
      </div>
      <div class="box-item"></div>
      <div class="box-item"></div>
      <div class="box-item"></div>
      <div class="box-item"></div>
      <div class="box-item"></div>
      <div class="box-item">
        <i class="el-icon-arrow-right top"></i>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<style scoped>
.login {
  background-color: #fa876b;
}
.nav {
  color: #fff;
}
.box {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  height: 40px;
  color: #fff;
}
.portrait {
  background-color: #ccc;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  text-align: center;
  font-size: 20px;
}
.box-item {
  display: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
}
.box-item div {
  flex: 1;
  margin-bottom: 2px;
}

.top {
  margin-top: 12px;
}
</style>