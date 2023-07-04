import { createRouter, createWebHistory } from 'vue-router'
import pageRouter from './pages/index'
import viewRouter from './views/index'
// 路由守卫
import route from './route'
import { QbMenu } from '@/store/sidebar'

const router = route(createRouter({
    history: createWebHistory(),
    routes: [...pageRouter, ...viewRouter]
}))

export const generateRoute = (menuList: QbMenu[]) => {
    //获取菜单权限中每个菜单的路由
    const routes: QbMenu[] = []

    const deepList = (list: QbMenu[]) => {
        while (list.length) {
            const item = list.pop()
            
            if (item && item.children && !item.action) {//一级菜单
                deepList(item.children)
            }
        }
    }

    deepList(menuList)
    return routes
}

export default router