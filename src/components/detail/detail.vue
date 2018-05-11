<template>
    <div id="detail">
        <div id="d_header">
            <ul>
                <li class="d1" @click="tohome"><i class="fa fa-angle-left"></i></li>
                <li class="d2">
                    <ul>
                        <li class="active">商品</li>
                        <li>详情</li>
                        <li>评价</li>
                    </ul>
                </li>
                <li class="d3">
                    <img src="../../img/svg/sheng.svg" @click="changeShow"/>
                    <ul v-show="isShow">
                        <li><p><i class="fa fa-home"></i>首页</p></li>
                        <li><p><i class="fa fa-search"></i>搜索</p></li>
                        <li><p><i class="fa fa-window-restore"></i>分类</p></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div id="d_main">
            <div class="d_main1" v-for="(val,key) in detilData">
            <img :src="val.image" />
                <p class="title1">{{val.title}}</p>
                <p class="subtitle1">{{val.subtitle}}</p>
                <p class="price1">￥<span>{{val.price}}</span></p>
                <p class="volume1"><span>{{val.volume}}</span></p>
            </div>
            <div class="d_main2">
                <p>送至
                    <span>兴华街道</span>
                </p>
            </div>
            <div class="d_main3">
                <span><i class="fa fa-check-circle-o"></i>48小时退换货</span>
                <span><i class="fa fa-check-circle-o"></i>全程冷链</span>
                <span><i class="fa fa-check-circle-o"></i>果园标准</span>
                <span><i class="fa fa-check-circle-o"></i>全球直采</span>
            </div>
            <div class="d_main4">
                <p>评价(5385)
                    <span>98%好评 ></span>
                </p>
            </div>
            <div>
                <img src="../../img/detail.png" height="451" width="375" alt="" />
            </div>
        </div>
        <div id="d_footer">
            <router-link to="/car">
                <div class="d_footer1">
                    <i class="fa fa-cart-plus"></i>
                </div>
            </router-link>

            <button class="btn_d" @click="addCar(val)">加入购物车</button>
        </div>
    </div>
</template>

<script>
    import '../../css/base.css';
    import '../../css/detail.css';
    import http from '../../utils/httpClient.js';
    import router from '../../router/router.js';
    export default{
        data(){
            return {
                isShow:false,
                detilData:{}
            }

        },

        methods:{
            changeShow(){
                this.isShow = !this.isShow;
            },

            addCar(id){
                
                http.post('addCar',{'proid':id}).then((res) => {
                    console.log(res);
                });
            },
            tohome(){
                this.$router.push('home');
            }
        },

        mounted(){
            console.log(this.$route.query.pid)

            http.post('detilsPro',{proId:this.$route.query.pid}).then((res) => {
                this.detilData = res.data.data

                     
            })

        }
    }
</script>