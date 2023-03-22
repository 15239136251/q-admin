import { getStore } from '@/utils/storage'
import { Md5 } from 'ts-md5'
const login = [
    /* loginUser */
    {
        url: '/api/auth/login',
        type: 'post',
        response: (options: any) => {
            const { body } = options
            const { username, password, token, type } = JSON.parse(body)
            console.log("🚀 ~ file: login.ts:8 ~ options:", options)
            /* 刷新token */
            if (type === 'refresh_token') {
                const old_token = getStore({ name: 'token' })
                const old_username = getStore({ name: 'username' }) || ''
                if (old_token === token) {
                    return {
                        code: 100,
                        type: 'refresh_token',
                        message: '刷新成功!',
                        token: Md5.hashStr(JSON.stringify({
                            username: old_username,
                            date: new Date().getTime()
                        }))
                    }
                } else {
                    return {
                        code: -1,
                        message: '请求超时!',
                        data: null
                    }
                }
            }
            const users = {
                'root': Md5.hashStr('123456'),
                'admin': Md5.hashStr('admin')
            }
            let code = -1
            let message = '登录失败!账号密码错误!'
            let data: null | { username: string } = null
            type UType = keyof typeof users
            if (users[username as UType] && password === users[username as UType]) {
                code = 100
                message = `登录成功!`
                const token = Md5.hashStr(JSON.stringify({
                    username: username,
                    date: new Date().getTime()
                }))
                const refreshToken = Md5.hashStr(JSON.stringify({
                    username: username,
                    date: new Date().getTime() + 300000
                }))
                data = {  username, token, refreshToken  }
            }
            return {
                code,
                message,
                data
            }
        }
    }
]

export default login