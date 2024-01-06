import { QbMenu, TopMenu } from '@/store/sidebar'
import { getTreeList } from '@/utils/utils'
import sysData from './data/system.json'

const menuRules = [
    {
        "id": 12,
        "p_id": 9,
        "type": "menu",
        "name": "筛选列表",
        "api_path": null,
        "path": "/list/filter",
        "icon": "Menu",
        "menu_type": "tab",
        "url": "/list/filter",
        "redirect": null,
        "commponent": "/src/views/list/filter",
        "keepalive": 0,
        "remark": "筛选列表",
        "weigh": 200,
        "status": "1",
        "create_time": "2023-07-26 11:21:46",
        "modify_time": "2023-07-26 11:21:48",
        "is_active": "Y",
        "is_top": "N",
        "create_name": "root",
        "modify_name": "root"
    },
    {
        "id": 11,
        "p_id": 9,
        "type": "menu",
        "name": "卡片列表",
        "api_path": null,
        "path": "/list/card",
        "icon": "Menu",
        "menu_type": "tab",
        "url": "/list/card",
        "redirect": null,
        "commponent": "/src/views/list/card",
        "keepalive": 0,
        "remark": "卡片列表",
        "weigh": 100,
        "status": "1",
        "create_time": "2023-07-26 11:21:43",
        "modify_time": "2023-07-26 11:21:45",
        "is_active": "Y",
        "is_top": "N",
        "create_name": "root",
        "modify_name": "root"
    },
    {
        "id": 10,
        "p_id": 9,
        "type": "menu",
        "name": "基础列表",
        "api_path": null,
        "path": "/list/base",
        "icon": "Menu",
        "menu_type": "tab",
        "url": "/list/base",
        "redirect": null,
        "commponent": "/src/views/list/base",
        "keepalive": 0,
        "remark": "基础列表",
        "weigh": 0,
        "status": "1",
        "create_time": "2023-07-26 11:21:40",
        "modify_time": "2023-07-26 11:21:41",
        "is_active": "Y",
        "is_top": "N",
        "create_name": "root",
        "modify_name": "root"
    },
    {
        "id": 9,
        "p_id": 0,
        "type": "menu_dir",
        "name": "常用列表",
        "api_path": null,
        "path": "/list",
        "icon": "Location",
        "menu_type": "tab",
        "url": "/list",
        "redirect": "/list/base",
        "commponent": "Layout",
        "keepalive": 0,
        "remark": "常用列表菜单",
        "weigh": 200,
        "status": "1",
        "create_time": "2023-07-26 11:21:37",
        "modify_time": "2023-07-26 11:21:39",
        "is_active": "Y",
        "is_top": "N",
        "create_name": "root",
        "modify_name": "root"
    },
    {
        "id": 8,
        "p_id": 4,
        "type": "menu",
        "name": "图标组件",
        "api_path": null,
        "path": "/components/icon",
        "icon": "Grid",
        "menu_type": "tab",
        "url": "/components/icon",
        "redirect": null,
        "commponent": "/src/views/components/icon",
        "keepalive": 0,
        "remark": "图标",
        "weigh": 300,
        "status": "1",
        "create_time": "2023-07-26 11:21:35",
        "modify_time": "2023-07-26 11:21:36",
        "is_active": "Y",
        "is_top": "N",
        "create_name": "root",
        "modify_name": "root"
    },
    {
        "id": 7,
        "p_id": 4,
        "type": "menu",
        "name": "弹窗组件",
        "api_path": null,
        "path": "/components/dialog",
        "icon": "Menu",
        "menu_type": "tab",
        "url": "/components/dialog",
        "redirect": null,
        "commponent": "/src/views/components/dialog",
        "keepalive": 0,
        "remark": "弹窗",
        "weigh": 200,
        "status": "1",
        "create_time": "2023-07-26 11:21:32",
        "modify_time": "2023-07-26 11:21:33",
        "is_active": "Y",
        "is_top": "N",
        "create_name": "root",
        "modify_name": "root"
    },
    {
        "id": 6,
        "p_id": 4,
        "type": "menu",
        "name": "表单组件",
        "api_path": null,
        "path": "/components/form",
        "icon": "Menu",
        "menu_type": "tab",
        "url": "/components/form",
        "redirect": null,
        "commponent": "/src/views/components/form",
        "keepalive": 0,
        "remark": "表单",
        "weigh": 100,
        "status": "1",
        "create_time": "2023-07-26 11:21:29",
        "modify_time": "2023-07-26 11:21:31",
        "is_active": "Y",
        "is_top": "N",
        "create_name": "root",
        "modify_name": "root"
    },
    {
        "id": 5,
        "p_id": 4,
        "type": "menu",
        "name": "表格组件",
        "api_path": null,
        "path": "/components/table",
        "icon": "Menu",
        "menu_type": "tab",
        "url": "/components/table",
        "redirect": null,
        "commponent": "/src/views/components/table",
        "keepalive": 0,
        "remark": "表格",
        "weigh": 0,
        "status": "1",
        "create_time": "2023-07-26 11:21:26",
        "modify_time": "2023-07-26 11:21:28",
        "is_active": "Y",
        "is_top": "N",
        "create_name": "root",
        "modify_name": "root"
    },
    {
        "id": 2,
        "p_id": 1,
        "type": "menu",
        "name": "按钮权限",
        "api_path": null,
        "path": "/permission/index",
        "icon": "Location",
        "menu_type": "tab",
        "url": "/permission/index",
        "redirect": null,
        "commponent": "/src/views/permission/index",
        "keepalive": 0,
        "remark": "按钮权限",
        "weigh": 0,
        "status": "1",
        "create_time": "2023-07-25 23:16:43",
        "modify_time": "2023-07-26 11:21:20",
        "is_active": "Y",
        "is_top": "N",
        "create_name": "root",
        "modify_name": "root"
    },
    {
        "id": 3,
        "p_id": 1,
        "type": "menu",
        "name": "菜单规则",
        "api_path": null,
        "path": "/permission/menu",
        "icon": "Location",
        "menu_type": "tab",
        "url": "/permission/menu",
        "redirect": null,
        "commponent": "/src/views/permission/menu",
        "keepalive": 0,
        "remark": "菜单规则",
        "weigh": 100,
        "status": "1",
        "create_time": "2023-07-25 23:16:47",
        "modify_time": "2023-07-26 11:21:20",
        "is_active": "Y",
        "is_top": "N",
        "create_name": "root",
        "modify_name": "root"
    },
    {
        "id": 4,
        "p_id": 0,
        "type": "menu_dir",
        "name": "组件",
        "api_path": null,
        "path": "/components",
        "icon": "Location",
        "menu_type": "tab",
        "url": "/components",
        "redirect": "/components/index",
        "commponent": "Layout",
        "keepalive": 0,
        "remark": "组件菜单",
        "weigh": 100,
        "status": "1",
        "create_time": "2023-07-25 23:29:33",
        "modify_time": "2023-07-26 11:21:20",
        "is_active": "Y",
        "is_top": "N",
        "create_name": "root",
        "modify_name": "root"
    },
    {
        "id": 1,
        "p_id": 0,
        "type": "menu_dir",
        "name": "权限管理",
        "api_path": "",
        "path": "/permission",
        "icon": "Location",
        "menu_type": "tab",
        "url": "/permission",
        "redirect": "/permission/index",
        "commponent": "Layout",
        "keepalive": 0,
        "remark": "权限管理菜单",
        "weigh": 0,
        "status": "1",
        "create_time": "2023-07-13 13:41:55",
        "modify_time": "2023-07-25 23:14:38",
        "is_active": "Y",
        "is_top": "N",
        "create_name": "root",
        "modify_name": "root"
    },
    ...sysData
].map(menu => {
    return {
        id: menu.id,
        icon: menu.icon,
        label: menu.name,
        path: menu.path,
        component: menu.commponent,
        parentId: menu.p_id,
        redirect: menu.redirect,
        meta: {
            title: menu.name,
            keepalive: menu.keepalive
        },
        isTop: menu.is_top
    }
})

const getTopMenu: () => TopMenu[] = () => {
    return [{
        id: 1,
        icon: 'Menu',
        label: "工作台",
        path: "/dashboard/index",
        component: '/src/views/index/index.vue',
        parentId: 0,
        meta: {
            i18n: 'dashboard',
        }
    }, {
        id: 100,
        icon: 'Menu',
        label: "仪表盘",
        path: "/dashboard/base",
        component: '/src/views/index/base.vue',
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
        component: '/src/views/index/base.vue',
        parentId: 2
    }]
}

const getMenuList: () => QbMenu[] = () => {
    return getTreeList(menuRules, 0)
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