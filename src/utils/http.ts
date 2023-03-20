import axios from "./axios"
import { ElMessage } from 'element-plus'

const { VITE_BASE_URL = '' } = import.meta.env

// 请求发生错误的函数， 用于判断 statusCode 是否成功（2xx）
const resError = (res: any, msg = '响应发生错误') =>
    new Promise((resolve, reject) => {
        const {
            status,
            data: { error = {} },
        } = res
        if (status == 200) {
            resolve(res)
            return
        }
        // 请求响应 401 表示需要登录
        if (+res.status === 401) {
            console.log('TODO: 此处需补充逻辑')
            return
        }
        const { message = msg } = error
        ElMessage.error(`${message}（${status}）`)
        reject(new Error(message))
    })

// 响应拦截函数，接收响应对象为参数，用于根据响应结果做出相应操作
// 响应成功(status === 2xx)时会被调用
const resFn = (res: any) =>
    new Promise((resolve, reject) => {
        const { code, data, result, msg, message, success } = res.data
        if (success || +code === 100) {
            resolve(data || result)
            return
        }
        ElMessage.error(msg || message)
        reject(res)
    })

// 正在请求的列表
const pendingList: string[] = []

interface ReqData {
    url: string
    data?: Object
    method?:
    | 'OPTIONS'
    | 'GET'
    | 'HEAD'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'TRACE'
    | 'CONNECT'
    baseURL?: string
    isShowLoading?: boolean
}

const REQ = async (
    reqData: ReqData = {
        url: '',
        data: {},
        method: 'GET',
        baseURL: VITE_BASE_URL
    }
) => {
    const reqDataJSON = JSON.stringify(reqData)
    if (pendingList.includes(reqDataJSON)) {
        throw new Error('重复请求...')
    }
    pendingList.push(reqDataJSON)
    const { url, data, method, baseURL = VITE_BASE_URL } = reqData
    // 获取 token
    const timestamp = Date.now()
    const headerToken = {
        'x-timestamp': timestamp,
    }
    return new Promise((resolve, reject) => {
        axios({
            url: baseURL + url,
            method,
            data,
            headers: headerToken,
        }).then(res => {
            resError(res).then(resFn).then(resolve).catch(reject)
        }).catch(err => {
            reject(err)
        }).finally(() => {
            const i = pendingList.findIndex((v) => v === reqDataJSON)
            i >= 0 && pendingList.splice(i, 1)
        })
    })
}

export default REQ