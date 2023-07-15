<template>
    <!--<div class="absolute top-60 left-40 rounded-2xl bg-white px-10 pt-8 pb-4">-->
    <!--    <div class="text-moto text-3xl font-bold tracking-widest mb-2">求真 求善 求美</div>-->
    <!--    <div>教育的伟大目标不只是装饰而是训练心灵，</div>-->
    <!--    <div>使具备有用的能力而非填塞前人经验的累积</div>-->
    <!--    <span class="bg-moto text-white px-4 py-2 mt-2 inline-block rounded-full uppercase shadow hover:shadow-indigo-700/80">read more</span>-->
    <!--</div>-->

    <section class="section-1">
        <div class="content-1">
            <img src="@/assets/blr_20230512202530.png" alt="blr"/>
        </div>
    </section>
    <section class="section-2">
        <div class="content-2">
            <img src="@/assets/blr_20230512202601.png" alt="blr">
        </div>
    </section>
    <section class="section_3">
        <div>
            <img src="@/assets/blr_20230512202645.png" alt="blr">
        </div>
    </section>
    <section class="section_4">
        <div>
            <img src="@/assets/blr_20230512202638.png" alt="blr">
        </div>
    </section>
    <section class="section_5">
        <div>
            <img src="@/assets/blr_20230512202606.png" alt="blr">
        </div>
    </section>

    <div class="my-2 mx-4">
        <img src="@/assets/ic_card.png" class="ic-card" alt="ic-card"/>
    </div>
    <div class="my-2 mx-4 indent-4 text-blue-600">
        江湖大学创建于2023年，是一所以培养优秀人才为目标的高等学府。我们致力于传承和发扬中国传统文化与价值观，为江湖四省的学生提供丰富多样的学术资源与全面发展的机会。建校原因：江湖大学的建校源于对教育固有框架和不恰当的高考淘汰制度的不满与执念。我们相信，成功学习与发展需要个人兴趣与动力的激发，以及实践与理论相结合的教育方式。每个学生都应该有进入大学进行学习的机会。建校理念：江湖大学秉承“求真求善求美”的教育理念，注重学生的自主学习与实践能力培养。我们鼓励学生追求知识，并将所学运用于实际生活，以解决现实问题。建校理想：江湖大学的目标是打造一支有担当、有创新思维、有国际竞争力的人才队伍。我们致力于培养具备国际视野、综合素养与领导力的高素质专业人才，为国家的建设与发展做出贡献。未来目标：江湖大学将致力于成为一所国际一流、具有社会影响力的研究型综合性大学。我们将推动教学创新与学科交叉，打破学科壁垒，培养具有全球视野、拥有创新精神和社会责任感的优秀人才。群的正统性：江湖大学坚持真理的追求，遵循科学发展和学术纪律。我们重视学术诚信与严谨性，鼓励学界交流与学术合作。为确保学术研究的正统性，我们将建立严格的学术评审体系，提供透明公正的学术评价标准，以保证知识与智慧的传承与创新的持续发展。江湖大学热诚欢迎有志于追求卓越教育与知识创新的江湖年轻人加入我们的大家庭。我们相信，江湖大学将为各位学子供良好的学习与成长环境，成就他们的未来成功与事业辉煌。
    </div>
</template>

<script setup lang="ts">
import {onBeforeMount, onMounted, onUnmounted} from 'vue'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

onBeforeMount(() => {
    gsap.registerPlugin(ScrollTrigger)
})
let ctx

onMounted(() => {
    ctx = gsap.fromTo('.content-1',
        {
            scale: 1
        },
        {
            scale: 0.6,
            // function(_, target){
            //     return 1 - target.offsetHeight / document.documentElement.clientHeight
            // },
            scrollTrigger: {
                trigger: '.section-1',
                scrub: true,
                // markers: true,
                start: 'top top',
                end: '+=760',
                onUpdate: self => {
                    console.log('self', self)
                }
            }
        })


    // ctx = ScrollTrigger.create({
    //     trigger: '.section-1',
    //     // start: 0,
    //     // end: '+=1620',
    //     scrub: true, // 将动画的进度直接链接到滚动条上
    //     maskers: true,
    //     animation: gsap.to('.content-1', {scale: 0.5, opacity: 0.5}),
    //     onEnter: () => {
    //         console.log('滚动到start位置触发')
    //     },
    //     onEnterBack: () => {
    //         console.log('滚动超过end位置，再进入滚动区域触发')
    //     },
    //     onLeave: () => {
    //         console.log('滚出end位置时触发')
    //     },
    //     onLeaveBack: () => {
    //         console.log('滚出end位置，再滚回来超过start位置触发')
    //     },
    //     onUpdate: (self) => { // 在start和end区域内滚动位置改变时触发
    //         console.log('self', self)
    //     },
    // })

    console.log(ctx)
})

onUnmounted(() => {
    ctx.revert()
})
</script>

<style scoped lang="less">
.ic-card{
    border-radius: 8px;
    width: 100%;
    height: 500px;
}

.section-1{
    position: relative;
    width: 100%;
    height: 100vh;

    .content-1{
        //position: absolute;
        //top: 50%;
        //left: 50%;
        width: 100%;
        height: 100vh;
        //transform: translate(-50%, -50%);

        > img{
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
        }
    }
}
</style>
