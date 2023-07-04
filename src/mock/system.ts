import { QbMenu, TopMenu } from '@/store/sidebar'

const getTopMenu: () => TopMenu[] = () => {
    return [{
        id: 1,
        icon: 'Menu',
        label: "工作台",
        path: "/dashboard/index",
        component: '@/views/index/index.vue',
        parentId: 0,
        meta: {
            i18n: 'dashboard',
        }
    }, {
        id: 100,
        icon: 'Menu',
        label: "仪表盘",
        path: "/dashboard/base",
        component: '@/views/index/base.vue',
        parentId: 1,
        meta: {
            i18n: 'dashboard',
        }
    }, {
        id: 3,
        label: "个人博客",
        icon: 'Menu',
        meta: {
            i18n: 'website',
        },
        path: "https://quhaibin.cn",
        component: '@/views/index/base.vue',
        parentId: 2
    }]
}

const getMenuList: () => QbMenu[] = () => {
    return [{
        id: 1,
        icon: 'House',
        label: "工作台",
        path: "/dashboard/index",
        component: '@/views/index/index.vue',
        parentId: 0,
        meta: {
            i18n: 'dashboard',
        },
        children: [{
            id: 100,
            icon: 'Menu',
            label: '仪表盘',
            path: '/dashboard/base',
            component: '@/views/index/base.vue',
            isOpen: 1,
            parentId: 1,
        }]
    }, {
        id: 4,
        icon: 'Location',
        label: '权限演示',
        path: '/permission/index',
        component: '@/views/permission/index.vue',
        isOpen: 1,
        parentId: 0
    }, {
        id: 5,
        icon: 'Location',
        label: '组件',
        path: '/components/index',
        component: '@/pages/Layout_el/index.vue',
        isOpen: 1,
        meta: {
            i18n: 'components',
        },
        parentId: 0,
        children: [{
            id: 501,
            label: '表格',
            path: '/components/table',
            component: '@/views/components/table.vue',
            icon: 'Menu',
            isOpen: 1,
            parentId: 5,
        }]
    }, {
        id: 6,
        label: '列表',
        path: '/list/index',
        component: '@/pages/Layout_el/index.vue',
        icon: 'Location',
        isOpen: 1,
        meta: {
            i18n: 'list',
        },
        parentId: 0,
        children: [{
            id: 601,
            label: '基础列表',
            path: '/list/base',
            component: '@/views/list/base.vue',
            icon: 'Menu',
            isOpen: 1,
            parentId: 6,
        }, {
            id: 602,
            label: '卡片列表',
            path: '/list/card',
            component: '@/views/list/card.vue',
            icon: 'Menu',
            isOpen: 1,
            parentId: 6,
        }, {
            id: 603,
            label: '筛选列表',
            path: '/list/filter',
            component: '@/views/list/filter.vue',
            icon: 'Menu',
            isOpen: 1,
            parentId: 6,
        }]
    }]
}



const system = [
    /* getTopMenu */
    {
        url: '/api/menu/top-menu',
        type: 'get',
        response: (options: any) => {
            console.log("🚀 ~ file: system.ts:6 ~ options:", options)
            return {
                code: 100,
                message: '查询成功！',
                data: getTopMenu()
            }
        }
    },
    /* getRoutes */
    {
        url: '/api/menu/list',
        type: 'get',
        response: (options: any) => {
            console.log("🚀 ~ file: system.ts:6 ~ options:", options)
            return {
                code: 100,
                message: '查询成功！',
                data: getMenuList()
            }
        }
    },
]

export default system