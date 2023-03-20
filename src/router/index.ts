import { createRouter, createWebHistory } from 'vue-router'
import pageRouter from './pages/index'
import viewRouter from './views/index'
// 路由守卫
import route from './route'

const router = route(createRouter({
    history: createWebHistory(),
    routes: [...pageRouter, ...viewRouter]
}))


export default router