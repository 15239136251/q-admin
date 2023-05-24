import { RouteRecordRaw } from "vue-router";
import Layout from '@/pages/layout/index.vue';

const views: Array<RouteRecordRaw> = [
    {
        path: '/dashboard',
        name: '首页',
        meta: {},
        component: () => import('@/pages/layout/index.vue'),
        redirect: '/dashboard/index',
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
        }, {
            path: '404',
            name: '404',
            component: () => import( '@/components/error-page/404.vue'),
            meta: {
                keepAlive: true,
                isTab: false,
                isAuth: false
            }
        }]
    },
    {
        path: '/permission',
        name: '权限演示',
        meta: {
            title: '权限演示'
        },
        component: () => import('@/pages/layout/index.vue'),
        redirect: '/permission/index',
        children: [{
            path: 'index',
            name: '按钮权限',
            meta: { title: '按钮权限' },
            component: () => import('@/views/permission/index.vue')
        }]
    },
    {
        path: '/components',
        name: '组件演示',
        meta: {
            title: '组件演示'
        },
        component: () => import('@/pages/layout/index.vue'),
        redirect: '/components/table',
        children: [{
            path: 'table',
            name: '表格',
            meta: { title: '表格' },
            component: () => import('@/views/components/table.vue')
        }]
    }
]

export default views