<template>
    <div>路由页面</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute(); // 当前路由对象

onMounted(() => {
    console.log("路由参数：", route.query);
});
</script>

<style scoped lang="scss"></style>
