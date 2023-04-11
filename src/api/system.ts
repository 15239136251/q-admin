import REQ from "@/utils/http";

export const getTopMenu = () => REQ({
    url: '/api/menu/top-menu',
    method: 'GET',
    data: {}
});

export const getMenus = () => REQ({
    url: '/api/auth/menu',
    method: 'GET',
    data: {}
});