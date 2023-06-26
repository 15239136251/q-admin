import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { ElMessage } from 'element-plus'

export type Result<T> = {
    code: number
    message: string
    data: T
}

export class Request {
    // axios 实例
    instance: AxiosInstance
    // 基础配置，url和超时时间
    baseConfig: AxiosRequestConfig = { baseURL: '/api', timeout: 60000 }
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(Object.assign(this.baseConfig, config))
        //返回其他状态码
        this.instance.defaults.validateStatus = function (status) {
            return status >= 200 && status <= 500
        }
        //跨域请求，允许保存cookie
        this.instance.defaults.withCredentials = true
        // NProgress 配置
        NProgress.configure({
            showSpinner: false
        })
        //http request拦截
        this.instance.interceptors.request.use(
            (config) => {
                //开启 progress bar
                NProgress.start()
                // 一般会请求拦截里面加token，用于后端的验证
                const token = localStorage.getItem("token") as string
                if(token) {
                    config.headers!.Authorization = token;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error)
            }
        )

        //http response 拦截
        this.instance.interceptors.response.use(
            (res) => {
                // 关闭 NProgress
                NProgress.done()
                // 获取状态码
                const status: number = res.data.code || res.status
                // 白名单
                const statusWhiteList: number[] = []
                const message =
                    res.data.message ||
                    res.data.msg ||
                    res.data.error_description ||
                    '未知错误'
                //如果在白名单里则自行catch逻辑处理
                if (statusWhiteList.includes(status)) return Promise.reject(res)
                // 如果请求为非100否者默认统一处理
                if (status !== 100) {
                    ElMessage.error(message)
                    return Promise.reject(new Error(message))
                }
                return res
            },
            (error) => {
                NProgress.done()
                return Promise.reject(new Error(error))
            }
        )
    }

    // 定义请求方法
    public request<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
        return this.instance.request(config)
    }

    public get<T = any>(url: string, config: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
        return this.instance.get(url, config)
    }

    public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
        return this.instance.post(url, data, config)
    }

}

export default new Request({})