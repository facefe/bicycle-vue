<template>
<div>
  <el-container>
    <el-header class="brandHeader" height="45px">
     库存品牌
    </el-header>
    <el-main>
      主要内容
    </el-main>
    <el-footer>
      底部
    </el-footer>
  </el-container>
</div>
</template>

<script>
export default {
  name: 'about',
  components: {
  }
}
</script>
<style scoped lang="less">
  @mainColor: rgba(45, 42, 183, 0.78);
  .el-header{
    background: @mainColor;
    text-align: center;
    line-height: 45px;
    color: black;
  }
</style>



