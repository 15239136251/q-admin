/* logs.ts */

import { getStore, setStore } from "@/utils/storage"
import { defineStore } from "pinia"

export interface Logs {
    type: string,
    message: string,
    stack: string,
    info: string
}

export const useLogsStore = defineStore('logsStore', {
    state: () => {
        return {
            logsList: getStore({ name: 'logsList' }) || []
        }
    },
    actions: {
        ADD_LOGS(logs: Logs) {
            const {type, message, stack, info} = logs
            this.logsList.push(Object.assign({
                url: window.location.href,
                time: new Date().getDate()
            }, {
                type,
                message,
                stack,
                info: info.toString()
            }))
            setStore({ name: 'logsList', content: this.logsList} )
        },
        CLEAR_LOGS() {
            this.logsList = []
            setStore({ name: 'logsList', content: this.logsList} )
        }
    },
    getters: {

    }
})