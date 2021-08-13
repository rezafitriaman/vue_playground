import {createRouter, createWebHistory} from 'vue-router'
import ProductsList from '../pages/ProductsList.vue'
/* import ShopAdmin from '../pages/ShopAdmin.vue'
import UserCart from '../pages/UserCart.vue' */

const routes = [
    {
        path: '/',
        redirect: '/products'
    },
    {
        path: '/products',
        name: 'Products',
        component: ProductsList
    },
    {
        path: '/cart',
        name: 'cart',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../pages/UserCart.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../pages/ShopAdmin.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
