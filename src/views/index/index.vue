<template>
<div class="mainer">
    <div class="banner_bg _banner_bgz285"></div>
    <div class="banner">
        <div class="item"><div class="text"><div class="wrap"><h2 class="animated fast fadeInDown" data-animation="fadeInDown">Pars租房网，让租房更便捷</h2><p class="animated fast fadeInUp" data-animation="fadeInUp">我们坚持服务零距离设计，成就新加坡租房网品牌专家</p></div></div></div>
    </div>
    <div class="page page2">
            <div class="wrap">
                <div class="page_tit  animated more-fast" data-animation="fadeInLeft">
                    <h3>让分享和信赖悄然发生</h3>
                    <p>Service scope</p>
                </div>
                <div class="page2_list">
                    <ul>
                        <li class="animated more-fast" data-animation="fadeInLeft">
                            <a href="#">
                                <div class="icon icon1"><i></i><span></span></div>
                                <div class="text">
                                    <h3>双方身份验证</h3>
                                    <p> 说明文字说明文字明文字<br> 说明文字说明文字</p>
                                </div>
                            </a>
                        </li>
                        <li class="animated fast" data-animation="fadeInLeft">
                            <a href="#">
                                <div class="icon icon2"><i></i><span></span></div>
                                <div class="text">
                                    <h3>安全线上交易</h3>
                                    <p>说明文字说明文字明文字<br> 说明文字说明文字</p>
                                </div>
                            </a>
                        </li>
                        <li class="animated slow" data-animation="fadeInLeft">
                            <a href="#">
                                <div class="icon icon3"><i></i><span></span></div>
                                <div class="text">
                                    <h3>坚实保障后盾</h3>
                                    <p>说明文字说明文字明文字明文字<br>说明文字说明文字</p>
                                </div>
                            </a>
                        </li>
                        <li class="animated more-slow" data-animation="fadeInLeft">
                            <a href="#">
                                <div class="icon icon4"><i></i><span></span></div>
                                <div class="text">
                                    <h3>点评积累信用</h3>
                                    <p>说明文字说明文字明文字明文字<br>说明文字说明文字</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
    </div>



    <div class="page page4">
        <div class="wrap">
            <div class="page_tit animated fast" data-animation=""><h3>热卖推荐</h3><p>News and information</p></div>
            <div class="page4_list ui-homenews  slow" data-animation="">
                <ul>
                    <li class="animated" data-animation="fadeIn" v-for="(item,index) in houses" :key="index">
                        <router-link to="details" class="i ">
                            <div class="img">
                                <img v-lazy="item.img" alt="">
                            </div>
                            <div class="txt">
                                <h3>钟楼南门大雁塔粉粉少女心一居室</h3>
                                <p class="trait">
                                    <span>住宅</span><span>精装</span><span>住宅</span>
                                </p>
                                <h5><span class="pull-right">$1800/月</span>
                                    <label for="" class="bt-btn1">查看详情</label>
                                </h5>
                            </div>
                        </router-link>
                    </li>

                    <div class="clearfix"></div>
                </ul>
            </div>
        </div>
    </div>


</div>
</template>
<script>
export default {
    data() {
        return {
            houses:[
                {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563885703373&di=8d8b2bd9aae9f5c2e7cfd2f03df83733&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2F201606%2F1%2F3799384_14647736219v9x.jpg"},
                {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563885703373&di=8d8b2bd9aae9f5c2e7cfd2f03df83733&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2F201606%2F1%2F3799384_14647736219v9x.jpg"},
                {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563885703373&di=8d8b2bd9aae9f5c2e7cfd2f03df83733&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2F201606%2F1%2F3799384_14647736219v9x.jpg"},
                {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563899210251&di=212cc59b84cf26e4ab80f5a741512926&imgtype=0&src=http%3A%2F%2Fpic2.to8to.com%2Fcase%2F1703%2F03%2F20170303_9717a97cc866e95672dc02bpg4l1ihxw_sp.jpg"},
                {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563899210251&di=212cc59b84cf26e4ab80f5a741512926&imgtype=0&src=http%3A%2F%2Fpic2.to8to.com%2Fcase%2F1703%2F03%2F20170303_9717a97cc866e95672dc02bpg4l1ihxw_sp.jpg"},
                {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563899210251&di=212cc59b84cf26e4ab80f5a741512926&imgtype=0&src=http%3A%2F%2Fpic2.to8to.com%2Fcase%2F1703%2F03%2F20170303_9717a97cc866e95672dc02bpg4l1ihxw_sp.jpg"},
            ]
        }
    },
}
</script>
<style scoped>
._banner_bgz285{
    background: url(../../assets/img/index_banner.jpg);
}
</style>
