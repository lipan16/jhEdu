<template>
    <div class="header flex-inline">
        <div>
            <img class="logo" src="@/assets/logo_font.png" alt=""/>
        </div>
        <div class="flex-list">
            <div>设为首页</div>
            <div>收藏</div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'DefaultHeader'
}
</script>

<style scoped lang="less">
.header{
    padding: 20px 40px;
    justify-content: space-between;
    background-color: #fff;

    .logo{
        width: 300px;
    }
}
</style>
