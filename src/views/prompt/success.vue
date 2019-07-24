<template>
    <div class="app-wrapper">
        <div class="header_Success">
            <div class="wrap">
                <div class="logo flt">
                    <router-link to="index"><img src="../../assets/img/PARS-LOGO-BLACK.png" /></router-link>
                </div>
            </div>
        </div>


        <div class="mainer">
            <div class="page">
                <div class="wrap animated fadeIn" >
                    <div class="_uy08umt" style="overflow: hidden;margin-top: 24px">
                        <div class="_1g8lmjxm">
                            <section>
                                <div style="margin-bottom: 24px;">
                                    <h1 class="_lq7xk17">恭喜您，您的预订已成功</h1>
                                </div>
                                <div style="margin: 30px 0 40px;">
                                    <div class="_6wmcjak">预订须知</div>
                                    <div class="_11dqbld7">
                                        根据有关部门规定，所有前往中国的旅客都必须提供以下信息。作为中国居民，您的信息将由爱彼迎中国存储并处理。完成本次预订，您同意爱彼迎中国可以向中国政府披露您的信息而不向您提供进一步通知。
                                    </div>
                                    <div class="_6wmcjak" style="margin-top: 24px">您的姓名</div>
                                    <div class="_srfk47b">
                                        <input type="text" disabled value="王力宏">
                                    </div>
                                    <div class="_6wmcjak" style="margin-top: 24px">您的电话</div>
                                    <div class="_srfk47b">
                                        <input type="text" disabled value="15102988888">
                                    </div>
                                    <div class="_6wmcjak" style="margin-top: 24px">入住时间</div>
                                    <div class="_srfk47b">
                                        <input type="text" disabled value="2019年07月24日">
                                    </div>
                                    <div class="_6wmcjak" style="margin-top: 24px">备注</div>
                                    <div class="_srfk47b">
                                        您的备注信息
                                    </div>
                                    <div style="margin-top:64px;margin-bottom:64px">
                                        <router-link to="details" class="_blackhome">返回</router-link>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div class="_gog6b2l">
                            <div class="_39wgnjw">

                                <div class="_16tcko6 _houseTag" @click="Detailes">
                                    <div style="margin-top: 24px">
                                        <div class="_hgs47m">
                                            <div class="_10ejfg4u">
                                                <div style="margin-top:2px;margin-bottom:8px;margin-right:8px">
                                                    <div class="_1m9t1a27 _name01">
                                                        # 热带 # 朝天门洪崖洞解放碑|城市·天际·江景--藏在雨林里的精致一居室
                                                    </div>
                                                </div>
                                                <div class="_ppgibgk">
                                                    BLK 324 Tamapines Ave 96#01-01 Good Park Residence Singapore
                                                </div>
                                            </div>
                                            <div class="_ni9axhe">
                                                <div style="width:100px;height:80px">
                                                    <img src="../../assets/img/Hmlet_Lush_cover.jpg" alt="" style="width: 100%;height:80px;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="margin-top:24px;margin-bottom:24px"><div class="_7qp4lh"></div></div>
                                    <div class="_hgs47m" style="margin-bottom: 24px">
                                            <div class="_10ejfg4u" style="width: auto !important">
                                                <span class="_1m9t1a27">价格</span>
                                            </div>
                                            <div class="_ni9axhe" style="text-align: right">
                                                <div class="_1m9t1a27">
                                                    <span class="_8eazm0k" style="color: #ff5a5f">$1800</span>
                                                    <span class="_j1kt73"  style="color: #ff5a5f">月（押一付一）</span>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 


        <div class="footer_success">
            <div class="foot2">
                <p>Copyright©2019,All Rights Reserved 新加坡 Pase 租房网 版权所有</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
           
        }
    },
    created() {
        this.common.setScrollTop()
    },
    mounted() {
       
    },
    methods: {
        Detailes(){
            this.$router.push({path:'details'})
        }
    },
}
</script>