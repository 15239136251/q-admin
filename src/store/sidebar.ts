/* sidebar.ts */

import { getStore, setStore } from "@/utils/storage";
import { defineStore } from "pinia";
import { getMenus, getTopMenu } from '@/api/system'
import router from "@/router";

export interface Menu {
    id: number
    label: string
    path: string
    icon: string
    meta?: any
    parentId: number
    children?: Menu[]
    isOpen?: number
    query?: any
}

export interface TopMenu {
    label: string
    path: string
    icon: string
    meta: any
    parentId: number
    query?: any
}

export const useSidebarStore = defineStore('sidebarStore', {
    state: () => {
        const menu: Menu[] = getStore({name: 'menu'}) || []
        const menuId: number[] = getStore({name: 'menuId'}) || []
        const menuAll: Menu[] = getStore({name: 'menuAll'}) || []
        const topMenus: TopMenu[] = getStore({name: 'topMenus'}) || []
        const menus: Menu[] = getStore({name: 'menus'}) || []
        return {
            topMenus,
            menus,
            menu,
            menuId,
            menuAll,
        }
    },
    actions: {
        SET_TOP_MENUS(value: TopMenu[]) {
            this.topMenus = value
            setStore({ name: 'topMenus', content: this.topMenus })
        },
        SET_MENUS(value: Menu[]) {
            this.menus = value
            setStore({ name: 'menus', content: this.menus })
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

        goto(url: string) {
            router.push(url)
        },

        async getMenus() {
            const result: any = await getMenus()
            console.log("🚀 ~ file: sidebar.ts:43 ~ getMenus ~ result:", result)
            this.SET_MENUS(result)
        },

        async getTopMenu() {
            const result: any = await getTopMenu()
            console.log("🚀 ~ file: sidebar.ts:48 ~ getTopMenu ~ result:", result)
            this.SET_TOP_MENUS(result)

        }
        
    },
    getters: {

    }
})