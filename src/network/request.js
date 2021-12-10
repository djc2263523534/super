import axios from 'axios'


export function demand(config) {

    const instancel = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        timeout: 5000
    })

    return instancel(config)
}


export function request(config) {


    // 1.创建 axios的实例
    const instancel = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })


    //2.axios拦截器
    // instancel.interceptors.request.use(config => {
    //     //     console.log(config);
    //     //     //1.config中的一些信息不符合服务器的要求
    //     //     //2.每次发送网络请求时，都希望在界面中显示一个请求的图标
    //     //     //3.某些网络请求(登录的tooken),必须携带一些特殊的信息

    //     return config
    // }, err => {
    //     console.log(err);
    // })

    // instancel.interceptors.response.use(config => {
    //     console.log(res);
    //     return config  //拦截返回处理后的数据
    // }, err => {
    //     console.log(err);
    // })
    //拦截返回的数据

    return instancel(config)      //返回promise
}


