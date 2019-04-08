export default [
    {
        path: '/model',
        name: 'model',
        component: () => import('../views/model.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/mine',
        name: 'mine',
        component: () => import('../views/mineMes.vue')
    },
    {
        path:'/list',
        name: 'list',
        component: () => import('../components/homelist.vue')
    },
    {
        path:'/img',
        name: 'img',
        component: () => import('../components/imageupload.vue')
    },
    {
        path:'/brand',
        name: 'brand',
        component: () => import('../views/mainbrand.vue')
    },
    {
        path:'/legal',
        name: 'legal',
        component: () => import('../views/legalP.vue')
    },
    {
        path:'/phone',
        name: 'phone',
        component: () => import('../views/phoneN.vue')
    },
    {
        path:'/password',
        name: 'password',
        component: () => import('../views/changeP.vue')
    },
    {
        path:'/',
        redirect: '/login'
    },
    {
        path:'/myshop',
        name: 'shop',
        component: () => import('../views/myshop.vue')
    },
    {
        path:'/addshop',
        name: 'addshop',
        component: () => import('../views/addshop.vue')
    }
]
