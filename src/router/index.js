import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')


const routes = [
    {
        path: '',
        redirect: '/home',
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/category',
        component: Category,
        meta: {
            title: '分类'
        }
    },
    {
        path: '/cart',
        component: Cart,
        meta: {
            title: '购物车'
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: '我的'
        }
    },
    {
        path: '/detail/:iid',
        component: Detail,
        meta: {
            title: '详情页'
        }
    }
]




const router = new Router({
    routes,
    mode: 'history',
    base: process.env.BASE_URL,
    // linkActiveClass: 'active'
})

Vue.use(Router)
router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    // console.log(to);
    document.title = to.matched[0].meta.title
    next()
})



export default router

