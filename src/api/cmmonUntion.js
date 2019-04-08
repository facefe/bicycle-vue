/**
 * 主要保存一些通用的组件方法,定义在vue.prototype 上面
 */
import Vue from 'vue'

// 返回上一页
Vue.prototype.toBackRou = function() {
    this.$router.go(-1)
}

// 跳转到制定页面 参数为指定页面的路径 参数类型 String 
Vue.prototype.goPageRou = function(path) {
    this.$router.push({
        path
    })
}
 