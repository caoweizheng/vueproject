<template>
	<section class="my_index">
        <div class="fruitday-userinfo">
            <div class="header">
                <div class="avart-wrapper">
                    <a href="#" class="link"></a>
                    <div class="pull-left avart">
                        <img src="" alt="">
                        <span class="grade">
                            <!-- <img src="#" alt=""> -->
                        </span>
                    </div>
                    <div class="pull-left member-name">
                        <h2>18022372609</h2>
                        <a href="#" class="sign">签到送好礼</a>
                    </div>
                    <a href="#" class="twodi-code">
                        <i class="fa fa-qrcode"></i>
                        <span class="name">会员码</span>
                    </a>
                </div>
                <ul class="preferential">
                    <li><a href="#"><span class="name">积分</span><span class="value">0</span></a></li>
                    <li><a href="#"><span class="name">余额</span><span class="value">0</span></a></li>
                    <li><a href="#"><span class="name">优惠券</span><span class="value">0</span></a></li>
                    <li><a href="#"><span class="name">礼品</span><span class="value">0</span> </a></li>
                </ul>
            </div>
        </div>
        <div class="fruitday-userOrder">
            <div class="index-wrapper">
                <div class="line-model">
                    <a href="#"> 
                    <i class="fa fa-align-center"></i> 
                    <span class="title">我的订单</span>
                    <span class="pull-right explain">全部订单</span></a>
                </div>
                <ul class="order-list">
                    <li id="order-dfk"><span class="fa fa-credit-card"></span><span class="text">待付款</span></li>
                    <li id="order-dfh"><span class="fa fa-credit-card-alt"></span><span class="text">待发货</span></li>
                    <li id="order-dsh"> <span class="fa fa-car"></span><span class="text">待收货</span></li>
                    <li id="order-dpj"> <span class="fa fa-commenting-o"></span><span class="text">待评价</span></li>
                    <li id="order-thh"><span class="fa fa-usd"></span><span class="text">退换货</span></li> 
                </ul>
                <div class="transparent-line"></div>
                <div class="line-model">
                    <a href="#">
                        <i class="fa fa-graduation-cap"></i>
                        <span class="title">会员中心</span>
                        <span class="pull-right explain">享等级特权</span>
                    </a>
                </div>
                <div class="line-model">
                    <a href="#">
                        <i class="fa fa-user-circle"></i>
                        <span class="title">企业购</span>
                    </a>
                </div> 
                <div class="line-model">
                    <a href="#">
                        <i class="fa fa-volume-control-phone"></i>
                        <span class="title">在线客服</span>
                    </a>
                </div>
                <div class="transparent-line"></div>
            </div>
        </div>
    </section>
</template>
<style type="text/css">
    .my_index{
        padding-bottom:0.6rem;
        font-size: 0.186667rem;
    }
    .header{
        left: 0;
        top: 0;
        width: 100%;
        height:2.533333rem;
        position: fixed;
        background: #ccc;
        z-index: 1000;
    }
    .my_index .header .avart-wrapper{
        position: relative;
        height:1.6rem;
        padding:0.4rem 0.2rem 0.4rem 0.266667rem;
    }
    .my_index .header .avart-wrapper .link{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
    }
    .my_index .header .avart-wrapper .avart{
        position: relative;
        height: 0.8rem;
        margin: 0 0.2rem 0 0;
        width: 0.8rem;
    }
    .pull-left{
        float: left!important;
    }
    .my_index .header .avart-wrapper .member-name h2{
        width:1.866667rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin:0.04rem 0.186667rem 0.04rem 0;
        line-height: 1;
        font-size: 0.24rem;
        font-weight: 400;
        color: #3a3a3a;
    }
    .my_index .header .avart-wrapper .member-name .sign{
        position: relative;
        width: 0.933333rem;
        height:0.24rem;
        font-size:0.146667rem;
        color: #fff;
        line-height:0.24rem;
        text-align: center;
        border-radius:1.146667rem;
        background: #ff8000;
        display: inline-block;
        z-index: 10;
    }
    .my_index .header .avart-wrapper .twodi-code{
        display: block;
        position: absolute;
        top: 0.466667rem;
        right: 0.2rem;
        width: 0.4rem;
        height: 0.4rem;
        z-index: 3;
    }
    .my_index .header .avart-wrapper .twodi-code .fa{
        font-size: 0.4rem;
        line-height:0.4rem;
        color: #878787;
    }
    .my_index .header .preferential{
        padding: 0 0.133333rem;
        width: 100%;
        display:flex;
    }
    .my_index .header .preferential li{
        position: relative;
        text-align: center;
       flex:1;
    }
    .my_index .header .preferential li .name{
        position: relative;
        color: #000;
        font-size: 0.186667rem;
    }
    .my_index .header .preferential li .value{
        color: #ff7e05;
        font-size: .15rem;
        font-weight: 700;
        display: block;
    }
    .my_index .index-wrapper{
        padding-top: 2.533333rem;
    }
    .my_index .index-wrapper .line-model{
        position: relative;
        height:0.586667rem;
        line-height:0.586667rem;
        border-bottom: 1px solid #ece9e5;
        background: rgba(255,255,255,.6);
    }
    .my_index .index-wrapper .line-model a{
        padding: 0 0.32rem 0.133333rem;
        color: #3a3a3a;
        overflow: hidden;
    }
    .my_index .index-wrapper .line-model .explain{
        font-size: 0.186667rem;
        color: #878787;
        line-height: 0.586667rem;
    }
    .my_index .index-wrapper .order-list{
        display:flex;
    }
    .my_index .index-wrapper .order-list a, .my_index .index-wrapper .order-list li{
        flex:1;
        padding: 0.293333rem 0 0.16rem 0;
        text-align: center;
    }
    .my_index .index-wrapper .order-list a .iconfont, .my_index .index-wrapper .order-list li .iconfont{
        position: relative;
        font-size: 0.293333rem;
        color: #5d5d5d;
    }
    .my_index .index-wrapper .order-list a .text, .my_index .index-wrapper .order-list li .text{
        padding-top: 0.066667rem;
        font-size: 0.16rem;
        color: #3a3a3a;
        display: block;
    }
</style>
<script>
	export default{
		
	}
</script>