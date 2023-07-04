import { RouteRecordRaw } from "vue-router";
// import Layout from 'pages/layout/index.vue';

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
    },
    {
        path: '/permission',
        name: '权限演示',
        meta: {
            title: '权限演示'
        },
        component: () => import('pages/Layout_el/index.vue'),
        redirect: '/permission/index',
        children: [{
            path: 'index',
            name: '按钮权限',
            meta: { title: '按钮权限' },
            component: () => import('views/permission/index.vue')
        }]
    },
    {
        path: '/components',
        name: '组件演示',
        meta: {
            title: '组件演示'
        },
        component: () => import('pages/Layout_el/index.vue'),
        redirect: '/components/table',
        children: [{
            path: 'table',
            name: '表格',
            meta: { title: '表格' },
            component: () => import('views/components/table.vue')
        }, {
            path: 'dialog',
            name: '弹窗',
            meta: { title: '弹窗' },
            component: () => import('views/components/dialog.vue')
        }, {
            path: 'form',
            name: '表单',
            meta: { title: '表单' },
            component: () => import('views/components/form.vue')
        }, {
            path: 'icon',
            name: '图标',
            meta: { title: '图标' },
            component: () => import('views/components/icon.vue')
        }]
    },
    {
        path: '/list',
        name: '列表页',
        meta: {
            title: '列表页'
        },
        component: () => import('pages/Layout_el/index.vue'),
        redirect: '/list/base',
        children: [{
            path: 'base',
            name: '基础列表',
            meta: { title: '基础列表' },
            component: () => import('views/list/base.vue')
        }, {
            path: 'card',
            name: '卡片列表',
            meta: { title: '卡片列表' },
            component: () => import('views/list/card.vue')
        }, {
            path: 'filter',
            name: '筛选列表',
            meta: { title: '筛选列表' },
            component: () => import('views/list/filter.vue')
        }]
    }
]

export default views