/*
* 将账号密码等信息保存到localStorage中用于自动登陆
*/
export  function writeLoginMes(mesObj) {
    let localStorage = window.localStorage
    let mes = JSON.stringify(mesObj)
    // localStorage 只能保存字符串形式的内容。
    localStorage.setItem('loginMes', mes)
}
/*
 * 读取账号密码等信息
 */
export function readLoginMes() {
    return JSON.parse(window.localStorage.getItem('loginMes'))
}
/*
 * 删除账号密码等信息从localStorage
 */

 export function delLoginMes() {
     window.localStorage.removeItem('loginMes')
 }
