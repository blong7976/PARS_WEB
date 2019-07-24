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
                        <label v-for="(item,index) in Entiretenancy" :key="index">
                            <input class="checkbox" type="checkbox" v-model="item.checked">{{item.name}}                         
                        </label>
                    </div>
                </div> 
                <div class="type_bg animated">
                    <h6 class="type_tit2">区域</h6>                
                    <ul class="position_tab">
                        <li  v-for="(item,index) in District" 
                             :key="index"
                             :class="item.checked?'list_li cur':'list_li'" 
                             @click="ClDistrict(item)">
                             <b>{{item.name}}</b><i></i>
                            <div class="position_box">
                                <div class="line_box" v-if="item.checked">
                                    <span v-for="(v,idx) in item.list" 
                                          :key="idx"
                                          @click.stop="clClDistrictli(item,v)">{{v.name}}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div> 
                <div class="type_bg animated">
                    <h6 class="type_tit2">Pars合租 </h6>
                    <div class="info_box">
                        <label v-for="(item,index) in Jointrent" :key="index">
                            <input class="checkbox" type="checkbox" v-model="item.checked">{{item.name}}                         
                        </label>
                    </div>
                </div> 
                <div class="type_bg animated">
                        <h6 class="type_tit2">价格</h6>
                        <div class="info_box">
                            <label v-for="(item,index) in Price" :key="index">
                                <input class="checkbox" type="checkbox" v-model="item.checked">{{item.name}}                         
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
            Entiretenancy:[
                {type:0,name:'不限',checked:false},
                {type:1,name:'一居',checked:false},
                {type:2,name:'二居',checked:false},
                {type:3,name:'三居',checked:false},
                {type:4,name:'四居',checked:false}
            ],
            District:[
                {
                    name:"商圈",
                    checked:false,
                    list:[
                        {type:0,name:'A商圈',checked:false},
                        {type:1,name:'B商圈',checked:false},
                        {type:2,name:'C商圈',checked:false}
                    ]
                },
                {
                    name:"学校",
                    checked:false,
                    list:[
                        {type:0,name:'A学校',checked:false},
                        {type:1,name:'B学校',checked:false},
                        {type:2,name:'C学校',checked:false}
                    ]
                },
                {
                    name:"地铁",
                    checked:false,
                    list:[
                        {type:0,name:'A地铁',checked:false},
                        {type:1,name:'B地铁',checked:false},
                        {type:2,name:'C地铁',checked:false},
                    ]
                }
            ],
            Jointrent:[
                {type:0,name:'不限',checked:false},
                {type:1,name:'主人房',checked:false},
                {type:2,name:'普通房',checked:false},
                {type:3,name:'佣人房',checked:false},
            ],
            Price:[
                {type:0,name:'<$800',checked:false},
                {type:1,name:'$800-1200',checked:false},
                {type:2,name:'$1200-1600',checked:false},
                {type:3,name:'$1600-2000',checked:false},
                {type:4,name:'$2000+',checked:false}
            ],

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
    created() {
        this.common.setScrollTop()
    },
    methods: {
        ClDistrict(item){
            this.District.forEach(td=>{
                td.checked=false
            })
            item.checked=true
        },
        clClDistrictli(item,v){
            this.District.forEach(td=>{
                td.checked=false
            })
        }
    },
}
</script>
<style scoped>
._banner_bgz286{
    background:url(../../assets/img/Hmlet_Lush_cover.jpg) no-repeat center center; background-size:cover;
}
</style>