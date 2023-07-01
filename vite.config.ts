import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    // 根据当前工作目录中的 `mode` 加载 .env 文件, 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
    const env = loadEnv(mode, process.cwd(), '')
    console.log('mode', mode)

    return {
        base: env.VITE_APP_PUBLIC_PATH,
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            }
        },
        plugins: [vue()]
    }
})
