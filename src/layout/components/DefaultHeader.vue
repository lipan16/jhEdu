<template>
    <div class="flex-inline w-full px-4 py-2 bg-cyan-200 overflow-auto">
        <img class="w-1/4" src="@/assets/logo_font.png" alt=""/>
        <div class="flex-inline w-3/4 justify-end">
            <div class="mx-2 w-max text-lg text-white hover:text-red-400 text-center"
                 v-for="(item, index) in nav"
                 :key="index"
                 @click="onClickNav(item)"
            >
                {{ item.title }}
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

const nav = [
    {title: '首页', link: '/'},
    {title: '认识江大', link: '/'},
    {title: '新闻资讯', link: '/'},
    {title: '人才培养', link: '/'},
    {title: '文化生活', link: '/'},
    {title: '图书档案', link: '/'},
    {title: '校园服务', link: '/'}
]

const onClickNav = (item: any) => {
    console.log(item)
}
</script>
