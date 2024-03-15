<template>
    <div class="box">
        <p class="title mt-10 mb-10 ml-10">样式页面</p>
        <img src="/logo.png" />
        <img src="~/assets/logo.png" />
    </div>
</template>

<script setup lang="ts">
import "~/assets/css/one.css"; // 使用静态导入以实现服务器端兼容性
</script>

<style scoped lang="scss">
@import url("~/assets/css/two.css");
.box {
    .title {
        color: $red;
    }
}
</style>
