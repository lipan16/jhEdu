<template>
    <DefaultHeader/>
    <div class="main">
        <router-view v-slot="{Component, route}">
            <component :is="Component" :key="route.fullPath"/>
        </router-view>
    </div>
    <DefaultFooter/>
</template>

<script lang="ts">
import DefaultFooter from '@/layout/components/DefaultFooter.vue'
import DefaultHeader from '@/layout/components/DefaultHeader.vue'

export default {
    name: 'layout',
    components: {DefaultFooter, DefaultHeader}
}
</script>

<style scoped lang="less">
.main{
    position: relative;
}

</style>
