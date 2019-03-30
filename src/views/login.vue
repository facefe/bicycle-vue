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
                    <el-input v-model="accountName"></el-input>
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
                    <el-input v-model="phoneCheck"></el-input>
                    <el-button type="primary" round >确定</el-button>
                </div>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import { getCheckNumber, loginByAccount } from '../api/until.js'
export default {
    data() {
        return {
            accountName: null,
            passwordNum: null,
            checkNum: null,
            phoneNum:null,
            phoneCheck: null,
            loginWay: '短信登陆',
            checkImg: null

        }
    },
    methods: {
        changeWayLogin () {
            // 右上角显示的字样与登陆方式刚好相反
            // 显示为短信登陆时候 登陆方式为密码登陆 反之为账号登陆。
            if (this.loginWay === '短信登陆') {
                this.loginWay = '密码登陆'
            }else {
                this.loginWay = '短信登陆'
            }
        },
        getCheckImg () {
            getCheckNumber((val) => {
                this.checkImg = val.data.code
            },function (err) {
                console.log(err)
            })
        },
        loginAccount () {
            let accountN = this.accountName,
                passwordN = this.passwordNum,
                checkN = this.checkNum
            loginByAccount(accountN, passwordN, checkN)
        }
    },
    created() {
      this.getCheckImg()
    }
}
</script>
<style lang="less" scoped>
 @mainColor: rgba(41, 236, 34, 0.945);
.el-header{
    background: @mainColor;
    line-height: 45px;
    font-weight: 600;
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
    .el-button{
        margin-top: 40px;
        /*background: rgba(89, 86, 204, 0.84);*/
        width: 100%;
        color: #fff;
    }
}
</style>
