<template>
    <div id="items" class="items">
        <div class="item_01 item">
            <div class="title">
                <a href="#">
                    <h3>果园热卖</h3>
                    <i class="iconfont">&#xe67d;</i>
                </a>
            </div>
            <div class="swiper-container itemsBox">
                <div class="swiper-wrapper">
                    <div class="swiper-slide itemDiv" v-for="obj in itemData01" :key="obj.title" :data-id="obj._id" @click="toDetils(obj._id)">
                        <a href="#" class="imgBox">
                            <img :src="obj.image" :alt="obj.title">
                            <span>预售</span>
                        </a>
                        <p class="msg">{{obj.subtitle}}</p>
                        <div class="price">
                            <span>￥<em class="money">{{obj.price}}</em><em>/{{obj.volume}}</em></span>
                            <i>+</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="item_02 item">
            <div class="title">
                <a href="#">
                    <h3>果园精选</h3>
                    <i class="iconfont">&#xe67d;</i>
                </a>
            </div>
            <div class="itemAd">
                <a href="#">
                    <img src="../../../../assets/home_img/gyjxAd01.jpg" alt="">
                </a>
            </div>
            <div class="swiper-container itemsBox">
                <div class="swiper-wrapper">
                   <div class="swiper-slide itemDiv" v-for="obj in itemData02" :key="obj.title" :data-id="obj._id" @click="toDetils(obj._id)">
                        <a href="#" class="imgBox">
                            <img :src="obj.image" :alt="obj.title">
                            <span>预售</span>
                        </a>
                        <p class="msg">{{obj.subtitle}}</p>
                        <div class="price">
                            <span>￥<em class="money">{{obj.price}}</em><em>/{{obj.volume}}</em></span>
                            <i>+</i>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="itemAd">
                <a href="#">
                    <img src="../../../../assets/home_img/gyjxAd03.jpg" alt="">
                </a>
            </div>
            <div class="swiper-container itemsBox">
                <div class="swiper-wrapper">
                    <div class="swiper-slide itemDiv" v-for="obj in itemData03" :key="obj.title" :data-id="obj._id" @click="toDetils(obj._id)">
                        <a href="#" class="imgBox">
                            <img :src="obj.image" :alt="obj.title">
                            <span>预售</span>
                        </a>
                        <p class="msg">{{obj.subtitle}}</p>
                        <div class="price">
                            <span>￥<em class="money">{{obj.price}}</em><em>/{{obj.volume}}</em></span>
                            <i>+</i>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="itemAd">
                <a href="#">
                    <img src="../../../../assets/home_img/gyjxAd02.jpg" alt="">
                </a>
            </div>
            <div class="swiper-container itemsBox">
                <div class="swiper-wrapper">
                    <div class="swiper-slide itemDiv" v-for="obj in itemData04" :key="obj.title" :data-id="obj._id" @click="toDetils(obj._id)">
                        <a href="#" class="imgBox">
                            <img :src="obj.image" :alt="obj.title">
                            <span>预售</span>
                        </a>
                        <p class="msg">{{obj.subtitle}}</p>
                        <div class="price">
                            <span>￥<em class="money">{{obj.price}}</em><em>/{{obj.volume}}</em></span>
                            <i>+</i>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import '../../../../assets/css/home.css';
    import '../../../../assets/css/swiper.min.css';
    import Swiper from '../../../../assets/js/swiper.min.js';
    import http from '../../../../assets/js/httpclient.js';

    export default {
        data () {
            return {
                itemData01:[],
                itemData02:[],
                itemData03:[],
                itemData04:[],
                
            }
        },

        methods:{
            toDetils(item){
                this.$router.push({name:'detali',query:{pid:item}});   
            }
        },
        mounted(){
            var self = this;
            http.get('getProduct').then((res) => {
                // console.log(res.data.length);
                for(var i=0;i<res.data.length;i++){
                    if(res.data[i].target_type=='2'){
                        self.itemData01.push(res.data[i]);    
                    }else if(res.data[i].target_type=='3'){
                        self.itemData02.push(res.data[i]);
                    }else if(res.data[i].target_type=='4'){
                        self.itemData03.push(res.data[i]);
                    }else if(res.data[i].target_type=='5'){
                        self.itemData04.push(res.data[i]);
                    }
                }
                console.log(self.itemData01.length);
            });
             var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

        }
    }
</script>
