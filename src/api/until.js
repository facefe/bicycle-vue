import axios from 'axios'

//获取账号密码登陆的验证码
let baseUrl = 'https://elm.cangdu.org/v1'
export function getCheckNumber (resFunc, errFunc){
    axios.post(`${baseUrl}/captchas`)
        .then(function (data) {
            resFunc(data)
        })
        .catch(function (err) {
            errFunc(err)
        })
}
export async function loginByAccount(account, myPassword, checkCode) {
      axios.post(`https://elm.cangdu.org/v2/login`, {
                    username: account,
                    password: myPassword,
                    captcha_code: checkCode
                }).then(function (res) {
                    console.log(res)
      })
}


