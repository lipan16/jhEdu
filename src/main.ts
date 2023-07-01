import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import './main.less'
import './tailwind.css'

const store = createPinia()

async function booting(){
    // 创建应用实例
    const app = createApp(App)

    // 配置存储
    app.use(store)

    // 路由保护
    // setupRouterGuard(router)

    // 配置路由
    app.use(router)

    // 当路由准备好时再执行挂载( https://next.router.vuejs.org/api/#isready)
    await router.isReady()

    app.mount('#app', true)
    app.config.errorHandler = (err, instance, info) => {
        console.error(err, instance, info)
    }
}

booting().then()
