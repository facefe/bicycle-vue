export default [
    {
        path: '/',
        name: 'home',
        component: import('../views/Home.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
    }
]
