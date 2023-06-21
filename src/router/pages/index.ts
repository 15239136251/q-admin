import { RouteRecordRaw } from "vue-router"

const pages: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: '登录',
        meta: { isTab: false, isAuth: true, keepAlive: false },
        component: () => import('pages/login/index.vue')
    },
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/layout-el',
        name: '新布局',
        meta: {},
        component: () => import('pages/Layout_el/index.vue'),
        children: [{
            path: 'index',
            name: '首页',
            meta: {},
            component: () => import('views/index/index.vue')
        }, {
            path: 'base',
            name: '仪表盘',
            meta: {},
            component: () => import('views/index/base.vue')
        }, {
            path: '404',
            name: '404',
            component: () => import( 'components/error-page/404.vue'),
            meta: {
                keepAlive: true,
                isTab: false,
                isAuth: false
            }
        }]
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/dashboard/404'
    }
]

export default pages