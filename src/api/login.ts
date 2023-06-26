import REQ from "@/utils/http";
import { UserInfo } from '@/store/user';

export const loginUser = (username: string, password: string, code: string) => REQ<UserInfo>({
    url: '/api/auth/login',
    method: 'POST',
    data: {
        username, password, code, grant_type: 'password'
    }
})

export const refreshToken = (token: string) => REQ({
    url: '/api/auth/login',
    method: 'POST',
    data: {
        token,
        type: 'refresh_token'
    }
})

export const loginout = () => REQ({
    url: '/api/auth/signout',
    method: 'DELETE'
})