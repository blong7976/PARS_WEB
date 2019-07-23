<template>
<div class="header">
    <div class="wrap">
        <div class="logo flt"><a href="index.html"><img src="../../../assets/img/logo1.png" /></a></div>
        <div class="menu frt">
            <ul>
                <li v-for="(item,index) in Navber" :key="index" :class="item.name===ispath?'on':''" @click="routeTopage(item)" >
                    <a>{{item.name}}<label></label></a>
                </li>
            </ul>
        </div>
        <div class="menu_wrap"></div>
        <div class="clear"></div>
    </div>
</div>
</template>
<script>
export default {
    name:"Header",
    data() {
        return {
            ispath:"",
            Navber:[
                {name:"首页",path:"/"},
                {name:"优质房源",path:"/homes"},
                {name:"品牌介绍",path:"/brand"},
                {name:"联系我们",path:"/contact"},
            ]
        }
    },
    mounted() {
       
    },
    methods: {
        routeTopage(item){
            this.$router.push({path:item.path})
            this.ispath=this.$route.meta.title
        }
    },
}
</script>
