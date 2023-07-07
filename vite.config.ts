import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    // 根据当前工作目录中的 `mode` 加载 .env 文件, 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
    const env = loadEnv(mode, process.cwd(), '')
    console.log('mode', mode)

    return {
        base: env.VITE_APP_PUBLIC_PATH,
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        },
        plugins: [vue()],
        css: {
            postcss: {
                plugins: [tailwindcss]
            }
        },
        build: {
            minify: 'esbuild', // 必须开启：使用terserOptions才有效果
            terserOptions: {
                compress: {
                    keep_infinity: true,
                    // 生产环境时移除console
                    drop_console: true,
                    drop_debugger: true
                }
            },
            assetsInlineLimit: 4096, // 小于此阈值的导入或引用资源将内联为 base64 编码
            cssCodeSplit: true, // 启用 CSS 代码拆分
            cssTarget: '', // 允许用户为 CSS 的压缩设置一个不同的浏览器 target 与 build.target 一致
            sourcemap: false, // 构建后是否生成 source map 文件
            manifest: false, // 当设置为 true，构建后将会生成 manifest.json 文件
            ssrManifest: false, // 构建不生成 SSR 的 manifest 文件
            emptyOutDir: true, // 构建时清空该目录
            brotliSize: true, // 启用 brotli 压缩大小报告
            chunkSizeWarningLimit: 500, // chunk 大小警告的限制
        }
    }
})
