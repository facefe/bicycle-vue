<template>
  <el-container>
    <el-header height="50px">
      <span class="mine-icon" @click="goPageRou('/mine')">
        <i class="el-icon-arrow-left"></i>
      </span>
      <div>更改密码</div>
    </el-header>
    <el-main>
      <div>
        <div class="mainText">原密码</div>
        <el-input v-model="password"></el-input>
        <div class="mainText">新密码</div>
        <el-input v-model="newPassword"></el-input>
        <div class="mainText">确认新密码</div>
        <el-input v-model="reNewPassword"></el-input>
      </div>
      <div class="buttom-com">
        <el-button type="primary" round>确定</el-button>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import { goPageRou } from "../api/cmmonUntion";goPageRou
export default {
  data() {
    return {
      password: "",
      newPassword: "",
      reNewPassword: ""
    };
  }
};
</script>
<style lang="less" scoped>
@import url("../api/topheader");
.el-main {
  padding: 30px 7vw;
  div {
    .mainText {
      display: inline-block;
      padding: 15px 5px 3px 5px;
      float: left;
    }
  }
  .buttom-com{
    .el-button{
      margin-top: 40px;
      width: 100%;
    }
  }
}
</style>

