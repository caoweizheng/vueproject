<template>
    <div id="location-wraper">
        <nav class="l_nav">
            <div class="head">
                <a href="javascript:;" class="back" @click="goHome">
                    <i class="iconfont">&times;</i>
                </a>
                <h3>选择收货地址</h3>
                <a href="#" class="next">新增地址</a>
            </div>
            <div class="l_search">
                <div class="l_searchBox">
                    <i class="iconfont">&#xe60c;</i>
                    <input type="text" placeholder="请输入收货地址">
                </div>
                <span>
                    <em>广州</em>
                    <i class="iconfont">&#xe60a;</i>
                </span>
            </div>
        </nav>
        <div class="addressList">
            <div class="curr">
                <h5>当前地址</h5>
                <div class="c_address c_item">
                    <div id="local-address" class="local-address">广东省广州市天河区兴华街道广州大道北284号地铁三号线梅花园站拆迁安置房</div>
                    <span class="relocation">
                        <i class="iconfont">&#xe620;</i>
                        重新定位
                    </span>
                </div>
            </div>
            <div class="near">
                <h5>附近地址</h5>
                <div class="c_item">黄猄坳燃气便民服务部</div>
                <div class="c_item">嘉缘公寓</div>
                <div class="c_item">地铁三号线梅花园站拆迁安置房</div>
                <div class="c_item">常德米粉(怡新路店)</div>
                <div class="c_item">匠心之作蛋糕</div>
            </div>
        </div>
    </div>
</template>

<style>
    .l_nav{
        display: block;
        width: 100%;
        height: auto;
        background-color: #fff;
        color: #65a032;
        line-height: 0.573333rem;
        position: fixed;
        top: 0;
        left: 0;
        border-bottom: 1px solid #dfdfdf;
    }
    .head{
        width: 100%;
        height:0.613333rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .head h3{
        font-size: 0.266667rem;
        font-weight: 100;
        flex: 1;
        text-align: center;
    }
    .back{
        display: block;
        width:1.173333rem;
        height: 100%;
        margin-left:0.106667rem;
        position: relative;
        color: #76a741;
    }
    .back i{
        position: absolute;

        left: 0.106667rem;
        top: 0.04rem;

        /*left: .08rem;
        top: .23rem;*/
        display: inline-block;
        font-size:0.533333rem;
        height: 0.266667rem;
        line-height:0.266667rem;
    }
    .next{
        width: 1.173333rem;
        height: 100%;
        line-height: .26rem;
        text-align: right;
        margin-right:0.106667rem;
        color: #76a741;
        font-size: 0.186667rem;
    }
    .l_search{
        background-color: #fff;
        padding: 0 0.133333rem 0.133333rem;
        box-sizing: border-box;
        position: relative;
    }
    .l_searchBox{
        width: 100%;
        height: 0.44rem;
        line-height: 0.44rem;
        padding-left:1.066667rem;
        box-sizing: border-box;
        position: relative;
        background-color: #eee;
        border-radius: 0.066667rem;
        color: #878787;
        font-size:0.186667rem;
    }
    .l_searchBox i{
        display: inline-block;
        height:0.266667rem;
        font-size:0.266667rem;
        margin: 0.133333rem;
        position: relative;
        line-height: 0.426667rem;
    }
    .l_searchBox input{
        height: 100%;
        border: none;
        background: #eee;
    }
    .l_search span{
        display: inline-block;
        height: 0.44rem;
        line-height: 0.44rem;
        position: absolute;
        left: 0.293333rem;
        top: 0;
        color: #929292;
    }
    .l_search span i{
        display: inline-block;
        height:0.266667rem;
        color: #3a3a3a;
    }
    .addressList{
        margin-top:1.2rem;
    }
    .addressList h5{
        margin: 0;
        font-weight: 400;
        background-color: #f5f5f5;
        color: #878787;
        padding: 0.16rem;
        font-size:0.16rem;
    }
    .c_item{
        background-color: #fff;
        padding: 0.2rem 0.133333rem 0.2rem 0;
        margin: 0 0 0 0.133333rem;
        display: flex;
        flex-direction: row;
        font-size: 0.186667rem;
        color: #888;
    }
    .local-address{
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size:0.186667rem;
    }
    .relocation{
        font-size:0.186667rem;
        color: #ff8000;
    }
</style>


<script>
    export default {
        methods:{
            goHome:function(){
                this.$parent.$refs.indexBox.style.display = 'block';
                this.$parent.$refs.locationBox.style.display = 'none';
                this.$parent.$parent.$refs.footerNav.style.display = 'block';
                window.location.reload();

            }
        }
    }

</script>
