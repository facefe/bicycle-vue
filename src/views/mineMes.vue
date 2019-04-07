<template>
  <el-container>
    <el-header height="50px">
      <span class="mine-icon" @click="toBackRou()">
        <i class="el-icon-arrow-left"></i>
      </span>
      <div>商家主页</div>
    </el-header>
    <el-main>
      <list>
        <template v-slot:leftTit>
          <div>主营品牌</div>
        </template>
        <template v-slot:mes>
          <div>小米</div>
        </template>
      </list>
      <list>
        <template v-slot:leftTit>
          <div>负责人</div>
        </template>
        <template v-slot:mes>
          <div>张三</div>
        </template>
      </list>
      <list>
        <template v-slot:leftTit>
          <div>手机号</div>
        </template>
        <template v-slot:mes>
          <div>13544454515</div>
        </template>
      </list>
      <list>
        <template v-slot:leftTit>
          <div>所在城市</div>
        </template>
        <template v-slot:mes>
          <div>手机号</div>
        </template>
      </list>
      <list class="cPass">
        <template v-slot:leftTit>
          <div>更改密码</div>
        </template>
      </list>
      <list>
        <template v-slot:leftTit>
          <div>我的店铺</div>
        </template>
      </list>
      <div class="quality-shop">
        <div class="quality-shop-mes">
          <span>店铺资质</span>
        </div>
        <div class="quality-shop-img">
          <div>
            <uploadimg class="shopimg"></uploadimg>
            <uploadimg class="shopimg"></uploadimg>
            <uploadimg class="shopimg"></uploadimg>
          </div>
        </div>
      </div>
      <div class="off-confim" @click="signOut">
        <el-button class="bottom" type="primary" round>退出登陆</el-button>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import { mapState } from "vuex";
import list from "../components/homelist";
import uploadimg from "../components/imageupload";
import { toBackRou } from '../api/cmmonUntion'
import { delLoginMes } from '../api/loginMes'
export default {
  name: "mineMes",
  data() {
    return {};
  },
  methods: {
    signOut () {
      delLoginMes()
      this.$router.replace({
        path:'/login'
      })

    }
  },
  computed: {
    ...mapState(["user"])
  },
  components: {
    list,
    uploadimg
  }
};
</script>
<style scoped lang="less">
@mainColor: rgba(0, 145, 255, 0.8);
.el-header {
  background: @mainColor;
  line-height: 50px;
  font-weight: 600;
  color: #fff;
  .mine-icon {
    float: left;
    i {
      font-weight: 600;
      font-size: 20px;
      color: #fff;
    }
  }
}
.el-main {
  margin: 0;
  padding: 0;
  .cPass {
    margin-bottom: 15px;
  }
  .quality-shop {
    // border: 1px solid red;
    padding: 10px 20px;
    background-color: rgb(250, 250, 250);
    .quality-shop-mes {
      width: 100%;
      height: 45px;
      span {
        text-align: left;
        height: 100%;
        width: 100%;
        display: block;
        line-height: 45px;
      }
    }
    .quality-shop-img {
        height: 110px;
        width: 100%;
      .shopimg{
          display: inline-block;
          &:first-of-type{
              float: left;
              margin-left: 3px;
          }
          &:last-of-type{
             float: right;
             margin-right: 3px;
          }
      }
    }
  }
  .off-confim{
    .bottom{
      width: 85%; 
    }
  }
}
</style>
