import { createRouter, createWebHistory } from 'vue-router'
import pageRouter from './pages/index'
import viewRouter from './views/index'
// 路由守卫
import route from './route'
import { QbMenu } from '@/store/sidebar'
import { getTreeList } from '@/utils/utils'
import { getStore } from '@/utils/storage'
// import Layout from '@/pages/Layout_el/index.vue'

const router = route(createRouter({
    history: createWebHistory(),
    routes: [...pageRouter, ...viewRouter]
}))

export const generateRoute = (menuList: QbMenu[]) => {
    //获取菜单权限中每个菜单的路由
    const routes: QbMenu[] = [...menuList]
    const viewsComponent = import.meta.glob('/src/views/**/*.vue')
    const layout = import.meta.glob('/src/pages/Layout_el/index.vue')
    const Layout = layout['/src/pages/Layout_el/index.vue']

    const deepList = (list: QbMenu[], pPath?: string) => {

        list.forEach(item => {
            if(router.hasRoute(item.label)) {
                console.log('已注册')
                return
            }
            if (item?.path) {
                const data: any = {
                    path: item.path,
                    name: item.label,
                    meta: {
                        title: item.label
                    },
                    component: item.component === 'Layout' ? Layout : viewsComponent[item.component + '.vue']
                }
                const parentName = pPath
                if (parentName) {
                    console.log("🚀 ~ file: index.ts:37 ~ deepList ~ parentName:", parentName)
                    router.addRoute(pPath, data)
                } else {
                    router.addRoute(data)
                }
            }
            if (item.children?.length) {//一级菜单
                deepList(item.children, item.label)
            }
        })
        
    }
    deepList(routes)
    console.log("🚀 ~ file: index.ts:66 ~ generateRoute ~ router.getRoutes():", router.getRoutes())
    return routes
}

// generateRoute
const menus =  getStore({name: 'menus'}) || []
if (menus) {
    generateRoute(menus)
  }

export default router