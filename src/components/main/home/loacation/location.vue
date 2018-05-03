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
        line-height: .43rem;
        position: fixed;
        top: 0;
        left: 0;
        border-bottom: 1px solid #dfdfdf;
    }
    .head{
        width: 100%;
        height: .46rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .head h3{
        font-size: .19rem;
        font-weight: 100;
        flex: 1;
        text-align: center;
    }
    .back{
        display: block;
        width: .88rem;
        height: 100%;
        margin-left: .08rem;
        position: relative;
        color: #76a741;
    }
    .back i{
        position: absolute;
        left: .08rem;
        top: .23rem;
        display: inline-block;
        font-size: .40rem;
        height: .2rem;
        line-height: .2rem;
    }
    .next{
        width: .88rem;
        height: 100%;
        line-height: .26rem;
        text-align: right;
        margin-right: .08rem;
        color: #76a741;
        font-size: .14rem;
    }
    .l_search{
        background-color: #fff;
        padding: 0 .1rem .1rem;
        box-sizing: border-box;
        position: relative;
    }
    .l_searchBox{
        width: 100%;
        height: .33rem;
        line-height: .33rem;
        padding-left: .8rem;
        box-sizing: border-box;
        position: relative;
        background-color: #eee;
        border-radius: .05rem;
        color: #878787;
        font-size: .14rem
    }
    .l_searchBox i{
        display: inline-block;
        height: .2rem;
        font-size: .2rem;
        margin: 0 .1rem;
        position: relative;
        line-height: .32rem;
    }
    .l_searchBox input{
        height: 100%;
        border: none;
        background: #eee;
    }
    .l_search span{
        display: inline-block;
        height: .33rem;
        line-height: .33rem;
        position: absolute;
        left: .2rem;
        top: 0;
        color: #929292;
    }
    .l_search span i{
        display: inline-block;
        height: .2rem;
        color: #3a3a3a;
    }
    .addressList{
        margin-top: .9rem;
    }
    .addressList h5{
        margin: 0;
        font-weight: 400;
        background-color: #f5f5f5;
        color: #878787;
        padding: .12rem;
        font-size: .12r
    }
    .c_item{
        background-color: #fff;
        padding: .15rem .1rem .15rem 0;
        margin: 0 0 0 .1rem;
        display: flex;
        flex-direction: row;
        font-size: .14rem;
        color: #888;
    }
    .local-address{
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: .14rem;
    }
    .relocation{
        font-size: .14rem;
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
