import { RouteRecordRaw } from "vue-router";

const views: Array<RouteRecordRaw> = [
    {
        path: '/dashboard',
        name: '首页',
        meta: {},
        component: () => import('pages/Layout_el/index.vue'),
        redirect: '/dashboard/index',
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
    }
]

export default views