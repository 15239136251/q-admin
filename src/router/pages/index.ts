import { RouteRecordRaw } from "vue-router"

const pages: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: '登录',
        meta: { isTab: false, isAuth: true, keepAlive: false },
        component: () => import('@/pages/login/index.vue')
    },
    {
        path: '/404',
        name: '404',
        component: () => import( '@/components/error-page/404.vue'),
        meta: {
            keepAlive: true,
            isTab: false,
            isAuth: false
        }
    },
    {
        path: '/',
        redirect: '/dashbord'
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    }
]

export default pages