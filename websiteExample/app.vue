<template>
    <div class="box1">
        <HeaderTitle /> <br />
        <NuxtPage />
    </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig(); // 获取 runtimeConfig 中的配置
const appConfig = useAppConfig(); // 获取应用程序的配置

//第一种
useHead({
    title: "我的应用",
    meta: [{ name: "description", content: "我的神奇网站。" }],
    bodyAttrs: {
        class: "box",
    },
    script: [{ innerHTML: "console.log('Hello world')" }],
});
// 第二种
useSeoMeta({
    title: "我的神奇网站",
    ogTitle: "我的神奇网站",
    description: "这是我的神奇网站，让我来告诉你关于它的一切。",
    ogDescription: "这是我的神奇网站，让我来告诉你关于它的一切。",
    ogImage: "https://example.com/image.png",
    twitterCard: "summary_large_image",
});
</script>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
