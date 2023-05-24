import { RouteRecordRaw } from "vue-router"

const pages: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: '登录',
        meta: { isTab: false, isAuth: true, keepAlive: false },
        component: () => import('@/pages/login/index.vue')
    },
    {
        path: '/',
        redirect: '/dashbord'
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/dashbord/404'
    }
]

export default pages