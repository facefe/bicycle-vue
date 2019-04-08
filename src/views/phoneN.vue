<template>
  <el-container>
       <el-header height="50px">
      <span class="mine-icon" @click="goPageRou('/mine')">
        <i class="el-icon-arrow-left"></i>
      </span>
      <div>手机号</div>
    </el-header>
    <el-main>
      <div class="main-wrapper">
        <div class="mes-div">手机号码</div>
        <input class="mes-input" type="text" value="提示信息">
      </div>
    </el-main>
  </el-container>
</template>
<script>
import { goPageRou } from "../api/cmmonUntion"
export default {
  components: {
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
};
</script>
<style lang="less" scoped>
@import url('../api/topheader');
.el-main {
  .main-wrapper {
    padding: 0 10px;
    width: 100%;
    // border: 1px solid red;
    width: 80vw;
  }
  .mes-div {
    color: rgb(89, 104, 236);
    font-weight: 600;
    float: left;
    padding-left: 5px;
  }
  .mes-input {
    clear: both;
    display: block;
    font-size: 14px;
    height: 35px;
    width: 100%;
    padding-left: 6px;
    padding-top: 10px;
    outline: none;
    border: none;
    border-bottom: 1px solid rgb(209, 201, 201);
  }
}
</style>

