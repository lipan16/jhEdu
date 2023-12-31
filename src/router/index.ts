import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

import Layout from '@/layout/index.vue'

const constantRoutes: RouteRecordRaw[] = [
    // {
    //     path: '/',
    //     component: Layout,
    //     children: [{
    //         path: '',
    //         component: () => import(/* webpackChunkName: "dashboard" */ '@/views/index.vue'),
    //         meta: {
    //             title: 'home'
    //         }
    //     }]
    // },
    {
        path: '/',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/index.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_APP_PUBLIC_PATH),
    routes: constantRoutes,
    strict: true
})

export default router
