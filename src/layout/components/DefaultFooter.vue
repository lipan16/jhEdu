<template>
    <div class="footer flex-inline">
        <div class="contact">
            <div>江大微信</div>
            <div>江大QQ</div>
        </div>
        <div class="footer-logo">
            <div>
                <img class="logo" src="@/assets/logo_font.png" alt=""/>
            </div>
            <div class="flex-inline">
                <div>联系我们</div>
                &nbsp;
                <div>网站地图</div>
            </div>
        </div>
        <div class="website">
            <div class="motto">求真 求善 求美</div>
            <div>版权所有&copy;江湖大学</div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'DefaultFooter'
}
</script>

<style scoped lang="less">
.footer{
    background-color: #fff;
    padding: 20px 40px;
    justify-content: space-between;

    .footer-logo{
        .logo{
            width: 200px;
        }
    }

    .website{
        .motto{
            color: #f80a8b;
        }
    }
}

</style>
