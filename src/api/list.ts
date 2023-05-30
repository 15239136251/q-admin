import REQ from "@/utils/http";

export const getBaseList = () => REQ({
    url: '/api/list/base',
    method: 'POST',
    data: {}
})