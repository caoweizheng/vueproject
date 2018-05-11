<template>
    <div id="car">
        <div id="car_header">
            <ul>
                <li class="first" @click="tohome"><i class="fa fa-angle-left"></i></li>
                <li class="two"><p>购物车</p></li>
                <li class="three"><p>编辑</p></li>
            </ul>
        </div>
        <div id="car_main">
            <div class="main_site" @click="changeShow">
                <p>
                    <img src="../../../img/svg/wz.svg" />
                    <span>添加地址</span>
                </p>
                <div class="main_site1" v-show="isShow">
                    <div class="main_site11">
                        <h5>收货地址</h5>
                    </div>
                    <div class="main_site12">
                        <button>新增地址</button>
                    </div>
                </div>
            </div>
            <div class="main_sp">
                <p>商品清单</p>
            </div>
            <div class="main_goods">
                <ul>
                    <li>
                        <!-- <input type="checkbox" /> -->
                        <a href="#">
                            <div class="main_goods1" v-for="(val,key) in detilData">
                                <img :src="val.image" />
                                <p class="title2">{{val.title}}</p>
                                <p class="volume2">{{val.volume}}</p>
                                <p class="price2">￥
                                    <span>{{val.price}}</span>
                                    <button class="sub" @click="increment($event)">-</button>
                                    <input type="number" value="1" />
                                    <button class="add" @click="increment($event)">+</button>
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div id="car_footer">
            <p>合计：￥
                <span>22</span>
                <button class="btn1">结算</button>
            </p>
        </div>
    </div>
</template>

<script>
    import '../../../css/base.css';
    import '../../../css/car.css';
    import http from '../../../utils/httpClient.js';

    import $ from 'jquery'

	export default{

        data(){
            return {
                isShow:false,
                checked: true,
                total: 1,
                detilData:{}
            }

        },

        methods:{
            changeShow(){
                this.isShow = !this.isShow;
            },
            increment(e){
                var $input=$(e.target).siblings('input');
                if(e.target.className == "sub"){
                    if($input.val()*1<=1){
                        return;
                    }
                    $input.val($input.val()*1-1);
                }else if(e.target.className == "add"){
                    $input.val($input.val()*1+1);
                }
                
            },
            tohome(){
                this.$router.push('home')
            }

        },
        mounted(){
                http.post('getState',{}).then((res) => {
                    console.log(res)
                         
                    if(res.data.state){
                        http.get('getCar').then((res) => {
                            console.log(res)
                            this.detilData = res.data.data
                        })
                    }else{
                        this.$router.push({name:'userlogon'});
                    }
                })
        }
	}
</script>
