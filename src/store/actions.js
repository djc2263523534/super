import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutations-types'

export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            //1查找数组中是否存在商品
            let oldPrice = context.state.cartList.find(item => item.id == payload.id)
            if (oldPrice) {
                context.commit(ADD_COUNTER, oldPrice)
                resolve('重复添加商品')
            } else {
                payload.count = 1
                // context.state.cartList.push(payload)
                context.commit(ADD_TO_CART, payload)
                resolve('添加商品成功')
            }
        })


    }
}