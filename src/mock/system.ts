const system = [
    /* getTopMenu */
    {
        url: '/api/menu/top-menu',
        type: 'get',
        response: (options: any) => {
            console.log("🚀 ~ file: system.ts:6 ~ options:", options)
            const topMenu = [{
                label: "首页",
                path: "/wel/index",
                icon: 'Menu',
                meta: {
                    i18n: 'dashboard',
                },
                parentId: 0
            },
            {
                label: "bladex官网",
                icon: 'Menu',
                meta: {
                    i18n: 'website',
                },
                path: "https://bladex.vip/#/",
                parentId: 1
            },
            {
                label: "avuex官网",
                icon: 'Menu',
                meta: {
                    i18n: 'avuexwebsite',
                },
                path: "https://avuex.avue.top",
                parentId: 2
            },
            {
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
                path: "/dashbord/index",
                icon: 'House',
                meta: {
                    i18n: 'dashboard',
                },
                parentId: 0,
                children: [{
                    id: 11,
                    label: '通知公告',
                    path: '/dashbord/brand',
                    icon: 'Menu',
                    isOpen: 1,
                    parentId: 1,
                }]
            }, {
                id: 2,
                label: '测试',
                path: '/test/test',
                icon: 'Location',
                isOpen: 1,
                parentId: 0
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