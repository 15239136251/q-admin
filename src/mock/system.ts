const system = [
    /* getTopMenu */
    {
        url: '/api/menu/top-menu',
        type: 'get',
        response: (options: any) => {
            console.log("🚀 ~ file: system.ts:6 ~ options:", options)
            const topMenu = [{
                id: 1,
                label: "首页",
                path: "/dashboard/index",
                icon: 'Menu',
                meta: {
                    i18n: 'dashboard',
                },
                parentId: 0
            },
            {
                id: 2,
                label: "bladex官网",
                icon: 'Menu',
                meta: {
                    i18n: 'website',
                },
                path: "https://bladex.vip/#/",
                parentId: 1
            },
            {
                id: 3,
                label: "avuex官网",
                icon: 'Menu',
                meta: {
                    i18n: 'avuexwebsite',
                },
                path: "https://avuex.avue.top",
                parentId: 2
            },
            {
                id: 4,
                label: "测试",
                icon: 'Menu',
                path: "/test/index",
                meta: {
                    i18n: 'test',
                },
                parentId: 3
            }]
            return {
                code: 100,
                message: '查询成功！',
                data: topMenu
            }
        }
    },
    /* getRoutes */
    {
        url: '/api/auth/menu',
        type: 'get',
        response: (options: any) => {
            console.log("🚀 ~ file: system.ts:6 ~ options:", options)
            const menu = [{
                id: 1,
                label: "工作台",
                path: "/dashboard/index",
                icon: 'House',
                meta: {
                    i18n: 'dashboard',
                },
                parentId: 0,
                children: [{
                    id: 100,
                    label: '仪表盘',
                    path: '/dashboard/base',
                    icon: 'Menu',
                    isOpen: 1,
                    parentId: 1,
                }]
            }, {
                id: 3,
                label: 'SQL之父',
                path: '/common/sql-father',
                icon: 'Location',
                isOpen: 1,
                parentId: 0
            }, {
                id: 4,
                label: '权限演示',
                path: '/permission/index',
                icon: 'Location',
                isOpen: 1,
                parentId: 0
            }, {
                id: 5,
                label: '组件',
                path: '/components/index',
                icon: 'Location',
                isOpen: 1,
                meta: {
                    i18n: 'components',
                },
                parentId: 0,
                children: [{
                    id: 501,
                    label: '表格',
                    path: '/components/table',
                    icon: 'Menu',
                    isOpen: 1,
                    parentId: 5,
                }]
            }, {
                id: 6,
                label: '列表',
                path: '/list/index',
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
                    icon: 'Menu',
                    isOpen: 1,
                    parentId: 6,
                }, {
                    id: 602,
                    label: '卡片列表',
                    path: '/list/card',
                    icon: 'Menu',
                    isOpen: 1,
                    parentId: 6,
                }, {
                    id: 603,
                    label: '筛选列表',
                    path: '/list/filter',
                    icon: 'Menu',
                    isOpen: 1,
                    parentId: 6,
                }]
            }]
            return {
                code: 100,
                message: '查询成功！',
                data: menu
            }
        }
    },
]

export default system