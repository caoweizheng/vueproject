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
                <div class="img_box" @click="toDetils(obj._id)">
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
        margin-bottom: .45rem;
    }
    .rec_items a{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 .12rem 0 .25rem;
        height: 1.6rem;
        border-top: .005rem solid rgba(220,220,220,.8);
        
    }
    .img_box{
        width: 1.2rem;
        height: 1.2rem;
        margin: auto;
        position: relative;
        align-items: center;
    }
    .img_box img{width: 100%;height: 100%;}
    .img_box span{
        display: block;
        width: .14rem;
        height: .3rem;
        position: absolute;
        left: 0;
        top: 0;
        border: 1px solid #333;
        border-radius: .02rem;
        color: #333;
        font-size: .08rem;
        line-height: .14rem;
        text-align: center;
    }
    .desc{
        flex: 1;
        height: 1.05rem;
        margin: auto 0;
        position: relative;
        margin-left: .25rem;
    }
    .desc h5{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: .16rem;
        margin-bottom: .05rem;
        color: #222;
    }
    .desc p{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #878787;
        margin-bottom: .37rem;
        text-align: justify;
        margin: 0;
    }
    .rec_price{
        position: absolute;
        left: 0;
        bottom: 0;
        height: .2rem;
        line-height: .2rem;
    }
    .rec_price span{
        font-size: .16rem;
    }
    .rec_price i{
        display: block;
        width: .24rem;
        height: .24rem;
        line-height: .24rem;
        font-size: .22rem;
        text-align: center;
        color: #ff8000;
        border: 1px solid #ccc;
        border-radius: 50%;
        position: absolute;
        right: .05rem;
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

        methods:{
            toDetils(item){
                this.$router.push({name:'detali',query:{pid:item}});
                     
            }
        },
        mounted(){
            var self = this;
            http.get('getProduct').then((res) => {
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
