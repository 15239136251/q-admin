import { getStore } from "@/utils/storage"
import { RouteLocationNormalized, Router } from "vue-router"
import { useTagsStore } from '@/store/tags'

let tagsStore: any = null

const whiteListRouters: string[] = ['/login', '/404']

const interceptor = (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized
) => {
    if (tagsStore === null) {
        tagsStore = useTagsStore()
    }

    const { ADD_TAG } = tagsStore

    const token = getStore({name: 'token'})

    if (token) {
        if (to.path === '/login') {
            setTimeout(() => {
                // 在有token的情况下前往登录页面，直接调用退出登录方法。
            })
            return true
        }

        // 查看本地权限缓存是否存在，如果存在就继续，不存在就重新调用接口查询，查询
        const roles = [1]

        if (roles && roles.length > 0) {
            ADD_TAG({
                label: to.name as string,
                path: to.path,
                params: to.params,
                query: to.query
            })
            return true
        } else {
            try {
                // 查询用户信息和权限按钮
                return true
            } catch (error) {
                console.log("🚀 ~ file: route.ts:44 ~ error:", error)
                // 失败后清除token并返回登录页面
                return {
                    path: `/login?redirect=${to.path}`,
                    replace: true, // 重定向
                }
            }
        }
    } else {
        if (whiteListRouters.includes(to.path)) {
            // 在白名单内，直接跳转
            return true
        } else {
            return {
                path: `/login?redirect=${to.path}`,
                replace: true, // 重定向
            }
        }
        
    }
}

export default (router: Router) => {
    router.beforeEach(interceptor)
    return router
}