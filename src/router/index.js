import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/view/home'

Vue.use(VueRouter)

export const HOME_PAGE_NAME = "home";
export const CREAT_PAGE_NAME = "create";

const routes = [
    {
        path: '/',
        redirect: '/home',
        name: 'home',
        children: [
            {
                path: 'home',
                name: HOME_PAGE_NAME,
                component: Home
            },
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
