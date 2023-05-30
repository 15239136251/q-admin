import REQ from "@/utils/http";

export const getBaseList = (data: any) => REQ({
    url: '/api/list/base',
    method: 'POST',
    data: data
})