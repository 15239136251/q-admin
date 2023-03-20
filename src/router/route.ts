import { getStore } from "@/utils/storage"
import { Router } from "vue-router"

export default (router: Router) => {
    router.beforeEach((to, from, next) => {
        if (to.path !== '/login') {
            console.log('to', to)
            const token = getStore({name: 'token'})
            if (token) next()
                else next({ path: '/login' })
        }
        else next()
    })
    return router
}