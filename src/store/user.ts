/* user.ts */
import { loginUser } from '@/api/login'
import router from '@/router'
import { getStore, removeStore, setStore } from '@/utils/storage'
import { validatenull } from '@/utils/valldate'
import { defineStore } from 'pinia'
import { Md5 } from 'ts-md5'
import { useSidebarStore } from './sidebar'

// 按钮组
const { getMenus, getTopMenu } = useSidebarStore()

export const useUserStore = defineStore('userStore', {
    state: () => {
        const roles: number[] = []
        const userinfo: any = getStore({name: 'userinfo'}) || {}
        
        const token: string = getStore({name: 'token'}) || ''
        const refreshToken: string = getStore({name: 'refreshToken'}) || ''
        return {
            userinfo,
            roles,
            token,
            refreshToken,
        }
    },
    actions: {
        SET_USER_INFO(userinfo: any) {
            if (validatenull(userinfo.avatar)) {
                userinfo.avatar = '/img/avatar.jpg'
            }
            this.userinfo = userinfo
            setStore({ name: 'userinfo', content: this.userinfo })
        },
        SET_ROLES(roles: number[]) {
            this.roles = roles
        },
        SET_TOKEN(token: string) {
            this.token = token
            setStore({ name: 'token', content: this.token })
        },
        SET_REFRESH_TOKEN(refreshToken: string) {
            this.refreshToken = refreshToken
            setStore({ name: 'refreshToken', content: this.refreshToken })
        },
        /* 登录 */
        loginUser(loginForm: {username: string, password: string, code: string}) {
            return new Promise((resolve, reject) => {
                loginUser(loginForm.username, loginForm.password, loginForm.code).then((res: any) => {
                    console.log("🚀 ~ file: user.ts:72 ~ loginUser ~ res:", res)
                    this.SET_TOKEN(res.token)
                    this.SET_REFRESH_TOKEN(res.refreshToken)
                    this.SET_USER_INFO(res)
                    this.loginInit()
                    resolve(null)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 登录后的操作
        loginInit() {
            getMenus()
            getTopMenu()
        },
        /* 退出登录 */
        logout() {
            removeStore({ name: 'token' })
            router.push({
                path: '/login'
            })
        }
    },
    getters: {

    }
})