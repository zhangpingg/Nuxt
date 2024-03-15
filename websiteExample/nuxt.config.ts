// Nuxt 配置

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    // 生产环境
    $production: {
        routeRules: {
            "/**": { isr: true },
        },
    },
    // 开发环境
    $development: {
        //
    },
    // 环境变量配置
    runtimeConfig: {
        // 只在服务器端可用的私有键
        apiSecret: "123",
        // public中的键也可以在客户端使用
        public: {
            apiBase: "/api",
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import '@/assets/colors.scss';`,
                    //additionalData: '@use "@/assets/colors.scss" as *;',
                },
            },
        },
    },
    css: ["~/assets/css/three.css"],
    app: {
        // 自定义整个应用的头部（静态数据）
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
        },
    },
});
