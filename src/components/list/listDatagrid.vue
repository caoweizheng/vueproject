<template>
	<div class="rec_items list_item">
        <!-- <a href="javascript:;">
            <div class="img_box">
                <img src="https://imgjd5.fruitday.com/images/product_pic/7/1/1-270x270-7-DAT4H3FS.jpg">                
            </div>
            <div class="desc">
                <h5>123</h5>
                <p>123</p>
                <div class="price list_price">
                    <em class="danwei">12g</em>
                    <span>￥<em class="money">123</em></span>
                    <em class="yushou">预售</em>
                    <i class="add" ref="add_car">+</i>
                </div>
            </div>
        </a> -->
        <a href="javascript:;" v-for="obj in listData" :data-id="obj._id" :key="obj.title" >
            <div class="img_box" @click="toDetils(obj._id)">
                <img :src="obj.image" :alt="obj.title">                
            </div>
            <div class="desc">
                <h5>{{obj.title}}</h5>
                <p>{{obj.subtitle}}</p>
                <div class="price list_price">
                    <em class="danwei">{{obj.volume}}</em>
                    <span>￥<em class="money">{{obj.price}}</em></span>
                    <em class="yushou">预售</em>
                    <i class="add" @click="addCar(obj._id)">+</i>
                </div>
            </div>
        </a>
    </div>
</template>

<script type="text/javascript">
    import '../../assets/css/home.css';
    import http from '../../utils/httpClient.js';
    export default {
        data(){
            return {
                listData:[]
            }
        },

        methods:{
            toDetils(item){
                this.$router.push({name:'detali',query:{pid:item}});                
            },
            addCar(id){
                
                http.post('addCar',{'proid':id}).then((res) => {
                    console.log(res);
                });

            }
        },
        mounted(){
            var self = this;
            http.get('getProduct').then((res) => {
                console.log(res.data);
                var data = res.data.data;
                for(var i=0;i<data.length;i++){
                    if(data[i].target_type=='6'){
                        self.listData.push(data[i]);
                        
                    }
                }
                // console.log(self.slideData.length);
            })
        }
    }

</script>