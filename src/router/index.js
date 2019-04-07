import Vue from 'vue'
import Router from 'vue-router'
import routes from './router.js'
import { readLoginMes } from '../api/loginMes'

Vue.use(Router)

 let router =  new Router({
    routes
})


/**
 * 登陆看是否含有登陆信息
 * 如果含有登陆信息 
 * 1：如果是要去login 就跳转到mine
 * 2: 如果不是去login 就next()
 * 如果不含有登陆信息
 * 1：如果是要到login next()
 * 2:如果不是到login  to login page 
 */
router.beforeEach((to, from ,next) => {
    let loginMes = readLoginMes()
    if (loginMes) {
        if(to.path === '/login') {
            router.replace({
                path: '/mine'
            }) 
        }else {
            next()
        }
    }else{
        if (to.path === '/login') {
            next()
        }else{
            router.replace({
                path:'/login'
            })
        }
    }
})

export default router

