import { Md5 } from 'ts-md5'
const login = [
    /* loginUser */
    {
        url: '/auth/login',
        type: 'post',
        response: (options: any) => {
            const { body } = options
            const { username, password } = JSON.parse(body)
            console.log("🚀 ~ file: login.ts:8 ~ options:", options)
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
                data = {  username }
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