<template>
  <el-container>
    <el-header height="50px">
      <span class="mine-icon" @click="goPageRou('/mine')">
        <i class="el-icon-menu"></i>
      </span>
      <div>车型信息</div>
    </el-header>
    <el-main>
    </el-main>
  </el-container>
</template>
<script>
import { goPageRou } from "../api/cmmonUntion";
export default {
  data() {
    return {
    };
  }
};
</script>
<style lang="less" scoped>
@import url("../api/topheader");
</style>

