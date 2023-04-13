import { getStore } from "@/utils/storage"
import { RouteLocationNormalized, Router } from "vue-router"
import { useTagsStore } from '@/store/tags'

let tagsStore: any = null


const interceptor = (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized
) => {
    if (tagsStore === null) {
        tagsStore = useTagsStore()
    }
    const { ADD_TAG } = tagsStore

    if (to.path !== '/login' && to.path !== '/404') {
        const token = getStore({name: 'token'})
        if (token) {
            ADD_TAG({
                label: to.name as string,
                path: to.path,
                params: to.params,
                query: to.query
            })
            return true
        } else {
            return {
                path: "/login",
                replace: true, // 重定向
              };
        }
    }  else {
        return true
    }
}

export default (router: Router) => {
    router.beforeEach(interceptor)
    return router
}