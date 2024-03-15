<template>
    <div>
        <!--第三种-->
        <Head>
            <Title>{{ title }}</Title>
            <Meta name="description" :content="title" />
            <Style type="text/css" children="body { background: #ccc; }" />
        </Head>
        <div>{{ title }}</div>
    </div>
</template>

<script setup lang="ts">
const title = ref("你好，世界");
</script>
