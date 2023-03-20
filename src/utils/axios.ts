import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import axios from 'axios'
import { ElMessage } from 'element-plus'

//默认超时时间
axios.defaults.timeout = 10000
//返回其他状态码
axios.defaults.validateStatus = function (status) {
    return status >= 200 && status <= 500
}
//跨域请求，允许保存cookie
axios.defaults.withCredentials = true
// NProgress 配置
NProgress.configure({
    showSpinner: false
})
//http request拦截
axios.interceptors.request.use(
    (config) => {
        //开启 progress bar
        NProgress.start()
        // console.log("🚀 ~ file: axios.js ~ line 38 ~ config", config)
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)

//http response 拦截
axios.interceptors.response.use(
    (res) => {
        // 关闭 NProgress
        NProgress.done()
        // 获取状态码
        const status = res.data.code || res.status
        // 白名单
        const statusWhiteList: any[] = []
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

export default axios