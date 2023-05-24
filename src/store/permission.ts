/* permission.ts */
import { getStore, setStore } from "@/utils/storage";
import { defineStore } from "pinia";

export const usePermissionStore = defineStore('permissionStore', {
    state: () => {
        return {
          menuRoles: getStore({name: 'menuRole'}) || ['user:view']
        }
    },
    actions: {
      SET_MENU_ROLES(value: string[]) {
        this.menuRoles = value
        setStore({name: 'menuRole', content: this.menuRoles})
      }
    },
    getters: {
      menus(): string[] {
        return this.menuRoles
      }
    }
})