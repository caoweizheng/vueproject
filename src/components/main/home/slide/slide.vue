<template>
  <div id="slide" class="slide">
        
        <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
            <div class="swiper-slide" v-for="obj in slideData" :key="obj.title" :data-id="obj._id">
                <img :src="obj.image" :alt="obj.title">
            </div>
            <!-- <div class="swiper-slide">
            <img src="https://imgjd2.fruitday.com/images/2018-04-28/a064b849c5c62cdb2e282e822fd4eb49.jpg" alt="" />
            </div>
            <div class="swiper-slide">
            <img src="https://imgjd2.fruitday.com/images/2018-04-20/b499bb8bd502cfa660e36b789f353a7c.jpg" alt="" />
            </div>
            <div class="swiper-slide">
            <img src="https://imgjd3.fruitday.com/images/2018-04-27/cca238739762a138569cef2d5bb76b3c.jpg" alt="" />
            </div> -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>

        <ul class="slideLi clear">
            <li>
                <a href="#">
                    <img src="../../../../assets/home_img/slideli01.jpg" alt="">
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="../../../../assets/home_img/slideli02.jpg" alt="">
                </a>
            </li>
        </ul>

  </div>
</template>
<style>
    .slide{
        width: 100%;
        
    }
    .swiper-container {
        width: 100%;
        height: 1.813333rem;
        margin-bottom: 0.066667rem;
    }
    .swiper-container img{
        width: 100%;
        height: 100%;
    }
    .slideLi{
        display:flex;
        width:100%;
        height:1.28rem;
        padding: .0.005333rem 0.08rem 0.053333rem;
    }
    .slideLi li{flex:1;
        width: 2.4rem;
        height: 1.186667rem;
        float: left;
        padding: 0 0.04rem;
    }
    .slideLi li a{
        display: block;
        width: 100%;
        height: 100%;
    }
    .slideLi li a img{
        width: 100%;
        height: 100%;
    }
</style>
<script>
    import '../../../../assets/css/swiper.min.css';
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import http from '../../../../utils/httpClient.js';
    export default {
        name: 'carrousel',
        data(){
            return {
                slideData:[],
                swiperOption: {
                    notNextTick: true,
                    direction: 'horizontal',
                    loop: true,
                    autoplay: {
                    delay: 5000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false
                    },    // 如果需要分页器
                    pagination: {
                    el: '.swiper-pagination',
                    }
                 }
            }
        },
         mounted(){
            var self = this;
            http.get('http://10.3.133.83:8888/getProduct').then((res) => {
                console.log(res.data.data);
                var data = res.data.data;
                for(var i=0;i<data.length;i++){
                    if(data[i].target_type=='1'){
                        self.slideData.push(data[i]);
                        
                    }
                }
                console.log(self.slideData.length);
            });
            this.swiper.slideTo(1, 5000, false);
        },
        components: {
            swiper,
            swiperSlide
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper;
            }
        }
    }




    
</script>   

