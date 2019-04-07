import axios from 'axios'

//获取账号密码登陆的验证码
let baseUrl = 'https://elm.cangdu.org'
export function getCheckNumber (resFunc, errFunc){
    axios.post(`${baseUrl}/v1/captchas`)
        .then(function (data) {
            resFunc(data)
        })
        .catch(function (err) {
            errFunc(err)
        })
}

// 验证账号是否存在
export function checkByAccount(account,sccFunc, errFunc) {
    // 有点冗长 , 最后两个参数为成功的回调和失败的回调。
    axios.post(` https://www.easy-mock.com/mock/5ca08997286ae12bee593255/v1234/checkAccount`, {
        "username": account,
    }).then(function (res) {
        sccFunc(res)
    }).catch(function (err) {
        errFunc(err)
    })
}

// 账号密码登陆
// 采用easymock模拟的加登陆
export function loginByAccount(account, myPassword, checkCode,sccFunc, errFunc) {
    // 有点冗长 , 最后两个参数为成功的回调和失败的回调。
      axios.post(` https://www.easy-mock.com/mock/5ca08997286ae12bee593255/v1234/login`, {
                    "username": account,
                    "password": myPassword,
                    "captcha_code": checkCode
                }).then(function (res) {
                    sccFunc(res)
      }).catch(function (err) {
          console.log(err)
          if (err) {
              errFunc(err)
          }
      })
}

// 获取手机验证码
export function getPhoneCheck(phoneNumber, seccFunc, errFunc) {
    axios.post(`${baseUrl}/v4/mobile/verify_code/send`,{
        mobile: phoneNumber,
        scene: 'login',
        type: 'sms'
    }).then(function (data) {
        seccFunc(data)
    }).catch(function (data) {
        errFunc(data)
    })
}


