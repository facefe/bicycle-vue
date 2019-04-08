<template>
  <el-container>
    <el-header height="50px">
      <span class="mine-icon" @click="goPageRou('/mine')">
        <i class="el-icon-arrow-left"></i>
      </span>
      <div>商家品牌</div>
    </el-header>
    <el-main>
      <div class="wrapper-box">
          <div class="item"><span>小米</span> </div>
          <div class="item"><span>小米</span> </div>
          <div class="item  itemSplice"><span>小米</span> </div>
          <div class="item"><span>小米</span> </div>
          <div class="item"><span>小米</span> </div>
          <div class="item"><span>小米</span> </div>
          <div class="item"><span>小米</span> </div>
          <div class="item"><span>小米</span> </div>
          <div class="item"><span>小米</span> </div>
          <div class="item"><span>小米</span> </div>
          <div class="item"><span>小米</span> </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import { goPageRou } from "../api/cmmonUntion";
export default {};
</script>
<style lang="less" scoped>
@import url('../api/topheader');
.el-main{
    margin: 0;
    padding: 0;
    .wrapper-box{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 3vh 6vw;
        
    }
    .item{
        width: 16vw;
        background-color: rgba(223, 241, 255, 1);
        height: 40px;
        margin: 3vw;
        border-radius: 5px;
        span{
            color: rgb(62, 62, 131);
            line-height: 40px;
            text-align: center;
            font-weight: 500;
        }
    }
    .itemSplice{
        background-color:   rgba(0, 145, 255, 1);
        span{
            color: #fff;
        }
    }
}
</style>
