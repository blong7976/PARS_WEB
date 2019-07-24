<template>
<div :class="ismobile?'header h_menu fixed':scrollTopClass?'header fixed':'header'" id="topheader">
    <div class="wrap">
        <div class="logo flt"><a href="index.html"><img src="../../../assets/img/logo1.png" /></a></div>
        <div class="menu frt">
            <ul>
                <li v-for="(item,index) in Navber" :key="index" :class="item.path===ispath?'on':''" @click="routeTopage(item)" >
                    <a>{{item.name}}<label></label></a>
                </li>
            </ul>
        </div>
        <div class="menu_wrap" @click="mobild"></div>
        <div class="clear"></div>
    </div>
</div>
</template>
<script>
export default {
    name:"Header",
    data() {
        return {
            ismobile:false,
            scrollTopClass:false,
            ispath:"",
            Navber:[
                {name:"首页",path:"/index"},
                {name:"优质房源",path:"/homes"},
                {name:"品牌介绍",path:"/brand"},
                {name:"联系我们",path:"/contact"},
            ],
        }
    },
    mounted() {
       this.Activelink()
       window.addEventListener('scroll', this.scrollTop)
    },
    watch: {
       '$route' (to, from) {
           this.Activelink()
        }
    },
    methods: {
        scrollTop(){
            let scroll = document.documentElement.scrollTop || document.body.scrollTop;
            if(scroll>200){
                this.scrollTopClass=true
            }else{
                this.scrollTopClass=false
            }
        },
        Activelink(){
            let Storagepath = window.sessionStorage.getItem("PARS_ROUTER")
            if(Storagepath == "/details"){
                this.ispath='/homes'
                return
            }
            this.ispath=Storagepath
        },
        routeTopage(item){
            this.$router.push({path:item.path})
            this.ismobile=false
        },
        mobild(){
            this.ismobile=!this.ismobile
        }
    },
    destroyed: function () {
        window.removeEventListener('scroll', this.scrollTop);  
    }
}
</script>
