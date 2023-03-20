import REQ from "@/utils/http";

export const loginUser = (username: string, password: string, code: string) => REQ({
    url: '/auth/login',
    method: 'POST',
    data: {
        username, password, code, grant_type: 'password'
    }
})

export const refreshToken = (token: string) => REQ({
    url: '/auth/login',
    method: 'POST',
    data: {
        token,
        type: 'refresh_token'
    }
})

export const loginout = () => REQ({
    url: '/auth/signout',
    method: 'DELETE'
})