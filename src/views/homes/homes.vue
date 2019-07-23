<template>
<div class="mainer">
    <div class="page_banner _banner_bgz286">
        <div class="web">
            <h2>优质房源</h2>
            <p>Product Center</p>
        </div>
    </div>

    <div class="page page4 animated fadeIn">
        <div class="wrap">
            <div class="list_filter">
                <div class="type_bg animated">
                    <h6 class="type_tit2">Pars整租</h6>
                    <div class="info_box">
                        <label>
                            <input class="checkbox" type="checkbox" id="yiju" value="yiju" onclick="submit_by_attr();">不限                         
                        </label>
                        <label>
                           <input class="checkbox" type="checkbox" id="yiju" value="yiju" onclick="submit_by_attr();">一居                         
                        </label>
                        <label>
                            <input class="checkbox" type="checkbox" id="yiju" value="yiju" onclick="submit_by_attr();">二居                         
                        </label>
                        <label>
                            <input class="checkbox" type="checkbox" id="yiju" value="yiju" onclick="submit_by_attr();">三居                         
                        </label>
                        <label>
                            <input class="checkbox" type="checkbox" id="yiju" value="yiju" onclick="submit_by_attr();">四居                         
                        </label>
                    </div>
                </div> 
                <div class="type_bg animated">
                    <h6 class="type_tit2">区域</h6>                
                    <ul class="position_tab">
                        <li class="list_li"  data-item="1"><b>商圈</b><i></i>
                            <div class="position_box">
                                <div class="line_box">
                                    <span>A商圈</span>
                                    <span>B商圈</span>
                                    <span>C商圈</span>
                                </div>
                            </div>
                        </li>
                        <li class="list_li"  data-item="2"><b>学校</b><i></i>
                            <div class="position_box">
                                <div class="line_box">
                                    <span>A学校</span>
                                    <span>B学校</span>
                                    <span>C学校</span>
                                </div>
                            </div>
                        </li>
                        <li class="list_li"  data-item="3"><b>地铁</b><i></i>
                            <div class="position_box">
                                <div class="line_box">
                                    <span>A地铁</span>
                                    <span>B地铁</span>
                                    <span>C地铁</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div> 
                <div class="type_bg animated">
                    <h6 class="type_tit2">Pars合租</h6>
                    <div class="info_box">
                        <label>
                            <input class="checkbox" type="checkbox" id="yiju" value="yiju" onclick="submit_by_attr();">不限                         
                        </label>
                        <label>
                            <input class="checkbox" type="checkbox" id="yiju" value="yiju" onclick="submit_by_attr();">主人房                         
                        </label>
                        <label>
                            <input class="checkbox" type="checkbox" id="yiju" value="yiju" onclick="submit_by_attr();">普通房                         
                        </label>
                        <label>
                            <input class="checkbox" type="checkbox" id="yiju" value="yiju" onclick="submit_by_attr();">佣人房                         
                        </label>
                    </div>
                </div> 
                <div class="type_bg animated">
                        <h6 class="type_tit2">价格</h6>
                        <div class="info_box">
                            <label>
                                <input class="checkbox" type="checkbox" id="yiju" value="yiju" onclick="submit_by_attr();"><$800                         
                            </label>
                            <label>
                                <input class="checkbox" type="checkbox" id="yiju" value="yiju" onclick="submit_by_attr();">$800-1200                          
                            </label>
                            <label>
                                <input class="checkbox" type="checkbox" id="yiju" value="yiju" onclick="submit_by_attr();">$1200-1600                          
                            </label>
                            <label>
                                <input class="checkbox" type="checkbox" id="yiju" value="yiju" onclick="submit_by_attr();">$1600-2000                         
                            </label>
                            <label>
                                <input class="checkbox" type="checkbox" id="yiju" value="yiju" onclick="submit_by_attr();">$2000+                         
                            </label>
                        </div>  
                </div>  
            </div>

            <div class="page4_list ui-homenews animated slow" data-animation="">
                <ul>
                    <li v-for="(item,index) in houses" :key="index">
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

            <div class="pagesize">
                    <span class="span1 s_prev"><a href="#">PREV</a></span>
                    <span class="on"><a href="#">1</a></span>
                    <span><a href="#">2</a></span>
                    <span><a href="#">3</a></span>
                    <span><a href="#">4</a></span>
                    <span><a href="#">5</a></span>
                    <span><a href="#">...</a></span>
                    <span><a href="#">12</a></span>
                    <span><a href="#">13</a></span>
                    <span class="span1 s_next"><a href="#">NEXT</a></span>
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
                 {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563885703373&di=8d8b2bd9aae9f5c2e7cfd2f03df83733&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2F201606%2F1%2F3799384_14647736219v9x.jpg"},
                {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563885703373&di=8d8b2bd9aae9f5c2e7cfd2f03df83733&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2F201606%2F1%2F3799384_14647736219v9x.jpg"},
                {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563885703373&di=8d8b2bd9aae9f5c2e7cfd2f03df83733&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2F201606%2F1%2F3799384_14647736219v9x.jpg"},
                {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563899210251&di=212cc59b84cf26e4ab80f5a741512926&imgtype=0&src=http%3A%2F%2Fpic2.to8to.com%2Fcase%2F1703%2F03%2F20170303_9717a97cc866e95672dc02bpg4l1ihxw_sp.jpg"},
                {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563899210251&di=212cc59b84cf26e4ab80f5a741512926&imgtype=0&src=http%3A%2F%2Fpic2.to8to.com%2Fcase%2F1703%2F03%2F20170303_9717a97cc866e95672dc02bpg4l1ihxw_sp.jpg"},
                {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563899210251&di=212cc59b84cf26e4ab80f5a741512926&imgtype=0&src=http%3A%2F%2Fpic2.to8to.com%2Fcase%2F1703%2F03%2F20170303_9717a97cc866e95672dc02bpg4l1ihxw_sp.jpg"}
            ]
        }
    },
}
</script>
<style scoped>
._banner_bgz286{
    background:url(../../assets/img/Hmlet_Lush_cover.jpg) no-repeat center center; background-size:cover;
}
</style>