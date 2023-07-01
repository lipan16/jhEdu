<template>
    <div class="footer flex-inline">
        <div class="socializing">
            <div v-for="item in socializingList" :key="item.title" class="item">
                <img :src="item.icon" :alt="item.title"/>
                <div>{{ item.title }}</div>
            </div>
        </div>

        <div class="concat">
            <img class="logo" src="@/assets/logo_font.png" alt=""/>

            <div class="us">
                <span>联系我们</span>
                &nbsp;|&nbsp;
                <span>网站地图</span>
            </div>
        </div>

        <div class="website">
            <em class="motto">求真 求善 求美</em>
            <div class="copyright">版权所有&copy; 2023 江湖大学 &nbsp;&nbsp;湘ICP备xxx-xxx号</div>
            <div class="addr">地址：江湖四省兴业北路876号</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import weiboSvg from '@/assets/weibo.svg'
import weixinSvg from '@/assets/weixin.svg'
import qqSvg from '@/assets/qq.svg'

const socializingList = [
    {title: '江大微博', icon: weiboSvg},
    {title: '江大微信', icon: weixinSvg},
    {title: '江大QQ', icon: qqSvg}
]
</script>

<style scoped lang="less">
.footer{
    background-color: rgba(66, 75, 229, 0.6);
    padding: 20px;
    font-size: 12px;
    justify-content: space-between;
    color: white;
    overflow-x: auto;

    .socializing{
        width: 33%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 4px;

        .item{
            padding: 4px;
            border-radius: 8px;
            text-align: center;

            &:hover{
                background-color: rgba(247, 248, 250, 0.2);
            }

            > img{
                margin: 0 auto;
                width: 36px;
                height: 36px;
            }

            > div{
                margin-top: 4px;
                min-width: 5em;
            }
        }
    }

    .concat{
        width: 33%;
        padding: 0 8px;
        min-width: 200px;
        margin: 0 32px;
        border-left: 1px #fff solid;
        border-right: 1px #fff solid;

        .logo{
            width: 200px;
            margin: 0 auto;
        }

        .us{
            text-align: center;
            margin-top: 4px;

            > span:hover{
                color: #da1c5e;
            }
        }
    }

    .website{
        width: 33%;
        flex-shrink: 0;

        .motto{
            color: #da1c5e;
            font-size: 20px;
        }

        .copyright{
            margin-top: 2px;
        }

        .addr{
            margin-top: 2px;
        }
    }
}

@media screen and (max-width: 768px){
    .footer{
        flex-direction: column;

        .socializing{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .concat{
            margin-top: 10px;
            width: 100%;
            border: unset;
        }

        .website{
            margin-top: 20px;
            width: 100%;
            text-align: center;
        }
    }
}
</style>
