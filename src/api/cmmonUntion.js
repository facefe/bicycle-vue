/**
 * 主要保存一些通用的组件方法,定义在vue.prototype 上面
 */
import Vue from 'vue'

Vue.prototype.toBackRou = function() {
    this.$router.go(-1)
}
 