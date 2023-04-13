import { RouteRecordRaw } from "vue-router";
import Layout from '@/pages/layout/index.vue';

const views: Array<RouteRecordRaw> = [
    {
        path: '/dashbord',
        name: '首页',
        meta: {},
        component: () => import('@/pages/layout/index.vue'),
        redirect: '/dashbord/index',
        children: [{
            path: 'index',
            name: '首页',
            meta: {},
            component: () => import('@/views/index/index.vue')
        }, {
            path: 'brand',
            name: '通知公告',
            meta: {},
            component: () => import('@/views/index/brand.vue')
        }]
    },
]

export default views