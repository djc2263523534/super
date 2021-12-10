import { request, demand } from "./request";

export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

export function getHomeGoods(type, page) {
    return demand({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}

export function getHomeDetail(iid) {
    return demand({
        url: '/detail',
        params: {
            iid
        }
    })
}

export function getRecommend() {
    return demand({
        url: '/recommend'
    })
}



