import config from "@/config"
import { validatenull } from "./valldate"

const keyName = config.key + '-'

interface StoreParams {
    name?: string
    content?: any
    type?: string
}

interface StoreValue {
    dataType: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"
    content: any
    type: string | undefined
    datetime: number
}

/**
 * 存储localStorage
 */
export const setStore = (params: StoreParams = {}) => {
    let {
        name,
        content,
        type,
    } = params;
    name = keyName + name
    let obj: StoreValue = {
        dataType: typeof (content),
        content: content,
        type: type,
        datetime: new Date().getTime()
    }
    if (type) window.sessionStorage.setItem(name, JSON.stringify(obj));
    else window.localStorage.setItem(name, JSON.stringify(obj));
}

/**
 * 获取localStorage
 */
export const getStore = (params: StoreParams = {}) => {
    let {
        name
    } = params;
    name = keyName + name
    let obj: any = {},
        content
    obj = window.sessionStorage.getItem(name)
    if (validatenull(obj)) obj = window.localStorage.getItem(name)
    if (validatenull(obj)) return

    let value: StoreValue
    try {
        value = JSON.parse(obj)
    } catch {
        return obj
    }
    if (value.dataType == 'string') {
        content = value.content;
    } else if (value.dataType == 'number') {
        content = Number(value.content);
    } else if (value.dataType == 'boolean') {
        content = eval(value.content);
    } else if (value.dataType == 'object') {
        content = value.content;
    }

    return content
}
/**
 * 删除localStorage
 */
export const removeStore = (params: StoreParams = {}) => {
    let {
        name,
        type
    } = params;
    name = keyName + name
    if (type) {
        window.sessionStorage.removeItem(name);
    } else {
        window.localStorage.removeItem(name);
    }

}

/**
 * 获取全部localStorage
 */
// export const getAllStore = (params: StoreParams = {}) => {
//     let list = [];
//     let {
//         type
//     } = params;
//     if (type) {
//         for (let i = 0; i <= window.sessionStorage.length; i++) {
//             list.push({
//                 name: window.sessionStorage.key(i),
//                 content: getStore({
//                     name: window.sessionStorage.key(i),
//                     type: 'session'
//                 })
//             })
//         }
//     } else {
//         for (let i = 0; i <= window.localStorage.length; i++) {
//             list.push({
//                 name: window.localStorage.key(i),
//                 content: getStore({
//                     name: window.localStorage.key(i),
//                 })
//             })

//         }
//     }
//     return list;

// }

/**
 * 清空全部localStorage
 */
export const clearStore = (params: { type?: string } = {}) => {
    let { type } = params;
    if (type) {
        window.sessionStorage.clear();
    } else {
        window.localStorage.clear()
    }

}