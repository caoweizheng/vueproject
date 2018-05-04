<template>
    <div id="recommend">
        <div class="title">
            <a href="#">
                <h3>人气推荐</h3>
                <i class="iconfont">&#xe67d;</i>
            </a>
        </div>
        <div class="rec_items">
            <a href="#" v-for="obj in recData" :key="obj.title" :data-id="obj._id">
                <div class="img_box">
                    <img :src="obj.image" :alt="obj.title">
                    <span>预售</span>
                </div>
                <div class="desc">
                    <h5>{{obj.title}}</h5>
                    <p>{{obj.subtitle}}</p>
                    <div class="price rec_price">
                        <span>￥<em class="money">{{obj.price}}</em><em>/{{obj.volume}}</em></span>
                        <i>+</i>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<style>
    .rec_items{
        margin-bottom: 0.6rem;
    }
    .rec_items a{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 0.16rem 0 0.333333rem;
        height: 2.133333rem;
        border-top: .0.006667rem solid rgba(220,220,220,.8);
        
    }
    .img_box{
        width: 1.6rem;
        height: 1.6rem;
        margin: auto;
        position: relative;
        align-items: center;
    }
    .img_box img{width: 100%;height: 100%;}
    .img_box span{
        display: block;
        width: 0.186667rem;
        height: 0.4rem;
        position: absolute;
        left: 0;
        top: 0;
        border: 0.013333rem solid #333;
        border-radius: 0.026667rem;
        color: #333;
        font-size: 0.106667rem;
        line-height: 0.186667rem;
        text-align: center;
    }
    .desc{
        flex: 1;
        height: 1.4rem;
        margin: auto 0;
        position: relative;
        margin-left: 0.333333rem;
    }
    .desc h5{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.213333rem;
        margin-bottom: 0.066667rem;
        color: #222;
    }
    .desc p{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #878787;
        margin-bottom: 0.493333rem;
        text-align: justify;
        margin: 0;
    }
    .rec_price{
        position: absolute;
        left: 0;
        bottom: 0;
        height: 0.266667rem;
        line-height: 0.266667rem;
    }
    .rec_price span{
        font-size: 0.213333rem;
    }
    .rec_price i{
        display: block;
        width: 0.32rem;
        height: 0.32rem;
        line-height: 0.32rem;
        font-size: 0.293333rem;
        text-align: center;
        color: #ff8000;
        border: 0.013333rem solid #ccc;
        border-radius: 50%;
        position: absolute;
        right: 0.066667rem;
        top: 0;
    }
</style>


<script>
    import '../../../../assets/css/home.css';
    import http from '../../../../utils/httpClient.js';
    export default {
        data(){
            return {
                recData:[]
            }
        },
        mounted(){
            var self = this;
            http.get('http://10.3.133.83:8888/getProduct').then((res) => {
                console.log(res.data);
                var data = res.data.data;
                for(var i=0;i<data.length;i++){
                    if(data[i].target_type=='6'){
                        self.recData.push(data[i]);
                        
                    }
                }
                // console.log(self.slideData.length);
            })
        }
    }
</script>
