/* common.ts */

import { defineStore } from "pinia";

export const useCommonStore = defineStore('commonStore', {
    state: () => {
        return {
            isCollapse: false,
            showTag: true
        }
    },
    actions: {
        SET_COLLAPSE() {
            this.isCollapse = !this.isCollapse
        }
    },
    getters: {

    }
})