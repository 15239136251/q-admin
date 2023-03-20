import { RouteRecordRaw } from "vue-router";

const views: Array<RouteRecordRaw> = [
    {
        path: '/dashbord',
        name: '首页',
        meta: {},
        component: () => import('@/pages/layout/index.vue')
    }
]

export default views