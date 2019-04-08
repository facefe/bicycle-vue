<template>
    <div>
       <el-container>
        <el-header height='45px'>
            <span class="loginText">
                登陆
            </span>
            <span class="loginWayButton" @click="changeWayLogin" v-text="loginWay" >
            </span>
            </el-header>
            <el-main>
                <div v-if="loginWay == '短信登陆'">
                    <div class="mainText">账号</div>
                    <el-input v-model="accountName" v-on:blur="checkAccountExist"></el-input>
                    <div class="mainText">密码</div>
                    <el-input v-model="passwordNum"></el-input>
                    <div class="mainText">验证码</div>
                    <div class="checkNumberWrapper">
                        <el-input v-model="checkNum"></el-input>
                        <img class="checkImg" v-if="checkImg"  :src='checkImg' alt="验证码">
                            <div class="changCheckImg" @click="getCheckImg">
                                <p>看不清</p>
                                <p>换一张</p>
                        </div>
                    </div>
                    <el-button type="primary" round @click="loginAccount" >确定</el-button>
                </div>
                <div v-else>
                    <div class="mainText">手机号码</div>
                    <el-input v-model="phoneNum"></el-input>
                    <div class="mainText">验证码</div>
                    <div class="checkNumberPhone">
                        <el-input class="checkNumberInput" v-model="phoneCheck"></el-input>
                        <span class="ckeckNumberSpan" @click="getphoneNumber" v-text="ckeckText"></span>
                    </div>
                    <el-button type="primary" round >确定</el-button>
                </div>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import { getCheckNumber, loginByAccount, getPhoneCheck,checkByAccount } from '../api/until.js'
import { writeLoginMes } from '../api/loginMes.js'
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            accountName: "", //账号
            passwordNum: "", //密码
            checkNum: "", // 账号登陆时候的图片验证码
            phoneNum:null, // 账户手机号码
            phoneCheck: null, // 手机登陆的验证码
            loginWay: '短信登陆',
            checkImg: null, // 账号登陆时候的图片验证
            ckeckText: '获取验证码'

        }
    },
    methods: {
        ...mapMutations(['setUser']),
        changeWayLogin () {
            // 右上角显示的字样与登陆方式刚好相反
            // 显示为短信登陆时候 登陆方式为密码登陆 反之为账号登陆。
            if (this.loginWay === '短信登陆') {
                this.loginWay = '密码登陆'
            }else {
                this.loginWay = '短信登陆'
            }
        },
        // 获取图片验证码
        getCheckImg () {
            getCheckNumber((val) => {
                this.checkImg = val.data.code
            },function (err) {
                console.log(err)
            })
        },
        // 接口验证账号是否存在
        checkAccountExist () {
          let account = this.accountName.trim(),
              self = this
            function reslove(val) {
              console.log(val.data.data.loginMes.code )
                if(val.data.data.loginMes.code === 200) {
                    console.log('账号存在')
                } else {
                    self.$message({
                        message: '账号不存在',
                        type: "warning",
                        duration: 1000

                    })
                }
            }
            function reject(data) {
              console.log(data)
            }
            checkByAccount(account,reslove, reject)

        },
        // 账号密码登陆
        loginAccount () {
            let self = this
            let accountN = this.accountName.trim(),
                passwordN = this.passwordNum.trim(),
                checkN = this.checkNum.trim();
            function reslove(val) {
                //登陆成功时候的回调函数
                if (val.data.data.loginMes.code === 200) {
                    let mes = val.data.data.loginMes
                    writeLoginMes(mes)
                    // 将账号密码等信息保存到localStorage中
                    self.setUser(mes)
                    // 将返回的信息保存到vuex中
                    self.$router.push({
                        path: '/mine'
                    })

                    // 跳转到对应页面。
                }else {
                    self.$message({
                        message: '账号/密码有误',
                        type: "warning",
                        duration: 1000

                    })
                }
            }
            function reject(err) {
                // 登陆失败时候的回调函数
                if (err) {
                    self.$message({
                        message: '账号/密码有误',
                        type: "warning",
                        duration: 1000

                    })
                }
            }
            if (accountN && passwordN && checkN) {
                loginByAccount(accountN, passwordN, checkN,reslove, reject)
            }else {
                console.log('账号密码不能为空')
            }

        },
        // 获取手机短信验证码
        getphoneNumber () {
            getPhoneCheck(this.phoneNum,function (data) {
                console.log(data)
            }, function (data) {
                console.log(data)
            })
        },
        loginPhone () {

        }
    },
    created() {
      this.getCheckImg()
    }
}
</script>
<style lang="less" scoped>
 @mainColor: #409EFF;
.el-header{
    background: @mainColor;
    line-height: 45px;
    font-weight: 600;
    color: #fff;
    .loginWayButton{
        position: absolute;
        right: 25px;
    }
}
.el-main{
    margin-top: 30px;
    .mainText{
        float: left;
        padding: 15px 5px 3px 5px;
    }
    .checkNumberWrapper{
        position: relative;
        clear: left;
        .checkImg{
            position: absolute;
            left: 160px;
            top: 4px;
            background-color: rgba(204, 204, 204, 0.34);
            padding: 1px;
        }
        .changCheckImg{
            position: absolute;
            left: 255px;
            top: 3px;
            padding: 1px;
            font-size: 12px;
            P:last-of-type{
                color: blue;
            }
        }
    }
    .checkNumberPhone{
        position: relative;
        .ckeckNumberSpan{
            position: absolute;
            margin-top: 10px;
            right: 60px;
            color: blue;
        }
    }
    .el-button{
        margin-top: 40px;
        /*background: rgba(89, 86, 204, 0.84);*/
        width: 100%;
        color: #fff;
    }
}
</style>
