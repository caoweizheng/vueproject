<template>
  <div id="slide" class="slide">
        
        <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
            <div class="swiper-slide" v-for="obj in slideData" :key="obj.title" :data-id="obj._id">
                <img :src="obj.image" :alt="obj.title">
            </div>
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

<script>
    import '../../../../assets/css/home.css';
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
            http.get('getProduct').then((res) => {
                console.log(res.data.data);
                var data = res.data.data;
                for(var i=0;i<data.length;i++){
                    if(data[i].target_type=='1'){
                        self.slideData.push(data[i]);
                        
                    }
                }
                console.log(self.slideData.length);
            });
            this.swiper.slideTo(0, 2000, true);
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

