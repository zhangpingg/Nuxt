<template>
    <div>
        <button @click="jumpPage('styleDemo')">样式页面</button> <br />
        <button @click="jumpPage('routeDemo')">路由页面</button> <br />
        <button @click="jumpPage('middlewareDemo1')">中间件页面</button> <br />
        <button @click="jumpPage('componentDemo')">组件页面</button> <br />
    </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";

const router = useRouter(); // 路由全局对象
const route = useRoute(); // 当前路由对象

const jumpPage = (url) => {
    router.push({ path: `/${url}`, query: { id: 1 } });
};
</script>

<style scoped lang="scss"></style>
