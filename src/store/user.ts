/* user.ts */
import { loginUser } from '@/api/login'
import { getStore, setStore } from '@/utils/storage'
import { validatenull } from '@/utils/valldate'
import { defineStore } from 'pinia'
import { Md5 } from 'ts-md5'

/* Menu */
export interface Menu {
    id: number
    label: string
    path: string
    icon: string
    meta?: any
    parentId: number
    children?: Menu[]
    isOpen?: number
}

export const useUserStore = defineStore('userStore', {
    state: () => {
        const roles: number[] = []
        const menu: Menu[] = getStore({name: 'menu'}) || []
        const userinfo: any = getStore({name: 'userinfo'}) || {}
        const menuId: number[] = getStore({name: 'menuId'}) || []
        const menuAll: Menu[] = getStore({name: 'menuAll'}) || []
        const token: string = getStore({name: 'token'}) || ''
        const refreshToken: string = getStore({name: 'refreshToken'}) || ''
        return {
            userinfo,
            roles,
            menu,
            menuId,
            menuAll,
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
        SET_MENU(menu: Menu[]) {
            this.menu = menu
            setStore({ name: 'menu', content: this.menu })
        },
        SET_MENU_ID(menuId: number[]) {
            this.menuId = menuId
            setStore({ name: 'menuId', content: this.menuId })
        },
        SET_MENU_ALL(menuAll: Menu[]) {
            this.menuAll = menuAll
            setStore({ name: 'menuAll', content: this.menuAll })
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
                    resolve(null)
                }).catch(error => {
                    reject(error)
                })
            })
        },
    },
    getters: {

    }
})