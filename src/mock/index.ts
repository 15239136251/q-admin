import Mock from 'mockjs'
import login from './login'

const mocks: any[] = [...login]

// 设置延迟时间
Mock.setup({
    timeout: 20
})

// typing
interface MockParams {
    url: string
    type: string
    data?: any
    params?: any
    response(options?: any): Record<string, unknown>
}

export function mockXHR() {
    let i: MockParams
    for (i of mocks) {
        Mock.mock(new RegExp(i.url), i.type || 'get', i.response)
    }
}