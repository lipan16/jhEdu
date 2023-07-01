import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

import Layout from '@/layout/index.vue'

const constantRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Layout,
        children: [{
            path: '',
            component: () => import(/* webpackChunkName: "dashboard" */ '@/views/HelloWorld.vue'),
            meta: {
                title: 'home',
            }
        }]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_APP_PUBLIC_PATH),
    routes: constantRoutes,
    strict: true
})

export default router
