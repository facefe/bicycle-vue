<template>
  <el-container>
    <el-header height="50px">
      <span class="mine-icon" @click="goPageRou('/mine')">
        <i class="el-icon-arrow-left"></i>
      </span>
      <div>我的店铺</div>
    </el-header>
    <el-main>
      <div>
        <div class="shoplist">
          <p class="shop-name">店铺名称</p>
          <p class="shop-add">店铺地址店铺地址</p>
        </div>
        <div class="shoplist">
          <p class="shop-name">店铺名称</p>
          <p class="shop-add">店铺地址店铺地址</p>
        </div>
      </div>
    </el-main>
    <el-footer height= "50px">
        <div class="addshop" @click="goPageRou('/addshop')">
            <i class="el-icon-delete"></i>
            <span>新增店铺</span>
        </div>
    </el-footer>
  </el-container>
</template>
<script>
import { toBackRou , goPageRou} from "../api/cmmonUntion"
export default {
  //
};
</script>
<style lang="less" scoped>
@import url("../api/topheader");
.el-main{
    padding-top: 13px;
    .shoplist{
        border-bottom: 1px solid rgb(236, 226, 226);
        width: 100%;
        margin-bottom: 8px;
        p{
            text-align: left;
            padding-left: 5px;
        }
        .shop-name{
            color: rgb(102, 79, 79);
            padding-bottom: 3px;
            font-weight: 600;
            padding-top: 10px;
        }
        .shop-add{
            font-size: 14px;
            padding-top: 2px;
            padding-bottom: 2px;
        }
    }
}
.el-footer{
    padding: 0;
    border-top: 1px solid rgb(248, 244, 244);
    width: 100%;
    position: absolute;
    bottom: 0;
    .addshop{
        // line-height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 18px;
        background-color: rgba(248, 241, 241, .4);
    }
}
</style>
