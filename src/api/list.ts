import REQ from "@/utils/http";

export const getBaseList = (data: any) => REQ({
    url: '/api/list/base',
    method: 'POST',
    data: data
})

export const getCardList = (data: any) => REQ({
  url: '/api/list/card',
  method: 'POST',
  data: data
})