<template>
    <div id="recommend">
        <div class="title">
            <a href="#">
                <h3>人气推荐</h3>
                <i class="iconfont">&#xe67d;</i>
            </a>
        </div>
        <div class="rec_items">
            <a href="javascript:;" v-for="obj in recData" :key="obj.title" :data-id="obj._id" ref="getId">
                <div class="img_box" @click="toDetils(obj._id)">
                    <img :src="obj.image" :alt="obj.title">
                    <span>预售</span>
                </div>
                <div class="desc">
                    <h5>{{obj.title}}</h5>
                    <p>{{obj.subtitle}}</p>
                    <div class="price rec_price">
                        <span>￥<em class="money">{{obj.price}}</em><em>/{{obj.volume}}</em></span>
                        <i class="add" ref="add_car" @click="addCar(obj._id)">+</i>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

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
                        self.recData.push(data[i]);
                        
                    }
                }
                // console.log(self.slideData.length);
            })
        }
    }
</script>
